# IO
不建议使用numpy来读取数据，因为numpy主要用来进行运算
## 读取
* `numpy.genfromtxt(fname[, dtype, comments, ...])` Load data from a text file, with missing values handled as specified.

**Example**

``` python
data = np.getfromtext("test.csv", delimiter=",")
```

当我们读取本地的文件为float的时候，如果有缺失(或者是None),就会出现nan