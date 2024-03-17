const users = document.querySelector('.user-list');
const userName = document.querySelector('#user');

const userArray = [];

const getUserData = async() => {
    try{
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();

        if(data){
            users.innerHTML = "";
        }

        data.map( user => {
            const li = document.createElement('li');

            userArray.push(li);

            li.insertAdjacentHTML('afterbegin', 
                `
                <div class="user-data">
                    <img src=${user.avatar_url} alt=${user.avatar_url} />
                    <div>
                        <p>${user.login}</p>
                        <a href=${user.html_url} target="_blank">${user.html_url}</a>
                    </div>
                </div>
                `
            )

            users.appendChild(li);
        })

    }catch(error){
        console.log(error);
    }
}

// userName.addEventListener('input', (e) => {
//     const val = e.target.value;
    
//     userArray.map( currentUser => {
//         currentUser.innerText.toLowerCase().includes(val.toLowerCase()) ?
//         currentUser.classList.remove('hide') : 
//         currentUser.classList.add('hide');
//     })
// })
const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout)
    }
}

const getUser = (query) => {
    userArray.map( currentUser => {
        currentUser.innerText.toLowerCase().includes(query.toLowerCase()) ?
        currentUser.classList.remove('hide') : 
        currentUser.classList.add('hide');
    })
}

const debouncedGetData = debounce(getUser, 500);

userName.addEventListener('keyup', (event) => {
    debouncedGetData(event.target.value);
})



getUserData();