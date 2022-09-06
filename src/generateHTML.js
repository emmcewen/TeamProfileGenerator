function generateHTML(){

}

const generateManager = function(manager){
    return`
    <div class="card h-100">
        <div class="card-header">
            <h3 class="name">${manager.name}</h3>
            <h4 class="role"><img src="https://img.icons8.com/cute-clipart/30/000000/rocket.png"/>Manager</h4>
                </div>
                <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
}


module.exports=generateHTML