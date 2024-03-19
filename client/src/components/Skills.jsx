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

const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <Title>{translations.es.Skills.title}</Title>
        <Desc>{translations.es.Skills.subtitle}</Desc>
        <SkillsContainer>
          {skills.map((item, subIndex) => (
            <Skill key={subIndex}>
              <SkillTittle>{item.title}</SkillTittle>
              <SkillList>
                {item.skills.map((skills, subIndex) => (
                  <SkillItem key={subIndex}>
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
