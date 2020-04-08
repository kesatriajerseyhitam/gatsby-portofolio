import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelContainer = styled.div`
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 12px;
  margin-right: 10px;
  margin-top: 10px;
  color: white;
  font-family: 'Roboto';
`;

const color = {
  react: '#0090ff',
  redux: '#0090ff',
  context: '#0090ff',
  graphql: '#e632ac',
  saga: '#89d96d',
  node: '#84ce24',
  flutter: '#52c4f8',
  firebase: '#FFCB2B',
};

const TechLabel = ({ technology }) => {
  console.log(technology);

  return (
    <LabelContainer
      style={{
        backgroundColor: color[technology.toLowerCase()],
      }}
    >
      {technology}
    </LabelContainer>
  );
};

TechLabel.propTypes = {
  technology: PropTypes.string.isRequired,
};

export default TechLabel;
