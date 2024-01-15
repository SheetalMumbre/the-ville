import React from "react";

export const withLayout = (Layout, Component) => (props) =>
  <Layout><Component {...props} /></Layout>;

export const withLayoutOptions = (Layout, options, Component) => (props) =>
  <Layout {...options}><Component {...props} /></Layout>;

export const withHeaderLayout = (Layout, Header, Component) => (props) =>
  <Layout Header={Header}><Component {...props} /></Layout>;

export const visibleInParentViewport = (el) => {
  const elementRect = el.getBoundingClientRect();
  const parentRect = el.parentNode.getBoundingClientRect();

  return (
    elementRect.top >= parentRect.top &&
    elementRect.right >= parentRect.left &&
    elementRect.top + elementRect.height <= parentRect.bottom &&
    elementRect.left + elementRect.width <= parentRect.right
  );
}
