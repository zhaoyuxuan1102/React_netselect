import React, {Component} from 'react'
import './newshop.styl'
import PropTypes from 'prop-types'

export default class NewShop extends Component {
  static PropType = {
    newItemList: PropTypes.array.isRequired
  }


  render() {
    const {newItemList} = this.props
    return (
      <div>
        <div>
          <div id="popularity">
            <div className="topTitle">
              <p className="HotTop">新品首发</p>
              <p className="more">更多<i className="iconfont icon-you"></i></p>
            </div>
            <div className="shopdetails">
              <div>
                <img src={newItemList.length ? newItemList[0].scenePicUrl :''} alt=""/>
                <div><span>xxxxx</span><i>¥</i>
                </div>
                <div className="bottomText">好货内部价</div>
              </div>
              <div>
                <img src={newItemList.length ? newItemList[0].scenePicUrl :''} alt=""/>
                <div><span>xxxx</span><i>¥</i>
                </div>
                <div className="bottomText">520特惠</div>
              </div>
              <div>
                <img src={newItemList.length ? newItemList[5].scenePicUrl :''} alt=""/>
                <div><span>xxxx</span><i>¥</i>
                </div>
                <div className="bottomText">每满199减30券</div>
              </div>
            </div>

            <div className="shopdetails">
              <div>
                <img src={newItemList.length ? newItemList[4].scenePicUrl :''} alt=""/>
                <div><span>xxxxx</span><i>¥xxxxxx</i>
                </div>
                <div className="bottomText">特价</div>
              </div>
              <div v-if="newItemList.length">
                <img src={newItemList.length ? newItemList[5].scenePicUrl :''} alt=""/>
                <div><span>xxxxx</span><i>¥xxxxxx</i>
                </div>
                <div className="bottomText">每满99减15券</div>
              </div>
              <div v-if="newItemList.length">
                <img src={newItemList.length ? newItemList[6].scenePicUrl :''} alt=""/>
                <div><span>xxxxxx</span><i>¥xxxxxx</i>
                </div>
              </div>

            </div>
          </div>
          <div id="shopKing">
            <div>
              <p>性价比之王</p>
              <span>品质惊人的良心替代</span>
              <div>
                <img
                  src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$0.0.2.0" alt='pic'/>
                <img
                  src="https://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$0.0.2.1" alt='pic'/>
              </div>
            </div>
            <div>
              <p>无限回购榜单</p>
              <span>快消日用超值5.9元起</span>
              <div>
                <img
                  src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$1.0.2.0" alt='pic'/>
                <img
                  src="https://yanxuan.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$1.0.2.1" alt='pic'/>
              </div>
            </div>
            <div>
              <p>断货补单王</p>
              <span>严选必买爆款</span>
              <div>
                <img
                  src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$2.0.2.0" alt='pic'/>
                <img
                  src="https://yanxuan.nosdn.127.net/6463c70f8b50bd14fd49d1f5903c06ec.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$2.0.2.1" alt='pic'/>
              </div>
            </div>
            <div>
              <p>双料口碑爆品榜</p>
              <span>高销量高好评好物</span>
              <div>
                <img
                  src="https://yanxuan.nosdn.127.net/bbdbfc9d084e0188af383ff9255a4cc1.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$3.0.2.0" alt='pic'/>
                <img
                  src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&amp;thumbnail=150x150&amp;quality=75"
                  className="pic" data-reactid=".0.4.8.$3.0.2.1" alt='pic'/>
              </div>
            </div>

          </div>
          <div className="indexFloor">
            <div className="banner"></div>
            <div className="swiperlistContent">
              <ul className="swiperlist">
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="indexFloor">
            <div className="banner"></div>
            <div className="swiperlistContent">
              <ul className="swiperlist">
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="indexFloor">
            <div className="banner"></div>
            <div className="swiperlistContent">
              <ul className="swiperlist">
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
                <li>
                  <div className="swpic">
                    <img
                      src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""/>
                  </div>
                  <div>
                    <p>韩国制造 超声波去角质导入美容仪</p>
                    <div>
                      <span className="newpice">¥199</span>
                      <span className="oldpice">¥1269</span>
                    </div>
                  </div>
                  <span className="bottomTitle">好货内部价</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
