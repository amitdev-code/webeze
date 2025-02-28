import React, { Fragment } from "react";
import { WebezeUIProvider } from "../../assets/styles/ui_provider/Provider";

const BuilderLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Fragment>
      <WebezeUIProvider>{children}</WebezeUIProvider>
    </Fragment>
  );
};

export default BuilderLayout;
