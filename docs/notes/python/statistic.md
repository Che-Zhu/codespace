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