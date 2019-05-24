import React,{Component} from 'react'
import './konwthingsheader.styl'



export default class konwthingsheader extends Component{
  render() {
    return(
      <div>
        <div>
          <div id="navContentkonw">
            <i className="iconfont icon-home1 gohome"></i>
            <div className="wylogo">
              <p className='activekonw'>发现</p>
              <p>甄选家</p>
            </div>
            <div>
              <i className="iconfont icon-iconfontzhizuobiaozhun22 goselect"></i>
              <i className="iconfont icon-gouwuche2 goshop"></i>
            </div>
           </div>
      </div>
      </div>

    )
  }
}
