
const sortBtn = document.getElementById('sort-btn')
const unsortBtn = document.getElementById('unsort-btn')
let sorted = false;

let arrayDivs = document.getElementsByClassName('array-element')

sortBtn.addEventListener('click', () => {
   if (sorted) {
      return   
   }

   let list = []
   for (elem of arrayDivs) {
      list.push(elem)
   }
   mergeSortAnimation(list)
   sorted = true
})


unsortBtn.addEventListener('click', () => {
   let clones = document.getElementsByClassName('clone')

   if (clones.length != arrayDivs.length && clones.length > arrayDivs.length - clones.length) {
      return
   }

   let items = []
   
   for (div of arrayDivs) {
      items.push(parseInt(div.querySelector('p').textContent))
   }

   for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
   }

   displayArray(items)
})