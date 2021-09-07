import styled from "styled-components";
import React, { useState } from "react";
import Avartar1 from "../../dummyResources/Avartar1.png";
import MainPicDummy from "../../dummyResources/MainPicDummy.jpg";
import { Collapse } from "react-collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./FeedPage.css";
import { Option } from "react-dropdown";

const options: Option[] = [
  {
    value: "안암근처",
    label: "안암근처",
    className: "drop-down-option",
  },
  {
    value: "신촌근처",
    label: "신촌근처",
    className: "drop-down-option",
  },
  {
    value: "혜화근처",
    label: "혜화근처",
    className: "drop-down-option",
  },
];

interface Props {}

export default function FeedPage(props: Props) {
  return (
    <ContainerFeedPage>
      <Header>
        <HeaderWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dropdown
              controlClassName="drop-down-className"
              options={options}
              value={options[0]}
            />
          </div>
          <RequestP>식탁 건의하기</RequestP>
        </HeaderWrapper>
      </Header>
      <Promo>
        <PromoPic src={MainPicDummy} />
        <PromoText>
          <PromoTextHeading>친구들과 놀러가요!</PromoTextHeading>
          <PromoTextDescription>
            취향이 통하는 대학친구들과 즐기는 공간
          </PromoTextDescription>
        </PromoText>
      </Promo>
      <FeedContainer>
        <FeedLeftContainer>
          <FeedFull>
            <p>마감</p>
          </FeedFull>
          <FeedImg src={MainPicDummy} />
        </FeedLeftContainer>
        <FeedDescription>
          <FeedHeading>bunt24</FeedHeading>
          <FeedDetailP>#조용한 #감성적인 #분위기있는</FeedDetailP>
          <FeedTimeP>참살이 이번주 금요일 오후 1시/5시/7시/9시</FeedTimeP>
          <AvartarContainer>
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
          </AvartarContainer>
        </FeedDescription>
      </FeedContainer>
      <FeedContainer>
        <FeedLeftContainer>
          <FeedAlomostFull>
            <p>곧 마감</p>
          </FeedAlomostFull>
          <FeedImg src={MainPicDummy} />
        </FeedLeftContainer>
        <FeedDescription>
          <FeedHeading>bunt24</FeedHeading>
          <FeedDetailP>#조용한 #감성적인 #분위기있는</FeedDetailP>
          <FeedTimeP>참살이 이번주 금요일 오후 1시/5시/7시/9시</FeedTimeP>
          <AvartarContainer>
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
          </AvartarContainer>
        </FeedDescription>
      </FeedContainer>
      <FeedContainer>
        <FeedLeftContainer>
          <FeedAlomostFull>
            <p>곧 마감</p>
          </FeedAlomostFull>
          <FeedImg src={MainPicDummy} />
        </FeedLeftContainer>
        <FeedDescription>
          <FeedHeading>bunt24</FeedHeading>
          <FeedDetailP>#조용한 #감성적인 #분위기있는</FeedDetailP>
          <FeedTimeP>참살이 이번주 금요일 오후 1시/5시/7시/9시</FeedTimeP>
          <AvartarContainer>
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
          </AvartarContainer>
        </FeedDescription>
      </FeedContainer>
      <FeedContainer>
        <FeedLeftContainer>
          <FeedAlomostFull>
            <p>곧 마감</p>
          </FeedAlomostFull>
          <FeedImg src={MainPicDummy} />
        </FeedLeftContainer>
        <FeedDescription>
          <FeedHeading>bunt24</FeedHeading>
          <FeedDetailP>#조용한 #감성적인 #분위기있는</FeedDetailP>
          <FeedTimeP>참살이 이번주 금요일 오후 1시/5시/7시/9시</FeedTimeP>
          <AvartarContainer>
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
          </AvartarContainer>
        </FeedDescription>
      </FeedContainer>
      <FeedContainer>
        <FeedLeftContainer>
          <FeedAlomostFull>
            <p>곧 마감</p>
          </FeedAlomostFull>
          <FeedImg src={MainPicDummy} />
        </FeedLeftContainer>
        <FeedDescription>
          <FeedHeading>bunt24</FeedHeading>
          <FeedDetailP>#조용한 #감성적인 #분위기있는</FeedDetailP>
          <FeedTimeP>참살이 이번주 금요일 오후 1시/5시/7시/9시</FeedTimeP>
          <AvartarContainer>
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
            <AvartarImg src={Avartar1} />
          </AvartarContainer>
        </FeedDescription>
      </FeedContainer>
    </ContainerFeedPage>
  );
}

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 12px 12px 0;
  justify-content: space-between;
  margin-top: 10px;
`;

const ContainerFeedPage = styled.div`
  width: 100%;
`;

const RequestP = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: gray;
  padding-top: 8px;
`;

const Promo = styled.div`
  width: 100%;
  margin-top: 10px;
  position: relative;
`;

const PromoPic = styled.img`
  width: 100%;
`;

const PromoText = styled.div`
  color: white;
  position: absolute;
  top: 60%;
  left: 5%;
  width: 60%;
`;

const PromoTextHeading = styled.h3`
  padding-bottom: 11px;
  border-bottom: 1px solid white;
  font-size: 20px;
  font-weight: 800;
`;

const PromoTextDescription = styled.p`
  margin-top: 8px;
  font-size: 10px;
  font-weight: 500;
`;

const FeedContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
const FeedLeftContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 0px;
  position: relative;
`;
const FeedImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15%;
  object-fit: cover;
`;

const FeedDescription = styled.div`
  width: 200px;
  padding-left: 10px;
  padding-top: 5px;
`;

const FeedAlomostFull = styled.div`
  position: absolute;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  top: -5px;
  left: -5px;
  p {
    color: white;
    font-weight: 600;
  }
`;

const FeedFull = styled.div`
  position: absolute;
  background-color: gray;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  border-radius: 15%;
  justify-content: center;
  display: flex;
  align-items: center;
  p {
    color: white;
    font-weight: 800;
  }
`;

const FeedHeading = styled.h4`
  color: #1c43b7;
  font-size: 15px;
  font-weight: 400;
`;

const FeedDetailP = styled.p`
  margin-top: 3px;
  font-size: 10px;
`;

const FeedTimeP = styled.p`
  margin-top: 3px;
  font-size: 10px;
  color: #8c94a4;
`;

const AvartarImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: -5px;
  border: 1px solid #8c94a4;
  object-fit: cover;
`;

const AvartarContainer = styled.div`
  display: flex;
`;
