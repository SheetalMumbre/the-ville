import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthRoute } from "./layout/authentication/auth-route";
import Navigation from './layout/navigation/navigation.component';
import LoginPage from './layout/authentication/login-page/login-page.component';
import Error from './layout/error/error.component';
import Layout from "./layout/layout";
import { AuthenticationLayout } from "./layout/authentication-layout";
import { menuList } from "./menu-list";

export const Routing = () => (
  <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='login' element={ <AuthenticationLayout><LoginPage /></AuthenticationLayout>}/>
      {/* <Route path='home' element={<AuthRoute component={HomeDashboard} />} /> */}
            <Route path='error' element={<Error />} />
      {menuList.map((menu) => (
        <>
          <Route
            key={menu.name}
            path={menu.path}
            element={<Layout>{menu.element}</Layout>}
          />
          {menu.subMenus && menu.subMenus.length > 0
            ? menu.subMenus.map((subMenu) => (
                <>
                  <Route
                    key={subMenu.name}
                    path={subMenu.path}
                    element={<Layout>{subMenu.element}</Layout>}
                  />
                </>
              ))
            : null}
        </>
      ))}
    </Route>
  </Routes>
);

// export const Routing = () => (
//   <Routes>
//     <Route path="/" element={<LoginPage />} />
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/home" element={<AuthRoute component={HomeDashboard} />} />
//     <Route path="/error" element={<AuthRoute component={Error} />} />
//     <Route exact path="/demos" element={<DemoListPage />} />
//     <Route exact path="/myquotes" element={<MyQuote />} />
//   </Routes>
// );
