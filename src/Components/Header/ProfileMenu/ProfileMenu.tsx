import MyInfoStoreImpl from "../../../Stores/MyInfoStore";
import './ProfileMenu.css';
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const ProfileMenu = observer(() => {
    useEffect(() => MyInfoStoreImpl.getCurrentUserInfo(), []);

    return <>
        <div className='profileMenu'>
            <div className='profileMenu__profileInfo'>
                <img src={MyInfoStoreImpl.currentUser.image} className='profileInfo__userImage' alt='userImage'/>
                <p className='profileInfo__userName'>{MyInfoStoreImpl.currentUser.name}</p>
            </div>
        </div>
    </>
});

export default ProfileMenu;