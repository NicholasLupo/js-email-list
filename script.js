const ul = document.querySelector('.list')
// console.log(ul);

const emailApi = 'https://flynn.boolean.careers/exercises/api/random/mail';
fetch(emailApi)
    .then(resp => resp.json())
    .then(data => {

        console.log(data.response);

    })