import './App.css';
import Project from './components/projects/Project';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddProjet from './components/projects/AddProjet';
import Task from './components/tasks/Task';
import AddTask from './components/tasks/AddTask';
import Admins from './components/listAdmin/Admins';
import Users from './components/listUser/Users';
import Details from './components/projects/Details';
import EditPrjt from './components/projects/EditPrjt';


function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
   <Route exact path='/' element={<Project/>}> </Route>
   <Route exact path='/Edit/:id' element={<EditPrjt/>}> </Route>


<Route exact path='/add' element={<AddProjet/>}>
</Route>

<Route exact path='/tasks' element={<Task/>}>
</Route>
<Route exact path='/addtask' element={<AddTask/>}>
</Route>
<Route exact path='/admins' element={<Admins/>}>
</Route>
<Route exact path='/users' element={<Users/>}>
</Route>
<Route exact path='/detail/:id' element={<Details/>}>
</Route>
   </Routes>
    </div>
  );
}

export default App;
