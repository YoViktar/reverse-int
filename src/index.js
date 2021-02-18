module.exports = function reverse(n) {
    let result = "";
    n = Math.abs(n);
    result = n.toString().split("").reverse().join("");

    return result;
};
