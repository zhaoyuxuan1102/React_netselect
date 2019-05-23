import React, {Component} from 'react'
import CommonHeader from '../../components/CommonHeader/commonheader'
import CommonFooter from '../../components/CommonFooter/commonfooter'
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

export default class Admin extends Component {

  componentDidMount() {
    new BScroll('.warrp', {
      scrollY: true
    })
  }

  render() {
    return (
      <div>
        <CommonHeader/>
        <HomeNav/>
        <div className='warrp'>
          <div>
            <HomeSwiper/>
            <HomeGoods/>
            <Brand/>
            <HotCategory/>
            <Popularity/>
            <TimeTobuy/>
            <NewShop/>
          </div>
        </div>
        <CommonFooter/>
      </div>
    )
  }
}

