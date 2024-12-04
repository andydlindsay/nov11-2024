console.log('inside ajax-practice.js');

// $.ajax({
//   method: 'GET',
//   url: 'https://www.dnd5eapi.co/api/monsters/adult-black-dragon/',
//   success: (response) => {
//     console.log(response);
//   },
//   error: (err) => {
//     console.log(err);
//   }
// });

$.ajax({
  method: 'GET',
  url: '/food-items'
}).then((response) => console.log(response))
  .catch((err) => console.log(err));

console.log('bottom of the file');
