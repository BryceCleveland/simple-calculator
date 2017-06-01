const output = document.getElementById('output');

const btns = document.querySelectorAll('.btn');
let firstNum = null;
let calcState = {
    numFlag:  false,
    arithmetic:  null,
}

function multiplication (x,y) {
    return x * y;
}

function division (x,y) {
    return x / y;
}

function subtraction (x,y) {
    return x - y;
}

function addition (x,y) {
    return x + y;
}

//Start of button assignment
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (e) {
        if (isNaN(e.target.innerHTML)) {
            calcFunctions(e.target.innerHTML);
        } else {
            calcNumbers(e.target.innerHTML);
        }
    }
}
//End of button assignment

//Start of numbers logic    
   function calcNumbers (num) {
      if (calcState.numFlag) {
          output.innerHTML = num;
          calcState.numFlag = false;
          return;
      }
       
       if (output.innerHTML === '0' && num === '.') {
           output.innerHTML = output.innerHTML + num;
           return;
       }
       
       if (output.innerHTML === '0') {
       output.innerHTML = num;
       return;
       }
       output.innerHTML = output.innerHTML + num;
   }
//End of numbers logic

//Start of operator logic   
   function calcFunctions (func) {
       switch(func) {
           
           case 'backspace':
           case 'DEL':
               output.innerHTML =  output.innerHTML.substring(0, output.innerHTML.length - 1);
               if (output.innerHTML === '') {
                   output.innerHTML = '0';
               }
               
               if (output.innerHTML === 'Infinit') {
                   output.innerHTML = '0';
               }
               
               if (output.innerHTML === 'Na') {
                   output.innerHTML = '0';
               }
             
               break;
               
            case '.':
                 if (!output.innerHTML.includes('.')) {
                calcNumbers(func);
                 }
            break;
               
            case '+':
                console.log('Addition!');
                firstNum = output.innerHTML;
                calcState.numFlag = true;
                calcState.arithmetic = addition;
                break;
                
            case 'enter':
            case '=':
                equalsFn(calcState.arithmetic);
                break;
            
            case '\u002a':
            case 'x':
                console.log('Multiply!')
                firstNum = output.innerHTML;
                calcState.numFlag = true;
                calcState.arithmetic = multiplication;
                break;
                
            case '/':
            case '\u00F7':
                console.log('Division!')
                firstNum = output.innerHTML;
                calcState.numFlag = true;
                calcState.arithmetic = division;
                break;
                
            case '-':
                console.log('Minus')
                firstNum = output.innerHTML;
                calcState.numFlag = true;
                calcState.arithmetic = subtraction;
                break;
                
            case '%':
                console.log('Percentage')
                firstNum = output.innerHTML;
                calcState.numFlag = true;
                output.innerHTML = firstNum / 100;
                break;
                
            case '\u221a':
                firstNum = output.innerHTML;
                calcState.numFlag = true;
                output.innerHTML = Math.sqrt(firstNum);
                break;
                
            case 'RND':
                firstNum = output.innerHTML;
                calcState.numFlag = true;
                output.innerHTML = Math.round(firstNum);
                
            default:
                break;
       }
  }
//End of operator logic


//Start of equals function
function equalsFn (arithmetic) {
    output.innerHTML = arithmetic(Number(firstNum), Number(output.innerHTML))
}
//End of equals function
