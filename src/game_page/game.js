// get current difficulty
var difficulty = (window.location.search).replace('?', '')

// function to get random num & operation
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))]
}

// set vars for nums & operations
var first = document.getElementById('first')
var second = document.getElementById('second')
var operation = document.getElementById('operation')

// generates random numbers based on difficulty
function generate_Random_Nums(difficulty) {
    console.log(difficulty)
    first_Num = Math.floor(Math.random() * 10)
    second_Num = Math.floor(Math.random() * 10)
    return [first_Num, second_Num]
}

// generates random operation
function generate_Random_Oper() {
    random_Oper = ['+', '-', '*', '/'].random()
    return random_Oper
}

var random_Numbers = generate_Random_Nums(difficulty)
var random_Operation = generate_Random_Oper()

// update numbers of page to random numbers
function update_Numbers(random_Numbers, random_Operation) {
    first.innerText = random_Numbers[0]
    second.innerText = random_Numbers[1]
    operation.innerText = random_Operation
}



update_Numbers(random_Numbers, random_Operation)

function getValue() {
    // correct answer to question
    function answer(random_Numbers, random_Operation) {
        answer = eval(random_Numbers[0] + random_Operation + random_Numbers[1])
        return answer
    }
   
    // check if input matches correct answer
    let value = document.getElementById('answer-field').value
    if (value == answer(random_Numbers, random_Operation)) {
        console.log(value)
    }
}