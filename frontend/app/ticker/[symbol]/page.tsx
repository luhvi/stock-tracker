"use client";

import {
  getSinglePrevTickerClose,
  getSingleTickerHist,
  getSingleTickerPrice,
  HistDataPoint,
  isValidTicker,
} from "@/ticker-data";
import { useEffect, useState, use } from "react";

interface PageProps {
  params: Promise<{
    symbol: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const resolvedParams = use(params);
  const symbol = resolvedParams.symbol.toUpperCase();
  const [hist, setHist] = useState<HistDataPoint[]>([]);
  const [price, setPrice] = useState<number | null>(null);
  const [prevClosePrice, setPrevClosePrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const corporationNameMap: Record<string, string> = {
    NVDA: "NVIDIA Corporation",
    MSFT: "Microsoft Corporation",
    AAPL: "Apple Inc.",
  };

  const corporationName = corporationNameMap[symbol];

  useEffect(() => {
    const fetchData = async () => {
      const isValid = isValidTicker(symbol);
      if (!isValid) {
        console.error(`Invalid ticker ${symbol}`);
        setError(`Invalid ticker ${symbol}`);
        setLoading(false);
        return;
      }
      try {
        const [histData, priceData, prevClosePriceData] = await Promise.all([
          getSingleTickerHist(symbol),
          getSingleTickerPrice(symbol),
          getSinglePrevTickerClose(symbol),
        ]);
        setHist(histData);
        setPrice(priceData);
        setPrevClosePrice(prevClosePriceData);
        setError(null);
        setLoading(false);
        return;
      } catch (error) {
        console.error(`Error fetching ${symbol} data:`, error);
        setError(`Error fetching ${symbol} data`);
        setLoading(false);
        return;
      }
    };
    fetchData();
  }, [symbol]);

  const getPriceDifference = () => {
    if (!price || !prevClosePrice) return null;
    const priceDifference = price - prevClosePrice;
    if (priceDifference < 0) {
      const differencePercentage = (priceDifference / prevClosePrice) * 100;
      const priceDifferenceObj = {
        number: `${priceDifference.toFixed(2)}`,
        percentage: `(${differencePercentage.toFixed(2)}%)`,
      };
      return priceDifferenceObj;
    } else {
      const differencePercentage = (priceDifference / prevClosePrice) * 100;
      const priceDifferenceObj = {
        number: `+${priceDifference.toFixed(2)}`,
        percentage: `+(${differencePercentage.toFixed(2)}%)`,
      };
      return priceDifferenceObj;
    }
  };

  const priceDifferenceNumber = getPriceDifference()?.number;
  const priceDifferencePercentage = getPriceDifference()?.percentage;

  return (
    <div className="mx-auto mt-16 max-w-250 cursor-default px-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold text-[hsl(0_0_95)]">
          {corporationName}
        </span>
        <span className="text-2xl font-semibold text-[hsl(0_0_95)]">
          ({symbol})
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-4xl font-bold text-[hsl(0_0_95)]">{price}</span>
        <span
          className={`text-xl font-bold ${priceDifferenceNumber?.[0] === "+" ? "text-green-500" : "text-red-600"} `}
        >
          {priceDifferenceNumber}
        </span>
        <span
          className={`text-xl font-bold ${priceDifferenceNumber?.[0] === "+" ? "text-green-500" : "text-red-600"} `}
        >
          {priceDifferencePercentage}
        </span>
      </div>
    </div>
  );
}
