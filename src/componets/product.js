import React, { Component } from 'react';

class Products extends Component{ 
    render(){
        return (
           <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <a href="#" className="thumbnail">
                        <img src="http://file.vforum.vn/hinh/2015/12/hinh-anh-meo-de-thuong-nhat-qua-dat-58.jpg" alt="lol" />
                        <div className="caption">
                             <button type="button" class="btn btn-success">Buy</button> 
                             <br />
                             <p>100$</p>
                        </div>
                    </a>
                        </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <a href="#" className="thumbnail">
                        <img src="http://file.vforum.vn/hinh/2015/12/hinh-anh-meo-de-thuong-nhat-qua-dat-58.jpg" alt="lol" />           
                        <div className="caption">
                             <button type="button" class="btn btn-success">Buy</button> 
                             <br />
                             <p>100$</p>
                        </div>    
                    </a>
                </div>    
           </div>
        )
    }
}

export default Products;