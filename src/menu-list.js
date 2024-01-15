import HomeDashboard from "./components/home/home.dashboard";
import CompanyDetailsPage from "./components/settings/company-details/company-details-page.component";
import ConfigureUser from "./components/settings/configure-user/configure-user-form-component";
import UsersListPage from "./components/settings/configure-user/users-list-page.component";
import MyPreferencesPage from "./components/settings/my-preference/my-preferences-page.component";



export const menuList = [
  {
    name: "default",
    path: "/",
    element: <HomeDashboard />,
    isMenu: false
  },
  {
    name: "Home",
    path: "/home/dashboard",
    element: <HomeDashboard />,
    isMenu: true
  },
  {
    icon: "fa-caret-down",
    name: "Quote",
    path: "",
    isMenu: true,
    subMenus: [
      {
        icon: "",
        name: "New quotation",
        path: "",
      },
      {
        icon: "fa-plane",
        name: "Air Frieght Quote",
        path: "/quote",
      },
      {
        icon: "fa-ship",
        name: "Sea Frieght Quote",
        path: "",
      },
      {
        icon: "fa-truck",
        name: "Road Frieght Quote",
        path: "",
      },
      {
        icon: "",
        name: "My Quotes",
        path: "/my-quotes",
      },
    ],
  },
  {
    icon: "fa-caret-down",
    name: "Book",
    path: "",
    isMenu: true,
    subMenus: [
      {
        icon: "",
        name: "Book Shipment",
        path: "/book",
      },
    ],
  },
  {
    icon: "fa-caret-down",
    name: "Track",
    path: "",
    isMenu: true,
    subMenus: [
      {
        icon: "",
        name: "All Shipment",
        path: "",
      },
      {
        icon: "",
        name: "Track Your Shipment",
        path: "",
      },
    ],
  },
  {
    icon: "fa-caret-down",
    name: "Documentation",
    path: "",
    isMenu: true,
  },
  {
    icon: "fa-caret-down",
    name: "Settings",
    path: "",
    isMenu: true,
    subMenus: [
      {
        icon: "",
        name: "My Preference",
        path: "/my-preferences",
        element: <MyPreferencesPage/>
      },
      {
        icon: "",
        name:"Company Details",
        path: "/company",
        element:<CompanyDetailsPage/>
      },
      {
        icon:"",
        name:"Configure User",
        path:"/configure-user",
        element:<ConfigureUser/>
      },
      {
        name:"Users List",
        path:"/users-list",
        element:<UsersListPage/>
      },
      {
        icon: "",
        name: "Support",
        path: "",
      },
    ],
  },
];
