import React,{Component} from 'react'
import './popularity.styl'


export default class popularoty extends Component{
  render() {
    return(
      <div>
        <div id="popularity">
          <div className="topTitle">
            <p className="HotTop">人气推荐</p>
            <p className="more">更多<i className="iconfont icon-you"></i></p>
          </div>
          <div className="TopContent">
            <div className="leftWrap" >
              <img src="http://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=280x280" alt=""/>
            </div>
            <div className="rightWrap" >
              <p className="preference"></p>
              <p className="shoptitle"></p>
              <p className="shopdesc"></p>
              <p className="shopprice">￥</p>
            </div>
          </div>
          <div className="shopdetails" v-if="popularlist.length">
            <div className="left">
              <img src="http://yanxuan.nosdn.127.net/1d46c9cd1995175aadd7892ffc086539.png?imageView&quality=65&thumbnail=330x330" alt=""/>
              <div><span></span><i>¥</i></div>
              <div className="bottomText">每满499减80券</div>
            </div>
            <div>
              <img src="http://yanxuan.nosdn.127.net/8922cf90432c8937f34d7c9ae4268a26.png?imageView&quality=65&thumbnail=330x330" alt=""/>
              <div><span></span><i>¥</i></div>
              <div className="bottomText">每满299减60券</div>
            </div>
            <div>
              <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
              <div><span></span><i>¥</i></div>
              <div className="bottomText">加价购</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
