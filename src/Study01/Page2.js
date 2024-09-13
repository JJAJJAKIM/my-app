import { useLocation } from 'react-router-dom';
const Page2 = () => {
    const location = useLocation();
    const params = location.search.substring(1);
    const param = params.split("=");
    return (
        <section className="content" id="page1">
            <h1 className="body">페이지2번 내용</h1>
            <h3>{param[1]}</h3>
        </section>
    );
}
export default Page2;