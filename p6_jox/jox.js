const jokes = document.querySelector('#jokes');

const jox = async()=>{
    const config = {headers :{Accept : 'application/json'},}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    const newli = document.createElement('LI');
    newli.append(res.data.joke);
    jokes.append(newli);
}

document.querySelector('button').addEventListener('click', ()=>{
    jox();
})