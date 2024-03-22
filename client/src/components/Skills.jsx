import "../data/constants";
import { skills } from "../data/constants";
import { translations } from "../data/translations";
import {
  Container,
  Desc,
  Skill,
  SkillItem,
  SkillList,
  SkillTittle,
  SkillsContainer,
  SkillsImage,
  Title,
  Wrapper,
} from "./skills.style";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <Title
          as={motion.div}
          // animation
          initial={{ opacity: 0, scale: 0.75, x: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          {translations.es.Skills.title}
        </Title>
        <Desc
          as={motion.div}
          initial={{ opacity: 0, scale: 0.75, x: 200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
        >
          {translations.es.Skills.subtitle}
        </Desc>
        <SkillsContainer as={motion.div}>
          {skills.map((item, i) => (
            <Skill
              key={i}
              as={motion.div}
              transition={{ delay: i * 0.3 }}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <SkillTittle>{item.title}</SkillTittle>
              <SkillList>
                {item.skills.map((skills, i) => (
                  <SkillItem
                    key={i}
                    as={motion.div}
                    transition={{ delay: i * 0.1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <SkillsImage src={skills.image} />
                    {skills.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};
export default Skills;
