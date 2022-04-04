import React from 'react';
import {useSearchParams, useLocation} from "react-router-dom";
import mbti from "../json/mbtiresult";
import {AiOutlineLeft, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsFillArrowRightCircleFill, BsPlusSquare} from "react-icons/bs";
import "./StartPage.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ResultPage() {
    let [searchParams] = useSearchParams();
    const params = searchParams.get("res");
    const input_name = searchParams.get("name");
    const location = useLocation();
    console.log(window.location.toString());
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
            <div className="result-frame">
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
                        <h3>조별 과제 속 <span>{input_name}</span>님의 모습은?</h3>
                        <h3>{mbti[count].nickname1}</h3>
                        <h2>{mbti[count].nickname2}</h2>
                        <p>{mbti[count].id}</p>
                        <img src={mbti[count].img} alt="결과 이미지" width="200px" height="200px"/>
                        <div className="des"><span>{mbti[count].subhead}</span>{mbti[count].description.map((item) =>
                                <li key={item.des}>
                                    {item.des}
                                </li>
                        )}</div>
                    </div>
                    <CopyToClipboard text={window.location.toString()} onCopy={()=>alert("공유 링크가 복사되었습니다!")}>
                        <button>결과 공유하기</button>
                    </CopyToClipboard>
                </div>
                <div className="under">
                    < BsPlusSquare className="plus_icon" size="30"
                                   color="rgba(167, 167, 167, 0.7)"/>
                    <div className="blank"/>
                </div>
            </div>
        </>
    )
}

export default ResultPage;