export default function (array, item) {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        let current = array[mid]

        if (current === item) {
            return mid
        } else if (current > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}
