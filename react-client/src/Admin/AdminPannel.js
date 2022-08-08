// import React from 'react';
// import { simpleRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest';

// const fetchJson = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'application/json' });
//   }
//   options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
//   options.headers.set('authorization', sessionStorage.getItem('token'));
//   return fetchUtils.fetchJson('http://localhost:5000/', options);
// };

// const restClient = simpleRestClient('http://localhost:5000/', fetchJson);

// const AdminPannel = () => (
//   <Admin title="Admin Panel" basename="/admin" restClient={restClient}>
//     {/* <Resource name="post" list={PostList} edit={PostEdit} create={PostCreate} /> */}
//   </Admin>
// );

// export default AdminPannel;

// // import React, { useEffect, useState } from 'react';
// // import * as UserService from '../Services/UserService.js';
// // import { Admin, Resource, fetchUtils } from 'react-admin';
// // import { ProductList } from './Products/ProductList.js';
// // import { ProductCreate } from './Products/ProductCreate.js';
// // import { ProductEdit } from './Products/ProductEdit.js';
// // import simpleRestProvider from 'ra-data-simple-rest';

// // const fetchJson = (url, options = {}) => {
// //   if (!options.headers) {
// //     options.headers = new Headers({ Accept: 'application/json' });
// //   }
// //   options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
// //   options.headers.set('Access-Control-Allow-Origin', true);
// //   return fetchUtils.fetchJson('http://localhost:5000/', options);
// // };
// // const dataProvider = simpleRestProvider('http://localhost:5000/', fetchJson);

// // function App() {
// //   return (
// //     <Admin
// //       basename="/admin"
// //       dataProvider={simpleRestProvider(
// //         'http://localhost:5000/api/produsts/',
// //         fetchJson
// //       )}
// //     >
// //       <Resource
// //         name="products"
// //         list={ProductList}
// //         create={ProductCreate}
// //         edit={ProductEdit}
// //       />
// //       {/* <Resource
// //         name="users"
// //         list={U}
// //         create={UserCreate}
// //         edit={UserEdit}
// //       /> */}
// //     </Admin>
// //   );
// // }

// // export default App;
