module.exports = function check(str, bracketsConfig) {
  let arr = []
    let brackets = []

    for(let k = 0; k === 0;) {
        k = 1

        for(let i = 0; i < bracketsConfig.length; i++) {
        brackets[i] = bracketsConfig[i][0] + bracketsConfig[i][1]
        arr = str.split(brackets[i])
        if(arr.length > 1) {
          k = 0
        }
        str = arr.join('')
      }

      }

      return str === '' ? true : false
}
