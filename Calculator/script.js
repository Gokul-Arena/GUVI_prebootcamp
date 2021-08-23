const container = document.createElement("div");
container.setAttribute("class", "container");

const output = document.createElement("div");
output.setAttribute("class","output");

const previousOutput = document.createElement("div");
previousOutput.setAttribute("class", "previousOutput");

const currentOutput = document.createElement("div");
currentOutput.setAttribute("class", "currentOutput");

const buttons = document.createElement("div");
buttons.setAttribute("class", "buttons");

const clear = document.createElement("button");
clear.setAttribute("class", "spanTwo");
clear.innerText = "/";
buttons.appendChild(clear);

buttons.innerHTML = `
<button>DEL</button>
<button>/</button>
<button>1</button>
<button>2</button>
<button>3</button>
<button>*</button>
<button>4</button>
<button>5</button>
<button>6</button>
<button>-</button>
<button>7</button>
<button>8</button>
<button>9</button>
<button>+</button>
<button>.</button>
<button>0</button>`

const equal = document.createElement("button");
equal.setAttribute("class", "spanTwo");
equal.innerText = "=";
buttons.appendChild(equal);