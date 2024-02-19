import React, { memo, useEffect, useState } from "react";
import { Container, Icons, Table, Td, Th, User, Wrapper } from "./style";
import { Button } from "../Generics";
import { useUserDataContext } from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

const MyProperties = ({ rendered }) => {
  const navigate = useNavigate();

  const [render, setRender] = rendered;

  const [userData, setUserData] = useUserDataContext();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/houses/me", {
      headers: {
        Authorization: `Bearer ${userData?.authenticationToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [data]);

  const onDelete = async (id) => {
    await fetch(`http://localhost:8080/api/v1/houses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userData.authenticationToken}`,
      },
    });
    setRender(id);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Wrapper>
          <User>
            <div style={{ textAlign: "start" }} className="title">
              My Properties
            </div>

            <div style={{ marginLeft: "auto" }} className="title">
              <Button onClick={() => navigate("/myprofile/newhouse")}>
                Add House
              </Button>
            </div>
          </User>
          <Container>
            <Table>
              <thead>
                <tr>
                  <Th>Listing Title</Th>
                  <Th>Date Published</Th>
                  <Th>Status</Th>
                  <Th>View</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {data?.length &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <Td>
                        <div className="table-box">
                          <div className="table-box__img">
                            <img src={item?.attachments[0]?.imgPath} alt="" />
                          </div>
                          <div className="table-box__content">
                            <div>
                              <div className="table-box__content__title">
                                {item?.address}
                              </div>
                              <div className="table-box__content__subtitle">
                                {item?.country}
                                {item?.city}
                              </div>
                            </div>
                            <div>
                              <del className="table-box__content__sale-price">
                                ${item?.salePrice}/mo
                              </del>
                              <div className="table-box__content__price">
                                ${item?.price}/mo
                              </div>
                            </div>
                          </div>
                        </div>
                      </Td>
                      <Td>16.04.2004</Td>
                      <Td>Pending</Td>
                      <Td>{item?.zipCode}</Td>
                      <Td>
                        <Icons.Edit
                          onClick={() =>
                            navigate(`/myprofile/edithouse/${item?.id}`)
                          }
                        />
                        <Icons.Delete onClick={() => onDelete(item.id)} />
                      </Td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </Wrapper>
      </div>
    </div>
  );
};

export default memo(MyProperties);
