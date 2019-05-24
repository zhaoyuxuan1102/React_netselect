import React, {Component} from 'react'
import './commonheaders.styl'

export default class commonheader extends Component {

  render() {
    return (
      <div id="headeWrap">
        <h1 className="logo">
          <img
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
            alt=""/></h1>
        <div className="search">
          <i className="iconfont icon-iconfontzhizuobiaozhun22"></i>
          <span>搜索商品, 共22494款好物</span>
        </div>
        <div className="btn">
          <button>登陆</button>
        </div>
      </div>
    )
  }
}
