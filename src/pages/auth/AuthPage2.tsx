import styled from "styled-components";
import {
  ContainerFlexColumn,
  ContainerwithLeftRightMargin,
  Heading,
  SubText,
  colors,
  MainBtn,
  MidInput,
  FlexDiv,
  GenderText,
  Label,
  BigTextArea,
  NextButtonDisabled,
  SpaceForNavBar,
} from "../../Styles";
import {
  faCheckCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "../../Routes";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

interface Props {}

export default function AuthPage2(props: Props) {
  const [isSelected1, setIsSelected1] = useState<boolean>(true);
  return (
    <ContainerFlexColumn>
      <ContainerwithLeftRightMargin>
        <Heading>프로필 만들기</Heading>

        <form>
          <MidInput
            name="name"
            placeholder="Username"
            style={{ marginTop: "24px" }}
            type="text"
          />
          <select id="" name="University" style={{ marginTop: "12px" }}>
            <option value="">학교</option>
            <option value="고려대학교">고려대학교</option>
            <option value="연세대학교">연세대학교</option>
          </select>
          <MidInput
            placeholder="나이"
            type="number"
            name="Age"
            style={{ marginTop: "12px" }}
          ></MidInput>
          {/* <SubText>나이는 20초 20중 20후 30초 방식으로 표기가되요!</SubText> */}
          <FlexDiv style={{ justifyContent: "normal", marginTop: "20px" }}>
            <span
              style={{
                justifyContent: "normal",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setIsSelected1(true)}
            >
              {isSelected1 ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={colors.MidBlue}
                  size="lg"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircle}
                  color={colors.LightGray}
                  size="lg"
                />
              )}
              <GenderText style={{ marginLeft: "5px" }}>남성</GenderText>
            </span>
            <span
              style={{
                justifyContent: "normal",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
              onClick={() => setIsSelected1(false)}
            >
              {!isSelected1 ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={colors.MidBlue}
                  size="lg"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircle}
                  color={colors.LightGray}
                  size="lg"
                />
              )}
              <GenderText style={{ marginLeft: "5px" }}>여성</GenderText>
            </span>
          </FlexDiv>
          <Label>계열이나 직업을 적어주세요</Label>
          <MidInput
            name="job"
            placeholder="ex. 공대생 / 미개봉 새내기 / 디자이너"
            style={{ fontSize: "12px" }}
          />
          <Label>간단한 자기소개</Label>
          <BigTextArea
            name="selfpromotext"
            placeholder="ex. 미대에 다니는 다양한 삶을 살고 싶어하는 미개봉화석^^
           요즘 스타트업에 관심이 생겨서 관련하신 분들과 이야기하면 좋을 것 같아요ㅎㅎ"
            style={{ fontSize: "12px", lineHeight: "18px" }}
          />
        </form>
        <p
          style={{
            justifyContent: "end",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            color: colors.MidGray,
            marginTop: "5px",
          }}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            color={colors.LightGray}
            size="lg"
            style={{ marginRight: "8px" }}
          />
          서울특별시 성동구
        </p>
        <SpaceForNavBar></SpaceForNavBar>
        <Link
          to={routes.auth3}
          style={{ textDecoration: "none", color: colors.Black }}
        >
          <NextButtonDisabled>다음</NextButtonDisabled>
        </Link>
      </ContainerwithLeftRightMargin>
    </ContainerFlexColumn>
  );
}
