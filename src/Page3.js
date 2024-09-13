import { useParams, useNavigate } from 'react-router-dom';
const Page3 = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <section className="content" id="page3">
        <h1 className="body">페이지3번 내용</h1>
        <button type='button' onClick={()=> {
            if(id !== 'qwer'){
                navigate("/page2");
            } else {
                alert("정상임!!");
            }
        }}> 페이지 이동 </button>
        <h3>{id}</h3>
        </section>
    );
}

export default Page3;