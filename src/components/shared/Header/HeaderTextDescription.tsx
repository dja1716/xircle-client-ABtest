import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const SHeaderTextDescription = styled.p`
  margin-top: 8px;
  font-size: 10px;
  font-weight: 500;
`;

export default function HeaderTextDescription(props: Props) {
  return <SHeaderTextDescription>{props.children}</SHeaderTextDescription>;
}
