import React, {Component} from 'react'
import './timetobuy.styl'

export default class timetobuy extends Component{
  render() {
    return (
      <div>
        <div id="TimeTobuyWrap">
          <div className="TimeHeader">
            <p className="headerleft">限时购</p>
            <div className="headerTime">
              <span>00</span>
              <b>:</b>
              <span>00</span>
              <b>:</b>
              <span>00</span>
            </div>
            <p className="headerMore">更多<i className="iconfont icon-you"></i></p>
          </div>
          <ul className="shopList">
            <li>
              <img src="http://yanxuan.nosdn.127.net/15a8238082563e743269de33a2b102c6.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                <div className="priceWrap">
                  <span className="newprice">¥</span>
                  <span className="oldprice">¥</span>
                </div>
            </li>
            <li>
              <img
                src="http://yanxuan.nosdn.127.net/15a8238082563e743269de33a2b102c6.png?imageView&thumbnail=216x216&quality=75"
                alt=""/>
              <div className="priceWrap">
                <span className="newprice">¥</span>
                <span className="oldprice">¥</span>
              </div>
            </li>
            <li>
              <img
                src="http://yanxuan.nosdn.127.net/15a8238082563e743269de33a2b102c6.png?imageView&thumbnail=216x216&quality=75"
                alt=""/>
              <div className="priceWrap">
                <span className="newprice">¥</span>
                <span className="oldprice">¥</span>
              </div>
            </li>
            <li>
              <img
                src="http://yanxuan.nosdn.127.net/15a8238082563e743269de33a2b102c6.png?imageView&thumbnail=216x216&quality=75"
                alt=""/>
              <div className="priceWrap">
                <span className="newprice">¥</span>
                <span className="oldprice">¥</span>
              </div>
            </li>
            <li>
              <img
                src="http://yanxuan.nosdn.127.net/15a8238082563e743269de33a2b102c6.png?imageView&thumbnail=216x216&quality=75"
                alt=""/>
              <div className="priceWrap">
                <span className="newprice">¥</span>
                <span className="oldprice">¥</span>
              </div>
            </li>
            <li>
              <img
                src="http://yanxuan.nosdn.127.net/15a8238082563e743269de33a2b102c6.png?imageView&thumbnail=216x216&quality=75"
                alt=""/>
              <div className="priceWrap">
                <span className="newprice">¥</span>
                <span className="oldprice">¥</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
  )
  }
  }
