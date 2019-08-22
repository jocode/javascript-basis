class UI {

    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">Ver perfíl</a>
                    <span class="badge badge-success">Seguidores: ${user.followers}</span>
                    <span class="badge badge-primary">Siguiendo: ${user.following}</span>
                    <span class="badge badge-info d-block"><a href="${user.blog}" class="text-white" target="_blank">Sitio web</a></span>
                </div>
            </div>
        `;
    }

    showReposotories(repositories){
        console.log(repositories);
        let template = "";
        repositories.forEach(repo => {
            template += `
                <div class="card card-body mt-2 animated bounceInUp">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-warning">Lenguajes: ${repo.language}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
                `;
        });
        document.getElementById("repositories").innerHTML = template;
    }

    showMessaje(msg, cssClass){
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(msg));
        
        const content = document.getElementById("main");
        content.insertBefore(div, this.profile);

        setTimeout(() => div.remove(), 3000);
    }

}

module.exports = UI;