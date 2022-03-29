import React from 'react';
import {useSearchParams} from "react-router-dom";
import mbti from "../json/mbtiresult";
import {AiOutlineLeft, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsPlusSquare} from "react-icons/bs";
import "./StartPage.css";

function ResultPage() {
    let [searchParams] = useSearchParams();
    const params = searchParams.get("res");
    let e = 0, s = 0, t = 0, j = 0;

    for (let c = 0; c <= params.length; c++) {
        if (params[c] === 'E')
            e++;
        else if (params[c] === 'S')
            s++;
        else if (params[c] === 'T')
            t++;
        else if (params[c] === 'J')
            j++;
    }

    let result = [e >= 2 ? 'E' : 'I',
        s >= 2 ? 'S' : 'N',
        t >= 2 ? 'T' : 'F',
        j >= 2 ? 'J' : 'P'
    ];

    let count;
    outer: for (count = 0; count < 16; count++) {
        for (let i = 0; i < 4; i++) {
            if (mbti[count].id[i] !== result[i]) {
                break;
            } else if (i === 3) {
                break outer;
            }
        }
    }

    let imgUrl = "../img/" + count + ".jpg";

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
                    <div className="result">
                        <h3>조별 과제 속 내 모습은?</h3>
                        <img src={mbti[count].img} alt="결과 이미지" width="150px" height="150px"/>
                        <h1>{mbti[count].id}</h1>
                        <p>{mbti[count].subhead}<br/><span>{mbti[count].subject}</span></p>
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

export default ResultPage;