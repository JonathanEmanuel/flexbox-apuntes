const cmbJustify = document.querySelector('#cmb-justify-content');
const cmbFlexWrap = document.querySelector('#cmb-flex-wrap');

const flexContainer = document.querySelector('.flex-container');
const range = document.querySelector('#range');
const porcentaje = document.querySelector('#porcentaje');
const chkHeight = document.querySelector('#chk-height');




range.addEventListener('change', function(){
    const width = range.value;
    flexContainer.style.width = `${width}%`;
    porcentaje.innerText = `${width}%`;
})

cmbJustify.addEventListener('change', function(){
    const propiedad = cmbJustify.value;
    flexContainer.style.justifyContent = propiedad;
})

cmbFlexWrap.addEventListener('change', function(){
    const propiedad = cmbFlexWrap.value;
    flexContainer.style.flexWrap = propiedad;
})

chkHeight.addEventListener('change', function(){
    valor = chkHeight.checked;
    flexContainer.style.height = valor ? '600px' : '300px'

})