
"""
    An array contains both positive and negative numbers in random order. Rearrange the array elements
    so that positive and negative numbers are placed alternatively. Number of positive and negative numbers
    need not be equal. If there are more positive numbers they appear at the end of the array. If there are
    more negative numbers, they too appear in the end of the array.

    Example:

    Input:   [-1, 2, -3, 4, 5, 6, -7, 8, 9]
    Output: [9, -7, 8, -3, 5, -1, 2, 4, 6]
"""


def array_alt_arrange(arr):
    # solution cost: O(n) time and O(1) extra space

    # The following few lines are similar to partition process
    # of QuickSort.  The idea is to consider 0 as pivot and
    # divide the array around it.
    arr_len = len(arr)
    replace_idx = -1
    for idx in range(arr_len):
        if arr[idx] < 0:
            replace_idx += 1
            arr[replace_idx], arr[idx] = arr[idx], arr[replace_idx]
    pos_idx, neg_idx = replace_idx + 1, 0

    # Now all positive numbers are at end and negative numbers
    # at the beginning of array. Initialize indexes for starting
    # point of positive and negative numbers to be swapped
    # in case of input = [-1, 2, -3, 4, 5, 6, -7, 8, 9]
    # the array state here will be: [-1, -2, -7, 4, 5, 6, 2, 8, 9]
    # the pos_idx will point first positive index in the reformatted array
    while neg_idx < pos_idx < arr_len and arr[neg_idx] < 0:
        arr[neg_idx], arr[pos_idx] = arr[pos_idx], arr[neg_idx]
        pos_idx += 1
        neg_idx += 2
    return arr

