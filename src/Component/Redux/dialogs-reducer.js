import state from "./State";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialosData: [
        {name: "Dimasdadas", id: 1},
        {name: "Andr", id: 2},
        {name: "Sveta", id: 3},
        {name: "Andr", id: 4},
    ],
    messageData: [
        {name: "Hi, my frend", id:1},
        {name: "Im ok", id:2},

    ],
    newMessageBody: "Let my down",
}
const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
        let stateCopy = JSON.parse(JSON.stringify(state))
        stateCopy.newMessageBody = action.newText;
        return stateCopy;
    }
        case SEND_MESSAGE : {
            let body = state.newMessageBody;
            let stateCopy = JSON.parse(JSON.stringify(state))
            stateCopy.messageData.push({name: body, id: 6})
            stateCopy.newMessageBody = "";
            return stateCopy
        }
        default:
            return  state;
}
}
export const updateNewMessageBodyCreator = (body) => {

    return(
        {type:UPDATE_NEW_MESSAGE_BODY , newText: body}
    )
}
export const sendMessageCreator = () => {

    return(
        {type: SEND_MESSAGE}
    )
}
export default dialogsReducer;