import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";

const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Jinish Shah
        </SectionTitle>
        <SectionText>
        A Full Stack Developer with expertise in building scalable web applications using Next.js and GraphQL. Proficient in optimizing website performance and enhancing SEO. Experienced in integrating advanced analytics tools and implementing user engagement features.
        </SectionText>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" ,margin: "0 0 80px" }}>
          <Button alt="resume" onClick={handleClickResume}>
            Resume
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
