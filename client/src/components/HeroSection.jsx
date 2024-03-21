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
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg
          as={motion.div}
          // animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <HeroBgAnimation
            as={motion.div}
            // animation
            initial={{ opacity: 0, x: -5000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title
              as={motion.div}
              // animation
              initial={{ opacity: 0, scale: 0.75, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 1 }}
            >
              {translations.es.HeroSection.name}
            </Title>
            <TextLoop
              as={motion.div}
              // animation
              initial={{ opacity: 0, scale: 0.5, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
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
            <SubTitle
              as={motion.div}
              // animation
              initial={{ opacity: 0, scale: 0.5, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {translations.es.HeroSection.subtitle}
            </SubTitle>
            <ResumeButton
              href={Bio.resume}
              target='_blank'
              as={motion.a}
              // animation

              initial={{ opacity: 0, scale: 0.5, x: -2000 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              {translations.es.HeroSection.resumeButton}
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer
            as={motion.div}
            // animation
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 750,
              duration: 0.5,
              delay: 1,
            }}
          >
            <Image src={HeroImg} alt='Hero' as={motion.img} drag />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};
export default Hero;
