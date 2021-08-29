import logo from "./assets/logo.png";

const dev = {
  DOMAIN: "List of employees",
  MENU_WIDTH: 220,
  LOGO: logo,
};

const prod = {
  DOMAIN: "List of employees",
  MENU_WIDTH: 220,
  LOGO: logo,
};
const config = process.env.NODE_ENV === "development" ? dev : prod;
export default config;
