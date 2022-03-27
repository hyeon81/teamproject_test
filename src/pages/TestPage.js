import React, {useRef, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {AiOutlineLeft, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsPlusSquare} from "react-icons/bs";
import data from "../json/question";

console.log(data);

function TestPage() {
    const [loading, setLoading] = useState(false);
    // const [num, setNum] = useState(0);
    // const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = useRef(null);
    // const TOTAL_SLIDES = 12;
    // const history = useNavigate();
    // const [mbti, setMbti] = useState([]);


    const nextSlideFir = () => {
        // setMbti(mbti + data[num].answers[0].type);
        // setNum(num + 1);
        // setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)'
    };

    const nextSlideSec = () => {
        // setMbti(mbti + data[num].answers[0].type);
        // setNum(num + 1);
        // setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };

    // const mbtiChecker = () => {
    //     setLoading(true);
    //     let map = {};
    //     let result = [];
    //     for (let i = 0; i < mbti.length; i++) {
    //         if (mbti[i] in map) {
    //             map[mbti[i]] += 1;
    //         } else {
    //             map[mbti[i]] = 1;
    //         }
    //     }
    //     for (let count in map) {
    //         if (map[count] >= 2) {
    //             result.push(count);
    //         }
    //     }
    //
    //     setTimeout(() => {
    //         const examResult = result.join('');
    //         history.push(`/result/${examResult}`);
    //     }, 3000);
    // };
    // useEffect(() => {
    //     currentSlide > TOTAL_SLIDES && mbtiChecker();
    // }, [currentSlide]);

    return (
        <>
            <div className="frame">
                {data.map((item) => {
                    return (
                    <div className="content" key={item.id}>
                        <div className="gnb">
                            <div className="icon-right">
                                <AiOutlineLeft size="28"/>
                            </div>
                            <div className="icon-left">
                                <AiOutlineSearch className="search_icon" size="28"/>
                                <AiOutlineMenu size="28"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="wrap">
                                <div className="question">
                                    <h1>Q{item.id}</h1>
                                    <p>{item.question1}<br/><span>{item.question2}</span></p>
                                    <button onClick={nextSlideFir}>
                                        {item.answers[0].content1}<br/><span>{item.answers[0].content2}</span>
                                    </button>
                                    <button onClick={nextSlideSec}>
                                        {item.answers[1].content1}<br/><span>{item.answers[1].content2}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="under">
                            < BsPlusSquare className="plus_icon" size="30"
                                           color="rgba(167, 167, 167, 0.7)"/>
                            <div className="blank"></div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </>
    )
}

export default TestPage;
