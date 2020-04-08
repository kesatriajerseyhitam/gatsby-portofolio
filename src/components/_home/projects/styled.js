import styled from 'styled-components';
import { color, defaultButton } from '../../../constant/styles';

const {
  primaryHighlight,
} = color;

export const ProjectsContainer = styled.div`
  border-bottom: 1px solid ${primaryHighlight};
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 40px 0;
`;

export const TitleContainer = styled.h3`
  color: ${primaryHighlight};
  font-family: 'Roboto';
  margin-bottom: -40px;
  letter-spacing: 3px;
  text-align: center;
  width: 100%;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0;
  width: 100%;
`;

export const BottomButtonContainer = styled.button`
  ${defaultButton};
  margin-top: 40px;
  width: 100%;
`;
