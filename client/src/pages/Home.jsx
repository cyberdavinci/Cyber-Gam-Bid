import React from "react";

import AuctionsFilterSections from "../components/auctions/AuctionsFilterSections";
import AuctionsRecentItemsSection from "../components/auctions/AuctionsRecentItemsSection";
import AuctionCatgoriesSection from "../components/auctions/AuctionCatgoriesSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <AuctionsFilterSections />
      <AuctionsRecentItemsSection />
      <AuctionCatgoriesSection />
    </div>
  );
};

export default Home;
