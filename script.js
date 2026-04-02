const ul = document.getElementById('list')
// console.log(ul);

const emailApi = 'https://flynn.boolean.careers/exercises/api/random/mail';
const getEmail = (api) => {

    for (let i = 0; i < 10; i++) {
        
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        const listcomplete = ul.appendChild(li);

        fetch(api)
            .then(resp => resp.json())
            .then(data => {
                
                listcomplete.innerText = data.response;
                
            })

        }

}

getEmail(emailApi)

const btn = document.getElementById('btn');
btn.addEventListener('click', function (e){

    e.preventDefault();

})