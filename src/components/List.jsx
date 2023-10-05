import React, {useEffect, useState} from 'react';
import {api} from "../common/api/ApiClient";

const List = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const data = await api('/api', "GET", {})
        setData(data)
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <div className="list_box">
            <div className="title">
                <p>Id</p>
                <p>Name</p>
                <p>Desc</p>
            </div>
            {data.map((el)=>(
                <div key={el.id} className="flex_row">
                    <p className="text">{el.id}</p>
                    <p className="text">{el.name}</p>
                    <p className="text">{el.description}</p>
                </div>
            ))}
        </div>
    );
};

export default List;