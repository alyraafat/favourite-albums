import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button'
import useThunk from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';


function UsersList() {
  //isLoading, data, error
  const { data } = useSelector((state) => {
    return state.users;
  });
  
  const [doFetchUsers,isLoadingUsers,loadinUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  useEffect(() => {
    //dispatch(fetchUsers());
    doFetchUsers();
  }, [doFetchUsers]);//[dispatch]);

  const handleUserAdd = ()=>{
    //dispatch(addUser())
    doCreateUser();
  }

  let content;
  //isLoading
  if (isLoadingUsers) {
    content = <Skeleton times={6} className='h-10 w-full'/>;
  }
  //error
  else if (loadinUsersError) {
    content = <div>Error fetching data...</div>;
  }
  else {
    content = data.map((user)=>{
      return <UsersListItem user={user} key={user.id}/>
    })
  }
  
  return <div>
    <div className='flex flex-row justify-between items-center m-3'>
      <h1 className='m-2 text-xl'>
        Users
      </h1>
      <Button loading={isCreatingUser} onClick={handleUserAdd}>
        + Add User
      </Button>
      {creatingUserError&&'Error creating user ....'}
      
    </div>
    {content}
  </div>;
}

export default UsersList;
