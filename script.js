const wrapper = document.querySelector('.wrapper')
const outputEl = document.getElementById('output')

wrapper.addEventListener('click', (e) => {
    if(e.target.id === 'reset') {
        console.log('reset clicked')
        outputEl.innerHTML = ''
    }
    if(e.target.id === 'signChange') {
        const signChangeValue = document.getElementById('signChange').innerHTML
        console.log(signChangeValue)
    }
    if(e.target.id === 'seven') {
        const sevenNumber = document.getElementById('seven').innerHTML
        outputEl.innerHTML += sevenNumber
    }
    if(e.target.id === 'eight') {
        const eightNumber = document.getElementById('eight').innerHTML
        outputEl.innerHTML += eightNumber
    }
    if(e.target.id === 'nine') {
        const nineNumber = document.getElementById('nine').innerHTML
        outputEl.innerHTML += nineNumber
    }
    if(e.target.id === 'multiply') {
        const multiplyNumber = document.getElementById('multiply').innerHTML
        outputEl.innerHTML += multiplyNumber
    }
    if(e.target.id === 'four') {
        const fourNumber = document.getElementById('four').innerHTML
        outputEl.innerHTML += fourNumber
    }
    if(e.target.id === 'five') {
        const fiveNumber = document.getElementById('five').innerHTML
        outputEl.innerHTML += fiveNumber
    }
    if(e.target.id === 'six') {
        const sixNumber = document.getElementById('six').innerHTML
        outputEl.innerHTML += sixNumber
    }
    if(e.target.id === 'minus') {
        const minusNumber = document.getElementById('minus').innerHTML
        outputEl.innerHTML += minusNumber
    }
    if(e.target.id === 'one') {
        const oneNumber = document.getElementById('one').innerHTML
        outputEl.innerHTML += oneNumber
    }
    if(e.target.id === 'two') {
        const twoNumber = document.getElementById('two').innerHTML
        outputEl.innerHTML += twoNumber
    }
    if(e.target.id === 'three') {
        const threeNumber = document.getElementById('three').innerHTML
        outputEl.innerHTML += threeNumber
    }
    if(e.target.id === 'plus') {
        const plusNumber = document.getElementById('plus').innerHTML
        outputEl.innerHTML += plusNumber
    }
    if(e.target.id === 'zero') {
        const zeroNumber = document.getElementById('zero').innerHTML
        outputEl.innerHTML += zeroNumber
    }
    if(e.target.id === 'dot') {
        const dotNumber = document.getElementById('dot').innerHTML
        outputEl.innerHTML += dotNumber
    }
    if(e.target.id === 'divide') {
        const divideNumber = document.getElementById('divide').innerHTML
        outputEl.innerHTML += divideNumber
    }
    if(e.target.id === 'percent') {
        const percentNumber = document.getElementById('percent').innerHTML
        outputEl.innerHTML += percentNumber
    }
    if(e.target.id === 'equal') {
        outputEl.innerHTML = eval(outputEl.innerHTML)
    }
    if(e.target.id === 'delete') {
        outputEl.innerHTML = outputEl.innerHTML.toString().slice(0, -1)
    }
})
