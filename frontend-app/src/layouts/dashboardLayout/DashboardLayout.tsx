import React, { Fragment } from "react";
import { WebezeUIProvider } from "../../ui_provider/Provider";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <WebezeUIProvider>
      <Fragment>{children}</Fragment>
    </WebezeUIProvider>
  );
};

export default DashboardLayout;
