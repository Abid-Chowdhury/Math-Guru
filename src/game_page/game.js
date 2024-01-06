Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))]
}

var first = document.getElementById('first')
var second = document.getElementById('second')
var operation = document.getElementById('operation')

function generate_Random_Nums() {
    first_Num = Math.floor(Math.random() * 10)
    second_Num = Math.floor(Math.random() * 10)
    random_Operation = ['+', '-', '*', '/'].random()
    return [first_Num, second_Num, random_Operation]
}

var random_Numbers = generate_Random_Nums()

function update_Numbers(random_Numbers) {
    first.innerText = random_Numbers[0]
    second.innerText = random_Numbers[1]
    operation.innerText = random_Numbers[2]
}

function answer(random_Numbers) {
    answer = eval(random_Numbers[0] + random_Numbers[2] + random_Numbers[1])
    return answer
}

update_Numbers(random_Numbers)
answer(random_Numbers)
