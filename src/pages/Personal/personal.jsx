import React,{Component} from 'react'
import './personalsty.styl'
import PerHeader from './components/perHeader/perheader'
export default class personal extends Component{
  render() {
    return (
      <div>
        <PerHeader/>
        <div className="register_content">
          <div id="logoWrap">
            手机号注册
          </div>
          <div className="phone_wrap">
            <div className="phone">
              <input type="text" placeholder="请输入手机号"/>
            </div>
            <div className="codewrap">
              <input className="msg-code" type="text" placeholder="请输入短信验证码" />
                <button className="get_code">获取验证码</button>
            </div>
            <button className="register">注册</button>
          </div>
        </div>
      </div>
    )
  }
}
