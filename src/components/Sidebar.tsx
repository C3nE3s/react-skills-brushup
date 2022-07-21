import { Link } from "@tanstack/react-location";
import type { RouteWithDisplayName } from "../App";

interface SideBarProps {
  routes: Array<RouteWithDisplayName>;
}

const SideBar: React.FC<SideBarProps> = ({ routes }) => {
  return (
    <aside>
      {routes.map((route) => (
        <Link to={route.path}>{route.displayName}</Link>
      ))}
    </aside>
  );
};

export default SideBar;
