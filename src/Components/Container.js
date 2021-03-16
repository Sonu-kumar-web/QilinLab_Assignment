import React from 'react';

import Tab from './Tabs'

class Container extends React.Component{
  render(){
    return (
    <div className="container">
        <Tab/>
        <Tab/>
        <Tab/>
    </div>
    )
  }
}

export default Container;
