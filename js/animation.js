
window.addEventListener('DOMContentLoaded', () => {
   
   const sortBtn = document.getElementById('sort-btn')
   const arrayContainer = document.getElementById('array-container')

   
   const split = (A) => new Promise((resolve) => {

      let clones = []

      A.forEach((item) => {
         let clone = item.cloneNode(true);
         let itemRect = item.getBoundingClientRect();
         let containerRect = arrayContainer.getBoundingClientRect();


         clone.style.position = 'absolute';
         clone.style.backgroundColor = 'red'
         clone.style.zIndex = 1

         clone.style.top = `${itemRect.top - containerRect.top}px`;
         clone.style.left = `${itemRect.left - containerRect.left}px`;

         arrayContainer.appendChild(clone);
         clones.push(clone)
     });

      


      let mid = Math.floor(A.length / 2)

      let left = clones.slice(0, mid)
      let right = clones.slice(mid)


      for (let div of left) {

         let currentLeft = parseInt(window.getComputedStyle(div).left);
         let currentTop = parseInt(window.getComputedStyle(div).top);

         div.style.left = (currentLeft - 40) + 'px';
         div.style.top = (currentTop + 95) + 'px';
      }


      for (let div of right) {
         let currentLeft = parseInt(window.getComputedStyle(div).left);
         let currentTop = parseInt(window.getComputedStyle(div).top);

         div.style.left = (currentLeft + 40) + 'px';
         div.style.top = (currentTop + 95) + 'px';
      }

      setTimeout(() => {
         resolve([left, right, A])
      }, 700)


   })

   const merge = (arr1, arr2, target) => new Promise((resolve) => {

      console.log(arr1, arr2, target)
      return
   }) 

   


   const mergeSortAnimation = async (A) => {
      if (A.length == 1) {
         return A
      }

      let tst = await split(A)

      let sortedLeft = await mergeSortAnimation(tst[0])
      let sortedRight = await mergeSortAnimation(tst[1])
      let target = tst[2]
      return await merge(sortedLeft, sortedRight, target)
      


   }

   sortBtn.addEventListener('click', () => {
      const arrayDivs = document.getElementsByClassName('array-element')
      let list = []
      for (elem of arrayDivs) {
         list.push(elem)
      }
      mergeSortAnimation(list)
   })

   

})