import React from 'react';


class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
//   showColor = (color) => ({
//     background: color
//   })
// }   // ham nay co tac dung là trả về màu nền  css của các thẻ span sau khi đã dc duyệt qua mảng màu
setActiveColor(color) {
  this.props.onReceiveColor(color)
}
render() {
  let elmColors = this.props.lsColors.map((color, index) => {
    return (
      <span key={index}
        style={{background: color}}  // muốn viết thuoc tính trong react phải viet thông qua hàm và return về các thuộc tính css
        className={this.props.color === color ? 'active' : ""}
        onClick={() => this.setActiveColor(color)}
      >
      </span>
    )
  }
  )
  return (
    <div className="card">
      <div className="card-header bg-warning">
        Color picker
                </div>
      <div className="card-body">
        {elmColors}
      </div>
    </div>
  );
}

}

export default ColorPicker;
