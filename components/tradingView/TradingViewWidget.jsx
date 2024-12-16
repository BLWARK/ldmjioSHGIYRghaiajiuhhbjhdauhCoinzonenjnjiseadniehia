"use client"
import React, { useEffect } from "react";

const CryptoWidget = () => {
  useEffect(() => {
    // Tambahkan script TradingView ke DOM
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "BTC/USDT", proName: "BINANCE:BTCUSDT" },
        { description: "ETH/USDT", proName: "BINANCE:ETHUSDT" },
        { description: "SOLANA/USDT", proName: "BINANCE:SOLUSDT" },
        { description: "BNB/USDT", proName: "BINANCE:BNBUSDT" },
        { description: "XRP/USDT", proName: "BINANCE:XRPUSDT" },
        { description: "DOGE/USDT", proName: "BINANCE:DOGEUSDT" },
        { description: "PEPE/USDT", proName: "BINANCE:PEPEUSDT" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "en",
    });

    document
    .querySelector(".tradingview-widget-container-crypto")
    .appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container-crypto w-full" id="tradingview-widget-container">
     
     
    </div>
  );
};

export default CryptoWidget;
