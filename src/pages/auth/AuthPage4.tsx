import styled from "styled-components";
import {
  ContainerFlexColumn,
  ContainerwithLeftRightMargin,
  Heading,
  SubText,
  colors,
  NextButton,
  SubTextSpan,
} from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface Props {}

export default function AuthPage4(props: Props) {
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
        <TextSpanDiv style={{ marginTop: "30px" }}>
          <FontAwesomeIcon icon={faCheckCircle} color={colors.MidBlue} />
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
        <TextSpanDiv>
          <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
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
        <TextSpanDiv>
          <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
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
        <TextSpanDiv>
          <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
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
        <TextSpanDiv>
          <span>
            <FontAwesomeIcon icon={faCircle} color={colors.LightGray} />
          </span>
          <span>
            <BlackTextSpan style={{ marginLeft: "10px" }}>
              써클 마케팅 수신동의
            </BlackTextSpan>
            <GrayTextSpan>
              {"("}필수{")"}
            </GrayTextSpan>
          </span>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colors.LightGray}
            style={{ position: "absolute", right: "0%" }}
          />
        </TextSpanDiv>
        <NextButton>시작하기</NextButton>
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
