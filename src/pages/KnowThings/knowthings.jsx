import React,{Component} from 'react'
import KonwthingsHeader from './components/KonwthingsHeader/konwthingsheader'
import Discover from './components/Discover/discover'
export default class knowthings extends Component{
  render() {
    return (
      <div>
        <KonwthingsHeader/>
        <Discover/>
      </div>
    )
  }
}
