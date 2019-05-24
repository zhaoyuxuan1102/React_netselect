import React, {Component} from 'react'
import './updownshow.styl'
export default class updownshow extends Component{
  render() {
    return (
      <div>
        <div className="updown_container">
          <div className="name">
            <img src="https://yanxuan.nosdn.127.net/c712bcb148461e3488147ee785e6b43a.png?imageView&quality=65&thumbnail=56y56" alt=""/>
            <span>xxxxxx</span>
          </div>
          <div className="describe">xxxxx</div>
          <img src="https://yanxuan.nosdn.127.net/431aecb56bb31a6b10a6ad07099ee7c8.jpg?imageView&quality=65&thumbnail=690y376" alt=""/>
          <div className="foot">
            <span className="iconfont icon-z"></span>
            <span>54545人看过</span>
          </div>
        </div>
      </div>
  )
  }
  }
