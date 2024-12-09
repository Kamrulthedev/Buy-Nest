import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "./../../assets/lk.png";
import heroBcg2 from "./../../assets/offer.jpg";

const Hero: React.FC = () => {
  return (
    <Wrapper className="section-center font-serif md:-mt-0 sm:-mt-28 lg:mt-0 bg-white">
      <article className="content p-8 lg:ml-10">
        <h1 className="text-5xl md:text-7xl font-bold text-start leading-tight text-gray-800">
          Discover Your <br />
          <span className="text-blue-600">Perfect Nest</span>
        </h1>
        <p className="text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
          inventore blanditiis facilis nihil laboriosam accusantium aspernatur
          distinctio voluptatum iusto saepe.
        </p>
        <Link to="/products" className="btn hero-btn bg-slate-300 text-slate-700 hover:bg-slate-400">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img pt-5 pr-5" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      display: block;
      object-fit: cover;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
