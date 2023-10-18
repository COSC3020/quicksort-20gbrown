function quicksort(array) {
    /*if (array.length <= 1) {
        return array;
    }*/

    if (array == null || array.length <=1) {
        return array;
    }

    const len = array.length;
    const stack = [0, array.length - 1];

    while (stack.length > 0) {
        const end = stack.pop();
        const start = stack.pop();

        if (start < end) {
            const pivot = array[end];
            let i = start - 1;

            for (let j = start; j < end; j++) {
                if (array[j] <= pivot) {
                    i++;
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

            const temp = array[i + 1];
            array[i + 1] = array[end];
            array[end] = temp;

            const pivotIndex = i + 1;

            stack.push(start, pivotIndex - 1);
            stack.push(pivotIndex + 1, end);

            /*if (pivotIndex - 1 > start) {
                stack.push(start, pivotIndex - 1);
            }

            if (pivotIndex + 1 < end) {
                stack.push(pivotIndex + 1, end);
            }*/
        }
    }

    return array;
}
