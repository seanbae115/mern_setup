import React, { Component } from 'react';
import axios from 'axios';

class ApiTest extends Component {

    getUserData(){
        axios.get('/api/get-user').then((resp) => {
            console.log('Response from get-user:', resp);
        }).catch((err) => {
            console.log('err from get-user:', err);
        });
    }

    getArticleData(){
        axios.get('/api/get-articles').then((resp) => {
            console.log('Response from get-article:', resp);
        }).catch((err) => {
            console.log('err from get-article:', err.message)
        });
    }

    render(){
        return (
            <div>
                <h1>API testing ground</h1>
                <button onClick={this.getUserData}>Get User Info</button>
                <br/>
                <button onClick={this.getArticleData}>Get Article Info</button>
            </div>
        )
    }
}

export default ApiTest;