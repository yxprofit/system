import Vue from 'vue'

export default (Vue) => {
  Vue.filter('filterLen', char => {
    if (char && char.length > 8 && typeof char === 'string') {
      return char.substr(0, 8) + '...'
    } else {
      return char || ''
    }
  })
}
