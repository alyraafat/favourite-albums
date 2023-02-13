import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from '../store';
import PhotosList from "./PhotosList";

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
                <PhotosList album={album}/>
            </ExpandablePanel>
        </div>
    )
}

export default AlbumListItem
