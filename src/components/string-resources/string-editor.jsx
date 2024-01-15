import React, { useState, Fragment } from 'react';
import styled from "@emotion/styled";
import { StringsEditorDialog } from './string-editor-dialog'

export const StringsEditor = ({ stringKey, value }) => {
  const [open, setOpen] = useState(false);

  const onStringClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  }

  return (
    <Fragment>
      <StringKey onClick={onStringClick} title={stringKey}>{value || stringKey}</StringKey>

      {open && (
        <StringsEditorDialog stringKey={stringKey} close={() => setOpen(false)} />
      )}
    </Fragment>
  );
}

const StringKey = styled.span`
  background-color: #d2665038;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 959.5px) {
    display: none;
  }
`
