const input = document.getElementById('date');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let val = input.value;
    val = val.slice(0,4);
    val = new Date().getFullYear() - val;


    alert( `Age : ${val}` );
});