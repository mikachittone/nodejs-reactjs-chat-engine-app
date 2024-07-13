// /** 
//  * react-chat-engine-advanced: - The 'Light Mode' one
//  *  [] ~ MultiChatSocket - A WebSocket that lets the user connect to all of their chats.
//  *  [] ~ MultiChatWindow - The UI that lets the user type messages, see messages etc...
//  *  [] ~ useMultiChatLogic - All of the state management and Api calls that make the chat app wotk.
//  **/

// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '4e2c7228-78c0-4f27-85ed-5a48102e96e3',
//         props.user.username,
//         props.user.secret
//     );
//     return (
//         <div style={{ height: '100vh' }}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
//         </div>
//     )
// }

// export default ChatsPage;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='4e2c7228-78c0-4f27-85ed-5a48102e96e3'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage;