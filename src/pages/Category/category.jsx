import React, {Component} from 'react'
import './category.styl'

export default class Category extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <div id="headeWrap">
                <div className="search">
                  <i className="iconfont icon-iconfontzhizuobiaozhun22"></i>
                  <span>搜索商品, 共22494款好物</span>
                </div>
              </div>
              <div className="container">
                <div className="left_nav">
                  <ul>
                    <li className='active'>推荐专区</li>
                  </ul>
                </div>
                <div className="content">
                  <div>
                    <div>
                      <img
                        src="http://yanxuan.nosdn.127.net/e67389ec2620c3693889af629a80056b.jpg?imageView&thumbnail=0x196&quality=75"
                        alt=""/>
                      <ul>
                        <li>
                          <img
                            src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144"
                            alt=""/>
                          <div>好货内部价</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
