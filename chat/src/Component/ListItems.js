import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ListItems = ({ topic, callback, color, currentIndex }) => {
    console.log(currentIndex);

    return (
        <>
            {color ? (
                <ListItem
                    style={{
                        backgroundColor: "rgb(105, 154, 219)",
                    }}
                    button
                    onClick={callback}
                >
                    <ListItemText primary={topic} />
                </ListItem>
            ) : (
                <ListItem key={topic} button onClick={callback}>
                    <ListItemText primary={topic} />
                </ListItem>
            )}
        </>
    );
};

export default ListItems;
