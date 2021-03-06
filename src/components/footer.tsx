import React from 'react';
import { space } from '@blockstack/ui';
import { Pagination } from '@components/pagination';
import { Section, SectionWrapper } from '@components/home/common';
import { FeedbackSection } from '@components/feedback';

const Footer = ({ hidePagination, ...rest }: any) => {
  return (
    <Section px={space(['extra-loose', 'extra-loose', 'none', 'none'])} {...rest}>
      <SectionWrapper>
        <Pagination />
        <FeedbackSection />
      </SectionWrapper>
    </Section>
  );
};

export { Footer };
