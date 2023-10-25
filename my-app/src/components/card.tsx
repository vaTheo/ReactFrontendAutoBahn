// import dotenv from 'dotenv';
// dotenv.config();
import "./card.scss";
import React from "react";

const Cards: React.FC<{ cardNumber: number; cardColorName: string }> = ({ cardNumber, cardColorName }) => {

  switch (cardNumber) {
    //CASE CARD NUMBER 1
    case 1:
      return (
        <div>
          <section className="cards">
            {/* <!-- 1 --> */}
            <section className={`card card--${cardColorName}`}>
              1
              <div className="card__inner card__inner--centered">
                <div className="card__column card__column--centered">
                  <div className="card__symbol"></div>
                </div>
              </div>
            </section>
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 2
    case 2:
      return (
        <div>
          <section className="cards">
            {/* <!-- 2 --> */}
            <section className={`card card--${cardColorName}`}>
              2
              <div className="card__inner card__inner--centered">
                <div className="card__column">
                  <div className="card__symbol"></div>
                  <div className="card__symbol"></div>
                </div>
              </div>
            </section>
          </section>
        </div>
      );
      break;
    //CASE CARD NUMBER 3
    case 3:
      return (
        <div>
          <section className="cards">
            {/* <!-- 3 --> */}
            <section className={`card card--${cardColorName}`}>
              3
              <div className="card__inner card__inner--centered">
                <div className="card__column">
                  <div className="card__symbol"></div>
                  <div className="card__symbol"></div>
                  <div className="card__symbol"></div>
                </div>
              </div>
            </section>
          </section>
        </div>
      );
      break;
    //CASE CARD NUMBER 4
    case 4:
      return (
        <div>
          <section className="cards">
            {/* <!-- 4 --> */}
            <section className={`card card--${cardColorName}`}>
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
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 5
    case 5:
      return (
        <div>
          <section className="cards">
            {/* <!-- 5 --> */}
            <section className={`card card--${cardColorName}`}>
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
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 6
    case 6:
      return (
        <div>
          <section className="cards">
            {/* <!-- 6 --> */}
            <section className={`card card--${cardColorName}`}>
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
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 7
    case 7:
      return (
        <div>
          <section className="cards">
            {/* <!-- 7 --> */}
            <section className={`card card--${cardColorName}`}>
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
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 8
    case 8:
      return (
        <div>
          <section className="cards">
            {/* <!-- 8 --> */}
            <section className={`card card--${cardColorName}`}>
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
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 9
    case 9:
      return (
        <div>
          <section className="cards">
            {/* <!-- 9 --> */}
            <section className={`card card--${cardColorName}`}>
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
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 10
    case 10:
      return (
        <div>
          <section className="cards">
            {/* <!-- 10 --> */}
            <section className={`card card--${cardColorName}`}>
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
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 11
    case 11:
      return (
        <div>
          <section className="cards">
            {/* <!-- J --> */}
            <section className={`card card--${cardColorName}`}>
              J<div className="card-head-valet"></div>
            </section>
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 12
    case 12:
      return (
        <div>
          <section className="cards">
            {/* <!-- D --> */}
            <section className={`card card--${cardColorName}`}>
              D<div className="card-head-dame"></div>
            </section>
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 13
    case 13:
      return (
        <div>
          <section className="cards">
            {/* <!-- R --> */}
            <section className={`card card--${cardColorName}`}>
              R<div className="card-head-roi"></div>
            </section>
          </section>
        </div>
      );
      break;

    //CASE CARD NUMBER 14
    case 14:
      return (
        <div>
          <section className="cards">
            {/* <!-- R --> */}
            <section className={`card card--NULL`}>
              <div className="card-back"></div>
            </section>
          </section>
        </div>
      );
      break;

    default:
      return <div>Invalid card number</div>;

  }
};

export default Cards;
