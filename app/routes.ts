import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),  // Adds your home page at the root '/'
  route("/roles", "routes/roles/roles.tsx"),  // Adds your about page at '/about'
] satisfies RouteConfig;
