Constant button:document.querySelector
button.array.forEach(element => {
    function add(x,y){
        return x+y;
    }
    function substract(x,y) {
        return x-y;
    }
    function multiply(*){
        return x*y;
    }
    function divide (/){
        return x/y;
    }
})
function operation(x,operator,y)
{ switch (operator){
    case'+'
    return add(x,y)
    case '-'
    return substract(x,y)
    case 'x'
    return multiply(x,y)
    case '/'
    retuen divide(x/y)
}}
function calculator(calc){//perform a calculation as an arrayof operators and numbers.}
var operators=[{'*': (a,b)=> 'a*b';'/':(a,b)=>'a/b','-':(a,b)=>'a-b','+'(a,b)=>'a+b'
}]
New calculator=[]
currentoperation;
for(var i=0; i<operatorslength;i){
    for (var j=0; j< calc.length;j){
        if operator[i][calc[j]];
        else if (currentOp){
            new calc{Newcalc.length -1]= current operator(New Calc[New Calc.length-]calc [j])
            currentOp=null;
        }
        else{New calc.push(calc[j])
        }
        console.log(NewCalc);
        }
        calc=New calculation;
        New calculation=[];
    }
if (calc.length>1){
    console.log(error)
    return calc;
}else {return calc{0};}
}
var calculatorButton=document.getElementById(calculator),
user Input=document.getElementById(userInput),
result=document.getElementById(result);
calculaeButton.addEventListener('click',function() {
    result.InnerHtml='the answer is';
})