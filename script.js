const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const container = document.getElementById("container");

btn.addEventListener('click',() => {
    createNotificationTrue();
})

btn2.addEventListener('click',() => {
    createNotificationError();
})

btn3.addEventListener('click',() => {
    createNotificationWarning();
})

btn4.addEventListener('click',() => {
    createNotificationInfo();
})

function createNotificationTrue(){
    const notif = document.createElement('div');
    notif.classList.add("toast");

    notif.innerText = "This is a success message!"

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    },3000);
}

function createNotificationError(){
    const notif = document.createElement('div');
    notif.classList.add("toast2");

    notif.innerText = "This is a error message!"

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    },3000);
}

function createNotificationWarning(){
    const notif = document.createElement('div');
    notif.classList.add("toast3");

    notif.innerText = "This is a warning message!"

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    },3000);
}

function createNotificationInfo(){
    const notif = document.createElement('div');
    notif.classList.add("toast4");

    notif.innerText = "This is a Info message!"

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    },3000);
}