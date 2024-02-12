import React, { useState } from "react";
import { Container, Content, Icon, SelectAnt } from "./style";
import { Input, Button } from "../Generics";
import { Dropdown } from "antd";

const Sidebar = ({ $home }) => {
  const [open, setOpen] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <div style={{ padding: "10px 20px 20px" }}>
          <Content>
            <div className="subTitle">Adderess</div>
            <Content.Form>
              <Input placeholder="Country" />
              <Input placeholder="Region" />
              <Input placeholder="City" />
            </Content.Form>
          </Content>
          <Content>
            <div className="subTitle">Apartment Info</div>
            <Content.Form>
              <Input placeholder="Rooms" />
              <Input placeholder="Size" />
              <SelectAnt defaultValue={"Select Sort"}>
                <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
                <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
                <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
              </SelectAnt>
            </Content.Form>
          </Content>
          <Content>
            <div className="subTitle">Price</div>
            <Content.Form>
              <Input placeholder="Min Price" />
              <Input placeholder="Max Price" />
            </Content.Form>
            <Content.Form>
              <Button onClick={() => setOpen(!open)}>Close</Button>
              <Button type="light" onClick={() => setOpen(!open)}>
                Cancle
              </Button>
            </Content.Form>
          </Content>
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <Container $home={$home}>
          <Input
            placeholder={"Enter an address, neighborhood, city, or ZIP code"}
            $icon={<Icon.Houses />}
          />
          <Container.Right>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              open={open}
            >
              <Container.Btn onClick={() => setOpen(!open)}>
                <Icon.Filter /> Advenced
              </Container.Btn>
            </Dropdown>
            <Button className="width">
              <Icon.Search /> Search
            </Button>
          </Container.Right>
        </Container>
      </div>
    </div>
  );
};

export default Sidebar;
