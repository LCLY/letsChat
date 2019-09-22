import React, { useState } from "react";
import {
    Paper,
    makeStyles,
    Typography,
    List,
    Button,
    TextField,
    Container,
} from "@material-ui/core";

import { CTX } from "../Store";
import ListItems from "./ListItems";

const Dashboard = () => {
    const useStyles = makeStyles(theme => ({
        root: {
            margin: "20px 100px 0 100px",
            padding: theme.spacing(3, 2),
            textAlign: "center",
            backgroundColor: "rgba(109, 218, 233, 0.671)",
        },
        flex: {
            display: "flex",
            // alignItems: "center",
        },
        topicsWindow: {
            width: "30%",
            height: "100%",
            marginRight: "1rem",
        },
        chatWindow: {
            width: "70%",
            borderLeft: "1px inset grey",
            height: "500px",
            overflowY: "auto",
        },
        chatBox: {
            width: "85%",
        },
        button: { width: "15%" },
        messengerLeft: {
            marginLeft: "30%",
            width: "40%",
            borderRadius: "5px",
        },
        messengerRight: { width: "auto" },
    }));
    const classes = useStyles();

    //CTX Store
    const { allChats, sendChatAction, user } = React.useContext(CTX);
    // console.log(user);

    const topics = Object.keys(allChats);

    // local state
    const [activeTopic, changeActiveTopic] = useState(topics[0]);
    const [textValue, changeTextValue] = useState("");
    const [color, changeColor] = useState(false);
    const [currentIndex, changeCurrentIndex] = useState(0);

    const handleKeyDown = e => {
        if (e.key === "Enter") {
            if (e.target.value !== "") {
                sendChatAction({
                    from: user,
                    msg: textValue,
                    topic: activeTopic,
                });
            }

            changeTextValue("");
        }
    };

    return (
        <div>
            <Container size="lg">
                <Paper className={classes.root}>
                    <Typography
                        variant="h4"
                        component="h4"
                        style={{
                            backgroundColor: "white",
                            padding: "24px 16px",
                        }}
                    >
                        Let's Chat
                    </Typography>
                    <Typography variant="h5" component="h5">
                        {activeTopic}
                    </Typography>
                    <div className={classes.flex}>
                        <div className={classes.topicsWindow}>
                            <List>
                                {topics.map((topic, index) => (
                                    <ListItems
                                        key={index}
                                        topic={topic}
                                        currentIndex={index}
                                        callback={e =>
                                            changeActiveTopic(
                                                e.target.innerText,
                                                changeColor(true),
                                            )
                                        }
                                        color={color}
                                    />
                                ))}
                            </List>
                        </div>

                        <div className={`${classes.chatWindow} `}>
                            {allChats[activeTopic].map((chat, index) => (
                                <div className="talk-bubble round " key={index}>
                                    <div className="chatItems chatItems__user">
                                        {chat.from}
                                    </div>

                                    <div className="chatItems">
                                        <Typography variant="body1">
                                            {chat.msg}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.flex}>
                        <div className={classes.messengerLeft}>
                            <TextField
                                label="Send a message"
                                className={classes.chatBox}
                                value={textValue}
                                onChange={e => changeTextValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <div className={classes.messengerRight}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => {
                                    if (textValue !== "") {
                                        sendChatAction({
                                            from: user,
                                            msg: textValue,
                                            topic: activeTopic,
                                        });
                                    }
                                    changeTextValue("");
                                }}
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default Dashboard;
