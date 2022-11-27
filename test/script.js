let fxn = () => {
    // console.log(document.querySelector('#task').value)
    const taskValue = document.querySelector('#task').value;
    let list = document.querySelector("#content");
    let li = document.createElement("li");
    li.innerHTML = taskValue;
    list.appendChild(li);
    
};

document.querySelector('#submit').addEventListener('click', fxn)