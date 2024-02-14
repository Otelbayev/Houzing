/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Wrapper, MenuWrapper, Section, SelectAnt, IconDelete } from "./style";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../../components/Generics";
import { Checkbox } from "antd";
import { useFormik } from "formik";
import TextArea from "antd/lib/input/TextArea";

export const AddNewHouse = () => {
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState("");
  return (
    <div className="container">
      <div className="wrapper">
        <Wrapper>
          <form>
            <MenuWrapper>
              <h1 className="subTitle">Address</h1>
              <Section>
                <Input name="country" placeholder="Country" />
                <Input name="region" placeholder="Region" />
                <Input name="city" placeholder="City" />
                <Input name="address" placeholder="Address" />
              </Section>
              <h1 className="subTitle">Apartment info</h1>
              <Section>
                <Input
                  type="number"
                  name="houseDetails.area"
                  placeholder="area"
                />
                <Input
                  type="number"
                  name="houseDetails.bath"
                  placeholder="bath"
                />
                <Input
                  type="number"
                  name="houseDetails.beds"
                  placeholder="beds"
                />
                <Input
                  type="number"
                  name="houseDetails.garage"
                  placeholder="garage"
                />
                <Input
                  type="number"
                  name="houseDetails.yearBuilt"
                  placeholder="yearbuilt"
                />
                <Input
                  type="number"
                  name="houseDetails.room"
                  placeholder="room"
                />
                <SelectAnt defaultValue={"Select Category"}>
                  <SelectAnt.Option value={""}>
                    Select Category
                  </SelectAnt.Option>
                  {category?.map((value) => {
                    return (
                      <SelectAnt.Option key={value.id} value={value?.id}>
                        {value?.name}
                      </SelectAnt.Option>
                    );
                  })}
                </SelectAnt>
              </Section>
              <h1 className="subTitle">Price</h1>
              <Section>
                <Input name="name" placeholder="Name" />
                <Input name="zipCode" placeholder="Zip Code" />
                <Input type="number" name="price" placeholder="Price" />
                <Input
                  type="number"
                  name="salePrice"
                  placeholder="Sale price"
                />
              </Section>
              <Section>
                <Input value={img} placeholder="Add Image URL" />
                <Button type={"button"}>Add Image URL</Button>
              </Section>
              <Section flex>
                {/* {imgs.map((value) => {
              return (
                <pre>
                  {value?.imgPath}{" "}
                  <IconDelete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl.id !== value.id);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })} */}
              </Section>
              <Section>
                <TextArea
                  rows={6}
                  placeholder="description"
                  name="description"
                />
              </Section>
              <h1 className="subTitle">Additional</h1>

              <Section gap>
                <Section flex>
                  <Checkbox name="homeAmenitiesDto.busStop">Bus Stop</Checkbox>
                  <Checkbox name="homeAmenitiesDto.garden">Garden</Checkbox>
                  <Checkbox name="homeAmenitiesDto.market">Market</Checkbox>
                  <Checkbox name="homeAmenitiesDto.park">Park</Checkbox>
                  <Checkbox name="homeAmenitiesDto.parking">Parking</Checkbox>
                </Section>
                <Section flex>
                  <Checkbox name="homeAmenitiesDto.school">School</Checkbox>
                  <Checkbox name="homeAmenitiesDto.statium">Statium</Checkbox>
                  <Checkbox name="homeAmenitiesDto.subway">Subway</Checkbox>
                  <Checkbox name="homeAmenitiesDto.superMarket">
                    Super Market
                  </Checkbox>
                  <Checkbox name="houseDetails.tv">TV</Checkbox>
                </Section>
                <Section flex>
                  <Checkbox name="houseDetails.airCondition">
                    Air Condition
                  </Checkbox>
                  <Checkbox name="houseDetails.courtyard">Courtyard</Checkbox>
                  <Checkbox name="houseDetails.furniture">Furniture</Checkbox>
                  <Checkbox name="houseDetails.gas">Gas Stove</Checkbox>
                  <Checkbox name="houseDetails.internet">Internet</Checkbox>
                </Section>
              </Section>

              <Button>{false ? "Update" : "Save"}</Button>
            </MenuWrapper>
          </form>
        </Wrapper>
      </div>
    </div>
  );
};

export default AddNewHouse;
