export default {
  methods: {
    getFilteredItems(itemsArr, filtersArr) {
      let arr = []
      for (const [key, value] of Object.entries(filtersArr)) {
        if (value) {
          arr = itemsArr.filter((itm) => itm[key] === value)
        }
      }
      console.log(arr)
      return arr
    },
  },
}
