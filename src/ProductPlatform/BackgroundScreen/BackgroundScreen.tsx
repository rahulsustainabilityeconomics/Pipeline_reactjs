import React, { ReactNode } from "react";

//import styles file
import "./BackgroundScreen.scss";

interface BackgroundScreenProps {
  children: ReactNode;
}

const BackgroundScreen = ({
  children,
  ...props
}: BackgroundScreenProps): JSX.Element => {
  return (
    <div className="background-screen-filter" {...props}>
      {children}
    </div>
  );
};

export default BackgroundScreen;
