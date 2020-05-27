import React from 'react';

const style = {
    padding: '0 20px',
    borderRadius: '4px',
    cursor: 'pointer'
};

const ListItem: React.FC<{text: string, removePhrase: () => void }> = ({text, removePhrase}) => (
    <li className="list-group-item d-flex justify-content-between">
        <div>{ text }</div>
        <div className="text-white bg-danger cursor-pointer"
             style={style}
             onClick={removePhrase}
        >X</div>
   </li>
);

export default ListItem;