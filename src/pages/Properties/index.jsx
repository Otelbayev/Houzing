import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Container } from "./style";
import HouseCard from "../../components/HouseCard";
import { mockData } from "../../mock/mock";
import { useNavigate } from "react-router-dom";
import MyProperties from "../../components/MyProperties";
import { useUserDataContext } from "../../context/UserDataContext";

const Properties = () => {
  const [data, setData] = useState(mockData);
  const navigate = useNavigate();
  const [userData] = useUserDataContext();
  useEffect(() => {
    fetch("api/v1/houses/list")
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, []);
  console.log(data);
  return (
    <div>
      <Sidebar />
      {userData?.authenticationToken && <MyProperties />}
      <div className="container">
        <div className="wrapper">
          <div className="title">Properties</div>
          <div className="info" style={{ textAlign: "center" }}>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
          <Container>
            {data.length !== 0 &&
              data.map((value) => (
                <HouseCard
                  key={value.id}
                  data={value}
                  onResizeClick={() => navigate(`${value.id}`)}
                />
              ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Properties;
