import { GoTrashcan } from 'react-icons/go'
import { removeUser } from '../store'
import useThunk from '../hooks/use-thunk';
import Button from '../components/Button';
function UsersListItem({ user }) {
    const [doRemoveUser,isLoading,error] = useThunk(removeUser);

    const handleClick = ()=>{
        doRemoveUser(user);
    }
    return (
        <div className='mb-2 border rounded'>
          <div className='flex p-2 justify-between items-center cursor-pointer'>
            <div className='flex flex-row items-center justify-between'>
                <Button className='mr-3' onClick={handleClick} loading={isLoading}>
                    <GoTrashcan/>
                </Button>
                {error&&<div>Error deleting user ...</div>}
                {user.name}
            </div>
          </div>
        </div>
    )
}

export default UsersListItem
