"use client";
import { useEffect } from "react";

const StockWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "1D",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "550",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(209, 212, 220, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      tabs: [
        {
            title: "Forex",
            symbols: [
              { s: "FX:EURUSD", d: "EUR to USD" },
              { s: "FX:GBPUSD", d: "GBP to USD" },
              { s: "FX:USDJPY", d: "USD to JPY" },
              { s: "FX:USDCHF", d: "USD to CHF" },
              { s: "FX:AUDUSD", d: "AUD to USD" },
              { s: "FX:USDCAD", d: "USD to CAD" },
            ],
            originalTitle: "Forex",
          },
        {
          title: "Indices",
          symbols: [
            { s: "NASDAQ:TSLA", d: "TESLA" },
            { s: "NASDAQ:AAPL", d: "APPLE" },
            { s: "NASDAQ:NVDA", d: "NVIDIA" },
            { s: "NASDAQ:META", d: "META" },
            { s: "NASDAQ:GOOGL", d: "GOOGLE" },
          ],
          originalTitle: "Indices",
        },
       
      ],
    });
    document.querySelector(".tradingview-widget-container-saham").appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container-saham">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default StockWidget;
