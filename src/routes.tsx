import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
//BrowserRouter arquivo para fazer roteamento atraves do browser, instrui a rota de acesso da aplicacao

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
//cada pagina sera uma rota. 


const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    );
}
//obs: component={Home} diz que a primeira rota vai acessar o componente Home e o Path vai ser o endereco que devemos acessar para abrir a pagina Home
export default Routes;
