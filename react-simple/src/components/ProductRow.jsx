import React, { Component } from 'react';

export class ProductRow extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <h5>{this.props.product.name}</h5>
    )
  }
}
