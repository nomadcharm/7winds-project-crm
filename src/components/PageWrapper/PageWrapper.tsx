import { ReactNode } from 'react';
import './PageWrapper.style.scss';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main">
      <div className="container main__container">
        {children}
      </div>
    </main>
  )
}

export default PageWrapper;
