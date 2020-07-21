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
            
            cellHTML += `<div class="cell ${((i + j) % 2 === 0) ? 'white' : 'black'}"></div>`;
        }
        //sugeneruotas celes iterpiame i eilute ir eilute iterpiame prie HTML
        HTML += `<div class="row">${cellHTML}</div>`;
    }
    return DOM.innerHTML = HTML;

}

function updateStyles(data) {
    const style  = `.board > .row {
                        height: calc(${100/data.height}%);
                    }
                        .board > .row > .cell {
                            width: calc(${100/data.width}%);
                        }`;

    return document.querySelector(data.styleSelector).innerHTML = style;
}

// ${j}, ${i}