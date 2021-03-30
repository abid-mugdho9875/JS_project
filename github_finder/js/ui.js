class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
    }
    showProfile(user) {
        this.cleraAlert()
        this.profile.innerHTML =
            `
        <div class = "card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-3" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Public repos:${user.public_repos}</span>
        <span class="badge badge-secondary">follwers repos:${user.followers}</span>
        <span class="badge badge-primary">following repos:${user.following}</span>
        <span class="badge badge-secondary">Public  repos:${user.public_gists}</span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item>company:${user.company}</li>
        <li class="list-group-item>organization:${user.organizations_url}</li>
        <li class="list-group-item>Follwers:${user.followers_url}</li>
        <li class="list-group-item>Subscription:${user.subscriptions_url}</li>
        
        </ul>
        </div>
        </div>
        </div>
        
        
        `
    }
    ClearProfile(){
        this.profile.innerHTML="";
    }
    showAleart(message,className){
        this.cleraAlert()
        let div = document.createElement('div')
        div.className=className;
        div.appendChild(document.createTextNode(message))
        let container = document.querySelector('.searchcontainer')
        let search = document.querySelector('.search')
        container.insertBefore(div,search)
        
    }
    cleraAlert(){
        let currentalert = document.querySelector(".alert")
        if(currentalert){
            currentalert.remove()
        }
    }
}