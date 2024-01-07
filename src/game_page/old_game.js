// print function
function print(str) {
    console.log(str)
}

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
var answer = 0

// generates random numbers based on difficulty
function generate_Random_Nums(difficulty) {
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

function reset_Input_Field_Colors() {
    var acc = "rgb(79, 205, 185)"
    var answer_Container = document.getElementById('answer-container')
    var answer_Field = document.getElementById('answer-field')
    answer_Container.style.borderColor = acc
    answer_Field.style.color = acc
}

function reset_Input_Text() {
    var input_Field = document.getElementById('answer-field')
    input_Field.value = ""
}

function reset_Game() {
    reset_Input_Field_Colors()
    reset_Input_Text()
    var random_Numbers = generate_Random_Nums(difficulty)
    var random_Operation = generate_Random_Oper()
    update_Numbers(random_Numbers, random_Operation)
    answer = eval(random_Numbers[0] + random_Operation + random_Numbers[1])
}

function getValue() {
    // correct answer to question
    function answer(random_Numbers, random_Operation) {        
        answer = eval(random_Numbers[0] + random_Operation + random_Numbers[1])
        return answer
    }
   
    function correct_Guess() {
        var green = "rgb(82, 205, 79)"
        var red = "rgb(205, 79, 79)"
        var answer_Container = document.getElementById('answer-container')
        var answer_Field = document.getElementById('answer-field')
        answer_Container.style.borderColor = green
        answer_Field.style.color = green
    }

    function wrong_Guess() {
        var green = "rgb(82, 205, 79)"
        var red = "rgb(205, 79, 79)"
        var answer_Container = document.getElementById('answer-container')
        var answer_Field = document.getElementById('answer-field')
        answer_Container.style.borderColor = red
        answer_Field.style.color = red
    }

    // check if input matches correct answer
    let value = document.getElementById('answer-field').value
    if (value == answer(random_Numbers, random_Operation)) {
        correct_Guess()
        setTimeout(function () {
            reset_Game()
        }, 1000)
    }

    // check if enter key pressed
    const input = document.querySelector("input");
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            // correct answer to question
            function answer(random_Numbers, random_Operation) {
                answer = eval(random_Numbers[0] + random_Operation + random_Numbers[1])
                return answer
            }
            if (value == answer(random_Numbers, random_Operation)) {
                correct_Guess()
                setTimeout(function () {
                    reset_Game()
                }, 1000)
            } else {
                wrong_Guess()
                setTimeout(function () {
                    reset_Game()
                }, 1000)
        }
      }
    });
}