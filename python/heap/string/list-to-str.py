# ****************************************************************************
# with str.join
# ****************************************************************************
list1 = ['1', '2', '3']
str1 = ''.join(list1)

# ****************************************************************************
# with reduce and add from operator
# ****************************************************************************
import operator
h=['a','b','c','d']
reduce(operator.add, h)
# >>> 'abcd'

# for python 3:
from functools import reduce

# ****************************************************************************
# with reduce and concat from operator
# ****************************************************************************
from operator import concat
a = ['a', 'b', 'c', 'd']
reduce(concat, a)
# for python 3:
from functools import reduce
