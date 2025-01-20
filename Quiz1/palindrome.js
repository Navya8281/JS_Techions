
let s = "babad";
let longest = "";

for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
        let substring = s.slice(i, j);
        let reversed = substring.split('').reverse().join(''); 
        
        if (substring === reversed && substring.length > longest.length) {
            longest = substring;
        }
    }
}

console.log("Longest palindromic substring:", longest);  