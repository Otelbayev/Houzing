import React, { useEffect, useState } from "react";
import HouseCard from "../../components/HouseCard";
import { Container } from "./style";
import { useUserDataContext } from "./../../context/UserDataContext/index";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const [data, setData] = useState([]);
  const [userData] = useUserDataContext();
  const naviagte = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("api/v1/houses/getAll/favouriteList", {
      headers: {
        Authorization: `Bearer ${userData?.authenticationToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, []);
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
              console.log(value);
              return (
                <HouseCard
                  key={value.id}
                  onResizeClick={() => naviagte(`/properties/${value.id}`)}
                  data={value}
                />
              );
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
