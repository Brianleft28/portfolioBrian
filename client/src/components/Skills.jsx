import styled from "styled-components";
import "../data/constants";
import { skills, descSkillEn as Descr } from "../data/constants";
import { translations } from "../data/translations";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;

  /*  @media screen and (max-width: ) {
    
  } */
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  padding: 0 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.primary};
  border-radius: 16px;
  padding: 18px 36px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media screen and (max-width: 480px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTittle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const SkillsImage = styled.img`
  width: 24px;
  height: 24px;
`;

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
