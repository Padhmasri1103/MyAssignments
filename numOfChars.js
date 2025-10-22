let input = "javaScript"
let count1 = 0;
let count2=0;
for (let i=0;i<=input.length;i++){
    if(input.charAt(i)=='a'){
        count1 ++
    }else if(input.charAt(i)=='s'){
        count2 ++
    }
}
console.log(`count of a is ${count1}`)
console.log(`count of s is ${count2}`)