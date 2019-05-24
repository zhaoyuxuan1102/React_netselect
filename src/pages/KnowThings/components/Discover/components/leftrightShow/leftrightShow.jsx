import React, {Component} from 'react'
import './leftrightshow.styl'

export default class leftrightShow extends Component {
  render() {
    return (
      <div>
        <div className="leftRight_container">
          <div>
            <div className="left">
              <div className="name">
                <img src="https://yanxuan.nosdn.127.net/9e0262b11e636e26cdf3c16c16db060b.JPG?imageView&quality=65&thumbnail=56y56" alt=""/>
                <span>网易游戏后端组：波涛</span>
              </div>
              <div className="describe">xxxxxx</div>
              <div className="subtiltle">xxxxx</div>
              <div className="foot">
                <span className="iconfont icon-z"></span>
                <span>456456465人看过</span>
              </div>
            </div>
            <img src="https://yanxuan.nosdn.127.net/50830609e23c9996fde46e190f65c963.jpg?imageView&quality=65&thumbnail=272y272" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
