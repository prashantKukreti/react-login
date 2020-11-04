import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import EmployeeTable from '../EmployeeTable/EmployeeTable';

class EmployeeList extends Component{
    render() {

        console.log(this.props.login)
        let redirectView=null;
        if(!this.props.login){
            redirectView=<Redirect to='/' />
        }
        return (
            <div className='dashboard'>
                {redirectView}
                <nav>
                    <h2>DashBoard</h2>
                    <button onClick={this.props.onLogout}>Logout</button>
                </nav>
                <EmployeeTable />
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        login: state.login
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onLogout : ()=> dispatch({type:'LOGOUT'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);