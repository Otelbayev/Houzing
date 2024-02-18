import React, { useRef } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/Generics";
import { message } from "antd";
import SignTitle from "../../components/SignTitle";
import { useUserDataContext } from "../../context/UserDataContext";

export const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwRef = useRef();
  const info = () => {
    message.info("Successfully logged in ");
  };

  const [userData, setUserData] = useUserDataContext();

  const onSubmit = async () => {
    await fetch("/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: pwRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res);
        localStorage.setItem("userData", JSON.stringify(res));
        navigate("/myprofile");
        info();
      });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          <SignTitle />
          <Input
            ref={emailRef}
            placeholder="email"
            defaultValue="jasurdev1604@gmail.com"
            type="email"
          />
          <Input
            ref={pwRef}
            placeholder="password"
            defaultValue="1604"
            type="password"
          />
          <Button width="%" onClick={onSubmit}>
            Submit
          </Button>
        </Content>
      </div>
    </div>
  );
};

export default Signin;
