import React,{Component} from 'react'
import './homeswiper'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './homeswiper.styl'

export default class homeswiper extends Component{

  componentDidMount() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
      },
      type: 'custom',
      loop: true,
      autoplay:true,
      lazy:true,
      loadingClass:'swiper-lazy-loading'
    })
  }
  render() {
    return (
      <div id="swiperWrap">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/2bbc93483e59a3f83279ef04be0ae4bf.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt='pic' />
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/be19ff539948b1a9a07b4003b742bde1.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt='pic'/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/383af1b21d93999da433afd7507cd380.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt='pic'/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/c1a535de9ea67a5d34d5c08fbc79de60.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt='pic'/>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <ul className="recommend">
          <li><i className="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>网易自营品牌</li>
          <li><i className="iconfont icon-dunpai1"></i>30天无忧退货</li>
          <li><i className="iconfont icon-50"></i>48小时快速退款</li>
        </ul>
      </div>
    )
  }
}
