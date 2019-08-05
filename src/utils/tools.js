// Copyright (c) 2018-2020 Double.  All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

const repo = exports
repo.some = function (value, initValue) {
  if (value) {
    return value
  } else {
    return initValue
  }
}
