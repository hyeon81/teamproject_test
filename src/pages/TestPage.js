import React, {useEffect, useState} from 'react';
import {useSearchParams, useNavigate} from "react-router-dom";
import {AiOutlineLeft, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsPlusSquare} from "react-icons/bs";
import data from "../json/question";

console.log(data);

function TestPage() {
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

    return (
        <>
            <div className="frame">
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
            </div>
        </>
    )
}

export default TestPage;
