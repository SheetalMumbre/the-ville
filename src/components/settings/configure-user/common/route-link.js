import React, { useCallback } from 'react';
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "@emotion/styled";

export const RouteLink = ({ link, children, className, onClick, tabIndex }) => {
  const dispatch = useDispatch();

  const handleLinkClick = useCallback(e => {
    if (e.ctrlKey || e.shiftKey) {
      return;
    }
    e.preventDefault();
    setTimeout(() => {
      onClick && onClick(e);
      dispatch(push(link));
    }, 1);
  }, [dispatch, link])

  return (
    <Link href={link} className={className} onClick={handleLinkClick} tabIndex={tabIndex}>{children}</Link>
  );
}

export const RouteNewTabLink = ({ link, children, className }) => (
  <Link href={link} target="_blank" className={className}>{children}</Link>
);

const Link = styled.a`
  ${props => `
    text-decoration: none;
    color: ${props.theme.palette.links.main} !important;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: ${props.theme.palette.links.main};
    }
  `}
`