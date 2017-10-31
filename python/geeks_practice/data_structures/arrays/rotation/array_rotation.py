"""
Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
    Rotation of the
        1 2 3 4 5 6 7
    array by 2 will make array
        3 4 5 6 7 1 2
"""


def arr_rotate_one_by_one(arr, r_factor):
    for _idx in range(r_factor):
        arr += [arr.pop(0)]
    return arr

