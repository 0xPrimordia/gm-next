import Image from "next/image";
import Header from "./components/Header";
import QuantityPriceModule from "./components/QuantityPriceModule";
import AIGNMachine from "./components/AIGNMachine";
import AboutAccordion from "./components/AboutAccordion";
import Footer from "./components/Footer";
import { createThirdwebClient } from "thirdweb";

export default function Home() {
  // Page is a Next convention which works like index.
  // https://nextjs.org/docs/app/building-your-application/routing/pages

  const client = createThirdwebClient({
    clientId: process.env.CLIENT_ID as string,
  });

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
