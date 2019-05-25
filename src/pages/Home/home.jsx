import React, {Component} from 'react'
import CommonHeader from '../../components/CommonHeader/commonheader'
import HomeNav from './components/HomeNav/homenav'
import HomeSwiper from './components/HomeSwiper/homeswiper'
import HomeGoods from './components/HomeGoods/homegoods'
import Brand from './components/Brand/brand'
import HotCategory from './components/HotCategory/hotcategory'
import Popularity from './components/Popularity/popularoty'
import TimeTobuy from './components/TimeTobuy/timetobuy'
import NewShop from './components/NewShop/newshop'
import BScroll from 'better-scroll'
import './home.styl'
import {reqhomeData} from '../../api'

export default class Admin extends Component {

  state = {
    kingKongList: [],
    itemList:[],
    newItemList:[]
  }

 async GetHomeData() {
    const result = await reqhomeData()
    if (result.code === 0) {
      this.setState({
        kingKongList: result.data.kingKongModule.kingKongList,
        itemList:result.data.flashSaleModule.itemList,
        newItemList:result.data.newItemList
      })
    }
  }

  componentDidMount() {
    new BScroll('.warrp', {
      scrollY: true
    })
    this.GetHomeData()
  }

  render() {
    const {kingKongList,itemList,newItemList} = this.state
    console.log(kingKongList)
    return (
      <div>
        <CommonHeader/>
        <HomeNav/>
        <div className='warrp'>
          <div>
            <HomeSwiper/>
            <HomeGoods kingKongList={kingKongList}></HomeGoods>
            <Brand/>
            <HotCategory/>
            <Popularity/>
            <TimeTobuy itemList={itemList}></TimeTobuy>
            <NewShop newItemList={newItemList}/>
          </div>
        </div>
      </div>
    )
  }
}

