import React from 'react';


class Result extends React.Component {
    setColor () {
          return (
              {
                  color : this.props.Rcolor,
                  borderColor : this.props.Rcolor,
                  fontSize :this.props.fontSize
              }
          )
    }

    render() {
        return (
            <div>
               <p>Color : {this.props.Rcolor} - FontSize :{this.props.fontSize}</p> 
               <div id='content' style = {this.setColor()}>     
                  Hãy trao cho anh
                </div>
            </div>
        );
    }
}
            
 export default  Result ;
  