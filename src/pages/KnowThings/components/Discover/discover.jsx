import React, {Component} from 'react'
import BScroll from 'better-scroll'
import './discover.styl'
import LeftRightShow from './components/leftrightShow/leftrightShow'
import UpdownShow from './components/UpdownShow/updownshow'
import ScrollShow from './components/scrollShow/scrollShow'
export default class discover extends Component {
  componentDidMount() {
    new BScroll('.navwrap', {
      scrollX: true
    })
    new BScroll('.find_container', {
      scrollY: true
    })
  }

  render() {
    return (
      <div>
        <div id="discover">
          <div className="navwrap">
            <ul className="navlist">
              <li>推荐</li>
              <li>好货内部价</li>
              <li>回购榜</li>
              <li>晒单</li>
              <li>开发者日记</li>
              <li>达人</li>
              <li>上新</li>
              <li>HOME</li>
            </ul>
          </div>
          <div className="find_container">
            <div>
              <ul>
                <li>
                  <UpdownShow/>
                  <LeftRightShow/>
                  <ScrollShow/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
