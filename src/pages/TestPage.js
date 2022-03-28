<<<<<<< HEAD
import React, {useRef, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
=======
import React, {useEffect, useState} from 'react';
import {useSearchParams, useNavigate} from "react-router-dom";
>>>>>>> 97ce3d8a592abcb3482d6ca864ffee875e9bde1a
import {AiOutlineLeft, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsPlusSquare} from "react-icons/bs";
import data from "../json/question";

console.log(data);

function TestPage() {
<<<<<<< HEAD
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
=======
    let [searchParams, setSearchParams] = useSearchParams();
    // console.log("???", searchParams.get("res"));
    const [num, setNum] = useState(searchParams.get("res")?.length ?? 0);
    const [mbti, setMbti] = useState([]);
    const navigate = useNavigate();
    const nextSlide = (idx) => {
        const a = [...mbti, data[num].answers[idx].type]
        setMbti(a);
        setSearchParams({
            res: a.join('')
        })
    };

    useEffect(() => {
        const len=searchParams.get("res")?.length ?? 0

        if(len < 12)
            setNum(searchParams.get("res")?.length ?? 0)
        else
            navigate("/result?res="+searchParams.get("res"));
    }, [searchParams.get("res")])
>>>>>>> 97ce3d8a592abcb3482d6ca864ffee875e9bde1a

    return (
        <>
            <div className="frame">
<<<<<<< HEAD
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
=======
                <div className="gnb">
                    <div className="icon-right">
                        <AiOutlineLeft size="28"/>
                    </div>
                    <div className="icon-left">
                        <AiOutlineSearch className="search_icon" size="28"/>
                        <AiOutlineMenu size="28"/>
                    </div>
                </div>
                <div className="wrap">
                    <div className="question">
                        <h1>Q{data[num].id}</h1>
                        <p>{data[num].question1}<br/><span>{data[num].question2}</span></p>
                        <button onClick={() => nextSlide(0)}>
                            {data[num].answers[0].content1}<br/><span>{data[num].answers[0].content2}</span>
                        </button>
                        <button onClick={() => nextSlide(1)}>
                            {data[num].answers[1].content1}<br/><span>{data[num].answers[1].content2}</span>
                        </button>
                    </div>
                </div>
                <div className="under">
                    < BsPlusSquare className="plus_icon" size="30"
                                   color="rgba(167, 167, 167, 0.7)"/>
                    <div className="blank"></div>
                </div>
>>>>>>> 97ce3d8a592abcb3482d6ca864ffee875e9bde1a
            </div>
        </>
    )
}

export default TestPage;
