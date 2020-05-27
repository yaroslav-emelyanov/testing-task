import React from 'react';


type PropsBtn = {
    title: string,
    fetchData: () => void
}

const ButtonAdd: React.FC<PropsBtn> = ({title, fetchData}) => {

    return (
        <button onClick={fetchData} className="btn btn-primary">{title}</button>
    )
};

export default ButtonAdd;