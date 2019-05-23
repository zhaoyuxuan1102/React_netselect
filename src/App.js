import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home/home'
import Category from './pages/Category/category'
import KnowThings from './pages/KnowThings/knowthings'
import Personal from './pages/Personal/personal'
import GoShop from './pages/GoShop/goshop'

export default class App extends Component{
  render() {
    return (
      <BrowserRouter>

          <Route path='/' component={Home}/>
          <Route path="/category" component={Category} />
          <Route path="/knowthings" component={KnowThings} />
          <Route path="/personal" component={Personal} />
          <Route path="/goshop" component={GoShop} />

      </BrowserRouter>

    )
  }
}
