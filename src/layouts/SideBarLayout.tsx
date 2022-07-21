import { PropsWithChildren } from "react";

interface SideBarLayoutProps {}

const SideBarLayout: React.FC<PropsWithChildren<SideBarLayoutProps>> = ({
  children,
}) => {
  return (
    <div className="h-screen w-screen grid grid-cols-app-layout">
      {children}
    </div>
  );
};

export default SideBarLayout;
