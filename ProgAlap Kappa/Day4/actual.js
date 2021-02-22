const toNumbers = (str) => {
    let output = '';
    for (const element of str) { if (element === 'a') { output += "\a".charCodeAt(element); } else if (element === 'b') { output += "\b".charCodeAt(element); } else if (element === 'c') { output += "\c".charCodeAt(element); } else { output += element; } }
    return output;
};
console.log(toNumbers('123abc'));