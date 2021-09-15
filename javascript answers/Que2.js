const prompt=require('prompt-sync')();

function checkpalindrome (word){
    let i=0,j=word.length-1;
    while(i<j){
        if(word[i]===word[j]){
            i++;
            j--;
        }
        else{
            console.log("Not palindrome");
            return;
        }
    }
    console.log("palindrome");
    return;
}

var word=prompt("Enter your word ");
checkpalindrome(word);

