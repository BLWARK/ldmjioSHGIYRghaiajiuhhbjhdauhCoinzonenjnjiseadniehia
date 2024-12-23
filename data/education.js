const academy = [
    {
      id: 1,
      title: "What is NFT?",
      type: "academy",
      image: "/NFT ACA.webp",
      date: "Thu 10 Aug 2024",
      description: "Learn the basics of NFTs and their role in digital ownership.",
      slug: "what-is-nft",
      content: `
        <p>NFTs, or Non-Fungible Tokens, are unique digital assets that represent ownership of a specific item or piece of content, like art, music, or videos, on the blockchain. Unlike cryptocurrencies such as Bitcoin or Ethereum, NFTs cannot be exchanged on a one-to-one basis because each token is unique and has a different value.</p>
        <br>
        <strong style="font-size: 24px;">How NFTs Work</strong><br><br>
        <p>NFTs are created using blockchain technology, which ensures their uniqueness and verifies their ownership. They are stored on a decentralized ledger, making them tamper-proof and secure.</p>
        <br>
        <strong style="font-size: 24px;">Applications of NFTs</strong><br><br>
        <p>NFTs are widely used in digital art, gaming, and virtual real estate. They allow artists to sell their work directly to consumers and retain royalties through smart contracts.</p>
      `,
      tags: ["NFT", "Blockchain", "Digital Ownership"],
      category: ["academy", "blockchain"],
      authorIds: [1],
    },
    {
      id: 2,
      title: "What is Blockchain?",
      type: "academy",
      image: "/BLOCKCHAIN ACA.webp",
      date: "Fri 11 Aug 2024",
      description: "Discover the fundamentals of blockchain technology and its applications.",
      slug: "what-is-blockchain",
      content: `
        <p>Blockchain is a distributed ledger technology that records transactions in a secure, transparent, and immutable way. It consists of blocks linked together using cryptographic hashes, ensuring that the data cannot be altered once added.</p>
        <br>
        <strong style="font-size: 24px;">Key Features</strong><br><br>
        <p>Blockchain is decentralized, transparent, and secure. It eliminates the need for intermediaries, making transactions faster and more cost-effective.</p>
        <br>
        <strong style="font-size: 24px;">Use Cases</strong><br><br>
        <p>Blockchain is used in various industries, including finance, healthcare, supply chain, and voting systems, to enhance efficiency and reduce fraud.</p>
      `,
      tags: ["Blockchain", "Technology", "Decentralization"],
      category: ["academy", "technology"],
      authorIds: [2],
    },
    {
      id: 3,
      title: "What is Tokenomics?",
      type: "academy",
      image: "/TOKENOMIC ACA.webp",
      date: "Sat 12 Aug 2024",
      description: "Understand the principles of tokenomics and its role in cryptocurrency.",
      slug: "what-is-tokenomics",
      content: `
        <p>Tokenomics refers to the economic design and structure of cryptocurrencies and tokens within a blockchain network. It encompasses the supply, distribution, and incentives associated with a token.</p>
        <br>
        <strong style="font-size: 24px;">Key Components</strong><br><br>
        <p>Supply mechanisms, utility, and governance are critical aspects of tokenomics. These factors determine the value and sustainability of a cryptocurrency.</p>
        <br>
        <strong style="font-size: 24px;">Importance</strong><br><br>
        <p>Tokenomics helps investors and developers understand how a cryptocurrency will perform and sustain itself in the long term.</p>
      `,
      tags: ["Tokenomics", "Crypto", "Economy"],
      category: ["academy", "crypto"],
      authorIds: [1],
    },
    {
      id: 4,
      title: "Your Prediction: Market Trends",
      type: "academy",
      image: "/PREDICT ACA.webp",
      date: "Sun 13 Aug 2024",
      description: "Explore how to predict and analyze market trends in the blockchain space.",
      slug: "your-prediction-market-trends",
      content: `
        <p>Market trends analysis involves understanding the factors influencing the blockchain and cryptocurrency markets. This includes market sentiment, technical analysis, and fundamental drivers like adoption and regulation.</p>
        <br>
        <strong style="font-size: 24px;">How to Analyze Trends</strong><br><br>
        <p>Using tools like price charts, market indicators, and sentiment analysis can provide insights into potential market movements.</p>
        <br>
        <strong style="font-size: 24px;">Significance</strong><br><br>
        <p>Predicting market trends helps investors make informed decisions, reduce risks, and maximize returns in the volatile crypto space.</p>
      `,
      tags: ["Market Trends", "Prediction", "Crypto"],
      category: ["academy", "finance"],
      authorIds: [3],
    },
  ];
  
  export default academy;
  