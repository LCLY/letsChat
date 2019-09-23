import React from "react";
import io from "socket.io-client";
//  Object
/*
msg{
    from: 'user'
    msg: 'test'
    topic :"general"
}

state:{
    topic1:{
        {msg1},{msg2},{msg3}
    }
    topic2:{
        {msg1},{msg2},{msg3}
    }
}
*/

export const CTX = React.createContext();

const initialState = {
    General: [],
    Math: [],
};

function reducer(state, action) {
    const { from, msg, topic } = action.payload;
    switch (action.type) {
        case "RECEIVE_MESSAGE":
            return {
                ...state,
                //the action
                [topic]: [
                    //adding messages onto the old message
                    ...state[topic],
                    {
                        from,
                        msg,
                    },
                ],
            };

        default:
            return state;
    }
}

let socket;
function sendChatAction(value) {
    socket.emit("chat message", value);
}
let user;
function newUsername(username) {
    user = username;
}

function getUsername() {
    return user;
}

export default function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initialState);
    if (!socket) {
        socket = io(":3001");
        socket.on("chat message", function(msg) {
            dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
        });
    }

    return (
        <CTX.Provider
            value={{ allChats, sendChatAction, user, newUsername, getUsername }}
        >
            {props.children}
        </CTX.Provider>
    );
}
