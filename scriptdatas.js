let imagens = document.querySelectorAll('.imgi');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

for (let a=0; a < imagens.length; a++) {
    imagens[a].addEventListener('click', function abrir(){
        srcVal = imagens[a].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    })
}

btClose.addEventListener('click', function fechar(){
    modal.classList.toggle('modal_active');
})

/* var label1 = document.getElementById('l1');
var label2 = document.getElementById('l2');
var label3 = document.getElementById('l3');
var label4 = document.getElementById('l4');
var festas = document.getElementById('festas');
var páscoa = document.getElementById('pascoa');

//funções
function labels(labelx){
    labelx.style.backgroundColor = 'var(--color02)';
    labelx.style.color = 'white';
    labelx.style.border = '1px solid white';
}

function labelsremove(labelx){
    labelx.style.backgroundColor = 'transparent';
    labelx.style.color = 'black';
    labelx.style.border = '2px solid var(--color02)';
}

function filtrarTudo(){
    labels(label1);
}

function filtrarFestas(){
    labels(label2);
    labelsremove(label1);

    páscoa.style.display = 'none';
}
function filtrarPáscoa(){
    labels(label3);
    labelsremove(label1);

    festas.style.display = 'none';
}
 */