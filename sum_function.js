export const return_number_sum = (number) => {
    let total_sum = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            total_sum += i
        }
    }
    return total_sum
}