// Detail.js
import React from "react";
import Skip from "../components/Skip";
import Footer from "../components/Footer";
import HeaderDetail from "../components/HeaderDetail";
import Sentiment from "../components/detail/Setiment";
import Cheating from "../components/detail/Cheating";
import { useParams } from "react-router-dom";

const Detail = () => {
  // Detail 페이지의 내용을 구성
  const { id } = useParams();
  console.log(id);
  window.scrollTo(0, 0);

  const list = {
    "Setimental-Analysis": <Sentiment />,
    "Fraud-Detection": <Cheating />,
  };
  return (
    <>
      <Skip />
      <HeaderDetail />
      {list[id]}
      <Footer />
    </>
  );
};

export default Detail;
