import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = () => {
    const { no } = useParams(); // URL 파라미터에서 id를 가져옵니다.
   
    /* 디비에서 가져오는 데이터로 동작하는 게시판 */
    const [data, setData] = useState({title: '', content: ''});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async() => {
        // console.log(`http://localhost:8080/v2/detail/${no}`);
        try {   
            const res = await axios.post(`http://localhost:8080/v2/detail/${no}`);
            setData(res.data);
            console.log(data);
            setLoading(false);
        } catch {
            setError('에러당~~');
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    },[]);
    const submitEvent = e => {
        e.preventDefault();
    }
    const deleteEvent = () => {}
    /* 로컬 스토리지로 동작하는 방식 */ 
    // const [array, setArray] = useState([]); // 배열 데이터를 저장할 상태
    // const [data, setData] = useState({ title: '', content: '' }); // 현재 데이터 상태 (제목과 내용)
    
    // // 컴포넌트가 처음 렌더링될 때 localStorage에서 배열 데이터를 가져옵니다.
    // useEffect(() => {
    //     const resultString = localStorage.getItem('array');
    //     const result = JSON.parse(resultString) || []; // JSON 문자열을 배열로 변환, 기본값은 빈 배열
    //     setArray(result); // 배열 상태 업데이트
    // }, []);
    
    // // 배열이 업데이트되거나 id가 변경될 때마다 해당 id에 맞는 데이터를 찾습니다.
    // useEffect(() => {
    //     const foundData = array.find(row => row.id === Number(id)); // id에 해당하는 데이터를 찾습니다.
    //     if (foundData) {
    //         setData(foundData); // 찾은 데이터를 상태에 설정
    //     }
    // }, [array, id]); // array나 id가 변경될 때마다 실행

    // // 폼 제출 시 호출되는 함수
    // const submitEvent = e => {
    //     e.preventDefault(); // 기본 폼 제출 동작 방지
    //     // let params = data;
    //     // console.log(params); // 제출된 데이터를 콘솔에 출력
        
    //     let newArray = [];
    //     array.forEach(row => {
    //         if(row.id !== Number(id) ){ // 수정중 아이디가 아닌 경우는 기존 데이터 넣기
    //             newArray = [...newArray, row];
    //         } else {
    //             newArray = [...newArray, data]; // 수정 대상인 id는 상태값 교체
    //         }
    //     });
    //     setArray(newArray);
    //     localStorage.setItem('array', JSON.stringify(newArray));
        
    // };

    // // 삭제 버튼 클릭 시 호출되는 함수
    // const deleteEvent = () => {
    //     console.log(`${id} 대상을 삭제 합니다.`); // 삭제할 id를 콘솔에 출력
    //     let newArray = [];
    //     array.forEach(row => {
    //         if(row.id !== Number(id) ){ // 삭제대상 아이디가 아닌 경우는 기존 데이터 넣기
    //             newArray = [...newArray, row];
    //         }
    //     });
    //     setArray(newArray);
    //     localStorage.setItem('array', JSON.stringify(newArray));
    // };

    // 입력값이 변경될 때 호출되는 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value })); // 데이터 상태를 업데이트
    };

    return (
        <>
            <div className="container" style={{ marginTop: '80px' }}>
                <h2 className="text-center">작성 내용</h2>
            </div>
            <div className="container mt-3">
                <form onSubmit={submitEvent}>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title" 
                        value={data.title} 
                        onChange={handleChange} 
                    />
                    <div className="mb-3 mt-3">
                        <label htmlFor="content">작성글 내용:</label>
                        <textarea 
                            className="form-control" 
                            rows="5" 
                            name="content" 
                            value={data.content} 
                            onChange={handleChange} 
                            style={{ resize: 'none' }} 
                        ></textarea>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-info">수정</button>
                        <button type="button" className="btn btn-danger" onClick={deleteEvent}>삭제</button>
                        <a className="btn btn-primary" href="/">목록</a>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Detail;
