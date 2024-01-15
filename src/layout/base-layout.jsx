import React from 'react';
import styled from '@emotion/styled';

export const BaseLayout = ({ moduleError, children }) => {
  return (
    <FullPageLayout>
      {moduleError && <div>{moduleError}</div>}

      {!moduleError && children}
    </FullPageLayout>
  );
}

const FullPageLayout = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  //padding-top: 10px;
  height: 100vh;
  overflow-x: hidden;

  .open-sidebar {
    animation: slide-in 0.8s forwards;
    -webkit-animation: slide-in 0.8s forwards;
  }

  .dismiss-sidebar {
    animation: slide-out 0.8s forwards;
    -webkit-animation: slide-out 0.8s forwards;
  }

  @keyframes slide-in {
    0% {
      -webkit-transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(0%);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  i.fa {
    cursor: pointer;
  }
`;