import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserCard } from './UserCard';
import { CreateUser } from './Modals/CreateUser';
import { DetailsUser } from './Modals/DetailsUser';
import { UserActions } from './Helpers/UserListConstants';
import { EditUser } from './Modals/EditUser';
import { Loader } from '../../../components/common/Loader/Loader.js';
import { deleteUser, retrieveUsers } from '../../../redux/Admin/UsersSlice.js';
import { openModal } from '../../../redux/Public/modalSlice.js';

export const UsersTable = () => {
  let dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.users);
  const { isOpen, userAction, userId } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(retrieveUsers());
  }, [dispatch]);

  const deleteHandler = (e, userID, action) => {
    e.preventDefault();
    openModal({ userId: userID, action: action });
    dispatch(deleteUser(userID));
  };

  if (loading) return <Loader></Loader>;

  return (
    <>
      <main className="main-admin">
        <section className="card-admin users-container">
          {isOpen && userAction === 'details' && (
            <DetailsUser userId={userId} />
          )}
          {isOpen && userAction === 'edit' && <EditUser userId={userId} />}
          {isOpen && userAction === 'create' && <CreateUser />}

          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>
                    Name
                    <svg
                      className="icon"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                      ></path>
                    </svg>
                  </th>
                  <th>
                    Email
                    <svg
                      className="icon"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                      ></path>
                    </svg>
                  </th>
                  <th>
                    Created
                    <svg
                      className="icon active-icon"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                      ></path>
                    </svg>
                  </th>
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

          <button
            className="btn-add btn-admin"
            onClick={() => dispatch(openModal({ action: UserActions.Create }))}
          >
            Add new user
          </button>
        </section>
      </main>
    </>
  );
};
