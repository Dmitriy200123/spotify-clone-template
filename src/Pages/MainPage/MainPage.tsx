import {SideBar} from '../../Components/Sidebar/SideBar';
import {Footer} from '../../Components/Footer/Footer';
import '../PageCommonStyle.css';
import './MainPage.css';
import {TopTrackList} from '../../Components/TopTrackList/TopTrackList';
import {Header} from "../../Components/Header/Header";
import {observer} from "mobx-react-lite";

export const MainPage = observer(() => {
    return (
        <div className="page">
            <Header/>
            <SideBar/>
            <main className="pageContent">
                <h1 className='mainContent__title'>Наслаждаться музыкой!</h1>
                <h2 className='mainContent__title2'>На повторе</h2>
                <TopTrackList/>
            </main>
            <Footer/>
        </div>
    )
});