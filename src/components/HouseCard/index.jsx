import {
  Container,
  Content,
  Details,
  Img,
  Icons,
  Divider,
  Wrap,
} from "./style";
import noimg from "../../assets/img/noimg.jpeg";

export const HouseCard = ({ data = {}, gap, onResizeClick, onLoveClick }) => {
  const {
    attachments,
    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
    category,
    favorite,
  } = data;

  return (
    <Wrap $gap={gap}>
      <Container>
        <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
        <Content>
          <div className="subTitle inline">
            {city}, {country}, {description}
          </div>
          <div className="info">
            {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
            {category?.name || "Category"} {houseDetails?.room || 0}-rooms
          </div>
          <Details>
            <Details.Item>
              <Icons.Bed />
              <div className="info">Bed {houseDetails?.beds || 0}</div>
            </Details.Item>
            <Details.Item>
              <Icons.Bath />
              <div className="info">Bath {houseDetails?.bath || 0}</div>
            </Details.Item>
            <Details.Item>
              <Icons.Garage />
              <div className="info">Garage {houseDetails?.garage || 0} </div>
            </Details.Item>
            <Details.Item>
              <Icons.Ruler />
              <div className="info">Area {houseDetails?.area || 0}kv</div>
            </Details.Item>
          </Details>
        </Content>
        <Divider />
        <Content $footer="true">
          <Details.Item $footer="true">
            <div className="info">${salePrice || 0}/mo</div>
            <div className="subTitle">${price || 0}/mo</div>
          </Details.Item>
          <Details.Item $row="true">
            <Icons.Resize onClick={onResizeClick} />
            <Icons.Love onClick={onLoveClick} favorite={favorite?.toString()} />
          </Details.Item>
        </Content>
      </Container>
    </Wrap>
  );
};

export default HouseCard;
