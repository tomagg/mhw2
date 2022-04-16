function RicominciaQuiz(event)
{
    for(let i in Answer)
    {
        delete Answer[i];
    }

    for (let box of lista_checkbox){

        let imgage = box.querySelector('.checkbox');
        if(imgage.src="./images/checked.png")
        {   
            box.style.backgroundColor="#f4f4f4";
            imgage.src = "./images/unchecked.png";
        }
        box.classList.remove("nonselezionato");
        box.addEventListener("click", Click);
    }
    let button = event.currentTarget;
    button.removeEventListener("click", RicominciaQuiz);
    let aggiungi = document.querySelector('.result');
    aggiungi.classList.add("hidden");
}

function Risultati()
{
    let choiceId = Answer['one'];
    if(Answer['two']==Answer['three'])
    {
        choiceId= Answer['two'];
    }
    let titolo = document.querySelector('.result h1');
    let contenuto = document.querySelector('.result p');
    titolo.textContent = RESULTS_MAP[choiceId].title;
    contenuto.textContent = RESULTS_MAP[choiceId].contents;
    let result = document.querySelector('.result');
    result.classList.remove("hidden");
    let button = document.querySelector('.result button');
    button.addEventListener("click", RicominciaQuiz);
}
function Restart_Q(parametro)
{
    let lista=document.querySelectorAll('.choice-grid div')
    for(let key of lista)
    {
        if(parametro.dataset.questionId==key.dataset.questionId)
     {
            key.classList.remove("nonselezionato");
        if( key.querySelector('.checkbox').src="./images/checked.png")
        {
            key.style.backgroundColor="#f4f4f4";
            key.querySelector('.checkbox').src="./images/unchecked.png";
        
        
        }
      }
    
    }
}
function Click(event)
{
    let box=event.currentTarget;
    Answer[box.dataset.questionId]=box.dataset.choiceId
    Restart_Q(box);
    let checkbox= box.querySelector('.checkbox');
    checkbox.src="./images/checked.png";
    box.style.backgroundColor="#cfe3ff";
    for(let key of lista_checkbox)
    {
        if(box!=key && key.dataset.questionId==box.dataset.questionId)
        {
            key.classList.add('nonselezionato');
        }
    }
    if(Answer.one && Answer.two && Answer.three)
    {
        for (let box of lista_checkbox)
        {
            box.removeEventListener('click',Click);
        }
    }
        Risultati();
        }

let Answer = {};// mappa usata per memorizzare choice e question
let lista_checkbox = document.querySelectorAll('.choice-grid div');
for (const box of lista_checkbox){

    box.addEventListener("click",Click);
    
}
