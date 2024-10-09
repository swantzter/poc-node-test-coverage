1. Run `npm t` - alias to `node --test --experimental-test-coverage --test-coverage-include='*.js' --test-coverage-exclude='*.test.js'`

2. Get the following output:

```tap
TAP version 13
# Subtest: Add function
    # Subtest: Adds two numbers
    ok 1 - Adds two numbers
      ---
      duration_ms: 0.9237
      ...
    1..1
ok 1 - Add function
  ---
  duration_ms: 2.0894
  ...
1..1
# tests 2
# suites 0
# pass 2
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 65.412201
# start of coverage report
# -------------------------------------------------------
# file   | line % | branch % | funcs % | uncovered lines
# -------------------------------------------------------
# add.js | 100.00 |   100.00 |  100.00 | 
# -------------------------------------------------------
# all f… | 100.00 |   100.00 |  100.00 |
# -------------------------------------------------------
# end of coverage report
```

3. Focus in on the coverage report - only add.js is listed

4. Expected:

```tap
# ------------------------------------------------------------
# file        | line % | branch % | funcs % | uncovered lines
# ------------------------------------------------------------
# add.js      | 100.00 |   100.00 |  100.00 |
# subtract.js |   0.00 |     0.00 |    0.00 | 1-3
# ------------------------------------------------------------
# all files   |  50.00 |    50.00 |   50.00 |
# ------------------------------------------------------------
# end of coverage report
```
