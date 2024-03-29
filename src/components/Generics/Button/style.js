import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFFFFF",
        color: "white",
      };
    case "light":
      return {
        background: "#FFFFFF",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };

    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };
  }
};

const getWidth = ({ width }) => {
  if (!width) return "100px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-family: "Montserrat";
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${getWidth};

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${getType}
  &:active {
    opacity: 0.7;
  }
  @media (max-width: 700px) {
    width: ${({ width }) => (width ? `${width}px` : "60px")};
    height: ${({ height }) => (height ? `${height}px` : "35px")};
  }
`;

export { Container };
