import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const defaultData = [
  { number: 6, text: "FreeLance Projects" },
  { number: 2000, text: "LinkedIn Followers" },
  { number: 55, text: "Github Repos" },
];

const Acomplishments = () => {

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {defaultData.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;

