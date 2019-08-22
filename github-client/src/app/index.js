const UI = require('./ui');
const Github = require('./github');
const { client_id, client_secret } = require('./config.json');

const github = new Github(client_id, client_secret);
const ui = new UI();
/* 
console.log(github.fetchUser('jocode')); */


const user_form = document.getElementById('user_form');
user_form.addEventListener('submit', (e)=> {

    let text_search = document.getElementById('text_search').value;

    if (text_search !== ''){
        // Búsqueda del usuario
        github.fetchUser(text_search)
            .then(data => {
                if (data.userData.message === 'Not Found'){
                    ui.showMessaje("Usuario no encontrado", 'alert alert-danger col-md-12 mt-2');
                } else {
                    ui.showProfile(data.userData);
                    ui.showReposotories(data.repositories);
                }
                
            });
    }

    e.preventDefault();
});
