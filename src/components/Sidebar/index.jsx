import React from "react";
import { Container, Icon } from "./style";
import { Input, Button } from "../Generics";
import { Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const Sidebar = () => {
  return (
    <Container>
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
        >
          <Container.Btn>
            <Icon.Filter /> Advenced
          </Container.Btn>
        </Dropdown>
        <Button className="width">
          <Icon.Search /> Search
        </Button>
      </Container.Right>
    </Container>
  );
};

export default Sidebar;
