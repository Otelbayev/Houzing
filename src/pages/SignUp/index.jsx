import React, { useEffect, useRef, } from "react";
import { Content } from "../SignIn/style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/Generics";
import { message } from "antd";
import SignTitle from "../../components/SignTitle";

export const Recommended = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const info = () => {
    message.info("Successfully registered");
  };
  const onSubmit = async () => {
    await fetch("/api/public/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        password: passwordRef.current.value,
        roleIdSet: [0],
      }),
    })
      .then((res) => res.json())
      .then(() => {
        info();
        navigate("/signin");
      });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          <SignTitle />
          <Input ref={emailRef} placeholder="email" type="email" />
          <Input ref={firstnameRef} placeholder="firstname" type="text" />
          <Input ref={lastnameRef} placeholder="lastname" type="text" />
          <Input ref={passwordRef} placeholder="password" type="password" />
          <Button width="%" onClick={onSubmit}>
            Submit
          </Button>
        </Content>
      </div>
    </div>
  );
};

export default Recommended;
