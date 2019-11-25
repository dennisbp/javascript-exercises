const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
const suffix = this.dataset.sizing || ''; //data-sizing declared in HTML
const meow = this.dataset.me;
console.log(meow);
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //get style variable
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));        //loop at input change
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));