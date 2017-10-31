"""
We are given an array (or string), the task is to reverse the array.

Examples:

Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}

Input : arr[] = {3, 7, 12, 56, 19, 45}
Output : arr[] = {45, 19, 56, 12, 7, 3}
"""


def array_reverse(arr):
    start = 0
    end = len(arr) - 1
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    return arr
