import LoginPage from "./layout/authentication/login-page/login-page.component";

export const menuList = [
    {
        name: "default",
        path: '/',
        isMenu: false,
        element: <LoginPage/>,
    },

    {
        name: "Home",
        path: '/',
        isMenu: true,
        element:<LoginPage/>
    },

    {
        icon: "fa-caret-down",
        name: "Quote",
        path: "",
        isMenu: true,
        
    }
]