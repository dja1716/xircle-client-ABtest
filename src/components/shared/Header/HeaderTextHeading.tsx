import styled from "styled-components";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SHeaderTextHeading = styled.h3`
  padding-bottom: 11px;
  border-bottom: 1px solid white;
  font-size: 20px;
  font-weight: 800;
`;

export default function HeaderTextHeading(props: Props) {
  return <SHeaderTextHeading>{props.children}</SHeaderTextHeading>;
}
