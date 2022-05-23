import {MyInfoStore} from "../../../Stores/MyInfoStore";
import './ProfileMenu.css';
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

export const ProfileMenu = observer(() => {
    useEffect(() => MyInfoStore.instance.getCurrentUserInfo(), []);

    return (
        <div className='profileMenu'>
            <div className='profileMenu__profileInfo'>
                <img src={MyInfoStore.instance.currentUser.image} className='profileInfo__userImage' alt='userImage'/>
                <p className='profileInfo__userName'>{MyInfoStore.instance.currentUser.name}</p>
            </div>
        </div>
    );
});