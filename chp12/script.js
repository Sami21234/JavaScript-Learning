let a = prompt("Enter the first number")
let b = prompt("Enter the Second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid number, enter the correct number");

}
let sum = parseInt(a) + parseInt(b)   // converts a string into a number

function main() {
    try {
        console.log("The sum is:", sum)
        return true
    } catch (error) {
        console.log('Error Occred');
        return false
    }
    finally {
        console.log('Files are being closed and db connection is being closed');

    }
    // finally is mainly used in function as in the regular function the code after the return cna't be executed , so we used finally keyword

}
main()