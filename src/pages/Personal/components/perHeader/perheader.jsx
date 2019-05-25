import React, {Component} from 'react'
import './perheader.styl'
import {Link} from 'react-router-dom'
export default class perheader extends Component {

  render() {
    return (
      <div>
        <div>
          <div id="navContent">
            <Link to='/home'>
            <i className="iconfont icon-home1 gohome"/>
            </Link>
          <i className="wylogo"></i>
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
