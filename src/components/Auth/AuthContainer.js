import React, {Component} from 'react';
import Login from './Login';

class AuthContainer extends Component{

    submit = values =>{
        console.log(values);
    }

    render(){
        return <Login onSubmit={this.submit}/>
    }
}

export default AuthContainer