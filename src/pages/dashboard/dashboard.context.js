import React from "react";

export const DashboardContext = React.createContext();

export const useDashboardContext = () => React.useContext(DashboardContext);
