import {
  Avatar,
  Card,
  Date,
  Description,
  Details,
  Image,
  Members,
  Tag,
  Tags,
  Title,
} from "./projectcard.styles";
import { motion } from "framer-motion";
const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card
      onClick={() => setOpenModal({ state: true, project: project })}
      as={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1, delay: 0 }}
    >
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </Members>
      {/* <Button>View Project</Button> */}
    </Card>
  );
};

export default ProjectCards;
