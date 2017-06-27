import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export class FilterableProductTable extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    )
  }
}
