import React from "react";
import "./StartPage.css";

import {AiOutlineLeft, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {BiCopy} from "react-icons/bi";

function StartPage() {
    return (
        <>
            <div className="container">
                <gnb>
                    <AiOutlineLeft/>
                    <AiOutlineSearch/>
                    <AiOutlineMenu/>
                </gnb>
                <div className="title">
                    <h1>조별과제 속 나의 모습은?</h1>
                    <p>총 16개의 유형의 MBTI 성향을 기반으로 <br></br>조별과제 속 나의 모습을 알아보아요.</p>
                </div>

                <button className="home_button">
                    <p>테스트하기</p>
                    <BsFillArrowRightCircleFill/>
                </button>

                <button className="home_button">
                    <p>링크 복사</p>
                    <BiCopy/>
                </button>
            </div>
        </>
    );
}

export default StartPage;