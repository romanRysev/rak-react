import Pagination from "../components/UI/Pagination";
import Search from "../components/UI/Search";
import GridOfCards from "../components/UI/GridOfCards";
import Header from "../components/Header";
import React, { useState } from "react";
import "./Stories.css";
import Footer from "../components/Footer";

function Stories(props) {
  const cardsPerPage = 3;
  const [cardsPaginated, setCardsPaginated] = useState(
    props.cards.slice(0, cardsPerPage)
  );

  const onPaginationClick = (i) => {
    setCardsPaginated(
      props.cards.slice(i * cardsPerPage, i * cardsPerPage + cardsPerPage)
    );
    console.log(cardsPaginated);
  };

  return (
    <>
      <Header />
      <main className="container stories">
        <Search />
        <GridOfCards cards={cardsPaginated} />
        <Pagination
          itemsLength={props.cards.length}
          itemsPerPage={cardsPerPage}
          onPaginationClick={onPaginationClick}
        />
      </main>
      <Footer />
    </>
  );
}

export default Stories;
