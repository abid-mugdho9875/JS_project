//Select required object
let seachBtn = document.querySelector('#searchbutton')
let searchUser = document.querySelector('#searchUser')
let ui = new UI()


//Add event listener

seachBtn.addEventListener('click',(e)=>{
    let usertext = searchUser.value
    if(usertext != ''){
        fetch(`https://api.github.com/users/${usertext}`).then(result => result.json()).then(data => {
            if(data.message == 'Not Found'){
                  ui.showAleart("user not found!","alert alert-danger")
            }
            else{
                ui.showProfile(data);

            }
        })
        
    }else{
        //clear profile
        ui.cleraAlert()
        ui.ClearProfile()
    }
})