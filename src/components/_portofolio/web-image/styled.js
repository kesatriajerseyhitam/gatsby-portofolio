import styled from 'styled-components';

export const ImageContainer = styled.img`
  box-shadow: 0px 1px 10px 1px black;
  cursor: pointer;
  margin-bottom: 5px;
  width: ${(props) => (props.child ? '49%' : null)};
`;

export const ChildImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImagePreviewContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  margin: auto auto;
  position: fixed;
  top: 0;
  width: 100vw;
`;
