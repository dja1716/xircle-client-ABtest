import styled from "styled-components";
import BottomNavBar from "../../components/shared/BottomNavBar";
import { Container } from "../../Styles";
import routes from "../../Routes";

interface Props {}

export default function MyPage(props: Props) {
  return (
    <Container>
      <BottomNavBar selectedItem="mypage"></BottomNavBar>
    </Container>
  );
}
