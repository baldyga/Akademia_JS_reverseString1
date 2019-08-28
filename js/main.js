function reverseString(string) {
    // Split a string into an array of substrings:
    let res = string.split("");

    let reverse = res.reverse();
    let scal = reverse.join("");
    return scal;
}
console.log(reverseString("Akademia 108"));
