function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data som efterfrågades');
    }, 3000);
  });
}

/* function handler() {
  console.log('Jag hanterar vad som händer efter tre sekunder.');
}

function otherFunction() {
  console.log('Jag gör något annat så länge.');
}

console.log('Jag börjar vänta på något');
setTimeout(handler, 5000);
otherFunction(); */

const inputFieldElement = document.getElementById('inputField');
console.log(inputFieldElement);

inputFieldElement.addEventListener('click', handleClick);
inputFieldElement.addEventListener('input', (e) => {
  console.log('Input: ', e.target.value);
});

const buttonYes = document.getElementById('buttonYes');
const buttonNo = document.getElementById('buttonNo');
buttonNo.addEventListener('click', () => console.log('no'));
buttonYes.addEventListener('click', () => console.log('yes'));

function handleClick(e) {
  console.log(e);
  if (e.target.id == 'buttonYes') {
    console.log('JA!!!');
  } else if ((e.target.id = 'buttonNo')) {
    console.log('Hell no!!');
  }
  console.log('Klick inträffade', e.target);
}

const promise = fetchData();
console.log(promise);

promise.then(promiseHandler);

function promiseHandler(data) {
  //data finns endast här innuti
  console.log(data);
  //Skapa HTML beroende på data
  //hämta mer data
}

async function processData() {
  const data = await fetchData();
  console.log(data);
  //Skapa HTML beroende på data
}

processData();
