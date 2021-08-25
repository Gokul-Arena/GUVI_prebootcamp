const container = document.createElement("div");
container.setAttribute("class", "container");
container.innerHTML = `
<div class="output">
<div class="previousOutput">ff</div>
<div class="currentOutput">ff</div>
</div>
<button class="spanTwo">AC</button>
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
<button>0</button>
<button class="spanTwo">=</button>`
document.body.appendChild(container);