import styled from "styled-components";

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 50%;
  right: 0;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0px 0px;
    justify-content: center;
  }
  @media screen and (max-width: 960px) {
    padding: 0px 0px;
    justify-content: center;
  }
`;

export const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  min-height: 100vh;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  z-index: 1000;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    margin-top: -50px !important;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 16px;
  }
`;

export const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-family: monospace;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + 95};
  line-height: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 960px) {
    text-align: center;
    max-width: 600px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-height: 365px;
  cursor: pointer;
  max-width: 365px;
  border: 4px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (max-width: 640px) {
    max-height: 280px;
    max-width: 280px;
  }
  @media screen and (max-width: 480px) {
    max-height: 285px;
    max-width: 285px;
    margin-top: 50px;
  }
`;
