import { Provider } from 'react-redux';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <PageWrapper>
        <Sidebar />
        <Workspace />
      </PageWrapper>
    </Provider>
  )
}

export default App;
