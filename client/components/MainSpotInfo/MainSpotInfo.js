import React, {useEffect} from 'react';
import styled from "styled-components";

import {
  LikeButton,
  SpotLike,
  SpotLikeContainer,
  SpotLikeImage
} from '../SpotItem/styles';
import SpotLikeButton from "../SpotLikeButton /SpotLikeButton";

const Container = styled.div`
  width: 35rem;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    width: 30rem;
    margin: 0 auto;
  }
`;
const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;

`;

const Location = styled.div`
  font-size: 10px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #212529;
`;

const Text = styled.div`
  font-size: 10px;
  margin-bottom: 16px;
  margin-top: 8px;
`;


const MainSpotInfo = ({oneSpotInfo}) => {

  if (oneSpotInfo == null) {
    console.log('hello');
    return <div>로딩중</div>;
  }

  const {spotId, spotName, like, spotLocation, spotIntro, spotImage} = oneSpotInfo;


  return (
    <Container>
      <Image src={spotImage}></Image>
      <div style={{display: 'flex'}}>
        <Title>spotName</Title>
        <SpotLikeButton likeCount={like} spotId={spotId}/>
      </div>
      <Location>{spotLocation}</Location>
      <Text>{spotIntro}</Text>
    </Container>
  );
};

export default MainSpotInfo;