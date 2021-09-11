import styled from "styled-components";
import {
  ContainerFlexColumn,
  ContainerwithLeftRightMargin,
  Heading,
  SubText,
  colors,
  MainBtn,
  NextButton,
} from "../../Styles";
import { Link } from "react-router-dom";
import routes from "../../Routes";
import AuthPage2 from "./AuthPage2";

interface Props {}

export default function AuthPage1(props: Props) {
  return (
    <ContainerFlexColumn>
      <ContainerwithLeftRightMargin>
        <Heading style={{ lineHeight: "35px" }}>
          친구들과
          <br /> 맛있는 밥 먹으러 갈까요?
        </Heading>
        <SubText style={{ lineHeight: "20px", marginTop: "12px" }}>
          단톡방을 만들어드리는 용도로 사용되기에 꼭! 사용하시는 전화번호를
          적어주셔야 해요.
        </SubText>
        <form>
          <PhoneNumberInput
            placeholder="전화번호를 입력해주세요"
            type="number"
          />
        </form>
        <Link
          to={routes.auth2}
          style={{ textDecoration: "none", color: colors.Black }}
        >
          <NextButton>다음</NextButton>
        </Link>
      </ContainerwithLeftRightMargin>
    </ContainerFlexColumn>
  );
}

const PhoneNumberInput = styled.input`
  margin-top: 40px;
  padding: 0px;
  width: 100%;
  height: 56px;
  border-radius: 0;
  border: 0px;
  border-bottom: 1px solid ${colors.BareGray};
`;
