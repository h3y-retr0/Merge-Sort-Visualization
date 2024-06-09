'use strict'

const openBtn = document.getElementById('openMenu')
const closeBtn = document.getElementById('closeMenu')
const sideMenu = document.getElementById('sideMenu')
const saveBtn = document.getElementById('saveBtn')
const inpt = document.getElementById('arrayInput')

let arrayToSort = [6,2,9,-2,4,3,8,1,0] // Default array
const arrayContainer = document.querySelector('#array-container')

const centerArray = () => {
   let screenWidth = window.innerWidth;
   arrayContainer.style.left = (screenWidth - arrayContainer.offsetWidth) / 2 + 'px';

}

const displayArray = (arr) => {
   
   arrayContainer.innerHTML = ''


   for (let i = 0; i < arr.length; i++) {
      let square = document.createElement('div')
      square.classList.add('array-element')

      let p = document.createElement('p')
      let txt = arr[i].toString()

      p.innerText = txt
      square.appendChild(p)  
      square.style.left = (i * 51) + 'px';
      arrayContainer.appendChild(square)
   }


   const containerWidth = (51 * arr.length)

   arrayContainer.style.width = containerWidth + 'px'

   centerArray()

}

window.addEventListener('resize', centerArray);

// Centrar array



openBtn.addEventListener('click', () => {
   sideMenu.style.transform = 'translateX(0)'

   // document.body.style.opacity = '0.3'

})

closeBtn.addEventListener('click', () => {
   sideMenu.style.transform = 'translateX(-100%)'

})

function validarFormato(valor) {
   // Expresión regular para comprobar el formato del input
   const regex = /^(\d+,)*\d+$/;
   return regex.test(valor);
}

saveBtn.addEventListener('click', () => {

   let val = inpt.value
   val = val.replace(/,/g, '')
   inpt.value = ''
   arrayToSort.length = 0

   // Validate
   
   if (!validarFormato(val)) {
      console.log("Error")
      return
   }

   for (let j = 0; j < val.length; j++) {
      arrayToSort.push(parseInt(val[j]))
   }

   displayArray(arrayToSort)

})





