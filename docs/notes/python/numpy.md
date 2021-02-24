# Numpy

## ndarray
Numpy provides an n-dimensional array type, the ndarray, which discribes a collection of "items" of the same type.

**example**
``` python
import numpy as np 

score = np.array([
[1,2,3],
[4,5,6],
[7,8,9],
[10,11,12]])
```

### Properties
* ndarray.shape
* ndarray.ndim
* ndarray.size
* ndarray.itemsize
* ndarray.dtype

``` python
socre.shape # (4, 3)
score.ndim # 2
score.size # 12
score.dtype # int64
score.itemsize # 8
```