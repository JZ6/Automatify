import {
  type RouteConfig,
  route,
  layout,
  index,
  prefix,
} from "@react-router/dev/routes";

const routes = [
  index("routes/home.tsx"),
  route("test", "routes/1.tsx"),
  route(":id", "routes/2.tsx"),
];

export default [...prefix("Automatify", routes)] satisfies RouteConfig;
