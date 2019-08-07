import React from 'react'
import styled from 'styled-components';

import { Colors, Dimensions, linkFonts } from 'react-owl-ui'

const TeamList = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  max-width: 30rem;
  text-transform: uppercase;
  font-family: "Industry";
`;

const TeamRow = styled.div`
  margin: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const TeamName = styled.span`
  flex: 1 0 auto;
  text-align: left;
  margin-right: 1rem;
  color: ${Colors.base.primaryText}
`;

const TeamColor = styled.div`
  ${({ color, width }) => `
    height: 3rem;
    width: ${width};
    background-color: ${color};
  `}
`;

export default () => {
  linkFonts();

  return (
    <TeamList>
      {Object.keys(Colors).map(teamName => (
        <TeamRow>
          <TeamName>{teamName}</TeamName>
          <TeamColor width={Dimensions.xlarge} color={Colors[teamName].primary}   />
          <TeamColor width={Dimensions.large}  color={Colors[teamName].secondary} />
          <TeamColor width={Dimensions.medium}  color={Colors[teamName].tertiary}  />
        </TeamRow>
      ))}
    </TeamList>
  );
}
