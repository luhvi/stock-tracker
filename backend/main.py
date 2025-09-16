import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import yfinance as yf

tickers = ["NVDA", "AAPL", "MSFT"]

class HistDataPoint(BaseModel):
    timestamp: str
    open: float
    high: float
    low: float
    close: float
    volume: int

class HistResponse(BaseModel):
    ticker: str
    hist: List[HistDataPoint]

hist_data = {
    "NVDA": [],
    "AAPL": [],
    "MSFT": []
}

def get_hist(ticker: str):
    try:
        stock = yf.Ticker(ticker)
        hist = stock.history(period="1d", interval="1m")

        hist_list = []
        for timestamp, row in hist.iterrows():
            hist_list.append({
                "timestamp": timestamp.isoformat(),
                "open": float(row["Open"]),
                "high": float(row["High"]),
                "low": float(row["Low"]),
                "close": float(row["Close"]),
                "volume": int(row["Volume"])
            })

        return hist_list
    except Exception as e:
        print(f"Error getting history for {ticker}: {e}")
        return []

for ticker in tickers:
    hist_data[ticker] = get_hist(ticker)

def get_price(ticker: str):
    try:
        stock = yf.Ticker(ticker)
        price = stock.fast_info.last_price
        return f"{price:.3f}"
    except Exception:
        return "N/A"

def get_prev_close(ticker: str):
    try:
        stock = yf.Ticker(ticker)
        hist = stock.history(period="5d")
        if len(hist) >= 2:
            prev_close = float(hist["Close"].iloc[-2])
            return f"{prev_close:.3f}"
        return None
    except Exception as e:
        print(f"Error getting previous close for {ticker}: {e}")
        return None

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://stock-tracker-one-pi.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hist/{ticker}", response_model=HistResponse)
async def get_ticker_hist(ticker: str):
    if ticker.upper() not in hist_data:
        raise HTTPException(status_code=404, detail=f"Ticker {ticker} not found")

    return HistResponse(
        ticker=ticker.upper(),
        hist=hist_data[ticker.upper()],
    )

@app.get("/price/{ticker}")
async def get_ticker_price(ticker: str):
    price = get_price(ticker.upper())
    return {"ticker": ticker.upper(), "price": price}

@app.get("/prev-close/{ticker}")
async def get_ticker_prev_close(ticker: str):
    prev_close = get_prev_close(ticker.upper())
    return {"ticker": ticker.upper(), "prev_close": prev_close}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)