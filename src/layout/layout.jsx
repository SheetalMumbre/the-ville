import styled from "@emotion/styled";
import {BaseLayout} from "./base-layout";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = ({children}) =>{
  return (
//   <div>home</div>
    <BaseLayout>
        <HorizontalSplit>
            <SideMenuContainer
             className="col-sm-2 col-md-2 sidebar open-sidebar">
                <Sidebar/>
            </SideMenuContainer>
            
             <VerticalSplit>
                <HeaderContainer className="offset-md-2 offset-sm-2 col-sm-10 col-md-10">
                    <Navbar/>
                </HeaderContainer>
                <div className="offset-md-2 offset-sm-2 col-sm-10 col-md-10">
                    <ModuleContainer>{children}</ModuleContainer>
                </div>
                Footer media Link
            </VerticalSplit>
        </HorizontalSplit>
    </BaseLayout>
  )
};

export default Layout;

const VerticalSplit = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const HorizontalSplit = styled.div`
  flex: 1;
  display: flex;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;

const SideMenuContainer = styled.div`
  position: absolute;
  padding: 0px !important;
  margin: 0 !important  ;
  top: 0;
  left: 0;
  height: 100%;
  background: #3cacac;
  box-shadow: 9px 1px 8px 1px rgb(0 0 0 / 24%), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 3;
  position: fixed;

  & p {
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    margin: 0px;
    text-align: center;
  }

  & span {
    color: #fff;
    font-size: 15px;
    font-weight: 200;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  padding-top: 5px;
  background:#e0f0f0;
`;

const ModuleContainer = styled.div`
  height: 100%;
  margin: 0;
  position: relative;
  width: 100%;
  top: 65px;
  padding: 0px 10px 15px 15px;
  z-index: 0;
`;