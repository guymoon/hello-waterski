import React from 'react';
import Link from 'next/link';
import {
  SpotImage,
  SpotImageContainer,
  SpotInfoContainer,
  SpotIntro,
  SpotItemContainer,
  SpotLocation,
  SpotTitle,
  DetailLink,
} from "./styles";
import SpotLikeButton from "../SpotLikeButton /SpotLikeButton";


const SpotItem = ({oneSpotData}) => {

  const {spotId, spotName, like, spotLocation, spotImage, spotIntro} = oneSpotData;

  return (
    <>
      <SpotItemContainer>
        <SpotInfoContainer>
          <SpotTitle>{spotName}</SpotTitle>
          <SpotLocation>{spotLocation}</SpotLocation>
          <SpotIntro>{spotIntro}</SpotIntro>
          <SpotLikeButton likeCount={like} spotId={spotId}/>
        </SpotInfoContainer>

        <SpotImageContainer>
          <Link href={`/line/[spotId]`} as={`/line/${spotId}`}>
            <SpotImage src={spotImage}/>
          </Link>
        </SpotImageContainer>
      </SpotItemContainer>
    </>
  );
};

export default SpotItem;