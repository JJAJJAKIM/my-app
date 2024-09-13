import { useLocation } from 'react-router-dom';
const NotFound = () => {
    const location = useLocation();
    return (
        <div className="container" style={{'marginTop': '80px'}}>
            <h1 style={{ textAlign: 'left' }}>호출 하신 "{process.env.REACT_APP_HOST}{location.pathname}" 는</h1>
            <h1 style={{ textAlign: 'left' }}>유효한 주소가 아닙니다. ( T_T )</h1>
        </div>
    );
}

export default NotFound;