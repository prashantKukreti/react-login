import React  from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import EmployeeList from './components/EmployeeList/EmployeeList'

const App =()=>{
    return(

        <div>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/Employeelist' component={EmployeeList} />
                <Redirect to='/'/>
            </Switch>
        </div>
    )
    
}

export default App;