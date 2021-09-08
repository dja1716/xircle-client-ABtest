import styled from "styled-components";

interface Props {
  marginRight: string;
  src: string;
}

export default function Avartar(props: Props) {
  const AvartarImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: ${props.marginRight};
    object-fit: cover;
  `;

  return <AvartarImg src={props.src} />;
}
