// accept user input (2 ways)
// 1. Easy Way = windows propmt
// 2. Professional way = HTML text box

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    // console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
};


