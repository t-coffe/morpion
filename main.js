import './style.css'

const cases = document.querySelectorAll('.case');


let currentPlayer = 1;


for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('click', ()=> {
        if (cases[i].children.length === 0) {
            if (currentPlayer === 1) {
                const div = document.createElement('div');
                div.classList.add('crosses');
                cases[i].appendChild(div);
                currentPlayer = 2
            } else if (currentPlayer === 2) {
                const div = document.createElement('div');
                div.classList.add('circles');
                cases[i].appendChild(div);
                currentPlayer = 1;
            }
        }
    })
}