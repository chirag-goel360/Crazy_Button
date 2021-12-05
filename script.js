const btn = document.querySelector('button');

document.body.style.backgroundColor = "#2b1331";
document.body.style.backgroundImage = "linear-gradient(315deg, #2b1331 0%, #b9abcf 74%)";

btn.addEventListener('mouseover', function(){
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`; 
});

btn.addEventListener('click', function(){
    btn.innerText = 'Got Me';
    document.body.style.backgroundColor = 'green';
    document.body.style.backgroundImage = "linear-gradient(315deg, green 0%, pink 74%)";
});