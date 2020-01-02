'use strict';

let money = 0;
let time = new Date();
console.log(time);
money = +prompt("Ваш бюджет на месяц?",100000);
console.log(money);
time = prompt("Введите дату в формате YYYY-MM-DD","2020.01.01");
console.log(time);
console.log(Date(time));

let appData = {
budjet: money,
timeData: time,
expenses: {},
optionalExpense: {},
income: [],
savings: false
};

    for(let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
            if (typeof(a) ==="string" && a != null && b!= null && a !='' && b !=''){
                console.log('OK');
              appData.expenses[a] = +b; 
            }
            else {
                i--;
                console.log('non');
            }
            
    }  
    appData.monyPerDay = (appData.budjet / 30);  

   console.log("Ежедневно имеется: "+appData.monyPerDay);
   console.log(appData);
   