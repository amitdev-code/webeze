import React, { Fragment } from "react";

const BuilderLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

export default BuilderLayout;
