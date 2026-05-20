var plusOne = function (digits) {
    // Convert to BigInt, add 1, then convert back to array
    const num = BigInt(digits.join(''));
    return (num + 1n).toString().split('').map(Number);
};