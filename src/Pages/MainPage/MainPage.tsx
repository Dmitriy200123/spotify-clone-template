import SideBar from '../../Components/Sidebar/SideBar';
import Footer from '../../Components/Footer/Footer';
import '../PageCommonStyle.css';
import './MainPage.css';
import TopTrackList from '../../Components/TopTrackList/TopTrackList';
import Header from "../../Components/Header/Header";
import {observer} from "mobx-react-lite";

const MainPage = observer(() => {
    return (
        <div className="page main-page">
            <Header/>
            <SideBar/>
            <main className="page-content main-content">
                <h1 className='main-content__title'>Наслаждаться музыкой!</h1>
                <h2 className='main-content__title2'>На повторе</h2>
                <TopTrackList/>
            </main>
            <Footer/>
        </div>
    )
});

export default MainPage;