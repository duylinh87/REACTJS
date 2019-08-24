import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';


class App extends React.Component {

  // co the dung thu vien react-native-snippets de viet ham khoi tao
  constructor(props) {
    super(props);
    this.state = {
      colors: 'red',
      fontSize: 15,
      data: ['red', 'green', 'blue', '#ccc', '#badc58', '#7ed6df', '#eb4d4b']
    }
    // this.onSetColor = this.onSetColor.bind(this) neu nhu khong viet arrowfuncton
  }
  onSetColor = (params) => {
    this.setState({
      colors: params
    });
  }
  onChangeSize = (value) => {
    //  console.log ( value)
    let changeValue = this.state.fontSize + value
    if (changeValue >= 8 && changeValue < 36) {
      this.setState({
        fontSize: changeValue
      });
    }
  }
  onSettingDefault = (values) => {
    if (values) {
      this.setState({
        colors: 'red',
        fontSize: 15
      });
    }
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <ColorPicker
              color={this.state.colors}
              lsColors={this.state.data}
              onReceiveColor={this.onSetColor}  // khi truyen tu con sang cha khai bao 1 props bang ham goi ham do va set lai trang thai ban dau
            />
          </div>
          <div className='col-lg-6'>
            <SizeSetting fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset
              onSettingDefault={this.onSettingDefault}
            />
          </div>
          <div className='col-lg-12'>
            <Result Rcolor={this.state.colors}
              fontSize={this.state.fontSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;




// bai hoc

// 1 Tên compomnet phải viết hoa chữ cái đầu
// trong hàm render phải có thẻ bao bọc thường lấy thẻ DIV
// Khai báo thuộc tính ta dùng {} và bên trong là 1 hàm sau đó ta xét ham đó
// this.state được khai báo trong hàm khởi tạo và được xét lại trang thái bằng this.setState
// khai bao sự kiên trong {} truyền vào 1 hàm , nếu hàm không có tham số thì bỏ dấu (), nếu hàm có tham số ta viết ES6 là {() => tên hàm(tham số)}
// onReceiveColor : nhân được màu , onSettingDefault : cài đặt mặc định ,ColorPicker : chọn màu