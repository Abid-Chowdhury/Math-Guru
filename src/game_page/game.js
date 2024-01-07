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
var correct_Answer = 0

// update numbers function
function update_Numbers() {
    random_Numbers = generate_Random_Numbers()
    random_Operator = generate_Random_Operator()
    correct_Answer = update_Correct_Answer(random_Numbers, random_Operator, correct_Answer)
    console.log(correct_Answer)
    display_Data(random_Numbers, random_Operator)
}

// generate random numbers
function generate_Random_Numbers() {
    first_Number = Math.floor(Math.random() * 10)
    second_Number = Math.floor(Math.random() * 10)
    return [first_Number, second_Number]
}

// generate random operator
function generate_Random_Operator() {
    random_Operator = ['+', '-', '*', '/'].random()
    return random_Operator
}

// update correct answer
function update_Correct_Answer(random_Numbers, random_Operator, correct_Answer) {
    correct_Answer = eval(random_Numbers[0] + random_Operator + random_Numbers[1])
    return correct_Answer
}

// display data
function display_Data(random_Numbers, random_Operator) {
    first.innerHTML = random_Numbers[0]
    second.innerHTML = random_Numbers[1]
    operation.innerHTML = random_Operator
}

update_Numbers()