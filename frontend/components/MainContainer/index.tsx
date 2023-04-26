import { FC, ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer:FC<MainContainerProps> = ({ children }) => {
  return (
    <div className={'main-container'}>
      <main>{children}</main>
    </div>
  );
};

export default MainContainer;
