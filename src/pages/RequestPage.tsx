import styled from "styled-components";

interface Props {}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  h3 {
  }
`;

export default function RequestPage(props: Props) {
  return (
    <Container>
      <h3>식탁 건의하기</h3>
    </Container>
  );
}
