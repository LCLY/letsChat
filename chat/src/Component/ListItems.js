import React, { useState } from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ListItems = ({ topic, callback, currIndex, topicIndex }) => {
    return (
        <>
            {currIndex === topicIndex ? (
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
                <ListItem
                    style={{
                        backgroundColor: "",
                    }}
                    button
                    onClick={callback}
                >
                    <ListItemText primary={topic} />
                </ListItem>
            )}
        </>
    );
};

export default ListItems;
