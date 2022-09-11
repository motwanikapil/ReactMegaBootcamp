function PadZeroes(id) {
  if (id > '0' && id < '9') {
    return '00' + id
  } else if (id > '10' && id < '99') {
    return '0' + id
  } else {
    return id
  }
}

export default PadZeroes
