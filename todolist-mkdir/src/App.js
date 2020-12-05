// import logo from './logo.svg';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ListsContainer from './components/ToDoLists/ListsContainer';

function App() {
  return (<>
    <header>
      <HeaderContainer />
    </header>

    <div>
      <Route path='/todolist' render={() =><ListsContainer/>}></Route>
     
    </div>
  </>
  );
}

export default App;
