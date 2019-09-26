import React, { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { CTX } from "../Store";
const Input = () => {
    //CTX Store
    const { newUsername } = React.useContext(CTX);

    const useStyles = makeStyles(theme => ({
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    const [username, changeUsername] = useState("");
    return (
        <TextField
            label="Username"
            className={classes.textField}
            value={username}
            onChange={e => {
                changeUsername(e.target.value);
            }}
            onBlur={newUsername(username)}
            margin="normal"
            variant="outlined"
        />
    );
};

export default Input;
