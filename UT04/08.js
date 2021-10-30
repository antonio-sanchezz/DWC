alert(esPalindromo("rotor"));

function esPalindromo(s, i) {
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&esPalindromo(s,++i);
}