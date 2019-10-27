import Dashboard from "./views/Dashboard";
import UserProfile from "./views/UserProfile.jsx";
import TableList from "./views/TableList.jsx";
import Typography from "./views/Typography.jsx";
import Maps from "./views/Maps.jsx";
import Notifications from "./views/Notifications.jsx";
import AddUser from "./views/AddUser"
import AddHospital from "./views/AddHospital"
import AddUserData from "./views/AddUserData"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Visit History",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/add-user",
    name: "Add User",
    icon: "pe-7s-bell",
    component: AddUser,
    layout: "/admin"
  },

  {
    path: "/add-hospital",
    name: "Add Hospital",
    icon: "pe-7s-bell",
    component: AddHospital,
    layout: "/admin"
  },
  {
    path: "/user-data-add",
    name: "Add Data",
    icon: "pe-7s-bell",
    component: AddUserData,
    layout: "/admin"
  }
];

export default dashboardRoutes;
