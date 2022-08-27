export default {
  methods: {
    getFilteredItems(items, filter) {
      let arr = []
      for (const [key, value] of Object.entries(filter)) {
        if (value) {
          arr = items.filter((itm) => itm[key] === value)
        }
      }
      return arr
    },
  },
}
