import {makeObservable, observable, action} from 'mobx'
import {UsersTransport} from "../Services/UsersTransport";
import {IUser} from "./Models/IUser";

class MyInfoStore {
    public currentUser: IUser = {
        id: '',
        name: '',
        image: ''
    };

    public constructor() {
        makeObservable(this, {
            currentUser: observable,
            getCurrentUserInfo: action,
            setCurrenUser: action
        });
    }

    public getCurrentUserInfo() {
        UsersTransport.getCurrentUser().then(userInfo => this.setCurrenUser({
            id: userInfo.id,
            name: userInfo.display_name,
            image: userInfo.images[0].url,
        }))
    }

    public setCurrenUser(user: IUser) {
        this.currentUser = user;
    }
}

const MyInfoStoreImpl = new MyInfoStore();
export default MyInfoStoreImpl;