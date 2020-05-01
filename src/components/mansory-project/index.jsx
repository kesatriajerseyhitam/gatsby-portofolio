import styled from 'styled-components';

const ProjectContainer = styled.div`
  columns: 1;
  column-gap: 20px;
  height: 100%;
  width: 100%;

  @media(min-width: 720px) {
    columns: 2;
  }

  @media(min-width: 1024px) {
    columns: 3;
  }
`;

export default ProjectContainer;
