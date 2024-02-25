import styled from "styled-components";
import "../data/constants";
import { skills, descSkillEn as Desc } from "../data/constants";

const Skills = () => {
  return (
    <div id='#skills'>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>{Desc}</Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill key={item}>
              <SkillTittle>{item.title}</SkillTittle>
              <SkillList>
                {item.skills.map((skills) => (
                  <SkillItem>
                    <SkillsImage></SkillsImage>
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </div>
  );
};
export default Skills;
