import {observer} from 'mobx-react-lite';
import MyCollectionHeader from '../../Components/Header/MyCollectionHeader';
import SideBar from '../../Components/Sidebar/SideBar';
import Albums from '../../Components/CollectionItems/Albums';
import Footer from '../../Components/Footer/Footer';
import {IMusicCollectionPageProps} from './IMusicCollectionPageProps';
import {CollectionType} from './CollectionType';
import Playlists from '../../Components/CollectionItems/Playlists';
import '../PageCommonStyle.css';
import './MusicCollectionPage.css';

const MusicCollectionPage = observer((props: IMusicCollectionPageProps) => {
    return <div className='page music-collection-page'>
        <MyCollectionHeader/>
        <SideBar/>
        <main className='page-content music-collection-content'>
            {props.collectionType === CollectionType.Albums && <>
                <h1 className='music-collection-content__title'>Альбомы</h1>
                <Albums/>
            </>}
            {props.collectionType === CollectionType.Playlists && <>
                <h1 className='music-collection-content__title'>Плейлисты</h1>
                <Playlists/>
            </>}
        </main>
        <Footer/>
    </div>
});

export default MusicCollectionPage;