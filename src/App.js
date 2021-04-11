import './App.scss';
import Header from './components/Header/Header';
import Massage from './components/Massage/Massage';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <NavBar />
            <div className="container">
               <Route path='/Profile' render={() => <Profile massages={props.state1.massagesData} addPost2={props.addPost1} />} />
               <Route path='/Massage' render={() => <Massage dialogs={props.state1.dialogsData} />} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
