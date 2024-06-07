'use strict'

window.addEventListener('DOMContentLoaded', () => {
   displayArray(arrayToSort)

   let merge = (arr1, arr2) => {
      let result = []
      let i = 0
      let j = 0

      while (i < arr1.length && j < arr2.length) {
         if (arr1[i] < arr2[j]) {
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

      return result
   }

   let mergeSort = (A) => {
      if (A.length == 1) {
         return A
      }

      let mid = Math.floor(A.length / 2)

      let sortedLeft = mergeSort(A.slice(0, mid))
      let sortedRight = mergeSort(A.slice(mid))

      return merge(sortedLeft, sortedRight)
   }

})
