import React, { useEffect } from 'react';
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from '@syncfusion/ej2-react-grids';

import Header from '../Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUsers, selectUsers } from '../../../redux/Admin/UsersSlice.js';
import { UserCard } from './UserCard.js';

const Users = () => {
  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.EmployeeImage}
        alt="employee"
      />
      <p>{props.Name}</p>
    </div>
  );
  const employeesGrid = [
    {
      headerText: 'User',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center',
    },
    {
      field: 'Email',
      headerText: 'Email',
      width: '170',
      textAlign: 'Center',
    },

    {
      field: 'CreatedAt',
      headerText: 'CreatedAt',
      width: '135',
      format: 'yMd',
      textAlign: 'Center',
    },
    {
      headerText: 'Actions',
      width: '150',
      textAlign: 'Center',
    },
  ];
  const dispatch = useDispatch();
  const { users } = useSelector(selectUsers);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(retrieveUsers());
    };
    fetchData();
  }, [dispatch]);

  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  console.log(users);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl some">
      <Header category="Page" title="Users" />
      <GridComponent
        dataSource={users}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        {/* <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective> */}
        <ColumnsDirective>
          <ColumnDirective field="name" width="100" textAlign="Left" />
          <ColumnDirective field="email" width="100" textAlign="center" />
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};
export default Users;
