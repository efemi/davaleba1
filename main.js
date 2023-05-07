function equals(a, b) {
    if (a == b)
        return "true"
    else
        return "false"
}

function FahrenheitToC(fahrenheit) {
    if (typeof fahrenheit != "number")
        return "false"
    else
        return (fahrenheit - 32) * 5 / 9

}

function calc(a, b, operation) {
    if (typeof a != "number" || typeof b != "number")
        return "false"
    else if (operation != '+' && operation != '-' && operation != '*' && operation != '/')
        return "false"
    else if (operation == '+') {
        return a + b
    }
    else if (operation == '-') {
        return a - b
    }
    else if (operation == '*') {
        return a * b
    }
    else if (operation == '/') {
        return a / b
    }

}

console.log(equals(4, 5))
console.log(FahrenheitToC(5))
console.log(FahrenheitToC("5"))
console.log(calc(2, 2, "+"))
console.log(calc(2, 2, "-"))
console.log(calc(2, 2, "*"))
console.log(calc(2, 2, "/"))
console.log(calc(2, "2", "+"))
console.log(calc(2, "2", "9"))
console.log(calc(2, 2, "//"))
console.log(calc("5", 2, "+"))