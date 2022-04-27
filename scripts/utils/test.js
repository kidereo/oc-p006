let hearts = document.getElementsByTagName('i');
let btn = document.getElementById('listen');

/*if(document.readyState === "complete") {
    hearts.forEach(item=>{
        item.addEventListener('click', event => {
            item.classList.replace('far', 'fas')
        })
    })
}*/

/*for (let heart of hearts) {
    heart.addEventListener('click', () => {
        heart.classList.replace('far', 'fas');
    })
}*/

function getAllParaElems() {
    //alert('There are ' + hearts.length + ' <i> elements in this document');
    for (let heart of hearts) {
        heart.classList.replace('far', 'fas')
    }
}


/*hearts.forEach(item=>{
    item.addEventListener('click', function handleClick(event) {
        console.log('box clicked', event);
        item.classList.replace('far', 'fas')
    })
});*/

/*btn.addEventListener('click', () => {
        for (let heart of hearts) {
            heart.classList.replace('far', 'fas')
        }
    }
);*/

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});