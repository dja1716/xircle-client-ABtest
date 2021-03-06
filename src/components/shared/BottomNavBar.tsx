import styled from "styled-components";
import { BottomNavBarContainer, colors, SpaceForNavBar } from "../../Styles";
import { Link } from "react-router-dom";
import routes from "../../Routes";

interface Props {
  selectedItem: string;
}

export default function BottomNavBar(props: Props) {
  return (
    <>
      <BottomNavBarContainer>
        <Link to={routes.places} style={{ textDecoration: "none" }}>
          {props.selectedItem === "places" ? (
            <BottomNavBarItem style={{ color: colors.MidBlue }}>
              써클
            </BottomNavBarItem>
          ) : (
            <BottomNavBarItem style={{ color: colors.Black }}>
              써클
            </BottomNavBarItem>
          )}
        </Link>
        <Link
          to={routes.friends}
          style={{ textDecoration: "none", color: colors.Black }}
        >
          {props.selectedItem === "friends" ? (
            <BottomNavBarItem style={{ color: colors.MidBlue }}>
              친구들
            </BottomNavBarItem>
          ) : (
            <BottomNavBarItem style={{ color: colors.Black }}>
              친구들
            </BottomNavBarItem>
          )}
        </Link>
        <Link
          to={routes.mypage}
          style={{ textDecoration: "none", color: colors.Black }}
        >
          {props.selectedItem === "mypage" ? (
            <BottomNavBarItem style={{ color: colors.MidBlue }}>
              마이페이지
            </BottomNavBarItem>
          ) : (
            <BottomNavBarItem style={{ color: colors.Black }}>
              마이페이지
            </BottomNavBarItem>
          )}
        </Link>
      </BottomNavBarContainer>
      <SpaceForNavBar />
    </>
  );
}



const BottomNavBarItem = styled.div`
  width: 125px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
