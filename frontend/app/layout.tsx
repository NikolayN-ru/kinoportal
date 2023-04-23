import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

const layout: FC<{ children: ReactNode }> = ({ children }) => (
    <>{children}</>
);
export default layout;
