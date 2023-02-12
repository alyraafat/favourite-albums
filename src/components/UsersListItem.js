import { GoTrashcan } from 'react-icons/go'
import { removeUser } from '../store'
import useThunk from '../hooks/use-thunk';
import Button from '../components/Button';
import { Fragment } from 'react';
import ExpandablePanel from './ExpandablePanel';
function UsersListItem({ user }) {
    const [doRemoveUser,isLoading,error] = useThunk(removeUser);

    const handleClick = ()=>{
        doRemoveUser(user);
    }
    const header = <Fragment>
        <Button className='mr-3' onClick={handleClick} loading={isLoading}>
            <GoTrashcan/>
        </Button>
        {error&&<div>Error deleting user ...</div>}
        {user.name}
    </Fragment>
    return (
        <ExpandablePanel header={header}>
            Content!!!
        </ExpandablePanel>
    )
}

export default UsersListItem
