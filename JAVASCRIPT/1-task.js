let myarray = []

function increase(a, b) {
    return (a - b)
}

function decrease(a, b) {
    return (b - a)
}


function getArray(){
    myarray.push.apply(myarray, document.querySelector("#array").value.split(",").map(Number))
}

function increaseSort(){
    getArray()
    myarray.sort(increase)
    document.querySelector("#sortArray").value = myarray
    myarray = []
}

function decreaseSort(){
    getArray()
    myarray.sort(decrease)
    document.querySelector("#sortArray").value = myarray
    myarray = []
}

document.querySelector('#increaseSort').onclick = increaseSort
document.querySelector('#decreaseSort').onclick = decreaseSort