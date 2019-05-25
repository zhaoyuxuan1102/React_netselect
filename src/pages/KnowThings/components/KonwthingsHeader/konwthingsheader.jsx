import React,{Component} from 'react'
import './konwthingsheader.styl'
import {Link} from 'react-router-dom'


export default class konwthingsheader extends Component{
  render() {
    return(
      <div>
        <div>
          <div id="navContentkonw">
            <Link to='/home'> <i className="iconfont icon-home1 gohome"></i></Link>
            <div className="wylogo">
              <p className='activekonw'>发现</p>
              <p>甄选家</p>
            </div>
            <div>
              <i className="iconfont icon-iconfontzhizuobiaozhun22 goselect"></i>
              <i className="iconfont icon-gouwuche2 goshop"></i>
            </div>
           </div>
      </div>
      </div>

    )
  }
}
