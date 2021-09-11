import styled from "styled-components";
import { colors } from "../../Styles";
import Avartar from "../shared/Avartar";

interface Props {
  placeImgSrc: string;
  placeClosed?: boolean;
  placeTag?: string;
  placeParticipant: string[];
  placeLocation?: string;
  placeHeading: string;
  placeDetail?: string;
  placeTime?: string;
  placeCondition?: string;
}

export default function Feed(props: Props) {
  //const tag: string | null | undefined = props.feedTag;

  return (
    <PlaceContainer>
      <PlaceLeftContainer>
        {props.placeClosed && (
          <PlaceFull>
            <p>마감</p>
          </PlaceFull>
        )}
        {props.placeTag && (
          <PlaceTag>
            <p>{props.placeTag}</p>
          </PlaceTag>
        )}
        <PlaceImg src={props.placeImgSrc} />
      </PlaceLeftContainer>
      <PlaceDescription>
        <PlaceHeading>{props.placeHeading}</PlaceHeading>
        <PlaceDetailP>{props.placeDetail}</PlaceDetailP>

        <PlaceTimeP>{props.placeLocation}</PlaceTimeP>
        <PlaceTimeP style={{ marginRight: "3px", marginLeft: "3px" }}>
          /
        </PlaceTimeP>
        <PlaceTimeP>{props.placeTime}</PlaceTimeP>
        <PlaceTimeP style={{ marginLeft: "8px" }}>
          {props.placeCondition}
        </PlaceTimeP>
        <AvartarContainer>
          {props.placeParticipant.map((item, idx) => {
            if (idx < 4) {
              return <Avartar src={item} marginRight={"-5px"} />;
            }
          })}

          {props.placeParticipant.length > 4 ? (
            <p>+{props.placeParticipant.length}</p>
          ) : null}
        </AvartarContainer>
      </PlaceDescription>
    </PlaceContainer>
  );
}

const PlaceContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
const PlaceLeftContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 0px;
  position: relative;
`;
const PlaceImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
`;

const PlaceDescription = styled.div`
  width: 200px;
  padding-left: 10px;
  padding-top: 5px;
`;

const PlaceTag = styled.div`
  position: absolute;
  background-color: ${colors.MidBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 18px;
  padding: 0px 5px 0px 5px;
  top: -5px;
  left: 8px;

  p {
    color: white;
    font-weight: 700;
    font-size: 11px;
  }
`;

const PlaceFull = styled.div`
  position: absolute;
  background-color: gray;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  border-radius: 15%;
  justify-content: center;
  display: flex;
  align-items: center;
  p {
    color: white;
    font-weight: 800;
  }
`;

const AvartarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  p {
    position: absolute;
    left: 110px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.LightGray};
  }
`;
const PlaceDetailP = styled.p`
  margin-top: 3px;
  font-size: 10px;
`;

const PlaceTimeP = styled.span`
  margin-top: 3px;
  font-size: 10px;
  color: ${colors.LightGray};
`;

const PlaceHeading = styled.h4`
  color: ${colors.StrongBlue};
  font-size: 15px;
  font-weight: 400;
`;
