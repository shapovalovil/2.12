let message = 'директор';
let login='диdsректор';

(login=='сотрудник') ? message = 'привет': 
(login=='директор') ? message = 'здравствуйте':
(login=='') ? message = 'нет логина':message = 'gji`k djy';

console.log(message);
let t = 20;
//(t>10) ? console.log("больше") : console.log("меньше");
var abc = "abcdefghijklmnopqrstuvwxyz";

do{
   
    login = '';
    while (login.length < 3) {
        login += abc[Math.floor(Math.random() * abc.length)];
    };
     //console.log(login);
} while (login != 'zaa');console.log("OK");
