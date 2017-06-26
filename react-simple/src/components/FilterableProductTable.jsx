import React from 'react';
import {SearchBar} from './SearchBar'

export class FilterableProductTable extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <SearchBar />
        <h1>Joselo</h1>
      </div>
    )
  }
}
