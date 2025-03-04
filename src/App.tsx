import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';

function App() {

  return (
    <>
      <Header />
      <PageWrapper>
        <Sidebar />
        <Workspace />
      </PageWrapper>
    </>
  )
}

export default App
