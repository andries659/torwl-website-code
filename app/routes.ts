import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("/roles", "routes/roles/roles.tsx"),
  route("/events-bot/privacy-policy", "routes/events-bot/privacy-policy.tsx"),
  route("/events-bot/terms-of-service", "routes/events-bot/terms-of-service.tsx"),
  route("/torw-bot/privacy-policy", "routes/torw-bot/privacy-policy.tsx"),
  route("/torw-bot/terms-of-service", "routes/torw-bot/terms-of-service.tsx"),
] satisfies RouteConfig;
