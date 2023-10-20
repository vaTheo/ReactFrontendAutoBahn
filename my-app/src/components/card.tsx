// import dotenv from 'dotenv';
// dotenv.config();
import "./card.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LINK_BACKEND = "http://localhost:3001";

const Cards: React.FC = () => {
  // Error modal (popin)

  const selectCard = async () => {
    try {
    } catch (error: any) {
      if (error) {
      } else {
        console.error("Error during login:", error);
      }
    }
  };
  const cardColor ='heart'
  const cardNumber = 1 //From 1 to 14 (14 =Joker)



  return (
    <div>
      {/* <!-- Hearts --> */}

      <section className="cards">
        {/* <!-- 1 --> */}
        <section className={`card card--${cardColor}`}>
          1
          <div className="card__inner card__inner--centered">
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
        {/* <!-- 2 --> */}
        <section className={`card card--${cardColor}`}>
          2
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 3 --> */}
        <section className={`card card--${cardColor}`}>
          3
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 4 --> */}
        <section className={`card card--${cardColor}`}>
          4
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 5 --> */}
        <section className={`card card--${cardColor}`}>
          5
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 6 --> */}
        <section className={`card card--${cardColor}`}>
          6
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 7 --> */}
        <section className={`card card--${cardColor}`}>
          7
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--huge"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 8 --> */}
        <section className={`card card--${cardColor}`}>
          8
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 9 --> */}
        <section className={`card card--${cardColor}`}>
          9
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 10 --> */}
        <section className={`card card--${cardColor}`}>
          10
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
        {/* <!-- J --> */}
        <section className={`card card--${cardColor}`}>
          J<div className="card-head-valet"></div>
        </section>
        {/* <!-- D --> */}
        <section className={`card card--${cardColor}`}>D<div className="card-head-dame"></div></section>
        {/* <!-- R --> */}
        <section className={`card card--${cardColor}`}>R<div className="card-head-roi"></div></section>
      </section>
      {/* <!-- Spades --> */}
      <section className="cards">
        {/* <!-- 1 --> */}
        <section className="card card--spade">
          1
          <div className="card__inner card__inner--centered">
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 2 --> */}
        <section className="card card--spade">
          2
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 3 --> */}
        <section className="card card--spade">
          3
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 4 --> */}
        <section className="card card--spade">
          4
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 5 --> */}
        <section className="card card--spade">
          5
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 6 --> */}
        <section className="card card--spade">
          6
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 7 --> */}
        <section className="card card--spade">
          7
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--huge"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 8 --> */}
        <section className="card card--spade">
          8
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 9 --> */}
        <section className="card card--spade">
          9
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 10 --> */}
        <section className="card card--spade">
          10
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
        {/* <!-- J --> */}
        <section className="card card--spade">
          J<div className="card-head-valet"></div>
        </section>

        {/* <!-- D --> */}
        <section className="card card--spade">D<div className="card-head-dame"></div></section>
        {/* <!-- R --> */}
        <section className="card card--spade">R<div className="card-head-roi"></div></section>
      </section>
      {/* <!-- Diamonds --> */}
      <section className="cards">
        {/* <!-- 1 --> */}
        <section className="card card--diamonds">
          1
          <div className="card__inner card__inner--centered">
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 2 --> */}
        <section className="card card--diamonds">
          2
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 3 --> */}
        <section className="card card--diamonds">
          3
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 4 --> */}
        <section className="card card--diamonds">
          4
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 5 --> */}
        <section className="card card--diamonds">
          5
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 6 --> */}
        <section className="card card--diamonds">
          6
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 7 --> */}
        <section className="card card--diamonds">
          7
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--huge"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 8 --> */}
        <section className="card card--diamonds">
          8
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 9 --> */}
        <section className="card card--diamonds">
          9
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 10 --> */}
        <section className="card card--diamonds">
          10
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
        {/* <!-- J --> */}
        <section className="card card--diamonds">
          J<div className="card-head-valet"></div>
        </section>
        {/* <!-- D --> */}
        <section className="card card--diamonds">D<div className="card-head-dame"></div></section>
        {/* <!-- R --> */}
        <section className="card card--diamonds">R<div className="card-head-roi"></div></section>
      </section>
      {/* <!-- Clubs --> */}
      <section className="cards">
        {/* <!-- 1 --> */}
        <section className="card card--clubs">
          1
          <div className="card__inner card__inner--centered">
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 2 --> */}
        <section className="card card--clubs">
          2
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 3 --> */}
        <section className="card card--clubs">
          3
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 4 --> */}
        <section className="card card--clubs">
          4
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 5 --> */}
        <section className="card card--clubs">
          5
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 6 --> */}
        <section className="card card--clubs">
          6
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 7 --> */}
        <section className="card card--clubs">
          7
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--huge"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 8 --> */}
        <section className="card card--clubs">
          8
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 9 --> */}
        <section className="card card--clubs">
          9
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 10 --> */}
        <section className="card card--clubs">
          10
          <div className="card__inner">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
            <div className="card__column card__column--centered">
              <div className="card__symbol card__symbol--big"></div>
              <div className="card__symbol card__symbol--big"></div>
            </div>
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol card__symbol--rotated"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
        {/* <!-- J --> */}
        <section className="card card--clubs">
          J<div className="card-head-valet"></div>
        </section>
        {/* <!-- D --> */}
        <section className="card card--clubs">D<div className="card-head-dame"></div></section>
        {/* <!-- R --> */}
        <section className="card card--clubs">R<div className="card-head-roi"></div></section>
      </section>
    </div>
  );
};

export default Cards;
