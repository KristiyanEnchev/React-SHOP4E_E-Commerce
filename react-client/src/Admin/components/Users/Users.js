import React, { useEffect } from 'react';
import Header from '../Header.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUser,
  retrieveUsers,
  selectUsers,
} from '../../../redux/Admin/UsersSlice.js';
import { UserCard } from './UserCard.js';
import { openModal } from '../../../redux/Public/modalSlice.js';
import { DetailsUser } from './Modals/DetailsUser.js';
import { EditUser } from './Modals/EditUser.js';
import { CreateUser } from './Modals/CreateUser.js';
import { useStateContext } from '../../contexts/ContextProvider.js';
import { UserActions } from '../Helpers/UserListConstants.js';
import toast from 'react-hot-toast';

const Users = () => {
  const dispatch = useDispatch();
  const { isOpen, userAction, objectId } = useSelector((state) => state.modal);
  const { currentColor } = useStateContext();

  const deleteHandler = (e, userID, action) => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to delete this');
    if (confirm) {
      dispatch(deleteUser(userID));
    }

    toast.error('Deletion stoped');
  };

  const { users } = useSelector(selectUsers);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(retrieveUsers());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl some">
      <div style={{ display: 'flex' }}>
        <Header category="Page" title="Users" />
        <button
          style={{ backgroundColor: currentColor }}
          className="btn-add btn-admin"
          onClick={() => dispatch(openModal({ action: UserActions.Create }))}
        >
          Add new user
        </button>
      </div>
      <section className="card-admin users-container">
        {isOpen && userAction === 'details' && (
          <DetailsUser objectId={objectId} />
        )}
        {isOpen && userAction === 'edit' && <EditUser objectId={objectId} />}
        {isOpen && userAction === 'create' && <CreateUser />}

        <div className="table-wrapper">
          <table className="table">
            <thead style={{ backgroundColor: currentColor }}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user._id}>
                    <UserCard user={user} deleteHandler={deleteHandler} />
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
export default Users;
