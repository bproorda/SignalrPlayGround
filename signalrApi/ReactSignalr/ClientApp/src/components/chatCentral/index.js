import React, {useContext} from 'react';
import GeneralChat from '../generalChat';
import PrivateChat from '../privateChat';
import GroupChat from '../groupChat';
import HubContext from '../../contexts/hubContext';
import UserList from '../userList'
import ChannelList from '../channelList'


export default function ChatCentral(props) {

    const { windows, currentWindow } = useContext(HubContext);

    //const [message, setMessage] = useState("");

const whichChatComponent = (window, index) => {
    if(window.type === "General") {
        return <GeneralChat Zindex={window.Zindex} key={index} />
    } else if (window.type === "Private") {
        return <PrivateChat name={window.name} Zindex={window.Zindex} key={index}/>
    } else if (window.type === "Group") {
        return <GroupChat name={window.name} Zindex={window.Zindex} key={index}/>
    }
};


    return (
        <div>
            {windows.filter(window => window.name === currentWindow.name).map((window, index) => {
               return whichChatComponent(window, index)
            })}
            <span className="theList">
                <ChannelList />
                <UserList />
            </span>
        </div>
    )
}