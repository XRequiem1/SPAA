document.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName == 'A'){
        console.log(event.target.href);
    }

});

const route = (event) => {
    window.history.pushState({}, '', event.target.href);
}

const routers = {
    '/': 'main.html',
    '/Registration': 'reg.html',
    '/login': 'login.html',
    '/posts': 'posts.html',
}

const handleLocation = async () => {
    let path = window.location.pathname;
    if (path === '/posts'){
        getPosts();
    } else {
        let html = await fetch(routes[path]).then(data.text());
        document.querySelector('.wrap').innerHTML = html
    }
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

const getPosts = () => {
document.querySelector('.wrap').innerHTML = '<h1>Мои посты</h1><hr>'
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => data.printPosts(data))
}
function printPosts(posts){
    posts.forEach(post => {
        return document.querySelector('.wrap').insertAdjacentHTML('beforeend',
        `<div>
            <h4 class='title'> ${post.title}</h4>
            <p class='text'> ${post.body} </p>
            <button class='more' id=${post.id}> Read more </button>
        </div>
        <hr>`
        )
    })
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('more')){
        let elem = event.target
        console.log(event.target.id)
        getPost(event.target.id)
    }
})

function getPost(id){
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(post =>
                document.querySelector('.wrap').innerHTML =
                        `<div class='block'>
                            <h4 class='title'> ${post.title}</h4>
                            <p class='text'> ${post.body} </p>
                        </div>
                        <hr>`
                        )
                    })
}

function getComments(id){
    fetch('https://jsonplaceholder.typicode.com/posts')
                .then(data => data.json())
                .then(coms => printComs(coms))
}

function printComs(coms){
    coms.forEach(com => {
        return document.querySelector('.wrap').insertAdjacentHTML('beforeend',
        `<div class='block-com'>
                <h4 class='title'> ${post.title}</h4>
                <p class='text'> ${post.body} </p>
        </div>
        <hr>`
        )
    })
}





////https://jsonplaceholder.typicode.com/posts/1 - get post
//https://jsonplaceholder.typicode.com/posts/1/comments - comments
//registration
let users = [],
    isAuth = false;
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_reg')){
        let form = document.forms.registration,
        login = form.elements[0].value,
        email = form.elements[1].value,
        psw = form.elements[2].value,
        psw2 = form.elements[3].value;
        event.preventDefault();
        if (psw == psw2 && psw !== ''){
            users.push.({ login,email,psw})
            isAuth = true;
        } else {
            isAuth = false;
        }
        console.log(users)
        console.log(isAuth)
    }
})

//login
let user = {
        login: 'user',
        psw: '123'
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        let form = document.forms.login,
        login = form.elements[0].value,
        psw = form.elements[1].value;
    event.preventDefault();
    if (login === user.login && psw === user.psw
        isAuth = true;
    } else {
    isAuth = false;
    }
    console.log(isAuth)
    }
})

































































