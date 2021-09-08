import styled from "styled-components";

interface Props {
  src: string;
}

const SHeaderPic = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export default function HeaderPic(props: Props) {
  return <SHeaderPic src={props.src}></SHeaderPic>;
}
