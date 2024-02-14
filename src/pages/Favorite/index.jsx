import React, { useState } from "react";
import HouseCard from "../../components/HouseCard";
import { Container } from "./style";

const Favorite = () => {
  const [data, setData] = useState([]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title" style={{ marginTop: "50px" }}>
          Favourite
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
        <Container>
          {data?.length ? (
            data.map((value) => {
              return <HouseCard key={value.id} data={value} />;
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>No Data Found</h1>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Favorite;
