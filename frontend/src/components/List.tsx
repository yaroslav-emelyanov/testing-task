import React from 'react';
import ListItem from "./ListItem";

type ListProps = {
    phrases: Array<{id: number, text: string}>
    removePhrase(id: number): void
}

const List: React.FC<ListProps> = ({phrases, removePhrase}) => {

    if (!phrases.length) return (<div className="pt-4 pb-4">У вас пока нет добаленных фраз</div>);

    const list = phrases.map(phrase =>
        <ListItem key={phrase.id} text={phrase.text} removePhrase={() => removePhrase(phrase.id)}/>
    );

    return (
        <ul className="list-group pt-5 pb-5">
            { list }
        </ul>
    )
};

export default List;