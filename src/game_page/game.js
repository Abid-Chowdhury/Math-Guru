Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))]
}

var first = document.getElementById('first')
var second = document.getElementById('second')
var operation = document.getElementById('operation')

function generate_Random_Nums() {
    first_Num = Math.floor(Math.random() * 10)
    second_Num = Math.floor(Math.random() * 10)
    return [first_Num, second_Num]
}

function generate_Random_Oper() {
    random_Oper = ['+', '-', '*', '/'].random()
    return random_Oper
}

var random_Numbers = generate_Random_Nums()
var random_Operation = generate_Random_Oper()

function update_Numbers(random_Numbers, random_Operation) {
    first.innerText = random_Numbers[0]
    second.innerText = random_Numbers[1]
    operation.innerText = random_Operation
}

function answer(random_Numbers, random_Operation) {
    answer = eval(random_Numbers[0] + random_Operation + random_Numbers[1])
    return answer
}

update_Numbers(random_Numbers, random_Operation)
console.log(answer(random_Numbers, random_Operation))
