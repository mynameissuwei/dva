import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd'
import ProductList from '../components/ProductList';
import axios from 'axios';




const Products = ({dispatch,products}) => {

  function handleDelete(id) {
    dispatch({
      type: 'products/add',
      payload: {age:14},
    });
  }


  console.log(products);
  return (
    <div>
      <Button type="primary" onClick={handleDelete}>add</Button>
    </div>
  );
};


export default connect(
  ({products})=> ({
      products
    })
  )(Products);