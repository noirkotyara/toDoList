// import logo from './logo.svg';
import { NavLink, Route } from 'react-router-dom';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import ToDoContainer from './components/ToDoLists/ToDoContainer';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/redux-store';


const App = () => {
  return (<>
    <header>
      <HeaderContainer />
    </header>

    <div>
      <Route path='/todolist' render={() =><ToDoContainer/>}></Route>
    </div>
  </>
  );
}

const AppContainer = () => {
 return <HashRouter>
  <Provider store={store}>
    <App/>
  </Provider>
</HashRouter>
}

export default AppContainer;
