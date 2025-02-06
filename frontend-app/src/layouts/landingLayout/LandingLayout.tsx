import React, { Fragment } from "react";
import { WebezeUIProvider } from "../../assets/styles/ui_provider/Provider";

const LandingLayout = ({ children }: { children: React.ReactElement }) => {
 return (
    <WebezeUIProvider>
      <Fragment>{children}</Fragment>
    </WebezeUIProvider>
  );};

export default LandingLayout;
