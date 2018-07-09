import React, {Component} from 'react';
import Login from './Login';
import {connect} from "react-redux";
import {login} from "./actions";
import authReducer from "./reducers/authReducers";

class AuthContainer extends Component{

    submit = values =>{
        console.log(values);
        this.props.login(values);
        //console.log(this.props.authReducer.currentUser);
    };

    render(){
        return <Login onSubmit={this.submit}/>
    }
}

const mapStateToProps = store => {
    return {authReducer}
};

export default connect(mapStateToProps, {login})(AuthContainer);

