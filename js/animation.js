
const split = (A) => new Promise((resolve) => {

   let clones = []

   A.forEach((item) => {
      let clone = item.cloneNode(true);
      let itemRect = item.getBoundingClientRect();
      let containerRect = arrayContainer.getBoundingClientRect();


      clone.style.position = 'absolute';
      clone.style.zIndex = 1
      clone.classList.add('clone')
      
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
   }, animationTime)


})

const merge = (arr1, arr2, target) => new Promise((resolve) => {
   
   let result = []
   let i = 0
   let j = 0

   while (i < arr1.length && j < arr2.length) {
      if (arr1[i].querySelector('p').textContent < arr2[j].querySelector('p').textContent) {
         result.push(arr1[i])
         i++
      } else {
         result.push(arr2[j])
         j++
      }
   }

   while (i < arr1.length) {
      result.push(arr1[i])
      i++
   }

   while (j < arr2.length) {
      result.push(arr2[j])
      j++
   }

   result.forEach((el, i) => {
      let targetElement = target[i]
      setTimeout(() => {  
         let newLeft = parseInt(window.getComputedStyle(targetElement).left);
         let newTop = parseInt(window.getComputedStyle(targetElement).top);

         el.style.left = newLeft + 'px'
         el.style.top = newTop + 'px'
         el.style.zIndex = 2
         
         setTimeout(() => {
            el.style.backgroundColor = '#80ffdb'
         }, animationTime-100)

      }, i * animationTime)

   })

   
   setTimeout(() => {
      for (x of target) {
         x.remove()
      }
      resolve(result)
   }, result.length * animationTime)

}) 




const mergeSortAnimation = async (A) => {
   if (A.length == 1) {
      return A
   }

   let [left, right, target] = await split(A)

   let sortedLeft = await mergeSortAnimation(left)
   let sortedRight = await mergeSortAnimation(right)

   return await merge(sortedLeft, sortedRight, target)

}


