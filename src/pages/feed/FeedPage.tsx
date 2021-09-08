import styled from "styled-components";
import React, { useState } from "react";
import MainPicDummy from "../../dummyResources/MainPicDummy.jpg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./FeedPage.css";
import { Option } from "react-dropdown";
import { colors, Container } from "../../Styles";
import Header from "../../components/shared/Header/Header";
import HeaderTextHeading from "../../components/shared/Header/HeaderTextHeading";
import HeaderTextDescription from "../../components/shared/Header/HeaderTextDescription";
import Feed from "../../components/feed/Feed";
import { feedDummyData } from "../../dummyResources/dummyData";
import BottomNavBar from "../../components/shared/BottomNavBar";

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
    <Container>
      <Top>
        <TopWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dropdown
              controlClassName="drop-down-className"
              options={options}
              value={options[0]}
            />
          </div>
          <RequestP>식탁 건의하기</RequestP>
        </TopWrapper>
      </Top>
      <Header src={MainPicDummy}>
        <HeaderTextHeading>친구들과 놀러가요!</HeaderTextHeading>
        <HeaderTextDescription>
          취향이 통하는 대학친구들과 즐기는 공간
        </HeaderTextDescription>
      </Header>
      {feedDummyData.map((item) => {
        return (
          <Feed
            placeImgSrc={item.placeImgSrc}
            feedParticipant={item.feedParticipant}
            feedClosed={item.feedClosed}
            feedHeading={item.feedHeading}
            feedDetail={item.feedDetail}
            feedLocation={item.feedLocation}
            feedTime={item.feedTime}
            feedCondition={item.feedCondition}
            feedTag={item.feedTag}
          ></Feed>
        );
      })}
      <div style={{ width: "100%", height: "75px" }}>
        <BottomNavBar />
      </div>
    </Container>
  );
}

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 12px 12px 0;
  justify-content: space-between;
  margin-top: 10px;
`;

const RequestP = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.MidGray};
  padding-top: 8px;
`;
