import React, { useState } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/Generics";
// import useRequest from "../../hooks/useRequest";
import { message } from "antd";
import SignTitle from "../../components/SignTitle";

export const Signin = () => {
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
    //   url: `/public/auth/login`,
    //   method: "POST",
    //   body,
    //   me: true,
    // }).then((res) => {
    //   if (res?.authenticationToken) {
    //     navigate("/home");
    //     localStorage.setItem("token", res?.authenticationToken);
    //   }
    //   info();
    // });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          <SignTitle />
          <Input onChange={onChange} placeholder="email" type="email" />
          <Input onChange={onChange} placeholder="password" type="password" />
          <Button width="%" onClick={onSubmit}>
            Submit
          </Button>
        </Content>
      </div>
    </div>
  );
};

export default Signin;
