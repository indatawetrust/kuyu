const kuyu = (obj, val) => {
  let is = true;

  for (let v in val) {
    if (v === '*') {
      for (let o in obj) {
        if (!new RegExp(val[v]).test(obj[o])) is = false;
      }
    } else {
      if (!new RegExp(val[v]).test(obj[v])) is = false;
    }
  }

  return is;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = kuyu;
} else {
  window.kuyu = kuyu;
}
