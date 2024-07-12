import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  StackTitleContent,
  UtilityList,
  Img,
} from "./InternshipsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { internships } from "../../constants/constants";

const Internships = () => (
  <Section nopadding id="internships">
    <SectionDivider />
    <SectionTitle main>Internships</SectionTitle>
    <GridContainer>
      {internships.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <StackTitleContent>Stack</StackTitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.visit && (
                <ExternalLinks href={p.visit} target="_blank">
                  Code
                </ExternalLinks>
              )}
              {p.source && (
                <ExternalLinks href={p.source} target="_blank">
                  Source
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Internships;
