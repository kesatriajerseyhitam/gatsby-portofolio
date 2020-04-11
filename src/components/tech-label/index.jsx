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
  context: '#0090ff',
  express: '#84ce24',
  firebase: '#FFCB2B',
  flutter: '#52c4f8',
  graphql: '#e632ac',
  node: '#84ce24',
  react: '#0090ff',
  redux: '#0090ff',
  saga: '#89d96d',
  sequelize: '#00B1EA',
  study: '#000000',
};

const TechLabel = ({ technology }) => (
  <LabelContainer
    style={{
      backgroundColor: color[technology.toLowerCase().trim()],
    }}
  >
    {technology}
  </LabelContainer>
);

TechLabel.propTypes = {
  technology: PropTypes.string.isRequired,
};

export default TechLabel;
