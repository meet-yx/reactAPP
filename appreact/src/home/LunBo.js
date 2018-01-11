/**
 * Created by hpp on 2018/1/6.
 */

import React,{Component} from 'react'
import '../home.css';

class LunBo extends Component {
    render() {
        return (
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="/images/1-1.jpg" alt="img"/>
                    </div>
                    <div className="item">
                        <img src="/images/1-2.jpg" alt="img"/>
                    </div>
                    <div className="item">
                        <img src="/images/1-3.jpg" alt="img"/>
                    </div>
                    <div className="item">
                        <img src="/images/1-4.jpg" alt="img"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LunBo