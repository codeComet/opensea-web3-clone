import React from "react";

const NFTCard = ({ nftItem }) => {
  return (
    <div>
      <img src={nftItem.image} alt="nft image" />
    </div>
  );
};

export default NFTCard;
