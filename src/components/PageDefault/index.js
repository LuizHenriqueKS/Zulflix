import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 70px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 8px;
  min-height: calc(100% - 156px);
  ${({ paddingAll }) => paddingAll != null && css`
    padding: ${paddingAll}
  `}
`;

function PageDefault({ menuTransparente, paddingAll, children }) {
  return (
    <>
      <Menu transparente={menuTransparente} />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  menuTransparente: false,
  paddingAll: null,
  children: [],
};

PageDefault.propTypes = {
  children: PropTypes.node,
  menuTransparente: PropTypes.bool,
  paddingAll: PropTypes.number,
};

export default PageDefault;
