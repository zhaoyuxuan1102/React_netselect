import React,{Component} from 'react'
import './brand.styl'

export default class brand extends Component{

  render() {
    return (
      <div>
        <div id="BrandWrap">
          <div className="topText">
            <p className="bulid">品牌制造商直供</p>
            <p className="more">更多<i className="iconfont icon-you"></i></p>
          </div>
          <ul className="bulidWrap">
            <li>
              <p>海外制造商</p>
              <span>9.9元起</span>
            </li>
            <li>
              <p>CK制造商</p>
              <span>29.9元起</span>
            </li>
            <li>
              <p>新秀丽制造商</p>
              <span>34.9元起</span>
            </li>
            <li>
              <p>Nine West制造商</p>
              <span>219元起</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
