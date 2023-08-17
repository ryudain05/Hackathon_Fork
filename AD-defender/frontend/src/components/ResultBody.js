import { useState, useEffect } from 'react';
import '../styles/ResultBody.scss';
import { useLocation } from 'react-router-dom';
import HeartButton from './HeartButton';
// import LinkResult from './LinkResult';
import axios from 'axios';
import LinkResult from "./LinkResult";

const BodyRes = (props) =>{
    const location = useLocation(); // 현재 라우팅 정보 가져오기
    const chatResponse = location.state ? location.state.chatResponse : '';
    const [isCommercial, setCommercial] = useState('');
    const [like, setLike] = useState('');
    //useEffect 안에서 axios를 통해 사용자가 좋아요 눌렀는지, 여부 판단
    //결과는 type이라는 변수에 담음.
    // useEffect(async() => {
    //     const fetchData = async () => {
    //         // const res = await axios.get(...) 
    //         // if (res.data.type === 'liked') setLike(true)
    //     }
    //     fetchData()
    // }, []);
    //toggle 함수: 사용자가 좋아요 눌렀을 때 POST 요청 통해 DB 갱신,
    //toggle 형태로 like의 상태를 바꾸는(true or false) 역할  
    // const toggleLike = async (e) => {
    //     // const res = await axios.post(...) //사용자 좋아요 누르면 -> DB 갱신
    //     setLike(!like)
    // }
    const [result, setResult] = useState(true); //true면 광고
    const resultText = chatResponse.choices[0].message.content;
    const inputUrl = chatResponse.url;
    useEffect(() => {
        if(resultText=="아니요") {
            setResult(false);
        }
    }, []);


    console.dir(chatResponse);
    return(
        <div className='body'>
            <div className='link-section'>
                <h2>{inputUrl}</h2>
            </div>
            <LinkResult isCommercial={result}/>
            {/* <HeartButton like={like} onClick={toggleLike}/> */}
        </div>
    )
}

export default BodyRes;