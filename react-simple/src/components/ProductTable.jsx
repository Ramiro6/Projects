import React, { Component } from 'react';
import { ProductRow } from './ProductRow';
import { ProductCategoryRow } from './ProductCategoryRow';

export class ProductTable extends Component {
  constructor() {
    super()
  }

  render(){
    let rows = []
    let last_category = null

    if(this.props.products != null ){
      this.props.products.forEach((product) => {
        console.log(product);
        if (product.category != last_category)
          rows.push(<ProductCategoryRow category={product.category}
            key={product.category}/>)
          rows.push(<ProductRow product={product}
            key={product.name} />)
        last_category = product.category
      })
    } else if (this.props.filter != null && this.props.products != null) {
      this.props.products.forEach((product) => {
        let filter = this.props.filter
        if (product.name.indexOf(filter) > -1 ) {
          if(product.category != last_category)
              rows.push(<ProductCategoryRow category={product.category}
                key={product.category}/>)
                last_category = product.category
        }
      })
    }
    else {
      rows.push(<h1>Loading</h1>)
    }
    return(
      <div>
        { rows }
      </div>
    )
  }
}
