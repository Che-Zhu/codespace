# Index

## 修改行列索引值
不能单独修改索引，必须整体修改

**Example**
``` python
>>> stock_pd

	    2021-01-01 	2021-01-04 	2021-01-05 	2021-01-06 	2021-01-07
stock0 	-0.757791 	-0.595505 	0.143917 	0.357930 	-0.004193
stock1 	-0.224089 	-0.342860 	0.751878 	2.046000 	0.026544
stock2 	0.083827 	0.040758 	-0.068885 	-1.205482 	0.790910
stock3 	0.755957 	-1.317322 	-0.018459 	1.078460 	0.649704
stock4 	0.443422 	-0.510013 	1.259945 	0.253739 	-1.540579
stock5 	-0.265356 	-1.497401 	-0.588598 	-0.273015 	0.895846

>>> stock_pd.index
Index(['stock0', 'stock1', 'stock2', 'stock3', 'stock4', 'stock5'], dtype='object')

>>> stock_name_new = ['stock_{}'.format(i) for i in range(6)]

>>> stock_pd.index = stock_name_new
>>> stock_pd.index
Index(['stock_0', 'stock_1', 'stock_2', 'stock_3', 'stock_4', 'stock_5'], dtype='object')
```

## 重设索引
* `reset_index(drop=False)`
    * 设置新的下标索引
    * drop: 默认为False，不删除原先的索引值并把它变为一列并添加新的默认索引。为True时会删除原先的索引值。

## 设置新索引
* `set_index(keys, drop=True)`
    * keys: 列索引名称或索引名称的列表
    * drop： boolean，default True. 当作新的索引，删除原来的列