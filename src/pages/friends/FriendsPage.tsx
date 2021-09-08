import styled from "styled-components";
import BottomNavBar from "../../components/shared/BottomNavBar";
import { Container, Avartar, SubText, colors, Tag } from "../../Styles";
import MainPicDummy from "../../dummyResources/MainPicDummy.jpg";

interface Props {}

export default function FriendsPage(props: Props) {
  return (
    <ContainerFriends>
      <Heading>
        <b>강남구</b> 근처 친구
      </Heading>
      <FlexDiv>
        <AvartarFriends src={MainPicDummy} />
      </FlexDiv>
      <FlexDiv style={{ marginTop: "15px" }}>
        <Name>리안</Name>
        <TagOnName>
          <p>개발자</p>
        </TagOnName>
      </FlexDiv>
      <InnerContainer style={{ marginTop: "40px" }}>
        <InnerSubject>학교</InnerSubject>
        <InnerContent>고려대학교</InnerContent>
      </InnerContainer>
      <InnerContainer style={{ marginTop: "6px" }}>
        <InnerSubject>나이</InnerSubject>
        <InnerContent>20대 초반</InnerContent>
      </InnerContainer>
      <InnerContainer style={{ marginTop: "25px" }}>
        <InnerContent style={{ marginLeft: "0px", fontWeight: 400 }}>
          수학을 너무 싫어하고... 요즘 너무 심심해요... 관련 있으신 분들과
          이야기 나누고 싶네요
        </InnerContent>
      </InnerContainer>
      <BottomNavBar selectedItem="friends" />
    </ContainerFriends>
  );
}

const ContainerFriends = styled(Container)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvartarFriends = styled(Avartar)`
  margin-top: 50px;
  width: 200px;
  height: 200px;
`;

const Heading = styled(SubText)`
  margin-top: 60px;
  font-weight: 500;
  font-size: 18px;
  b {
    font-weight: 1000;
  }
`;

const Name = styled.span`
  color: ${colors.Black};
  font-weight: bold;
  font-size: 20px;
`;

const TagOnName = styled(Tag)`
  margin-left: 10px;
  position: relative;
  padding: 3px 8px;
  border-radius: 6px;
  p {
    font-size: 14px;
    font-weight: normal;
  }
`;

const TagOnDetail = styled(TagOnName)`
  margin-right: 8px;
`;

const InnerContainer = styled.div`
  margin-left: 22px;
  margin-right: 22px;
`;

const InnerSubject = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.MidGray};
`;

const InnerContent = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.Black};
  margin-left: 30px;
`;
