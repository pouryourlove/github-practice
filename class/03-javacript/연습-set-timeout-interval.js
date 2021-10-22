setTimeout(function(){
    console.log("기능이 실행!!!")
}, 2000)
// 2
// VM1972:2 기능이 실행!!!
setTimeout(function(){
    console.log("기능이 실행!!!")
}, 2000)
// 3
// VM1977:2 기능이 실행!!!
setInterval(function(){
    console.log("안녕하세요")
}, 1000)
// 4
// 45VM2116:2 안녕하세요