import React, {Component} from 'react'
import './goshop.styl'

export default class goshop extends Component {
  render() {
    return (
      <div>

        <div id="goshopWrap">
          <div className="shopheader">
            <span className="shuopcar">购物车</span>
            <span className="getcoupon">领券
          </span>
        </div>
        <ul className="shoplist">
          <li>30天无忧退款</li>
          <li>48小时快速退款</li>
          <li>满88元免邮费</li>
        </ul>
        <div className="imgWrap">
          <p className="addsome">去添加点什么吧</p>
        </div>
        <div className="tologin">
          <div>
            <mt-button type="danger" className="btnPhone">手机号码登录</mt-button>
          </div>
        </div>
      </div>
  </div>
  )
  }
}
