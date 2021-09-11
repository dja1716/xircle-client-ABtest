import styled from "styled-components";
import {
  ContainerFlexColumn,
  ContainerwithLeftRightMargin,
  Heading,
  SubText,
  colors,
  MainBtn,
  NextButton,
  Avartar,
  FlexDiv,
} from "../../Styles";
import { Link } from "react-router-dom";
import routes from "../../Routes";
import { DummyAvartar } from "../../dummyResources/dummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle,  } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export default function AuthPage3(props: Props) {
  return (
    <ContainerFlexColumn>
      <ContainerwithLeftRightMargin>
        <Heading>마지막! 프로필 사진</Heading>
        <SubText style={{ marginTop: "12px" }}>
          개성이 나타나는 사진을 업로드해주세요!
        </SubText>
        <FlexDiv style={{ marginTop: "29px" }}>
          <Avartar
            src={DummyAvartar}
            style={{ width: "78px", height: "78px" }}
          />
        </FlexDiv>
        <FlexDiv
          style={{
            marginTop: "11px",
            fontSize: "13px",
            fontWeight: 700,
            color: colors.MidBlue,
          }}
        >
          <p>프로필사진 수정하러가기</p>
        </FlexDiv>
        <SubText
          style={{ fontSize: "13px", fontWeight: "bold", marginTop: "36px" }}
        >
          #프로필 사진 예시
        </SubText>
        <SubText
          style={{
            fontSize: "10px",
            fontWeight: 500,
            marginTop: "2px",
            lineHeight: "17px",
          }}
        >
          관심사를 즐기는 사진 / 좋아하는 공간에서 찍은 사진 / 개성이 담긴 사진
        </SubText>
        <FlexDiv style={{ justifyContent: "space-around", marginTop: "16px" }}>
          <div>
            <Avartar
              src={DummyAvartar}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div>
            <Avartar
              src={DummyAvartar}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div>
            <Avartar
              src={DummyAvartar}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div>
            <Avartar
              src={DummyAvartar}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </FlexDiv>
        <FlexDiv
          style={{
            justifyContent: "space-around",
            transform: "translateY(-10px)",
          }}
        >
          <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
        </FlexDiv>
        <Link
          to={routes.auth4}
          style={{ textDecoration: "none", color: colors.Black }}
        >
          <NextButton>가입하기</NextButton>
        </Link>
      </ContainerwithLeftRightMargin>
    </ContainerFlexColumn>
  );
}
