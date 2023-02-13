import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from '../store';

function AlbumListItem({ album }) {
    const [ removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = ()=>{
        removeAlbum(album);
    }

    const header = 
    <>
        <Button className='mr-2' loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan/>
        </Button>
        {album.title}
    </>
    
    return (
        <div>
            <ExpandablePanel header={header}>
                List of photos in album
            </ExpandablePanel>
        </div>
    )
}

export default AlbumListItem
