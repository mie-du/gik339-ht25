console.log('frontend');
const url = 'http://localhost:4000';

fetch(url + '/greetings').then((response) => {
  console.log(response);
});
