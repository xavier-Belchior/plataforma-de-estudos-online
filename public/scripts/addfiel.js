//Procurar um button
document.querySelector("#add-time")

//Quando clicar no button
.addEventListener('click',
   clonafiel
)


    //Executar uma action
    function clonafiel(){

    //Duplicar os campos.Que campos?
    const newFieldContainer = document.querySelector('.shedule-time').cloneNode(true)//Bolean = "true" or "false"

    //pegaros campos.Que campos ?
        const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar 
        fields.forEach(function(field){
            field.value=""

        });

    //Colocar nos campos:Onde?
        document.querySelector('#shedule-times').appendChild(newFieldContainer)
    }
