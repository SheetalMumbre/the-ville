import { Route, Routes } from "react-router"
import LoginPage from "./layout/authentication/login-page/login-page.component"
import { menuList } from "./menu-list";
import Layout from "./layout/layout";

const Routing = () => {
    return(
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/">
            {
                menuList.map((menu)=>(
                    // console.log(menu.name),
                    <Route key={menu.name}>
                        <Route key={menu.name}
                               path={menu.path}
                               element={<Layout>{menu.element}</Layout>}
                               />
                               {
                                menu.subMenus && menu.subMenus.length > 0  ? 
                                menu.subMenus.map((subMenu) => ( 
                                    // console.log(subMenu.name),
                                    <Route
                                    key={subMenu.name}
                                    path={subMenu.path}
                                    element={<Layout>{subMenu.element}</Layout>}
                                    />
                                ))
                               : null}
                    </Route>
                ))
            }
        </Route>
    </Routes>
    )
}

export default Routing;