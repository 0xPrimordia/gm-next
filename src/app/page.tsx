"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import QuantityPriceModule from "./components/QuantityPriceModule";
import AIGNMachine from "./components/AIGNMachine";
import AboutAccordion from "./components/AboutAccordion";
import Footer from "./components/Footer";
import { createWallet, injectedProvider } from "thirdweb/wallets";
import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { optimismSepolia } from "thirdweb/chains";
import axios from 'axios';

export default function Home() {
  const [cbData, setCBData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/cb`);
        setCBData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log(cbData)
  }, []);


  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
  });

  const contract = getContract({ 
    client, 
    chain: optimismSepolia, 
    address: "0x..."
  });

  const metamask = createWallet("io.metamask");

  return (
    <>
      <Header client={client} />
      <main className="main-content">
        <button id="mintGmButton">GM</button>
        <QuantityPriceModule />
        <AIGNMachine />
        <section className="gms-section">
            <h1>GMs</h1>
            <p id="totalMinted">Minted: 0</p>
            <div id="gmGallery"></div>
        </section>
        <section className="gm-leaderboard-section">
            <h1>GN Leaderboard</h1>
            <ul id="leaderboardList"></ul>
            <button id="seeMoreButton1" className="see-more-btn">See More</button>
        </section>
        <AboutAccordion />
      </main>
      <Footer />
    </>
  );
}
