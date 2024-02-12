import React, { useState } from "react";
import { Content } from "../SignIn/style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/Generics";
// import useRequest from "../../hooks/useRequest";
import { message } from "antd";
import SignTitle from "../../components/SignTitle";

export const Recommended = () => {
  // const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  const info = () => {
    message.info("Successfully logged in ");
  };

  const onSubmit = async () => {
    // request({
    //   url: `/public/auth/register`,
    //   method: "POST",
    //   body,
    //   me: true,
    // }).then((res) => {
    //   info();
    //   navigate("/signin");
    // });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          <SignTitle />
          <Input onChange={onChange} placeholder="email" type="email" />
          <Input onChange={onChange} placeholder="firstname" type="text" />
          <Input onChange={onChange} placeholder="lastname" type="text" />
          <Input onChange={onChange} placeholder="password" type="password" />
          <Button width="%" onClick={onSubmit}>
            Login
          </Button>
        </Content>
      </div>
    </div>
  );
};

export default Recommended;
