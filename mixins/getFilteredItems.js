export default {
  methods: {
    async getFilteredItems(itemsArr, filtersArr) {
      for (const [key, value] of Object.entries(filtersArr)) {
        if (value) {
          itemsArr = itemsArr.filter((itm) => itm[key] === value)
        }
      }
    },
  },
}
