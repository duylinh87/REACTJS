import React from 'react';


class TestingComponent extends React.Component {
 
  render(){

    const { username, age, children } = this.props;
    return (
      <div className="abc">
          <p>{username}</p>
          <p>{age}</p>
          <p>{children}</p>
      </div>
    );
  }
 
}

export default TestingComponent;
