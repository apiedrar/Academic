const cont = document.querySelector('#jokes');
const btn = document.querySelector('#generateJoke');

const addJoke = async () => {
    const jokeText = await getJoke();
    cont.innerText = jokeText;
};

const getJoke = async () => {
 try {
     const price = await axios.get("https://icanhazdadjoke.com", { headers: { Accept: "application/json" } });
     return price.data.joke;
 } catch (e) {
     return `No jokes available due to ${e}, sorry! :(`;
 }
};

btn.addEventListener('click', addJoke);


const tvCont = document.querySelector('#tvShows');
const form = document.querySelector('#searchTV');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    try {
        const searchTerm = form.elements.q.value;
        const resp = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        respDisplay(resp.data);
    } catch (e) {
        alert(`Sorry, encountered some ${e}. Try again`)
    }
})

const respDisplay = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            tvCont.appendChild(img);
        }
    }
}

/* git init, git status, git add, git commit, git reset, git log, git  */