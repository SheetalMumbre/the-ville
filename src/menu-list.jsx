import MyQuote from "./components/quote/my-quote";
import AirFreigthQuotePage from "./components/quote/new-quotation/air-freight-quote-page";
import LoginPage from "./layout/authentication/login-page/login-page.component";

export const menuList = [
    {
        name: "default",
        path: '/',
        isMenu: false,
        element: <AirFreigthQuotePage/>,
    },

    {
        name: "Home",
        path: '/home/dashboard',
        isMenu: true,
        element:<AirFreigthQuotePage/>
    },

    {
        icon: "fa-caret-down",
        name: "Quote",
        path: "",
        isMenu: true,
        subMenus: [
            {
                icon:"",
                name: "New quatation",
                path:""
            },
            {
                icon: "fa-plane",
                name: "Air Freight Quote",
                path: "/quote/air-freight",
                element: <AirFreigthQuotePage />
            },
            {
                icon: "fa-ship",
                name: "Sea Freight Quote",
                path: "",
                element: ""
            },
            {
                icon: "fa-truck fa-flip-horizontal",
                name: "Road Freight Quote",
                path: ""
            },
            {
                icon: "",
                name: "My Quotes",
                path: "/quote/my-quotes",
                element: <MyQuote />
            },
        ]
    }
]