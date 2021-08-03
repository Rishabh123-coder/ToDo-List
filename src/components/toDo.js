import React, { useState } from 'react';
import List from './List'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        width: 400,
        height: '100%',
        textAlign: "center",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    pos: {
        marginBottom: 12,
    },
});

const ToDoList = () => {
    const classes = useStyles();
    const [inputList, setInputList] = useState("");
    const [item, setItem] = useState([]);

    const inputEvent = (event) => {
        setInputList(event.target.value);
    };

    const itemsList = () => {
        setItem((prevItem) => {
            return [...prevItem, inputList];
        });
        setInputList("");
    };

    const deleteList = (id) => {
        setItem((prevItem) => {
            return prevItem.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <center>
            <Card className={classes.root}>
                <center>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Input type="text" placeholder="Enter Your Item" value={inputList} onChange={inputEvent} />
                    <Button onClick={itemsList} className="addButton"><AddIcon /></Button>
                    <ol>
                        {item.map((itemValue, index) => {
                            return <List text={itemValue} key={index} id={index} onSelect={deleteList} />
                        })}
                    </ol>
                </CardContent>
                </center>
            </Card>
            </center>
        </>
    );
}

export default ToDoList;