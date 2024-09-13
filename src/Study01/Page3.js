import { useParams, useNavigate } from 'react-router-dom'
const Page3 = () => {
    const navigete = useNavigate();
    const { id } = useParams();
    return (
        <section className="content" id="page1">
            <h1 className="body">페이지3번 내용</h1>
            <button type='button' onClick={() => {
                if(id === '2') {
                    navigete("/page2");
                } else {
                    alert("정상 입니다.");
                }
            }}>페이지 이동</button>
        </section>
    );
}
export default Page3;