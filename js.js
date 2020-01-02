function first (){
    setTimeout(function(){console.log(1);},500);

}
function second(){
    console.log(2);
}
first();
second();

function learnJS(lang,func){
console.log("Я учу: "+ lang);
console.log(111);
setTimeout(function(){console.log(222);},660);
func();
}
function func(){
    console.log("Вывод из колл бек функции");
}
learnJS("java",func);