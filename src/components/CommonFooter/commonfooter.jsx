import React, {Component} from 'react'
import './commonfooter.styl'
import {NavLink} from 'react-router-dom'
export default class commonfooter extends Component {
  render() {
    return (
      <div>
        <ul id="swiper" >
          <li>
            <NavLink to='/home' activeClassName='aciveFooter'>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>首页</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/category' activeClassName='aciveFooter'>
              <div className="footericon"><img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                alt=""/>
              </div>
              <span>分类</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/knowthings' activeClassName='aciveFooter'>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>识物</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/goshop' activeClassName='aciveFooter'>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>购物车</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/personal' activeClassName='aciveFooter'>
            <div className="footericon"><img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
              alt=""/></div>
            <span>个人</span>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
