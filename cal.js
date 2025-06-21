let oprator = ['/', '*', '-', '+']
let op = '';
let multiply = function() {
    let a = Number (operation[operation.indexOf("*") - 1]);
    let b = Number (operation[operation.indexOf("*") + 1]);
    operation.splice(operation.indexOf("*") - 1, 3, `${a * b}`);
};
let devision = function() {
    let a = Number (operation[operation.indexOf("/") - 1]);
    let b = Number (operation[operation.indexOf("/") + 1]);
    if(a == undefined) {a = b}
    operation.splice(operation.indexOf("/") - 1, 3, `${a / b}`);
};
let add = function() {
    let a = Number (operation[operation.indexOf("+") - 1]);
    let b = Number (operation[operation.indexOf("+") + 1]);
    operation.splice(operation.indexOf("+") - 1, 3, `${a + b}`);
};
let subtract = function() {
    let a = Number (operation[operation.indexOf("-") - 1]);
    let b = Number (operation[operation.indexOf("-") + 1]);
    operation.splice(operation.indexOf("-") - 1, 3, `${a - b}`);
};

const calculator = document.querySelector(".calculator")
calculator.addEventListener('click', (event) => {
    if((event.target.classList == "num") && !(op.length >= 16)) { 
        op += event.target.id;
        m = op.split(" ");
        operation = m.filter((item) => !(item === ''));
       if((oprator.includes(operation[operation.length - 1])) && (oprator.includes(operation[operation.length - 2]))) {
        operation.splice(-2, 1);
        r = operation.filter((item) => !(item === ''));
        op = r.join(' ');
        op += ' '
        }
        screen.textContent = op
       if(oprator.includes(operation[0])) {
        op = ''
        screen.textContent = op
        }
       

       
    }
    if(event.target.classList == "delete") {
      if(op.at(-1) == ' ') {
        op = op.slice(0, -3);
        screen.textContent = op
      } else {
        op = op.slice(0, -1);
        screen.textContent = op
      }
    }
    if(event.target.classList == "ac") {
        op = ''
        screen.textContent = op
    }
});

const equal = document.querySelector("#equal");
equal.addEventListener('click', () => {
 if(op) {
    if (operation.includes('*')) { multiply() } else {};
    if (operation.includes('/')) { devision() } else {};
    if (operation.includes('+')) { add() } else {};
    if (operation.includes('-')) { subtract() } else {};
    n = Number (operation[0]);
    m = n.toFixed(2);
    op = m.toString();
    screen.textContent = op
 } 
});


const screen = document.querySelector("#screen");
