import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "../../components/Generics";
import nouser from "../../assets/img/nouser.jpeg";
import noimg from "../../assets/img/noimg.jpeg";
import Recent from "../../components/Recent";

import {
  Blur,
  Container,
  Content,
  Description,
  Details,
  Icons,
  ImageContainer,
  ImgContainer,
  Section,
  User,
  Wrapper,
} from "./style";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/houses/id/${params.id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [params.id]);
  return (
    <div className="container">
      <div className="wrapper">
        <ImageContainer>
          <ImageContainer.Main
            src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
            alt="test"
          />
          <ImgContainer>
            {data?.attachments &&
              data?.attachments?.slice(1, 5).map((value, index) => {
                return data?.attachments?.length > 5 && index === 3 ? (
                  <Blur.Container>
                    <ImageContainer.Subimg
                      key={value.id}
                      src={value?.imgPath}
                      alt="test"
                    />
                    <Blur>+{data?.attachments?.length - 5}</Blur>
                  </Blur.Container>
                ) : (
                  <ImageContainer.Subimg
                    key={value.id}
                    src={value?.imgPath}
                    alt="test"
                  />
                );
              })}
          </ImgContainer>
        </ImageContainer>
        <Wrapper>
          <Container $flex={3}>
            <Section>
              <Content>
                <Content.Title $large="true">{data?.name}</Content.Title>
                <div className="info">
                  {data?.city},{data?.address}, {data?.country}
                </div>
              </Content>
              <Content $flex="true">
                <Icons.Share /> <Icons.Title>Share</Icons.Title>
                <Icons.Love /> <Icons.Title>Save</Icons.Title>
              </Content>
            </Section>
            <Section>
              <Details>
                <Icons.Bed />
                <Details.Title>
                  Bed {data?.houseDetails?.beds || 0}
                </Details.Title>
                <Icons.Bath />
                <Details.Title>
                  Bath {data?.houseDetails?.bath || 0}
                </Details.Title>
                <Icons.Garage />
                <Details.Title>
                  Garage {data?.houseDetails?.garage || 0}{" "}
                </Details.Title>
                <Icons.Ruler />
                <Details.Title>
                  Area {data?.houseDetails?.area || 0}kv
                </Details.Title>
              </Details>
              <Content>
                <Content $flex="true">
                  <del>
                    <Details.Title>${data?.price || 0}/mo</Details.Title>
                  </del>
                  <h2 className="title"> ${data?.salePrice || 0}/mo</h2>
                </Content>
                <div style={{ textAlign: "end" }} className="info">
                  {data?.user?.firstname}
                </div>
              </Content>
            </Section>
            <Content.Title>Description</Content.Title>
            <Description>{data?.description}</Description>
            <Content.Title>Feature</Content.Title>
            <Section>
              <Container $gap={25}>
                <Content $flex="true">
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex="true">
                  <Icons.Garage />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex="true">
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex="true">
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
              <Section>
                <Container $gap={25}>
                  <Content $flex="true">
                    <Icons.Bed />
                    <Details.Title>
                      Air Conditioning {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Garage />
                    <Details.Title>
                      Barbeque {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Bed />
                    <Details.Title>
                      Dryer {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Ruler />
                    <Details.Title>
                      Gym {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                </Container>
              </Section>
              <Section>
                <Container $gap={25}>
                  <Content $flex="true">
                    <Icons.Bed />
                    <Details.Title>
                      Air Conditioning {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Garage />
                    <Details.Title>
                      Barbeque {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Bed />
                    <Details.Title>
                      Dryer {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Ruler />
                    <Details.Title>
                      Gym {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                </Container>
              </Section>
              <Section>
                <Container $gap={25}>
                  <Content $flex="true">
                    <Icons.Bed />
                    <Details.Title>
                      Air Conditioning {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Garage />
                    <Details.Title>
                      Barbeque {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Bed />
                    <Details.Title>
                      Dryer {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                  <Content $flex="true">
                    <Icons.Ruler />
                    <Details.Title>
                      Gym {data?.houseDetails?.beds || 0}
                    </Details.Title>
                  </Content>
                </Container>
              </Section>
            </Section>
          </Container>
          <Container className="user" $flex={1}>
            <Section style={{ justifyContent: "$flex-start" }}>
              <User.Img src={nouser} alt="user image" />
              <Content>
                <div className="subTitle">
                  {data?.user?.firstname} {data?.user?.lastname}
                </div>
                <div className="info">{data?.user?.email}</div>
              </Content>
            </Section>
            <Input placeholder="Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" />
            <Input placeholder="Message" />
            <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
            <Button width={"%"}>Send request</Button>
          </Container>
        </Wrapper>
        <Recent />
      </div>
    </div>
  );
};

export default HouseItem;
