// import logo from './logo.svg';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ToDoContainer from './components/ToDoLists/ToDoContainer';


function App() {
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

export default App;
