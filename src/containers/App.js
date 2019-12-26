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
import { filterAction } from '../actions/filterAction';

import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.css";

class App extends Component{

    componentDidMount(){
        this.props.fetchDataURL('https://my.askent.ru/rest/get.php');
        this.props.fetchIssueUrl('https://askent.ru/include/issueCupon/rest.php');
        //console.log(this.props)
    }

    searchQuery(e){
        e.preventDefault();
        this.props.filterAction(e.target.value);
    }
    
    render(){

        return(
            <div className = "container">
                 <Header/>
                 <Menu/>
                 {/* <div className = "row">
                      <div className = "col-md-12">
                           <div className = "filter">
                                <input type = 'text' name = 'searchQuery' onChange = {this.searchQuery.bind(this)}/>
                           </div>
                      </div>
                 </div> */}
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
        issue:store.issue,
        searchFilter: store.filter
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataURL: url => dispatch(fetchData(url)),
        fetchIssueUrl: url => dispatch(fetchIssue(url)),
        filterAction: search => dispatch(filterAction(search))
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));