module.exports = function reverse (n) {
    let res = Math.abs(n).toString();
    return res.split('').reverse().join('');
}
