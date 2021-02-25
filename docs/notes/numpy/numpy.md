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

## 生成随机数组
### Uniform Distribution 均匀分布
* `np.random.rand(d0, d1, ..., dn)` 返回[0.0, 1.0)内的一组均匀分布的数。
* `np.random.uniform(low=0.0, high=1.0, size=None)` 从一个均匀分布[low, high)中随机采样，包含low，不包含high。

`size`为输出样本数目，为int或tuple类型，例如`size=(m,n,k)`输出mnk个样本，缺省时输出1个值。

返回值类型为ndarry，shape和参数`size`中描述一致

* `np.random.randint(low, high=None, size=None, dtype='i')` 从一个均匀分布中随机采样，生成一个整数或N维整数数组,数组范围：若high不为None时，取(low,high)之间随机整数，否则取值(0,low)之间随机整数。

### Normal Distribution 正态分布
* `np.random.randn(d0, d1, ..., dn)` 从标准正态分布中返回一个或多个样本值
* `np.random.normal(loc=0.0, scale=1.0, size=None)`
::: details
```
loc: float
此概率分布的均值(对应着整个分布的center)
scale: float
此概率分布的标准差(对应于分布的宽度，scale越大越矮胖，scale越小越瘦高)
size: int or tuple of ints
输出的shape， 默认为None, 只输出一个值
```
:::
* `np.random.standard_normal(size=None)` 返回指定形状的标准正态分布的数组

## Slice
``` python
# 2D array
arr = np.array([[1,2,3],[4,5,6]])
arr[0,:2] # array([1, 2])

# 3D array
arr = np.array([[[1,2,3],[4,5,6]],[[11,12,13],[14,15,16]]])
arr[1,1,1:] # array([15, 16])
```

## shape change
* `ndarray.reshape(shape)` 返回新的ndarray，并不转换排列，只是转换原数据的shape。不更改原始数据
* `ndarray.resize(shape)` 更改原始数据，并不转换排列，只是转换原数据的shape
* `shape.T` 转置，行和列互换

## type change
* `ndarray.astype(type)`
**Example**
``` python
example_array.astype(np.int32)
```

`ndarray`序列化到本地`ndarray.toString()`

::: tip
序列化就是bai将一个对象的状态（各个属性量）保存起来，然后在适当的时候再获得。
序列化分为两大部分：序列化和反序列化。序列化是这个过程的第一部分，将数据分解成字节流，以便存储在文件中或在网络上传输。反序列化就是打开字节流并重构对象。对象序列化不仅要将基本数据类型转换成字节表示，有时还要恢复数据。恢复数据要求有恢复数据的对象实例。
:::

## 数组的去重
* `np.unique()`

**Example**
``` python
temp = np.array([[1,2,3,4],[3,4,5,6]])
np.unique(temp)
```

## 逻辑计算
``` python
import numpy as np

arr = np.random.normal(0,1,(5,5))
```

Label any element greater than 0.5 as True, false otherwise.
``` python
arr > 0.5

-------------------- Output --------------------
array([[False, False,  True, False,  True],
       [False, False, False, False, False],
       [False, False,  True,  True,  True],
       [False, False, False, False,  True],
       [False,  True, False, False, False]])
```

Make the value of all elements that have value greater than 0.5 to be 1.1
``` python
arr[arr > 0.5] = 1.1
arr

-------------------- Output --------------------
array([[ 0.22447866, -0.53987885,  1.1       ,  0.15835748,  1.1       ],
       [-1.36955344, -0.86856819, -0.08942813,  0.34318336, -0.60165858],
       [-0.53066652, -0.24736068,  1.1       ,  1.1       ,  1.1       ],
       [ 0.09264952,  0.32801206, -1.72773952,  0.19903949,  1.1       ],
       [ 0.27650958,  1.1       , -0.49121022, -0.24844383,  0.16180386]])
```

### 通用判断函数
* `np.all(bool)` 只有全是True的情况下才返回True

**Example**
``` python
import numpy as np

arr = np.array([[1,2,3],[4,5,6]])
np.all(arr[1,:2] > 4)

-------------------- Output --------------------
False
```

* `np.any(bool)` 只要有一个True就返回True

**Example**
``` python
import numpy as np

arr = np.array([[1,2,3],[4,5,6]])
np.any(arr[1,:2] > 4)

-------------------- Output --------------------
True
```

## np.where
* `np.where(bool, True的位置的值, False的位置的值)`

**Example**

``` python
import numpy as np

arr = np.array([[1,2,3],[4,5,6]])
np.where(arr > 3, 1, 0)

-------------------- Output --------------------
array([[0, 0, 0],
       [1, 1, 1]])
```

* 复合逻辑需要结合`np.logical_and`和`np.logical_or`使用

**Example**
``` python
import numpy as np

arr = np.array([[1,2,3],[4,5,6]])
np.where(np.logical_and(arr > 2, arr < 5), 1, 0)

-------------------- Output --------------------
array([[0, 0, 1],
       [1, 0, 0]])
```


