import React from "react";
import "./Hero.css";
import HeroImage from "../../images/hero_image.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={HeroImage} className="hero--photo" />
      <h1 className="hero-heading">Discover the NFT Experience</h1>
      <p>
        The world’s first and largest digital marketplace for crypto
        collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
        exclusive digital items.
      </p>
    </section>
  );
}
