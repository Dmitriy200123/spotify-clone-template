import {MessageStore} from "../../Stores/MessageStore";
import {Message} from "./Message/Message";
import './Messages.css';
import {observer} from "mobx-react-lite";

export const Messages = observer(() => {
    const messages = MessageStore.instance.messages.map(message => <Message key={message.id} message={message}/>);

    return <div className='messages'>
        {messages}
    </div>
});