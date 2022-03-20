import MyInfoStoreImpl from "../../../Stores/MyInfoStore";
import './ProfileMenu.css';
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const ProfileMenu = observer(() => {
    useEffect(() => MyInfoStoreImpl.getCurrentUserInfo(), []);

    return <>
        <div className='profile-menu'>
            <div className='profile-menu__profile-info'>
                <img src={MyInfoStoreImpl.currentUser.image} className='profile-info__user-image' alt='userImage'/>
                <p className='profile-info__user-name'>{MyInfoStoreImpl.currentUser.name}</p>
            </div>
        </div>
    </>
});

export default ProfileMenu;