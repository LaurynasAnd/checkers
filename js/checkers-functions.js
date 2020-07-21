'use strict';

function renderBoard(data) {
    console.log('rendering board');
    const DOM = document.querySelector(data.selector)
    let HTML = '';
    // generuojame eilutes
    for (let i = 0; i < data.height; i++) {
        let cellHTML = '';
        //generuojame eilutes celes
        for (let j = 0; j < data.width; j++) {
            
            cellHTML += `<div class="cell ${((i + j) % 2 === 0) ? 'white' : 'black'}" style="width: ${100/data.width}%"></div>`;
        }
        //sugeneruotas celes iterpiame i eilute ir eilute iterpiame prie HTML
        HTML += `<div class="row" style="height: ${100/data.height}%">${cellHTML}</div>`;
    }
    return DOM.innerHTML = HTML;

}

// ${j}, ${i}