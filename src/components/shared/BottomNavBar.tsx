import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export default function BottomNavBar(props: Props) {
  return (
    <BottomNavBarContainer>
      <BottomNavBarItem>
        <FontAwesomeIcon icon={faCoffee} />
        써클
      </BottomNavBarItem>
      <BottomNavBarItem>친구들</BottomNavBarItem>
      <BottomNavBarItem>마이페이지</BottomNavBarItem>
    </BottomNavBarContainer>
  );
}

const BottomNavBarContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

const BottomNavBarItem = styled.div`
  width: 125px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
