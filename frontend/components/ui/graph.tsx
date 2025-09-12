"use client";

import api from "@/app/api";
import { useEffect, useState } from "react";

interface HistDataPoint {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface HistResponse {
  ticker: string;
  hist: HistDataPoint[];
}

export const Graph = () => {
  const tickers = ["NVDA", "AAPL", "MSFT"];
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [hists, setHists] = useState<Record<string, HistDataPoint[]>>({});

  const fetchTickerHist = async (): Promise<void> => {
    try {
      const responses = await Promise.all(
        tickers.map((ticker) => api.get<HistResponse>(`/hist/${ticker}`)),
      );
      const next: Record<string, HistDataPoint[]> = {};
      tickers.forEach((ticker, index) => {
        const histData = responses[index].data.hist;
        if (histData && Array.isArray(histData)) {
          next[ticker] = histData;
        }
      });
      setHists(next);
    } catch (error) {
      console.error("Error fetching ticker history", error);
    }
  };

  const fetchTickerPrice = async (): Promise<void> => {
    try {
      const responses = await Promise.all(
        tickers.map((ticker) => api.get<{ price: string }>(`/price/${ticker}`)),
      );
      const next: Record<string, number> = {};
      tickers.forEach((ticker, index) => {
        const priceString = responses[index].data.price;
        const priceNumber =
          priceString === undefined ? undefined : Number(priceString);
        if (priceNumber !== undefined && !Number.isNaN(priceNumber)) {
          next[ticker] = priceNumber;
        }
      });
      setPrices(next);
    } catch (error) {
      console.error("Error fetching ticker price", error);
    }
  };

  useEffect(() => {
    fetchTickerPrice();
    fetchTickerHist();
  }, []);

  return (
    <div className="h-50 w-2/3 bg-white">
      {tickers.map((ticker) => {
        const tickerHist = hists[ticker];
        const latestClose =
          tickerHist && tickerHist.length > 0
            ? tickerHist[tickerHist.length - 1].close
            : null;

        return (
          <div key={ticker} className="text-black">
            {ticker}: {prices[ticker] ?? "..."}, Hist:{" "}
            {latestClose ? latestClose.toFixed(2) : "..."}
          </div>
        );
      })}
    </div>
  );
};
