module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let same = [];
  let counterForSame = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
          same.push(bracketsConfig[i][0]);
          counterForSame.push(0);
      }
    else{
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }
  }

  let buffer = [];
  for (let char of str) {
    if ((same.indexOf(char) !== -1)) {
        if (counterForSame[same.indexOf(char)] == 0) {
            counterForSame[same.indexOf(char)]++;
            buffer.push(char);
        } else
        {
            counterForSame[same.indexOf(char)]--;
            if (buffer[buffer.length-1] == char)
                buffer.pop()
                else
                return false;
        }
    } else {
        if (open.indexOf(char) !== -1) {
            buffer.push(char);
        }
        if (close.indexOf(char) !== -1) {
            if (close.indexOf(char) == open.indexOf(buffer[buffer.length-1]))
                buffer.pop()
                else
            return false;
        }
    }
  }
  if (buffer.length == 0 ) return true
  else
  return false;
}
