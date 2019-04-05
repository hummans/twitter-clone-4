import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  oneOf, oneOfType, string, node,
} from 'prop-types';
import { grayBorderBottom, whiteBackground } from '../themes';
import { linkListType } from '../propTypes';

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  height: 53px;
  position: relative;
  z-index: 1;
  ${grayBorderBottom}
  ${whiteBackground}
`;
const StyledNavLinkWithHover = styled(NavLink)`
  flex: 1 1 0;
  text-align: center;
  color: rgb(101, 119, 134);
  border-bottom: 2px solid transparent;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    border-bottom-color: rgb(29, 161, 242);
    color: rgb(29, 161, 242);
  }
  ${props => props.type === 'txt' && css`
    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
      color: rgb(29, 161, 242);
    }
  `}
  transition-property: background-color;
  transition-duration: 0.2s;
`;
const HoverCircle = styled.div`
  border-radius: 9999px;
  padding: 8px;
  margin: -8px;
  transition-property: background-color;
  transition-duration: 0.2s;
  display: flex;
  ${StyledNavLinkWithHover}:hover & {
    background-color: rgba(29, 161, 242, 0.1);
    color: rgb(29, 161, 242);
  }
`;
function Content({ title, type }) {
  if (type === 'txt') {
    return title;
  }
  if (type === 'icon') {
    return (
      <HoverCircle>
        {title}
      </HoverCircle>
    );
  }
  return <></>;
}
Content.propTypes = {
  title: oneOfType([string, node]).isRequired,
  type: string.isRequired,
};
function NavigationList({ links, type }) {
  return (
    <Wrapper>
      {
        links.map(({ to, title, exact }) => (
          <StyledNavLinkWithHover
            key={to}
            to={to}
            exact={exact}
            type={type}
          >
            <Content title={title} type={type} />
          </StyledNavLinkWithHover>
        ))
      }
    </Wrapper>
  );
}
NavigationList.propTypes = {
  links: linkListType.isRequired,
  type: oneOf(['txt', 'icon']),
};
NavigationList.defaultProps = {
  type: 'txt',
};
export default NavigationList;