import { Link, Outlet, ReactLocation, Router } from "@tanstack/react-location";
import type { Route } from "@tanstack/react-location";
import Welcome from "./components/Welcome";
import SideBarLayout from "./layouts/SideBarLayout";
import Sidebar from "./components/Sidebar";

const location = new ReactLocation();

export type RouteWithDisplayName = Route<any> & { displayName: string };

let routes: Array<RouteWithDisplayName> = [
  {
    path: "/",
    element: <Welcome />,
    displayName: "Welcome",
  },
];

function App() {
  return (
    <Router location={location} routes={routes}>
      <SideBarLayout>
        <Sidebar routes={routes} />
        <Outlet />
      </SideBarLayout>
    </Router>
  );
}

export default App;
