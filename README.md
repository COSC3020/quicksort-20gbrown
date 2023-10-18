[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12339494&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

# Answer

The function starts with two checks to handle base cases. These checks are constant time operations, $O(1)$. The function then calculates the array length which is also $O(1)$. AFter the two checks and the array length calculation the functions enters a while loop until the stack is empty. The stack holds the indices of the subarray, this means the number of iterations is proportional to the number of subarrays, so $O(log n)$ for average case. In the worst case all the subarrays would only have one element, $O(n)$. Inside of the while loop the function selects a pivot element and moves all the elements less than the pivot to the left of the pivot, and elements that are greater are moved to the right. This partition iterates through the subarray once, so the worst case is $O(n)$. So the time complexity is $O(n log n)$ for the average case, and $O(n^2)$ for the worst case. Giving a $\Theta$ bound of $\Theta(n^2)$ for both the upper and lower bound. 
