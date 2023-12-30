const key = document.querySelector("#key")

window.addEventListener('keydown', (e) => {
    key.innerHTML = `key is "${e.key === ' ' ? 'Space' : e.key }" 
                    and keycode is "${e.keyCode}"
                     and code is "${e.code}"`
})