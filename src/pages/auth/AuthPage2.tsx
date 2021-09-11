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
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "../../Routes";

interface Props {}

export default function AuthPage2(props: Props) {
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
          <select id="" name="Age" style={{ marginTop: "12px" }}>
            <option value="">나이</option>
            <option value="20초">20초</option>
            <option value="20중">20중</option>
            <option value="20후">20후</option>
            <option value="30초">30초</option>
          </select>
          <SubText>나이는 20초 20중 20후 30초 방식으로 표기가되요!</SubText>
          <FlexDiv style={{ justifyContent: "normal", marginTop: "20px" }}>
            <input type="radio" name="gender" id="male" />
            <GenderText>남성</GenderText>
            <input
              type="radio"
              name="gender"
              id="female"
              style={{ marginLeft: "32px" }}
            />
            <GenderText>여성</GenderText>
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
            style={{ fontSize: "12px", lineHeight: "12px" }}
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
