import styled from 'styled-components';

export const BackgroundWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: rgba(82, 128, 255, 0.05);
  position: relative;
  display: flex;
  align-items: center;
  .bg {
    position: absolute;
    filter: blur(100px);
    &:nth-child(1) {
      background: rgba(82, 128, 255, 0.9);
      width: 400px;
      height: 80vh;
      right: 0;
    }
    &:nth-child(2) {
      background: rgba(174, 28, 187, 1);
      width: 400px;
      height: 50vh;
      right: 380px;
      top: -100px;
      border-radius: 50%;
    }
    &:nth-child(3) {
      background: rgba(255, 96, 195, 0.95);
      width: 400px;
      height: 30vh;
      right: 680px;
      top: -100px;
      border-radius: 50%;
    }
    &:nth-child(4) {
      background: rgba(239, 210, 242, 0.2);
      width: 400px;
      height: 30vh;
      right: 680px;
      left: 0;
    }
  }
`;
