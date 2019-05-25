import React, {Component} from 'react'
import './homegoods.styl'
import PropTypes from 'prop-types'

export default class homegoods extends Component {

  static PropType = {
    kingKongList: PropTypes.array.isRequired
  }

  render() {
    const {kingKongList} = this.props
    return (
      <div>
        <div>
          <ul id="HomeGoodsUL">
            {
              kingKongList.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item.picUrl} alt=""/>
                    <span>{item.text}</span>
                  </li>
                )
              })
            }


          </ul>
          <div id="NewPeople">
            <div className="textwrap">
              <hr/>
              <span>新人专享</span>
              <hr/>
            </div>
            <div className="gitwrap">
              <div className="newgift">
                <p>新人专享礼包</p>
                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""/>
              </div>
              <div className="goupwrap">
                <div className="welfare">
                  <p>福利社</p>
                  <span>今日特价</span>
                  <img
                    src="http://yanxuan.nosdn.127.net/0e920a3a6dfc6ae39438e71db0f2987a.png?imageView&thumbnail=200x200&quality=75"
                    alt=""/>
                </div>
                <div className="group">
                  <p>新人拼团</p>
                  <span>1元起包邮</span>
                  <img
                    src="http://yanxuan.nosdn.127.net/8ea31d3ee1482b67ed7102332019e0da.png?imageView&thumbnail=200x200&quality=75"
                    alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
