import React, { Component } from 'react';
import { ProductRow } from './ProductRow';
import { ProductCategoryRow } from './ProductCategoryRow';

export class ProductTable extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <ProductCategoryRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductCategoryRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
      </div>
    )
  }
}
