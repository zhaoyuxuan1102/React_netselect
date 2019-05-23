import React,{Component} from 'react'
import './homenav.styl'
import BScroll from 'better-scroll'

export default class homenav extends Component{

    componentDidMount() {
      new BScroll('.warp', {
        scrollX: true
      })
    }

  render() {
    return(
        <div className="warp">
          <ul className="HomeNav">
            <li className="active">推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个护清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>全球特色</li>
            <li></li>
          </ul>
          <div  className="iconfont icon-xiala-" id="toggle"></div>
          {/*<div  className="iconfontMask"></div>*/}
          {/*<span className="mask" v-if="isShow">*/}
            {/*<div>*/}
              {/*<p>全部频道</p>*/}
              {/*<ul>*/}
                {/*<li>推荐</li>*/}
                {/*<li>居家生活</li>*/}
                {/*<li>美食酒水</li>*/}
                {/*<li>个护情节</li>*/}
                {/*<li>母婴亲子</li>*/}
                {/*<li>运动旅行</li>*/}
                {/*<li>数码家电</li>*/}
                {/*<li>服饰鞋包</li>*/}
                {/*<li>全球特色</li>*/}
                {/*</ul>*/}
            {/*</div>*/}
        {/*</span>*/}
    </div>
    )
  }
}
