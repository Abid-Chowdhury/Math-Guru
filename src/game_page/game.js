// get current difficulty
var difficulty = (window.location.search).replace('?', '')

// function to get random num & operation
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))]
}

// set page variables
var first = document.getElementById('first')
var second = document.getElementById('second')
var operation = document.getElementById('operation')
var correct_Answer = null
var green = "rgb(82, 205, 79)"
var red = "rgb(205, 79, 79)"
var acc = "rgb(79, 205, 185)"

// update numbers function
function update_Numbers() {
    random_Numbers = generate_Random_Numbers()
    random_Operator = generate_Random_Operator()
    correct_Answer = update_Correct_Answer(random_Numbers, random_Operator, correct_Answer)
    while (check_If_Correct_Answer_Is_Whole_Number() == false) {
        random_Numbers = generate_Random_Numbers()
        random_Operator = generate_Random_Operator()
        correct_Answer = update_Correct_Answer(random_Numbers, random_Operator, correct_Answer)
    }
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

// check if the correct answer is a whole number
function check_If_Correct_Answer_Is_Whole_Number() {
    if (Number.isInteger(correct_Answer)) { 
        return true
    } else {
        return false
    }
}

// display data
function display_Data(random_Numbers, random_Operator) {
    first.innerHTML = random_Numbers[0]
    second.innerHTML = random_Numbers[1]
    operation.innerHTML = random_Operator
}

// checkValue function gets triggered when input field is updated by user
function checkValue() {
    let value = document.getElementById('answer-field').value
    check_If_Value_Is_Correct(value)
    check_If_Enter_Key_Pressed(value)
}

// check if value matches answer
function check_If_Value_Is_Correct(value) {
    if (value == correct_Answer) {
        correct_Guess()
        reset_Game()
    }
}

// check if user pressed enter key
function check_If_Enter_Key_Pressed(value) {
    const input = document.querySelector("input")
    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            if (value == correct_Answer) {
                correct_Guess()
                reset_Game()
            } else {
                wrong_Guess()
                reset_Game()
            }
       } 
    })
}

// make input field green
function correct_Guess() {
    var answer_Container = document.getElementById('answer-container')
    var answer_Field = document.getElementById('answer-field')
    answer_Container.style.borderColor = green
    answer_Field.style.color = green
}

// make input field red
function wrong_Guess() {
    var answer_Container = document.getElementById('answer-container')
    var answer_Field = document.getElementById('answer-field')
    answer_Container.style.borderColor = red
    answer_Field.style.color = red
}

// reset the game after a round
function reset_Game() {
    setTimeout(function () {
        reset_Input_Field_Colors()
        reset_Input_Text_Value()
        update_Numbers()
    }, 1000)
}

// resets color of input field
function reset_Input_Field_Colors() {
    let answer_Container = document.getElementById('answer-container')
    let answer_Field = document.getElementById('answer-field')
    answer_Container.style.borderColor = acc
    answer_Field.style.color = acc
}

// reset text value of input
function reset_Input_Text_Value() {
    let input_Field = document.getElementById('answer-field')
    input_Field.value = ""
}

// start game
update_Numbers()
