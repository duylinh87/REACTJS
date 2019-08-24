import React from 'react';


class SizeSetting extends React.Component {

  changeSize(value) {
    this.props.onChangeSize(value)
  }
    render() {
        return (
            <div className="card">
            <div className="card-header bg-warning ">Size: {this.props.fontSize}</div>
            <div className="card-body">
              <button type="button" className="btn btn-info mr-3" onClick = {()=> this.changeSize(2)}>Tăng</button>
              <button type="button" className="btn btn-info" onClick = {()=> this.changeSize(-2)}>Giảm</button>

            </div>
          </div>

        );
    }
}
            
 export default SizeSetting;
  