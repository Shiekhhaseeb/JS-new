const form=document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()


const height = +(document.querySelector('#height').value);
const weight = +(document.querySelector('#weight').value);

const result = document.querySelector('#result');

if (weight=== '' || weight <0 || isNaN(weight)) {
    result.innerHTML=`please give a valid height ${weight}`
}

else if (height=== '' || height <0 || isNaN(height)) {
    result.innerHTML=`please give a valid height ${height}`
}

else {
const bmi =(weight/((height*height)/1000)).toFixed(2)

  //show the oytput here
  results.innerHTML =`<span>${bmi}</span>`
}
});