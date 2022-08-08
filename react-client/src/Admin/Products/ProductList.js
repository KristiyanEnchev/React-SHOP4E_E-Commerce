import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';
import React, { useEffect, useState } from 'react';
import * as productService from '../../Services/productService.js';

export const ProductList = ({ products }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const some = async () => {
  //     const productsData = await productService.getProducts();
  //     setProducts(productsData);
  //   };
  //   some();
  // }, []);

  // console.log(products);

  return (
    <List {...products}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <EditButton basePath="/product" />
        <DeleteButton basePath="/product" />
      </Datagrid>
    </List>
  );
};
