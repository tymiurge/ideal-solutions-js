import unittest
from data_structures.arrays.arrangement import alternative_rearrangement as sut


class AlternativeRearrangementTest(unittest.TestCase):

    def test_array_alt_arrange(self):
        input_arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9]
        expected_arr = [9, -7, 8, -3, 5, -1, 2, 4, 6]
        actual_arr = sut.array_alt_arrange(input_arr)
        self.assertEqual(expected_arr, actual_arr)
