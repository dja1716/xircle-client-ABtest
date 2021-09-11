import styled from "styled-components";
import {
  ContainerFlexColumn,
  ContainerwithLeftRightMargin,
  Heading,
  SubText,
  colors,
  NextButtonDisabled,
  SubTextSpan,
  NextButtonEnabled,
} from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../../Routes";

interface Props {}

export default function AuthPage4(props: Props) {
  const [isSelected1, setIsSelected1] = useState<boolean>(false);
  const [isSelected2, setIsSelected2] = useState<boolean>(false);
  const [isSelected3, setIsSelected3] = useState<boolean>(false);
  const [isSelected4, setIsSelected4] = useState<boolean>(false);
  const [isSelected5, setIsSelected5] = useState<boolean>(false);

  return (
    <ContainerFlexColumn>
      <ContainerwithLeftRightMargin>
        <Heading style={{ fontSize: "22px", lineHeight: "32px" }}>
          환영해요 {":)"}
          <br />
          아래 약관에 동의하시면 <br />
          맛있는 모임이 시작돼요!
        </Heading>
        <SubText style={{ lineHeight: "20px", marginTop: "13px" }}>
          친구들과 써클 모임 시작 전 필수 약관 내용에 먼저 <br />
          동의해주세요
        </SubText>
        <TextSpanDiv
          style={{ marginTop: "30px" }}
          onClick={() => {
            setIsSelected1(!isSelected1);
            setIsSelected2(!isSelected1);
            setIsSelected3(!isSelected1);
            setIsSelected4(!isSelected1);
            setIsSelected5(!isSelected1);
          }}
        >
          {isSelected1 ? (
            <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          ) : (
            <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
          )}

          <BlackTextSpan style={{ fontWeight: "bold", marginLeft: "10px" }}>
            전체 동의
          </BlackTextSpan>
          <SubTextSpan>
            {"("}선택 항목 포함{")"}
          </SubTextSpan>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colors.LightGray}
            style={{ position: "absolute", right: "0%" }}
          />
        </TextSpanDiv>
        <TextSpanDiv onClick={() => setIsSelected2(!isSelected2)}>
          {isSelected2 ? (
            <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          ) : (
            <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
          )}
          <BlackTextSpan style={{ marginLeft: "10px" }}>
            써클 이용약관
          </BlackTextSpan>
          <BlueTextSpan>
            {"("}필수{")"}
          </BlueTextSpan>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colors.LightGray}
            style={{ position: "absolute", right: "0%" }}
          />
        </TextSpanDiv>
        <TextSpanDiv onClick={() => setIsSelected3(!isSelected3)}>
          {isSelected3 ? (
            <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          ) : (
            <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
          )}
          <BlackTextSpan style={{ marginLeft: "10px" }}>
            써클 개인정보 수집 및 이용동의
          </BlackTextSpan>
          <BlueTextSpan>
            {"("}필수{")"}
          </BlueTextSpan>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colors.LightGray}
            style={{ position: "absolute", right: "0%" }}
          />
        </TextSpanDiv>
        <TextSpanDiv onClick={() => setIsSelected4(!isSelected4)}>
          {isSelected4 ? (
            <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          ) : (
            <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
          )}
          <BlackTextSpan style={{ marginLeft: "10px" }}>
            위치기반 서비스 이용동의
          </BlackTextSpan>
          <BlueTextSpan>
            {"("}필수{")"}
          </BlueTextSpan>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colors.LightGray}
            style={{ position: "absolute", right: "0%" }}
          />
        </TextSpanDiv>
        <TextSpanDiv onClick={() => setIsSelected5(!isSelected5)}>
          {isSelected5 ? (
            <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
          ) : (
            <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
          )}
          <BlackTextSpan style={{ marginLeft: "10px" }}>
            써클 마케팅 수신동의
          </BlackTextSpan>
          <GrayTextSpan>
            {"("}필수{")"}
          </GrayTextSpan>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colors.LightGray}
            style={{ position: "absolute", right: "0%" }}
          />
        </TextSpanDiv>
        {isSelected2 && isSelected3 && isSelected4 && isSelected5 ? (
          <Link
            to={routes.places}
            style={{ textDecoration: "none", color: colors.Black }}
          >
            <NextButtonEnabled>시작하기</NextButtonEnabled>
          </Link>
        ) : (
          <NextButtonDisabled>시작하기</NextButtonDisabled>
        )}
      </ContainerwithLeftRightMargin>
    </ContainerFlexColumn>
  );
}

const TextSpanDiv = styled.div`
  width: 100%;
  margin-top: 8px;
  position: relative;
`;

const BlackTextSpan = styled(SubTextSpan)`
  color: ${colors.Black};
  font-size: 14px;
`;

const BlueTextSpan = styled(SubTextSpan)`
  color: ${colors.MidBlue};
  font-size: 14px;
`;

const GrayTextSpan = styled(SubTextSpan)`
  font-size: 14px;
`;
