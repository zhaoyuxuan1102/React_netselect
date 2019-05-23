import React, {Component} from 'react'
import './commonfooter.styl'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
export default class commonheader extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <ul id="swiper">
          <li>
            <Link to='/'>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>首页</span>
            </Link>
          </li>
          <li>
            <Link to='/category'>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/>
            </div>
            <span>分类</span>
            </Link>
          </li>
          <li>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>识物</span>
          </li>
          <li>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>购物车</span>
          </li>
          <li>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>个人</span>
          </li>
        </ul>
      </div>
      </BrowserRouter>
    )
  }

}
