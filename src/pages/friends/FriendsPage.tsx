import styled from "styled-components";
import BottomNavBar from "../../components/shared/BottomNavBar";
import { Container } from "../../Styles";

interface Props {}

export default function FriendsPage(props: Props) {
  return (
    <Container>
      <BottomNavBar selectedItem="friends" />
    </Container>
  );
}
