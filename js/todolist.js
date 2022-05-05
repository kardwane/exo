function fadeIn(id,spd){
    if(id.style.opacity == ""){
        id.style.opacity = 1;
        id.style.filter = "alpha(opacity=" + 100 + ")";
    }
    if(id.style.opacity < 1){
        var opac = 0; // initial opacity
        var cycle = setInterval(increaseOpacity,spd);
        function increaseOpacity() {
            opac += 0.01;
            if(opac >= 1){
                id.style.opacity = 1;
                opac = 1;
                clearInterval(cycle);
            }
            id.style.opacity = opac;
            id.style.filter = "alpha(opacity=" + (opac * 100) + ")"; // IE fallback
        }
    } else {
        clearInterval(cycle);
    }
}

function fadeOut(id,spd){
    if(id.style.opacity == ""){
        id.style.opacity = 1;
        id.style.filter = "alpha(opacity=" + 100 + ")";
    }
    if(id.style.opacity > 0){
        var opac = 1;
        var cycle = setInterval(decreaseOpacity,spd);
        function decreaseOpacity() {
            opac -= 0.01;
            if(opac <= 0){
                id.style.opacity = 0;
                opac = 0;
                clearInterval(cycle);
                console.log('id : '+id);
                id.remove();
            }
            id.style.opacity = opac;
            id.style.filter = "alpha(opacity=" + (opac * 100) + ")";
        }

    } else {
        clearInterval(cycle);

    }

}


function ajouterTodo(){
    //on récupere les éléments
    let titreTodo = document.getElementById('titreTodo');
    let descTodo = document.getElementById('descTodo');

    //on crée les nouveaux item html
    let newH3 = document.createElement('h3');
    newH3.innerText = titreTodo.value;

    let newP = document.createElement('p');
    newP.innerText = descTodo.value;

    let btnSupprimer = document.createElement('button');
    btnSupprimer.innerText="Supprimer";
    btnSupprimer.onclick=function () {
        fadeOut(this.parentElement,20);
        // this.parentElement.remove();
    };

    let newTodo = document.createElement('div');

    newTodo.appendChild(newH3);
    newTodo.appendChild(newP);
    newTodo.appendChild(btnSupprimer);

    newTodo.style.opacity = '-20';
    document.querySelector('#divTodo').appendChild(newTodo);

    fadeIn(newTodo,20);

}

document.querySelector('#btnAjout').addEventListener('click',function () {
    ajouterTodo();
});

document.querySelector('body').click();

//change la couleur de para 
document.querySelector('#para').style.color = 'salmon';