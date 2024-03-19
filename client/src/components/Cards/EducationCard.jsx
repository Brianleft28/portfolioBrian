import {
  Body,
  Card,
  Date,
  Degree,
  Description,
  Grade,
  Logo,
  Name,
  Sapn,
  Top,
} from "./educationcard.styles";

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Logo src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>{education.grade}</Grade>
      <Description>
        <Sapn>{education.desc}</Sapn>
      </Description>
    </Card>
  );
};

export default EducationCard;
