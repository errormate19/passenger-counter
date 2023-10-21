let savel= document.getElementById("save-el");
let count =0;
let username="Payal"

console.log(username+msg);
function increment(){
   count=count+1;
   document.getElementById("count-el").innerText=count;

}
let msg="you have 3 new notifications";


 function save(){
    let countstr= count+ "-";
   savel.textContent +=  countstr;
   document.getElementById("count-el").innerText=0;
   count =0;
 }