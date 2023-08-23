document.addEventListener('DOMContentLoaded', function(){
    const inpText = document.getElementById('item');
    const btnAdd = document.getElementById('agregar');
    const btnClear = document.getElementById('limpiar');

    btnAdd.addEventListener('click', function(val1){
        const innerUl = document.getElementById('contenedor');
        val1 = inpText.value;
        localStorage.setItem(val1, val1);

        innerUl.innerHTML+= `<p>${localStorage.getItem(val1)}</p>`;

        
        inpText.value = "";
    })

    btnClear.addEventListener('click', function(){
        localStorage.clear();
        document.getElementById('contenedor').innerHTML = "";
    })
})