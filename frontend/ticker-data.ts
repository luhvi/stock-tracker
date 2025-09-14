"use client";

import api from "@/app/api";

export interface HistDataPoint {
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

export const tickers = ["NVDA", "AAPL", "MSFT"];

export const getTickerHist = async (): Promise<
  Record<string, HistDataPoint[]>
> => {
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
    return next;
  } catch (error) {
    console.error("Error fetching ticker history", error);
    return {};
  }
};

export const getTickerPrice = async (): Promise<Record<string, number>> => {
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
    return next;
  } catch (error) {
    console.error("Error fetching ticker price", error);
    return {};
  }
};

export const getSingleTickerHist = async (
  ticker: string,
): Promise<HistDataPoint[]> => {
  try {
    const response = await api.get<HistResponse>(`/hist/${ticker}`);
    return response.data.hist || [];
  } catch (error) {
    console.error(`Error fetching ${ticker} history:`, error);
    return [];
  }
};

export const getSingleTickerPrice = async (
  ticker: string,
): Promise<number | null> => {
  try {
    const response = await api.get<{ price: string }>(`/price/${ticker}`);
    const priceNumber = Number(response.data.price);
    return !Number.isNaN(priceNumber) ? priceNumber : null;
  } catch (error) {
    console.error(`Error fetching ${ticker} hist:`, error);
    return null;
  }
};

export const getSinglePrevTickerClose = async (
  ticker: string,
): Promise<number | null> => {
  try {
    const response = await api.get<{ prev_close: string }>(
      `/prev-close/${ticker}`,
    );
    const prevClose = Number(response.data.prev_close);
    return !Number.isNaN(prevClose) ? prevClose : null;
  } catch (error) {
    console.error(
      `Error fetching ${ticker} previous day closing price:`,
      error,
    );
    return null;
  }
};

export const isValidTicker = (ticker: string): boolean => {
  return tickers.includes(ticker.toUpperCase());
};
