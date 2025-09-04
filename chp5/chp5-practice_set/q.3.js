// Question 3

// Filter for numbers divisible by 10 from the give array

let arr = [1, 35, 50, 90, 54, 65780, 4450]

const divisibleByTen = (num) => {
    if (num % 10 == 0) {
        return true

    }
    return false
}

console.log("These are the numbers divisible by 10 : " + arr.filter(divisibleByTen));