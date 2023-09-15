const func1 = () => {
    const li = document.querySelectorAll('li');
    console.log(li[0].textContent);
}

const func2 = () => {
    const li = document.querySelectorAll('li');
    const arr = [];
    li.forEach((item) => {
        arr.push(item.textContent);
    });
    console.log(arr);
}


const func3 = () => {
    const li = document.querySelectorAll('.list-item');
    const arr = [];
    li.forEach((item) => {
        arr.push(item.textContent);
    });
    console.log(arr);
}


const func4 = () => {
    const li = document.querySelectorAll('.list-item');
    const arr = [];
    li.forEach((item) => {
        arr.push(item.className);
    });
    console.log(arr);
}

const func5 = () => {
    const li = document.querySelectorAll('.list-item');
    const arr = [];
    li.forEach((item) => {
        arr.push(item.getAttribute('data-test-id'));
    });
    console.log(arr);
}

const func6 = () => {
    const li = document.querySelectorAll('.list-item');
    const arr = [];
    li.forEach((item) => {
        if (item.classList[1] !== item.textContent) {
            arr.push(item.getAttribute('data-test-id'));
        }
    });
    console.log(arr);
}

func6()

const func7 = () => {
    const li = document.querySelectorAll('.list-item')
    li.forEach((item) => {
        item.textContent = `${item.getAttribute('data-test-id')} ${item.textContent}`
    });
}

const func8 = () => {
    const li = document.querySelectorAll('.list-item')
    li.forEach((item) => {
        if (item.classList[1] !== item.textContent) {
            item.remove()
        }
    });
}

const func9 = () => {
    const input1 = document.getElementById('secret-login');
    input1.value = 'You were hacked';
}

const func10 = () => {
    const btn = document.getElementById('button-send');

    btn.onclick = () => {
        const loginScreen = document.querySelector('.login-screen');
        loginScreen.innerHTML = 'You were hacked';
    }
}

const func11 = () => {
    const div = document.querySelector('#append-div');

    const newDiv = document.createElement('div');
    newDiv.id = 'just-text';

    const h1 = document.createElement('h1');
    h1.textContent = 'Hello';

    newDiv.appendChild(h1);

    div.appendChild(newDiv);
};

const func12 = () => {
    const div = document.querySelector('#append-div');
    const newUl = document.createElement('ul');
    newUl.id = 'list';

    for (let i = 1; i < 11; i++) {
        newUl.innerHTML += `
        <li>Child ${i}</li>
        `
    }

    div.appendChild(newUl);
};
