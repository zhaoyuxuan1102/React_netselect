import React ,{Component}from 'react'
import './hotcategory.styl'

export default class hotcategory extends Component{
  render() {
    return (
      <div>
        <div id="Hotcategory">
          <div>
            <p className="HotTitle">类目热销榜</p>
            <div className="categoryHOT">
              <div className="HotText">
                <p>热销榜</p>
                <span></span>
              </div>
              <img src="http://yanxuan.nosdn.127.net/48c97d6449ae2a2193d2dfc65517758d.png?imageView&quality=65&thumbnail=200x200" alt=""/>
            </div>
            <div className="categoryGOOD">
              <div className="HotText">
                <p>好评榜</p>
                <span></span>
              </div>
              <img src="http://yanxuan.nosdn.127.net/81d3c893f96d4ee66c24469505517e21.png?imageView&quality=65&thumbnail=200x200" alt=""/>
            </div>
          </div>
          <ul id="homeLife">
            <li>
              <p>居家生活榜</p>
              <img src="https://yanxuan.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?" alt="热销榜"/>
            </li>
            <li>
              <p>服饰鞋包榜</p>
              <img src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?" alt="热销榜"/>
            </li>
            <li>
              <p>美食酒水榜</p>
              <img src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?" alt="热销榜"/>
            </li>
            <li>
              <p>数码家电榜</p>
              <img src="http://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?" alt="热销榜"/>
            </li>
            <li>
              <p>个护清洁榜</p>
              <img src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?" alt="热销榜"/>
            </li>
            <li>
              <p>母婴亲子榜</p>
              <img src="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?" alt="热销榜"/>
            </li>
            <li>
              <p>运动旅行榜</p>
              <img src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?" alt="热销榜"/>
            </li>
            <li>
              <p>全球特色榜</p>
              <img src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?" alt="热销榜"/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
