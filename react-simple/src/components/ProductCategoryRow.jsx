import React, { Component } from 'react';

export class ProductCategoryRow extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <h1> {this.props.category} </h1>
    )
  }
}
