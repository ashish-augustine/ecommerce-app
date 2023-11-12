import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { PageHero } from "../components";
import aboutImg from "../public/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <Image src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            This is an e-commerce application listing a range of furniture
            products for home & office. The products can be filtered on the
            basis of their Category, Company, Colour, Price & Shipping Charges.
            The products can be added to the cart and then proceeded to
            checkout.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  display: grid;
  gap: 4rem;
  .underline {
    margin-left: 0;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }}
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  
`;
export default AboutPage;
