import React, {Component} from 'react'
import './timetobuy.styl'
import PropTypes from 'prop-types'


export default class timetobuy extends Component{
  static PropType={
    itemList:PropTypes.array.isRequired
  }


  render() {
    const {itemList}=this.props
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
            {
              itemList.map((item,index)=>{
                return(
                  <li key={index}>
                    <img src={item.picUrl} alt=""/>
                    <div className="priceWrap">
                      <span className="newprice">{item.activityPrice}¥</span>
                      <span className="oldprice">{item.originPrice}¥</span>
                    </div>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </div>
  )
  }
  }
