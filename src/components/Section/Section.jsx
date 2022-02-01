import React from 'react';
import PropTypes from 'prop-types';

import { SectionWrap, Title, Subtitle } from './SectionStyled';

const Section = ({ title, children }) => {
  console.log(children);
  return (
    <SectionWrap>
      {title === 'Please leave feedback' ? (
        <Title>{title}</Title>
      ) : (
        <Subtitle>{title}</Subtitle>
      )}
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
