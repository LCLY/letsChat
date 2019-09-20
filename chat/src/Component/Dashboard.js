import React, { useState } from "react";
import {
    Paper,
    makeStyles,
    Typography,
    List,
    ListItem,
    ListItemText,
    Chip,
    Button,
    TextField,
    Container,
} from "@material-ui/core";

import { CTX } from "../Store";

const Dashboard = () => {
    const useStyles = makeStyles(theme => ({
        root: {
            margin: "100px",
            padding: theme.spacing(3, 2),
            textAlign: "center",
        },
        flex: {
            display: "flex",
            alignItems: "center",
        },
        topicsWindow: {
            width: "30%",
            height: "300px",
            borderRight: "1px inset grey",
        },
        chatWindow: { width: "70%", height: "300px", padding: "20px" },
        chatBox: {
            width: "85%",
        },
        button: { width: "15%" },
        messengerLeft: {
            marginLeft: "25%",
            width: "auto",
            backgroundColor: "rgba(211, 211, 211, 0.616)",
            borderRadius: "5px",
            paddingBottom: "1rem",
        },
        messengerRight: { width: "auto" },
    }));
    const classes = useStyles();

    //CTX Store
    const [allChats] = React.useContext(CTX);
    console.log({ allChats });
    const topics = Object.keys(allChats);

    // local state
    const [activeTopic, changeActiveTopic] = useState(topics[0]);
    const [textValue, changeTextValue] = useState("");

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Let's chat!
                </Typography>
                <Typography variant="h5" component="h5">
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {topics.map(topic => (
                                <ListItem
                                    key={topic}
                                    button
                                    onClick={e =>
                                        changeActiveTopic(e.target.innerText)
                                    }
                                >
                                    <ListItemText primary={topic} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {allChats[activeTopic].map((chat, index) => (
                            <div className={classes.flex} key={index}>
                                <Chip
                                    label={chat.from}
                                    className={classes.chip}
                                />
                                <Typography
                                    variant="subtitle1"
                                    component="subtitle1"
                                >
                                    {chat.msg}
                                </Typography>
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
                        />
                    </div>
                    <div className={classes.messengerRight}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Dashboard;
