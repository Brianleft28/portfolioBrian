import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../data/constants";
import EducationCard from "./Cards/EducationCard";
import {
  Container,
  Desc,
  TimeLineSection,
  Title,
  Wrapper,
} from "./education.styles";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <Container id='education'>
      <Wrapper>
        <Title
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0 }}
        >
          Education
        </Title>
        <Desc
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, x: 200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0 }}
        >
          My education has been a a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>
        <TimeLineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem
                as={motion.div}
                initial={{ opacity: 0, scale: 0.2, x: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                key={index}
              >
                <TimelineContent sx={{ py: "12px", px: "2" }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='secondary' />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};
export default Education;
