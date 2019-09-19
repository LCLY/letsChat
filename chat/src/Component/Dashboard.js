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

const Dashboard = () => {
    const useStyles = makeStyles(theme => ({
        root: {
            margin: "50px",
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
        chatBox: { width: "85%" },
        button: { width: "15%" },
    }));
    const classes = useStyles();

    const [textValue, changeTextValue] = useState("");

    return (
        <div>
            <Container maxWidth="sm">
                <Paper className={classes.root}>
                    <Typography variant="h4" component="h4">
                        Let's chat!
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Paper can be used to build surface or other elements for
                        your application.
                    </Typography>
                    <div className={classes.flex}>
                        <div className={classes.topicsWindow}>
                            <List>
                                {["topic", "yes", "whee", "oh no"].map(
                                    topic => (
                                        <ListItem key={topic} button>
                                            <ListItemText primary={topic} />
                                        </ListItem>
                                    ),
                                )}
                            </List>
                        </div>
                        <div className={classes.chatWindow}>
                            {[{ from: "user", msg: "hello" }].map(
                                (chat, index) => (
                                    <div className={classes.flex} key={index}>
                                        <Chip
                                            label="Chat from"
                                            className={classes.chip}
                                        />
                                        <Typography variant="p" component="p">
                                            Let's chat!
                                        </Typography>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                    <div className={classes.flex}>
                        <TextField
                            label="Send a message"
                            className={classes.chatBox}
                            value={textValue}
                            onChange={e => changeTextValue(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Primary
                        </Button>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default Dashboard;
