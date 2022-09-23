const correct1 = document.getElementById('correct1');
const correct2 = document.getElementById('correct2');
const correct3 = document.getElementById('correct3');
const correct4 = document.getElementById('correct4');
const correct5 = document.getElementById('correct5');
const correct6 = document.getElementById('correct6');
const correct7 = document.getElementById('correct7');
const correct8 = document.getElementById('correct8');
const correct9 = document.getElementById('correct9');
const correct10 = document.getElementById('correct10');

const wrong1 = document.querySelectorAll('.wrong1');
const wrong2 = document.querySelectorAll('.wrong2');
const wrong3 = document.querySelectorAll('.wrong3');
const wrong4 = document.querySelectorAll('.wrong4');
const wrong5 = document.querySelectorAll('.wrong5');
const wrong6 = document.querySelectorAll('.wrong6');
const wrong7 = document.querySelectorAll('.wrong7');
const wrong8 = document.querySelectorAll('.wrong8');
const wrong9 = document.querySelectorAll('.wrong9');
const wrong10 = document.querySelectorAll('.wrong10');

const scorePlus = document.querySelectorAll('.score-plus')

let score = 0


//This will be for the start button and every next button to go to the next question.
//This code was obtained from a YouTube — https://www.youtube.com/watch?v=j9Elj5Sxfug

    document.getElementsByClassName('hide')[0].style.display = "block";

function next(id) {
    
    document.getElementsByClassName('hide')[id-1].style.display = "none";
    document.getElementsByClassName('hide')[id].style.display = "block";
}

//The following code will make the correct answer exclusively highlight as bright green when the correct answer is selected
//It will also become disabled to stop adding to the score and the wrong ones will also become disabled for a goo effect

correct1.addEventListener('click', makeGreen1);
correct2.addEventListener('click', makeGreen2);
correct3.addEventListener('click', makeGreen3);
correct4.addEventListener('click', makeGreen4);
correct5.addEventListener('click', makeGreen5);
correct6.addEventListener('click', makeGreen6);
correct7.addEventListener('click', makeGreen7);
correct8.addEventListener('click', makeGreen8);
correct9.addEventListener('click', makeGreen9);
correct10.addEventListener('click', makeGreen10);

function makeGreen1() {

    correct1.style.backgroundColor = 'rgb(7 204 7)';
    correct1.style.color = '#fff0c4';
    correct1.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct1').disabled = true;
    wrong1.forEach((e) => {e.disabled = true;});
    let hide = document.getElementById('hide1');
    hide.classList.remove('hide');
}

function makeGreen2() {

    correct2.style.backgroundColor = 'rgb(7 204 7)';
    correct2.style.color = '#fff0c4';
    correct2.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct2').disabled = true;
    wrong2.forEach((e) => {e.disabled = true});
    let hide = document.getElementById('hide2');
    hide.classList.remove('hide');
}

function makeGreen3() {

    correct3.style.backgroundColor = 'rgb(7 204 7)';
    correct3.style.color = '#fff0c4';
    correct3.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct3').disabled = true;
    wrong3.forEach((e) => {e.disabled = true});
    let hide = document.getElementById('hide3');
    hide.classList.remove('hide');
}

function makeGreen4() {

    correct4.style.backgroundColor = 'rgb(7 204 7)';
    correct4.style.color = '#fff0c4';
    correct4.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct4').disabled = true;
    wrong4.forEach((e) => {e.disabled = true});
    let hide = document.getElementById('hide4');
    hide.classList.remove('hide');
}

function makeGreen5() {

    correct5.style.backgroundColor = 'rgb(7 204 7)';
    correct5.style.color = '#fff0c4';
    correct5.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct5').disabled = true;
    wrong5.forEach((e) => {e.disabled = true});
    let hide = document.getElementById('hide5');
    hide.classList.remove('hide');
}

function makeGreen6() {

    correct6.style.backgroundColor = 'rgb(7 204 7)';
    correct6.style.color = '#fff0c4';
    correct6.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct6').disabled = true;
    wrong6.forEach((e) => {e.disabled = true})
    let hide = document.getElementById('hide6');
    hide.classList.remove('hide');
}

function makeGreen7() {

    correct7.style.backgroundColor = 'rgb(7 204 7)';
    correct7.style.color = '#fff0c4';
    correct7.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct7').disabled = true;
    wrong7.forEach((e) => {e.disabled = true})
    let hide = document.getElementById('hide7');
    hide.classList.remove('hide');
}

function makeGreen8() {

    correct8.style.backgroundColor = 'rgb(7 204 7)';
    correct8.style.color = '#fff0c4';
    correct8.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct8').disabled = true;
    wrong8.forEach((e) => {e.disabled = true})
    let hide = document.getElementById('hide8');
    hide.classList.remove('hide');
}

function makeGreen9() {

    correct9.style.backgroundColor = 'rgb(7 204 7)';
    correct9.style.color = '#fff0c4';
    correct9.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct9').disabled = true;
    wrong9.forEach((e) => {e.disabled = true})
    let hide = document.getElementById('hide9');
    hide.classList.remove('hide');
}

function makeGreen10() {

    correct10.style.backgroundColor = 'rgb(7 204 7)';
    correct10.style.color = '#fff0c4';
    correct10.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct10').disabled = true;
    wrong10.forEach((e) => {e.disabled = true})
    let hide = document.getElementById('hide10');
    hide.classList.remove('hide');
}

//The following code will change all the incorrect answers of the question red if any incorrect answer is selected
//The makeGreen function will also be executed to reveal the correct answer 

wrong1.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen1();    
   });
    
    function makeRed() {

        wrong1.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong2.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen2();    
   });
    
    function makeRed() {

        wrong2.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong3.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen3();    
   });
    
    function makeRed() {

        wrong3.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong4.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen4();    
   });
    
    function makeRed() {

        wrong4.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong5.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen5();    
   });
    
    function makeRed() {

        wrong5.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong6.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen6();    
   });
    
    function makeRed() {

        wrong6.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong7.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen7();    
   });
    
    function makeRed() {

        wrong7.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong8.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen8();    
   });
    
    function makeRed() {

        wrong8.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong9.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen9();    
   });
    
    function makeRed() {

        wrong9.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})

wrong10.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen10();    
   });
    
    function makeRed() {

        wrong10.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})


//This is to add 1 point to the score everytime the correct button is selected

scorePlus.forEach(e => {

    e.addEventListener('click', () => {

        score++
        console.log(score)
        console.log('worked')

    } )
})
