import React, {Component} from 'react'
import './homenav.styl'
import BScroll from 'better-scroll'
// import {connect} from 'react-redux'
// import {navList} from '../../../../redux/actions'
import {reqhomeData} from '../../../../api'

export default class Homenav extends Component {
  state = {
    isShow: false,
    navlist: []
  }
  getDataHome = (async () => {
    const result = await reqhomeData()
    if (result.code === 0) {
      this.setState({
        navlist: result.data.kingKongModule.kingKongList
      })
    }
  })

  componentDidMount() {
    new BScroll('.warp', {
      scrollX: true,
      click: true
    })
    this.getDataHome()
  }

  mskShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const {navlist} = this.state
    let display = this.state.isShow ? 'block' : 'none'
    let bianhuan = this.state.isShow ? 'iconfont icon-xiala- icon-active' : 'iconfont icon-xiala- icon-leave'
    return (
      <div className="warp">
        <ul className="HomeNav">
          <li className="activeHeader">推荐</li>
          {
            navlist.map((item, index) =>{
              return (
                <li key={index}>{item.text}</li>
              )
            })
          }
          <li></li>
        </ul>
        <div className={bianhuan} id="toggle" onClick={this.mskShow}></div>
        <div className="iconfontMask"></div>
        <span className="mask" style={{display}}>
          <div>
            <p>全部频道</p>
              <ul>
                <li>推荐</li>
                <li>居家生活</li>
                <li>美食酒水</li>
                <li>个护情节</li>
                <li>母婴亲子</li>
                <li>运动旅行</li>
                <li>数码家电</li>
                <li>服饰鞋包</li>
                <li>全球特色</li>
              </ul>
          </div>
        </span>
      </div>
    )
  }
}




