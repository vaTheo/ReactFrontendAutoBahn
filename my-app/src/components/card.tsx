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
  return (
    <div className="autbahn-container">
      <h1 className="title">Flexbox layout for ♥ and ♠</h1>

      {/* <!-- Hearts --> */}

      <section className="cards">
        {/* <!-- 1 --> */}
        <section className="card card--heart">
          1
          <div className="card__inner card__inner--centered">
            <div className="card__column card__column--centered">
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
        {/* <!-- 2 --> */}
        <section className="card card--heart">
          2
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>

        {/* <!-- 3 --> */}
        <section className="card card--heart">
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
        <section className="card card--heart">
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
        <section className="card card--heart">
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
        <section className="card card--heart">
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
        <section className="card card--heart">
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
        <section className="card card--heart">
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
        <section className="card card--heart">
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
        <section className="card card--heart">
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
        <section className="card card--heart">J</section>
        {/* <!-- D --> */}
        <section className="card card--heart">D</section>
        {/* <!-- R --> */}
        <section className="card card--heart">R</section>
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
          J
          <img src="./valet.png" alt="valet" className="card-head" />
        </section>

        {/* <!-- D --> */}
        <section className="card card--spade">D</section>
        {/* <!-- R --> */}
        <section className="card card--spade">R</section>
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
        <section className="card card--diamonds">J</section>
        {/* <!-- D --> */}
        <section className="card card--diamonds">D</section>
        {/* <!-- R --> */}
        <section className="card card--diamonds">R</section>
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
        <section className="card card--clubs">J</section>
        {/* <!-- D --> */}
        <section className="card card--clubs">D</section>
        {/* <!-- R --> */}
        <section className="card card--clubs">R</section>
      </section>
    </div>
  );
};

export default Cards;
