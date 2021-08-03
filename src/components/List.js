import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

const List = (props) => {
    
    return ( 
        <div>
            <Button onClick={(() =>{props.onSelect(props.id)})}><RemoveIcon /></Button>
            <li>{props.text}</li>
        </div>
     );
}
 
export default List;
