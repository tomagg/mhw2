/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
function RicominciaQuiz(event)
{
    for(let i in mappa_risposte)
    {
        delete mappa_risposte[i];
    }
    for(let box of boxes)
    {
        let img=box.querySelector('.checkbox');
        if(img.src="images/checked.png")
        {
           box.style.backgroundColor='#f4f4f4';
           img.src="images/unchecked.png"
        }
        box.classList.remove('nonselezionato');
        box.addEventListener('click',Risposta);
    }
        let bottone=event.currentTarget;
        bottone.removeEventListener('click',RicominciaQuiz);
        let rimuovi=document.querySelector('.result');
        rimuovi.classList.add('hidden');
  }



function Risultato()
{
    let choidId=mappa_risposte['one'];
    if(mappa_risposte['two']==mappa_risposte['three'])
    {
        choidId=mappa_risposte['two'];
    }
    let titolo=document.querySelector('.result h1');
    let testo=document.querySelector('.result p');
    titolo.textContent=RESULTS_MAP[choidId].title;
    testo.textContent=RESULTS_MAP[choidId].contents;
    let risultato=document.querySelector('.result');
    risultato.classList.remove('hidden');
    let bottone= document.querySelector('.result button');
    bottone.addEventListener('click',RicominciaQuiz);

}
function Ricomincia(selezione)
{
    //itero di nuovo la lista e la confronto con l'immagine gia selezionata
    let lista= document.querySelectorAll('.choice-grid div');
    for(let key of lista)
    {
        if(selezione.dataset.questionId==key.dataset.questionId)
    {
        key.classList.remove('nonselezionato');
        if(key.querySelector('.checkbox').src="images/checked.png")
        {
            key.style.backgroundColor="#f4f4f4";
            key.querySelector('.checkbox').src="images/unchecked.png";
        }
    }

    }
}

function Risposta(event)
{
    let box=event.currentTarget;
    mappa_risposte[box.dataset.questionId]=box.dataset.choiceId;
    //Questa funzione serve a cambiare la scelta
    Ricomincia(box);
    //stiamo selezionando il checkbox e al click mettere l'immagine della selezione
    let checkbox= box.querySelector(".checkbox");
    checkbox.src="images/checked.png";
    box.style.backgroundColor="#cfe3ff";
    //facciamo un ciclo for per iterare la lista degli elementi non selezionati
    for(let item of boxes)
    {
        if(box!=item && item.dataset.questionId==box.dataset.questionId)
        {
            item.classList.add('nonselezionato');
        }
    }
    if(mappa_risposte.one && mappa_risposte.two && mappa_risposte.three)
    {
        for(let box of boxes)
        {
            box.removeEventListener('click',Risposta);
        }
    }
    Risultato();
}

let mappa_risposte={}; //questa mappa mi servirà per tracciare le risposte che do
let boxes= document.querySelectorAll(".choice-grid div");
for(let box of boxes)
{
    box.addEventListener('click',Risposta);
}