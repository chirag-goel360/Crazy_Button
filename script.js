const btn = document.querySelector('button');

// Set the background color and background Image of window (Screen)
document.body.style.backgroundColor = "#2b1331";
document.body.style.backgroundImage = "linear-gradient(315deg, #2b1331 0%, #b9abcf 74%)";

// Add an EventListener of mouseover so that on mouseover the button changes its position
btn.addEventListener('mouseover', function(){
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`; 
});

// Add an EventListener of click so that on clicking its text and background chnages
btn.addEventListener('click', function(){
    btn.innerText = 'Got Me';
    document.body.style.backgroundColor = 'green';
    document.body.style.backgroundImage = "linear-gradient(315deg, green 0%, pink 74%)";
});