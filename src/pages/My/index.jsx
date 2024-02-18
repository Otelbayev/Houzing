import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Generics";
import { message } from "antd";
import { useUserDataContext } from "../../context/UserDataContext";
import { Container } from "./style";
import noimg from "../../assets/img/nouser.jpeg";

export const MyProfile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useUserDataContext();

  const info = () => {
    message.info("Successfully logged out");
  };

  const logout = async () => {
    await fetch("api/public/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData?.authenticationToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: userData?.refreshToken,
        username: userData?.username,
      }),
    }).then(() => {
      navigate("/");
      setUserData(null);
      localStorage.removeItem("userData");
      info();
    });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Container>
          <img src={noimg} alt="" />
          <div className="subtitle">{userData?.username}</div>
          <Button onClick={logout}>logout</Button>
        </Container>
      </div>
    </div>
  );
};

export default MyProfile;
