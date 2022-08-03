import React, { useEffect, useState } from 'react';
import * as UserService from '../Services/UserService.js';
import { Admin, Resource } from 'react-admin';

function App() {
  return (
    <Admin basename="/admin">
      {/* <Resource name="products" {...products} /> */}
      {/* <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      /> */}
    </Admin>
  );
}

export default App;
