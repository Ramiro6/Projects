import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <input type="text"/>
        <input type="checkbox"/>
      </div>
    )
  }
}