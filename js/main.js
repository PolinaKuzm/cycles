//167 практика
/*№1
Выведите с помощью цикла столбец чисел от 1 до 100.
*/
//1)
let i= 1; 
while (i<= 100){
    console.log(i);
    i++;
}
//2)
for (let i= 1; i<= 100; i++){
    console.log(i);
}

/*№2
Выведите с помощью цикла столбец чисел от 100 до 1.
*/
for (let i= 100; i>= 1; i--){
    console.log(i);
}

/*№3
Выведите с помощью цикла столбец четных чисел от 1 до 100.
*/
//1)
for (let i= 1; i<= 100; i++){
   if(i% 2== 0){
    console.log(i);
   }  
}
//2)
for (let i= 2; i<= 100; i+=2){
     console.log(i);  
 }

/*№4
Заполните массив 10-ю иксами с помощью цикла.
*/
let arr = [];
for (let i= 1; i<= 10; i++){
    arr.push ("x");
}
console.log (arr);

/*№5
Заполните массив числами от 1 до 10 с помощью цикла.
*/
 let arr1 = [];
 for (let i= 1; i<= 10; i++){
    arr1.push(i);
 }
console.log(arr1);

/*
№6
Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
*/
 let arr2 = [-1,2,0,3,14];
 for (let elem of arr2){
    if (elem >0 && elem <10){
        console.log (elem);
    }
 }

/*
№7
Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
*/
let arr3 = [-1,2,0,3,14];
let flag = false;

for (let elem of arr3){
    if (elem ==5){
        flag = true;
        break;
    }
}
if (flag === true){
    console.log ("+++");
}else{
    console.log ("---");
}

/*
№8
Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
*/
let arr4 = [-1,2,0,3,14];
let res =0;
for (let elem of arr4){
    res+=elem;
}
console.log(res);

/*
№9
Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
*/
let arr5 = [-1,2,0,3,14];
let res1 =0;
for (let elem of arr5){
    res1+=elem**2;
}
console.log(res1);

/*
 № 10
 Дан массив с числами. Найдите среднее арифметическое его элементов.
 */
 //1)
 let arr6 = [-1,2,0,3,14];
 let cout =0;
 let res2=0;
 for (let elem of arr6){
    res2+=elem;
    cout+=1;
 }
console.log(res2/cout);

//2)
let arr7 = [-1,2,0,3,14];
let res3 = 0;
for (let elem of arr7) {
res3 += elem;
}
console.log(res3/arr7.length);

/*
№11
Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
*/
let num=8;
let f=1;
for (let i=1; i<=num; i++){
    f*=i;
}
console.log(f);

/*
№12
Заполните массив числами от 10 до 1 с помощью цикла.
*/
let arr8 =[];
for (let i= 10; i>=1; i--){
    arr8.push(i);
}
console.log(arr8);

/*
№13
Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
*/
let arr9 = [-1,2,0,3,14];
let res4=0;
for (let elem of arr9){
    if (elem >0){
        res4+=elem;
    }
}
console.log(res4);

/*
№14
Дан массив числами, например:

let arr = [10, 20, 30, 50, 235, 3000];
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
*/
let arr10 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr10) {
    let str = String(elem);
    if (str[0]==1 || str[0]==2 || str[0]==5)
    console.log(str);
}

let arr11 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr11){
    if (String(elem)[0]==1 || String(elem)[0]==2 || String(elem)[0]==5){
        console.log(elem);
    }
}

/*
№15
Дан массив с числами. Выведите элементы этого массива в обратном порядке.
*/
let arr12 = [10, 20, 30, 50, 235, 3000];
for (let i = arr12.length-1; i>=0; i--){
    console.log(arr12[i]);
}
