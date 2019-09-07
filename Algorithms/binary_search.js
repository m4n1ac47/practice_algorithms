let nums = [1,23,45,56,7]
let names = ['Аня', 'Вика', 'Василий', 'Филипп']

function search(array, item) {
    let low = 0
    let high = array.length - 1
    let count = 0;

    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        let current = array[mid]
        count++
        if (current === item) {
            return {
                item,
                index: mid,
                array,
                steps: count
            }
        } else if (current > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

console.log(search(nums, 56))
console.log(search(names, 'Филипп'))
