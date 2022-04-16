import React from 'react';

export default function UserSelection() {
    function changeName() {
        const myName = document.getElementById('name');
        const text = document.getElementById('text-name');
        if(text.value) {
            myName.innerText = text.value;
        }
    }

    function changeProfession() {
        const myProfession = document.getElementById('profession');
        const text = document.getElementById('text-profession');
        if(text.value) {
            myProfession.innerText = text.value;
        }
    }

    function changeWeb() {
        const myWeb = document.getElementById('web');
        const text = document.getElementById('text-web');
        if(text.value) {
            myWeb.innerText = text.value;
        }
    }

    function changeImg() {
        const myImg = document.getElementById('profile-img');
        const text = document.getElementById('text-img');

        if(text.value) {
            myImg.src = text.value;
        }
    }

    function changeAbout() {
        const myAbout = document.getElementById('about-paragraph')
        const text = document.getElementById('text-about');

        if(text.value) {
            myAbout.innerText = text.value;
        }
    }

    function changeInterests() {
        const myInterests = document.getElementById('interests-paragraph')
        const text = document.getElementById('text-interests');

        if(text.value) {
            myInterests.innerText = text.value;
        }
    }


    return (
        <div className='user-selection'>
            <div className='changer'>
                <p>Paste your image URL</p>
                <input type='text' id='text-img'/>
                <button id='click-me' onClick={changeImg}>Click me</button>
            </div>
            <div className='changer'>
                <p>Change your name here</p>
                <input type='text' id='text-name'/>
                <button id='click-me' onClick={changeName}>Click me</button>
            </div>
            <div className='changer'>
                <p>Change your profession here</p>
                <input type='text' id='text-profession'/>
                <button id='click-me' onClick={changeProfession}>Click me</button>
            </div>
            <div className='changer'>
                <p>Change your web here</p>
                <input type='text' id='text-web'/>
                <button id='click-me' onClick={changeWeb}>Click me</button>
            </div>
            <div className='changer'>
                <p>Change your About info here</p>
                <input type='text' id='text-about'/>
                <button id='click-me' onClick={changeAbout}>Click me</button>
            </div>
            <div className='changer'>
                <p>Change your Interests info here</p>
                <input type='text' id='text-interests'/>
                <button id='click-me' onClick={changeInterests}>Click me</button>
            </div>
        </div>
    )
}