const binary_search = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    if (guess === item) return mid

    if (guess > item) high -= mid
    else low += mid
  }

  return null
}

const my_list = [1, 3, 5, 7, 9]

console.debug(binary_search(my_list, 3)) // 1
console.debug(binary_search(my_list, -1)) // null
