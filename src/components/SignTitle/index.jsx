import React from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";

const SignTitle = () => {
  const navigate = useNavigate();
  return (
    <Content $prop={window.location.pathname}>
      <div className="subTitle in" onClick={() => navigate("/signin")}>
        Sing in
      </div>
      <div className="subTitle up" onClick={() => navigate("/signup")}>
        Register
      </div>
    </Content>
  );
};

export default SignTitle;
