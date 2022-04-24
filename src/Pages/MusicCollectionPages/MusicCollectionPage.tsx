import {observer} from 'mobx-react-lite';
import {MyCollectionHeader} from '../../Components/Header/MyCollectionHeader';
import {SideBar} from '../../Components/Sidebar/SideBar';
import {Albums} from '../../Components/ItemsCollection/Albums';
import {Footer} from '../../Components/Footer/Footer';
import {IMusicCollectionPageProps} from './IMusicCollectionPageProps';
import {CollectionType} from './CollectionType';
import {Playlists} from '../../Components/ItemsCollection/Playlists';
import '../PageCommonStyle.css';
import './MusicCollectionPage.css';

export const MusicCollectionPage = observer((props: IMusicCollectionPageProps) => {
    return <div className='page'>
        <MyCollectionHeader/>
        <SideBar/>
        <main className='pageContent'>
            {props.collectionType === CollectionType.Albums && <>
                <h1 className='musicCollectionContent__title'>Альбомы</h1>
                <Albums/>
            </>}
            {props.collectionType === CollectionType.Playlists && <>
                <h1 className='musicCollectionContent__title'>Плейлисты</h1>
                <Playlists/>
            </>}
        </main>
        <Footer/>
    </div>
});