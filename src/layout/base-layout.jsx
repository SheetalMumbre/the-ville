import styled from "styled-components";

export const BaseLayout =  ({children}) => {
    return(
        <FullPageLayout>
            {/* Page Layout */}
            {children}
        </FullPageLayout>
    );
}

const FullPageLayout = styled.div`
  background:#e0f0f0;
  height: 100vh;
  overflow-x: hidden;

    ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c8c8c8; 
    border-radius: 5px;
  }

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
