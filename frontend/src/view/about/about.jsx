import React from 'react';
import Lottie from 'lottie-react';
import programmingAnimation from './programming.json'
import './about.css'


export default function AboutView() {
    return (
        <>
            <div className='allHolder flex border'>
                <Lottie className='img' animationData={programmingAnimation}></Lottie>
                <div className='container flex'>
                    <img className='zeroImg' src='https://images-ext-1.discordapp.net/external/X7BXh45pKU9Vv9vojvcAe6WR4Xa-DZbExl_KlNcJx9k/https/yt3.googleusercontent.com/imOp-vvAwXyaCQfniuBrBCLr04B9cMmYeHWnFEXeqDjjWGS_ORi676-LJpziprw9AZSDdKJzmQ%3Ds900-c-k-c0x00ffffff-no-rj?format=webp&width=676&height=676'></img>
                </div>
                <p className='title'>فريق صفر</p>
                <div className='all'>
                    <div className=' subTitleContainer'>
                        <p className='subTitle'>فريق برمجة عربي يهدف إلى تطوير البرمجيات المفتوحة المصدر و المجانية والعربية بالكامل والمتاحة للكل
                            <br></br>- يهدف الفريق إلى توفير بعض البدائل لمجموعة من البرامج وتطوير برامج جديدة</p>
                    </div>

                    <div className=' subTitleContainer subTitle2'>
                        <p className='subTitle'><br></br></p>
                    </div>
                </div>
            </div>
        </>
    )
}
