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
            {data.map((el)=>(
                <div key={el.id} className="flex_row">
                    <p>{el.id}</p>
                    <p>{el.name}</p>
                    <p>{el.description}</p>
                </div>
            ))}
        </div>
    );
};

export default List;