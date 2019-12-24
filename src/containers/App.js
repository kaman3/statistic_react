import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Switch, Route, withRouter,useParams } from "react-router-dom";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Registred from "../components/Registred";
import Issue from "../components/Issue";
import Footer from "../components/Footer";

import { fetchData } from '../actions/registredAction';
import { fetchIssue } from '../actions/issueAction';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.css";

class App extends Component{

    componentDidMount(){
        this.props.fetchDataURL('https://my.askent.ru/rest/get.php');
        this.props.fetchIssueUrl('https://askent.ru/include/issueCupon/rest.php');

    }
    
    render(){

        return(
            <div className = "container">
                 <Header/>
                 <Menu/>
                 <Switch>
                 <Route exact path="/">
                    <Registred listRegistred = {this.props.registred}/>
                 </Route>
                 <Route path = "/issue/:id">
                    <Issue listIssue = {this.props.issue}/>
                 </Route>
                 </Switch>

                 <Footer/>
            
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        registred: store.registred,
        issue:store.issue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataURL: url => dispatch(fetchData(url)),
        fetchIssueUrl: url => dispatch(fetchIssue(url))
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));