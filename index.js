fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, callback) {
      for (key in arr) {
        callback(arr[key])
      }
      return arr
    },

    map: function(testArr, callback) {
        const arr = []
        for (key in testArr) {
           arr.push(callback(testArr[key]))
        }
        return arr
    },

    reduce: function(collection, callback, acc=0) {
      for (key in collection) {
        acc = callback(acc, collection[key], collection)

      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i=0; i<collection.length; i++){
        if (predicate(collection[i]) === true){
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let arr = []
      for (let i=0; i<collection.length; i++){
        if (predicate(collection[i]) === true){
           arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(collection) {
      let count = 0
      for (key in collection) {
        count += 1
      }
      return count
    },

    first: function(array, n) {
      let arr = []
      if (!Number.isInteger(n)) {
        arr = array[0]
      }
      else {
        for (let i=0; i < n; i++) {
          arr.push(array[i])
        }
      }
      return arr
    },

    last: function(array, n) {
      let arr;
      if (!Number.isInteger(n)) {
        arr = array.slice(-1)[0]
      }
      else {
          arr = array.slice(-n)
      }
      return arr
    },

    compact: function(array) {
      let arr = []
      for (let i=0; i<array.length; i++) {
        if (array[i]){
          arr.push(array[i])
        }
      }
      return arr
    },

    sortBy: function(array, callback) {
      let arr = array.slice()
      return arr.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },


    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },


    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

    giveMeMore: function(obj) {
      return true
    },

  }
})()
fi.libraryMethod()
