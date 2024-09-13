import { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
    // axios 사용하여 백단에서 데이터 가져오기 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const handleChange = (e) => {
        const {name , value} = e.target;
    }

    const fetchPosts = async() => {
        try {   
            const res = await axios.post('http://localhost:8080/v2/findList');
            setData(res.data);
            console.log(data);
            setLoading(false);
        } catch {
            setError('에러당~~');
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts(); // 컴포넌트가 마운트될 때 데이터 가져오기
      }, []);
    // 로컬스토리지 사용하여 게시판 생성하기
    // const [ array, setArray] = useState([]);
    // useEffect(() => {
    //     const resultString = localStorage.getItem('array');
    //     const ressult = JSON.parse(resultString) || [];
    //     setArray(ressult);
    // }, []);    
     
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container" style={{'marginTop': '80px'}}>
            <h2 className="text-center">게시판</h2>
            <a href="/create" className="btn btn-success">글작성</a>
            <div className="list-group mt-3">
                {
                    data.map(row => (
                        <a className="list-group-item list-group-item-action"  key={row.no} href={"/detail/" + row.no}>{row.title}</a>
                    ))
                }
              
            </div>
        </div>
    );
}
export default List;