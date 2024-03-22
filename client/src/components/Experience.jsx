import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../data/constants";
import ExperienceCard from "./Cards/ExperienceCard";
import { translations } from "../data/translations";
import {
  Container,
  Desc,
  TimelineSection,
  Title,
  Wrapper,
} from "./experience.styles";
import { motion } from "framer-motion";

const index = () => {
  return (
    <Container id='experience'>
      <Wrapper>
        <Title
          as={motion.div}
          // animation
          initial={{ opacity: 0, scale: 0.75, x: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0 }}
        >
          {translations.es.Experience.title}
        </Title>
        <Desc
          as={motion.div}
          initial={{ opacity: 0, scale: 0.75, x: 300 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
        >
          {translations.es.Experience.subtitle}
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem
                as={motion.div}
                initial={{ opacity: 0, scale: 0.2, x: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                key={index}
              >
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='secondary' />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
