import { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
    const [ array, setArray] = useState([]);
    useEffect(() => {
        const resultString = localStorage.getItem('array');
        const ressult = JSON.parse(resultString) || [];
        setArray(ressult);
    }, []);    

    return (
        <div className="container" style={{'marginTop': '80px'}}>
            <h2 className="text-center">게시판</h2>
            <a href="/create" className="btn btn-success">글작성</a>
            <div className="list-group mt-3">
                {
                    array.map(row => (
                        <a className="list-group-item list-group-item-action"  key={row.id} href={"/detail/" + row.id}>{row.title}</a>
                    ))
                }
              
            </div>
        </div>
    );
}
export default List;