let users=[]
function showLogin(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then((data)=>displayUsers(data))
    .catch((error)=>console.log(error));
}
function displayUsers(data){
    let str=`
    <div class="container">
    <div class="row d-flex justify-content-center">
    <div class="card m-5" style="width: 450px;">
    <div class="card-body text-center">
    <select class="w-100 bg-info text-white p-2">`;
    data.map((value)=>{
        str+=`<option value=${value.id}>${value.name}</option>`
    });
    str+=`</select>
    <div class="mt-5">
    <button class="btn btn-outline-primary w-100">Log in</button>
    </div>
    </div>
    </div>
    </div>
    </div>`;
    
    root.innerHTML=str;
}