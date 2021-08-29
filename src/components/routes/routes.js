import BusinessIcon from "@material-ui/icons/Business";
import PeopleIcon from '@material-ui/icons/People';


import Home from "../../containers/home_page/Home"
import Employees from "../../containers/employess/Employees"
import NotFound from "../../containers/not_found/NotFound"


// This way it would be easy to keep track of routes,
// for example, if in the future we would like to add roles checks or
// accordion layout to them
export const Routes = [
  {
    display: true,
    name: "Home",
    path: "/",
    icon: BusinessIcon,
    component: Home,
  },
  {
    display: true,
    name: "Employees",
    path: "/employees",
    icon: PeopleIcon,
    component: Employees,
  },
  {
    display: false,
    name: "Not Found",
    path: "*",
    icon: PeopleIcon,
    component: NotFound,
  },
];
