function GetRandomObject(arr) {
  const obj = arr[Math.floor(Math.random() * arr.length)]

  for (var i = arr.length - 1; i >= 0; --i) {
    if (arr[i].id === obj.id) {
      arr.splice(i, 1)
    }
  }
  return obj
}

export default GetRandomObject
