# Statistic
* `np.min`
* `np.max`
* `np.median`
* `np.mean`
* `np.std`
* `np.var`

## np.max
``` python
import numpy as np

arr = np.array([[1,2,3],[4,5,6]])

arr.max(axis=1) # or
np.max(arr, axis=1)

-------------------- Output --------------------
array([3, 6])
```

## np.argmax
``` python
import numpy as np

arr = np.array([[1,2,3],[4,5,6]])
arr.argmax(axis=1)

-------------------- Output --------------------
array([2, 2], dtype=int64)
```

## 数组间运算

### 数组与数的运算
运算符作用到数组中的每一个元素
``` python
import numpy as np

arr = np.array([[1,2,3],[4,5,6]])
arr + 1

-------------------- Output --------------------
array([[2, 3, 4],
       [5, 6, 7]])
```

### 广播机制
执行broadcast的前提在于，两个ndarray执行的是element-wise的运算，Broadcast机制的功能是为了方便不同形状的ndarray(numpy库的核心数据结构)进行数学运算。

当操作两个数组时，numpy会逐个比较他们的shape，只有在下述情况下，两个数组才能够进行数组与数组的运算:
* 是数组与Scale的运算
* 维度相等 (dimension)
* 如果dimension不相等，那么数组间相对应的dimension中必须有一个为1

**Example**
``` python
Image  (3d array): 256 x 256 x 3
Scale  (1d array):             3
Result (3d array): 256 x 256 x 3

A      (4d array): 9 x 1 x 7 x 1
B      (3d array):     8 x 1 x 5
Result (4d array): 9 x 8 x 7 x 5

A      (2d array): 5 x 4
B      (1d array):     1
Result (2d array): 5 x 4

A      (3d array): 15 x 3 x 5
B      (3d array): 15 x 1 x 1
Result (3d array): 15 x 3 x 5
```

## 矩阵运算 matrix
矩阵必须是2维的，但是array可以是多维的
* `np.mat()` 将数组转换为矩阵类型

**Example**

``` python
import numpy as np

arr = np.mat([[1,2,3],
[4,5,6]])

```
* 或者直接用`np.array()`创建二维数组

### 矩阵乘法运算
(M行, N列) x (N行, L列) = (M行, L列)

如果数组的类型是`ndarray`,矩阵乘法可以用如下api:
* `np.matmul`
* `np.dot`

如果数组的类型是`matrix`,直接把两个数相乘就可以了，例如`a * b`.

## 合并与分割
实现数据的切分和合并，将数据进行切分合并处理
### 合并
* `numpy.hstack(tup)` Stack arrays in sequence horizontally (column wise)

**Example**

``` python
a = np.array((1,2,3))
b = np.array((2,3,4))
np.hstack((a,b))

-------------------- Output --------------------
array([1, 2, 3, 2, 3, 4])

------------------------------------------------

a = np.array([[1],[2],[3]])
b = np.array([[2],[3],[4]])
np.hstack((a,b))

-------------------- Output --------------------

array([[1, 2],
       [2, 3],
       [3, 4]])
```
* `numpy.vstack(tup)` Stack arrays in sequence vertically (row wise)

``` python
a = np.array([1, 2, 3])
b = np.array([2, 3, 4])
np.vstack((a,b))

-------------------- Output --------------------

array([[1, 2, 3],
       [2, 3, 4]])

------------------------------------------------
a = np.array([[1], [2], [3]])
b = np.array([[2], [3], [4]])
np.vstack((a,b))

-------------------- Output --------------------

array([[1],
       [2],
       [3],
       [2],
       [3],
       [4]])
```
* `numpy.concatenate((a1,a2,...), axis=0)`



* `numpy.split(ary, indices_or_sections, axis=0)`

**Example**

``` python
x = np.arange(8.0)
np.split(x, [3, 5, 6, 10])

-------------------- Output --------------------

[array([0.,  1.,  2.]),
 array([3.,  4.]),
 array([5.]),
 array([6.,  7.]),
 array([], dtype=float64)]
 ```