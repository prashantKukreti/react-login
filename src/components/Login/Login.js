import React, { Component } from 'react';

import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component{

    state={
        authUserData:{
            username: "hruday@gmail.com",
            password :'hruday123'
        },
        userValid: false,
        passwordValid:false,
        userError:'',
        passwordError:''
    }   

    setErrorFor =(input,message)=>{
        // set the error class
        // set the error message

        if(input==='username'){
            this.setState({userError: message,userValid:false})
        }
        else if( input === 'password'){
            this.setState({passwordError:message,passwordValid:false})
        }
    }

    setSuccessFor=(input)=>{
        if(input==='username'){
            this.setState({userError: '',userValid:true})
        }
        else if( input === 'password'){
            this.setState({passwordError:'',passwordValid:true})
        }
    }

    inputChangedHandler= (event, input)=>{
        const value= event.target.value.trim()
        if(input==='username'){
            if(value === ''){
                this.setErrorFor('username','This field cannot be blank')
            }
            else if( value !== this.state.authUserData.username){
                this.setErrorFor('username','Username is not valid')
            }
            else
            this.setSuccessFor('username')
        }
        if(input==='password'){
            if(value === ''){
                this.setErrorFor('password','This field cannot be blank')
            }
            else if( value !== this.state.authUserData.password){
                this.setErrorFor('password','Password is not valid')
            }
            else
            this.setSuccessFor('password')
        }
    }

    formHandler=(event)=>{
        event.preventDefault();
        if(this.state.userValid && this.state.passwordValid){
            this.props.onLoginSuccess();
        }
    }

    render() {
        let redirectView=null;
        if(this.props.login){
            redirectView=<Redirect to='/Employeelist' />
        }

        return(
             <form onSubmit={this.formHandler} className='login'>
                {redirectView}
                <div className='loginContainer'>
                    <label>Username</label>
                    <input onChange={(event)=>this.inputChangedHandler(event,'username')} type='text' autoFocus required/>
                    <p className='errorMsg'>{this.state.userError}</p>
                    <label>Password</label>
                    <input onChange={(event)=>this.inputChangedHandler(event,'password')} type='password' autoFocus required/>
                    <p className='errorMsg'>{this.state.passwordError}</p>
                    <div className='btnContainer'>
                        <button> Log In</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state=>{
    return{
      login: state.login  
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onLoginSuccess : () => dispatch({type: 'LOGIN_SUCCESS'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);