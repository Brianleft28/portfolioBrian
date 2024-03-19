import { Bio } from "../data/constants";
import { Typewriter } from "react-simple-typewriter";
import HeroImg from "../assets/HeroImage.png";
import HeroBgAnimation from "./HeroBgAnimation/index.jsx";
import { translations } from "../data/translations.js";
import {
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Image,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./herosection.styles.js";

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>{translations.es.HeroSection.name}</Title>
            <TextLoop>
              {translations.es.HeroSection.ima}
              <Span>
                <Typewriter
                  words={Bio.roles}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={55}
                  deleteSpeed={65}
                  delaySpeed={1200}
                />
              </Span>
            </TextLoop>
            <SubTitle>{translations.es.HeroSection.subtitle}</SubTitle>
            <ResumeButton href={Bio.resume} target='_blank'>
              {translations.es.HeroSection.resumeButton}
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={HeroImg} alt='Hero' />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};
export default Hero;
