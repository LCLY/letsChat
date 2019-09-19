import React from "react";

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
    general: [
        { from: "Jason", msg: "Hi 1" },
        { from: "Henry", msg: "Hi 2" },
        { from: "David", msg: "Hi 3" },
    ],
    topic2: [
        { from: "Joey", msg: "Hi 111" },
        { from: "Yang", msg: "Hi 222" },
        { from: "Hey", msg: "Hi 333" },
    ],
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

export default function Store(props) {
    const reducerHook = React.useReducer(reducer, initialState);
    return <CTX.Provider value={reducerHook}> {props.children}</CTX.Provider>;
}
