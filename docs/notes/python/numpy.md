# Numpy

Numpy provides an n-dimensional array type, the ndarray, which discribes a collection of "items" of the same type.

## Properties
* ndarray.shape
* ndarray.ndim
* ndarray.size
* ndarray.itemsize
* ndarray.dtype

**example**
``` python
import numpy as np 

score = np.array([
[1,2,3],
[4,5,6],
[7,8,9],
[10,11,12]])

socre.shape # (4, 3)
score.ndim # 2
score.size # 12
score.dtype # int64
score.itemsize # 8
```

## ndarray shape
``` python
import numpy as np

a = np.array([[1,2,3],[4,5,6]])
b = np.array([1,2,3,4])
c = np.array([[[1,2,3],[4,5,6]],[[1,2,3],[4,5,6]]])

a.shape # (2, 3) # 二维数组
b.shape # (4, ) # 一维数组
c.shape # (2, 2, 3) # 三维数组
```
通过从外向内看每个中括号嵌套了几个下一级中括号。比如`c`的最外层嵌套了`[[1,2,3],[4,5,6]]`和`[[1,2,3],[4,5,6]]`,所以shape是`(2,2,3)`.

## ndarray type
``` python
import numpy as np

a = np.array([[1,2,3],[4,5,6]])

a.dtype # dtype('int32')
```
也可以手动指定data type, 比如下面两个例子:

`a = np.array([[1,2,3],[4,5,6]], dtype="float32")`

`a = np.array([[1,2,3],[4,5,6]], dtype=np.float32)`

## 基本操作
``` python
ndarray.method()
np.function_name() # np.array()
```

## 生成数组
### 生成0和1的数组
* `ones(shape[, dtype, order])`
* `zeros(shape[, dtype, order])`

**example**
``` python
import numpy as np

np.zeros(shape=(3, 4), dtype="float32") # 三行四列
np.ones(shape=[2, 3], dtype=np.int32) # 两行三列
```
### 从现有数组生成
* `array(object[, dtype, copy, order, subok, ndmin])` 深拷贝
* `asarray(a[, dtype, order])` 浅拷贝
* `copy(a[, order])` 深拷贝

**example**
``` python
import numpy as np

exist_array = np.zeros(shape=(2,3))

normal_array = np.array(exist_array)
as_array = np.asarray(exist_array)
copy_array = np.copy(exist_array)

# Change the value of an element
exist_array[1,1] = 99
```
and the value of these arrays are as following:

`exist_array`
``` python
array([[ 0.,  0.,  0.],
       [ 0., 99.,  0.]])
```

`normal_array`
``` python
array([[0., 0., 0.],
       [0., 0., 0.]])
```

`as_array`
``` python
array([[ 0.,  0.,  0.],
       [ 0., 99.,  0.]])
```

`copy_array`
``` python
array([[0., 0., 0.],
       [0., 0., 0.]])
```

### 生成固定范围的数组
* `np.linespace(start, stop, num, endpoint, retstep, dtype)` 生成等间隔的序列
* `np.arange(start, stop, num)` `arange`的`stop`值默认不取

::: details
```
start 序列的起始值
stop 序列的终止值， 该值包含在序列中如果endpoint = true
num 要生成的等间隔样例数量，默认为50
endpoint 是否包含stop值， 默认为true
retstep 如果为true， 返回样例，以及连续数字之间的步长
dtype 输出ndarray的数据类型
```
:::

**example**
``` python
import numpy as np

arr = np.linspace(0, 5, 6)
```
`arr`:
``` python
array([0., 1., 2., 3., 4., 5.])
```




