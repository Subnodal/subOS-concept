# (global)
## ▶️ `null`
`function` · *  * Removes all key-value entries from the hash.  *  * @private  * @name clear  * @memberOf Hash

## ▶️ `null`
`function` · *  * Removes `key` and its value from the hash.  *  * @private  * @name delete  * @memberOf Hash  * @param {Object} hash The hash to modify.  * @param {string} key The key of the value to remove.  * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *  * Gets the hash value for `key`.  *  * @private  * @name get  * @memberOf Hash  * @param {string} key The key of the value to get.  * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *  * Checks if a hash value for `key` exists.  *  * @private  * @name has  * @memberOf Hash  * @param {string} key The key of the entry to check.  * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *  * Sets the hash `key` to `value`.  *  * @private  * @name set  * @memberOf Hash  * @param {string} key The key of the value to set.  * @param {*} value The value to set.  * @returns {Object} Returns the hash instance.

## ▶️ `null`
`function` · *  * Creates a clone of the lazy wrapper object.  *  * @private  * @name clone  * @memberOf LazyWrapper  * @returns {Object} Returns the cloned `LazyWrapper` object.

## ▶️ `null`
`function` · *  * Reverses the direction of lazy iteration.  *  * @private  * @name reverse  * @memberOf LazyWrapper  * @returns {Object} Returns the new reversed `LazyWrapper` object.

## ▶️ `null`
`function` · *  * Extracts the unwrapped value from its lazy wrapper.  *  * @private  * @name value  * @memberOf LazyWrapper  * @returns {*} Returns the unwrapped value.

## ▶️ `null`
`function` · *  * Removes all key-value entries from the list cache.  *  * @private  * @name clear  * @memberOf ListCache

## ▶️ `null`
`function` · *  * Removes `key` and its value from the list cache.  *  * @private  * @name delete  * @memberOf ListCache  * @param {string} key The key of the value to remove.  * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *  * Gets the list cache value for `key`.  *  * @private  * @name get  * @memberOf ListCache  * @param {string} key The key of the value to get.  * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *  * Checks if a list cache value for `key` exists.  *  * @private  * @name has  * @memberOf ListCache  * @param {string} key The key of the entry to check.  * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *  * Sets the list cache `key` to `value`.  *  * @private  * @name set  * @memberOf ListCache  * @param {string} key The key of the value to set.  * @param {*} value The value to set.  * @returns {Object} Returns the list cache instance.

## ▶️ `null`
`function` · *  * Removes all key-value entries from the map.  *  * @private  * @name clear  * @memberOf MapCache

## ▶️ `null`
`function` · *  * Removes `key` and its value from the map.  *  * @private  * @name delete  * @memberOf MapCache  * @param {string} key The key of the value to remove.  * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *  * Gets the map value for `key`.  *  * @private  * @name get  * @memberOf MapCache  * @param {string} key The key of the value to get.  * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *  * Checks if a map value for `key` exists.  *  * @private  * @name has  * @memberOf MapCache  * @param {string} key The key of the entry to check.  * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *  * Sets the map `key` to `value`.  *  * @private  * @name set  * @memberOf MapCache  * @param {string} key The key of the value to set.  * @param {*} value The value to set.  * @returns {Object} Returns the map cache instance.

## ▶️ `null`
`function` · *  * Adds `value` to the array cache.  *  * @private  * @name add  * @memberOf SetCache  * @alias push  * @param {*} value The value to cache.  * @returns {Object} Returns the cache instance.

## ▶️ `null`
`function` · *  * Checks if `value` is in the array cache.  *  * @private  * @name has  * @memberOf SetCache  * @param {*} value The value to search for.  * @returns {number} Returns `true` if `value` is found, else `false`.

## ▶️ `null`
`function` · *  * Removes all key-value entries from the stack.  *  * @private  * @name clear  * @memberOf Stack

## ▶️ `null`
`function` · *  * Removes `key` and its value from the stack.  *  * @private  * @name delete  * @memberOf Stack  * @param {string} key The key of the value to remove.  * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *  * Gets the stack value for `key`.  *  * @private  * @name get  * @memberOf Stack  * @param {string} key The key of the value to get.  * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *  * Checks if a stack value for `key` exists.  *  * @private  * @name has  * @memberOf Stack  * @param {string} key The key of the entry to check.  * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *  * Sets the stack `key` to `value`.  *  * @private  * @name set  * @memberOf Stack  * @param {string} key The key of the value to set.  * @param {*} value The value to set.  * @returns {Object} Returns the stack cache instance.

## ▶️ `null`
`function` · *  * Executes the chain sequence and returns the wrapped result.  *  * @name commit  * @memberOf _  * @since 3.2.0  * @category Seq  * @returns {Object} Returns the new `lodash` wrapper instance.  * @example  *  * var array = [1, 2];  * var wrapped = _(array).push(3);  *  * console.log(array);  * // => [1, 2]  *  * wrapped = wrapped.commit();  * console.log(array);  * // => [1, 2, 3]  *  * wrapped.last();  * // => 3  *  * console.log(array);  * // => [1, 2, 3]

## ▶️ `null`
`function` · *    * Creates a `lodash` object which wraps `value` to enable implicit method    * chain sequences. Methods that operate on and return arrays, collections,    * and functions can be chained together. Methods that retrieve a single value    * or may return a primitive value will automatically end the chain sequence    * and return the unwrapped value. Otherwise, the value must be unwrapped    * with `_#value`.    *    * Explicit chain sequences, which must be unwrapped with `_#value`, may be    * enabled using `_.chain`.    *    * The execution of chained methods is lazy, that is, it's deferred until    * `_#value` is implicitly or explicitly called.    *    * Lazy evaluation allows several methods to support shortcut fusion.    * Shortcut fusion is an optimization to merge iteratee calls; this avoids    * the creation of intermediate arrays and can greatly reduce the number of    * iteratee executions. Sections of a chain sequence qualify for shortcut    * fusion if the section is applied to an array and iteratees accept only    * one argument. The heuristic for whether a section qualifies for shortcut    * fusion is subject to change.    *    * Chaining is supported in custom builds as long as the `_#value` method is    * directly or indirectly included in the build.    *    * In addition to lodash methods, wrappers have `Array` and `String` methods.    *    * The wrapper `Array` methods are:    * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`    *    * The wrapper `String` methods are:    * `replace` and `split`    *    * The wrapper methods that support shortcut fusion are:    * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,    * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,    * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`    *    * The chainable wrapper methods are:    * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,    * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,    * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,    * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,    * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,    * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,    * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,    * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,    * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,    * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,    * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,    * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,    * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,    * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,    * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,    * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,    * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,    * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,    * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,    * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,    * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,    * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,    * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,    * `zipObject`, `zipObjectDeep`, and `zipWith`    *    * The wrapper methods that are **not** chainable by default are:    * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,    * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,    * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,    * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,    * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,    * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,    * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,    * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,    * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,    * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,    * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,    * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,    * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,    * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,    * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,    * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,    * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,    * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,    * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,    * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,    * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,    * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,    * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,    * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,    * `upperFirst`, `value`, and `words`    *    * @name _    * @constructor    * @category Seq    * @param {*} value The value to wrap in a `lodash` instance.    * @returns {Object} Returns the new `lodash` wrapper instance.    * @example    *    * function square(n) {    *   return n * n;    * }    *    * var wrapped = _([1, 2, 3]);    *    * // Returns an unwrapped value.    * wrapped.reduce(_.add);    * // => 6    *    * // Returns a wrapped value.    * var squares = wrapped.map(square);    *    * _.isArray(squares);    * // => false    *    * _.isArray(squares.value());    * // => true

## ▶️ `null`
`function` · *    * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.    *    * @name chain    * @memberOf _    * @since 0.1.0    * @category Seq    * @returns {Object} Returns the new `lodash` wrapper instance.    * @example    *    * var users = [    *   { 'user': 'barney', 'age': 36 },    *   { 'user': 'fred',   'age': 40 }    * ];    *    * // A sequence without explicit chaining.    * _(users).head();    * // => { 'user': 'barney', 'age': 36 }    *    * // A sequence with explicit chaining.    * _(users)    *   .chain()    *   .head()    *   .pick('user')    *   .value();    * // => { 'user': 'barney' }

## ▶️ `null`
`function` · *    * Executes the chain sequence to resolve the unwrapped value.    *    * @name value    * @memberOf _    * @since 0.1.0    * @alias toJSON, valueOf    * @category Seq    * @returns {*} Returns the resolved unwrapped value.    * @example    *    * _([1, 2, 3]).value();    * // => [1, 2, 3]

## ▶️ `null`
`function` · *
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true

## ▶️ `null`
`function` · *
 * Creates a clone of the lazy wrapper object.
 *
 * @private
 * @name clone
 * @memberOf LazyWrapper
 * @returns {Object} Returns the cloned `LazyWrapper` object.

## ▶️ `null`
`function` · *
 * Reverses the direction of lazy iteration.
 *
 * @private
 * @name reverse
 * @memberOf LazyWrapper
 * @returns {Object} Returns the new reversed `LazyWrapper` object.

## ▶️ `null`
`function` · *
 * Extracts the unwrapped value from its lazy wrapper.
 *
 * @private
 * @name value
 * @memberOf LazyWrapper
 * @returns {*} Returns the unwrapped value.

## ▶️ `null`
`function` · *
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash

## ▶️ `null`
`function` · *
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.

## ▶️ `null`
`function` · *
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache

## ▶️ `null`
`function` · *
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.

## ▶️ `null`
`function` · *
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache

## ▶️ `null`
`function` · *
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.

## ▶️ `null`
`function` · *
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.

## ▶️ `null`
`function` · *
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.

## ▶️ `null`
`function` · *
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack

## ▶️ `null`
`function` · *
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.

## ▶️ `null`
`function` · *
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.

## ▶️ `null`
`function` · *
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.

## ▶️ `null`
`function` · *
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.

## ▶️ `null`
`function` · *
 * This method is the wrapper version of `_.at`.
 *
 * @name at
 * @memberOf _
 * @since 1.0.0
 * @category Seq
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _(object).at(['a[0].b.c', 'a[1]']).value();
 * // => [3, 4]

## ▶️ `null`
`function` · *
 * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
 *
 * @name chain
 * @memberOf _
 * @since 0.1.0
 * @category Seq
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * // A sequence without explicit chaining.
 * _(users).head();
 * // => { 'user': 'barney', 'age': 36 }
 *
 * // A sequence with explicit chaining.
 * _(users)
 *   .chain()
 *   .head()
 *   .pick('user')
 *   .value();
 * // => { 'user': 'barney' }

## ▶️ `null`
`function` · *
 * Executes the chain sequence and returns the wrapped result.
 *
 * @name commit
 * @memberOf _
 * @since 3.2.0
 * @category Seq
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var array = [1, 2];
 * var wrapped = _(array).push(3);
 *
 * console.log(array);
 * // => [1, 2]
 *
 * wrapped = wrapped.commit();
 * console.log(array);
 * // => [1, 2, 3]
 *
 * wrapped.last();
 * // => 3
 *
 * console.log(array);
 * // => [1, 2, 3]

## ▶️ `null`
`function` · *
 * Gets the next value on a wrapped object following the
 * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
 *
 * @name next
 * @memberOf _
 * @since 4.0.0
 * @category Seq
 * @returns {Object} Returns the next iterator value.
 * @example
 *
 * var wrapped = _([1, 2]);
 *
 * wrapped.next();
 * // => { 'done': false, 'value': 1 }
 *
 * wrapped.next();
 * // => { 'done': false, 'value': 2 }
 *
 * wrapped.next();
 * // => { 'done': true, 'value': undefined }

## ▶️ `null`
`function` · *
 * Enables the wrapper to be iterable.
 *
 * @name Symbol.iterator
 * @memberOf _
 * @since 4.0.0
 * @category Seq
 * @returns {Object} Returns the wrapper object.
 * @example
 *
 * var wrapped = _([1, 2]);
 *
 * wrapped[Symbol.iterator]() === wrapped;
 * // => true
 *
 * Array.from(wrapped);
 * // => [1, 2]

## ▶️ `null`
`function` · *
 * Creates a clone of the chain sequence planting `value` as the wrapped value.
 *
 * @name plant
 * @memberOf _
 * @since 3.2.0
 * @category Seq
 * @param {*} value The value to plant.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2]).map(square);
 * var other = wrapped.plant([3, 4]);
 *
 * other.value();
 * // => [9, 16]
 *
 * wrapped.value();
 * // => [1, 4]

## ▶️ `null`
`function` · *
 * This method is the wrapper version of `_.reverse`.
 *
 * **Note:** This method mutates the wrapped array.
 *
 * @name reverse
 * @memberOf _
 * @since 0.1.0
 * @category Seq
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _(array).reverse().value()
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]

## ▶️ `null`
`function` · *
 * Executes the chain sequence to resolve the unwrapped value.
 *
 * @name value
 * @memberOf _
 * @since 0.1.0
 * @alias toJSON, valueOf
 * @category Seq
 * @returns {*} Returns the resolved unwrapped value.
 * @example
 *
 * _([1, 2, 3]).value();
 * // => [1, 2, 3]

## ▶️ `null`
`function` · *  * Gets the next value on a wrapped object following the  * [iterator protocol](https://mdn.io/iteration_protocols#iterator).  *  * @name next  * @memberOf _  * @since 4.0.0  * @category Seq  * @returns {Object} Returns the next iterator value.  * @example  *  * var wrapped = _([1, 2]);  *  * wrapped.next();  * // => { 'done': false, 'value': 1 }  *  * wrapped.next();  * // => { 'done': false, 'value': 2 }  *  * wrapped.next();  * // => { 'done': true, 'value': undefined }

## ▶️ `null`
`function` · *  * Creates a clone of the chain sequence planting `value` as the wrapped value.  *  * @name plant  * @memberOf _  * @since 3.2.0  * @category Seq  * @param {*} value The value to plant.  * @returns {Object} Returns the new `lodash` wrapper instance.  * @example  *  * function square(n) {  *   return n * n;  * }  *  * var wrapped = _([1, 2]).map(square);  * var other = wrapped.plant([3, 4]);  *  * other.value();  * // => [9, 16]  *  * wrapped.value();  * // => [1, 4]

## ▶️ `null`
`function` · *  * Enables the wrapper to be iterable.  *  * @name Symbol.iterator  * @memberOf _  * @since 4.0.0  * @category Seq  * @returns {Object} Returns the wrapper object.  * @example  *  * var wrapped = _([1, 2]);  *  * wrapped[Symbol.iterator]() === wrapped;  * // => true  *  * Array.from(wrapped);  * // => [1, 2]

## ▶️ `null`
`function` · *  * This method is the wrapper version of `_.at`.  *  * @name at  * @memberOf _  * @since 1.0.0  * @category Seq  * @param {...(string|string[])} [paths] The property paths to pick.  * @returns {Object} Returns the new `lodash` wrapper instance.  * @example  *  * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };  *  * _(object).at(['a[0].b.c', 'a[1]']).value();  * // => [3, 4]

## ▶️ `null`
`function` · *  * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.  *  * @name chain  * @memberOf _  * @since 0.1.0  * @category Seq  * @returns {Object} Returns the new `lodash` wrapper instance.  * @example  *  * var users = [  *   { 'user': 'barney', 'age': 36 },  *   { 'user': 'fred',   'age': 40 }  * ];  *  * // A sequence without explicit chaining.  * _(users).head();  * // => { 'user': 'barney', 'age': 36 }  *  * // A sequence with explicit chaining.  * _(users)  *   .chain()  *   .head()  *   .pick('user')  *   .value();  * // => { 'user': 'barney' }

## ▶️ `null`
`function` · *  * Creates a `lodash` object which wraps `value` to enable implicit method  * chain sequences. Methods that operate on and return arrays, collections,  * and functions can be chained together. Methods that retrieve a single value  * or may return a primitive value will automatically end the chain sequence  * and return the unwrapped value. Otherwise, the value must be unwrapped  * with `_#value`.  *  * Explicit chain sequences, which must be unwrapped with `_#value`, may be  * enabled using `_.chain`.  *  * The execution of chained methods is lazy, that is, it's deferred until  * `_#value` is implicitly or explicitly called.  *  * Lazy evaluation allows several methods to support shortcut fusion.  * Shortcut fusion is an optimization to merge iteratee calls; this avoids  * the creation of intermediate arrays and can greatly reduce the number of  * iteratee executions. Sections of a chain sequence qualify for shortcut  * fusion if the section is applied to an array and iteratees accept only  * one argument. The heuristic for whether a section qualifies for shortcut  * fusion is subject to change.  *  * Chaining is supported in custom builds as long as the `_#value` method is  * directly or indirectly included in the build.  *  * In addition to lodash methods, wrappers have `Array` and `String` methods.  *  * The wrapper `Array` methods are:  * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`  *  * The wrapper `String` methods are:  * `replace` and `split`  *  * The wrapper methods that support shortcut fusion are:  * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,  * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,  * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`  *  * The chainable wrapper methods are:  * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,  * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,  * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,  * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,  * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,  * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,  * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,  * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,  * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,  * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,  * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,  * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,  * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,  * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,  * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,  * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,  * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,  * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,  * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,  * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,  * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,  * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,  * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,  * `zipObject`, `zipObjectDeep`, and `zipWith`  *  * The wrapper methods that are **not** chainable by default are:  * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,  * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,  * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,  * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,  * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,  * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,  * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,  * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,  * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,  * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,  * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,  * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,  * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,  * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,  * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,  * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,  * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,  * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,  * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,  * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,  * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,  * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,  * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,  * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,  * `upperFirst`, `value`, and `words`  *  * @name _  * @constructor  * @category Seq  * @param {*} value The value to wrap in a `lodash` instance.  * @returns {Object} Returns the new `lodash` wrapper instance.  * @example  *  * function square(n) {  *   return n * n;  * }  *  * var wrapped = _([1, 2, 3]);  *  * // Returns an unwrapped value.  * wrapped.reduce(_.add);  * // => 6  *  * // Returns a wrapped value.  * var squares = wrapped.map(square);  *  * _.isArray(squares);  * // => false  *  * _.isArray(squares.value());  * // => true

## ▶️ `null`
`function` · *  * This method is the wrapper version of `_.reverse`.  *  * **Note:** This method mutates the wrapped array.  *  * @name reverse  * @memberOf _  * @since 0.1.0  * @category Seq  * @returns {Object} Returns the new `lodash` wrapper instance.  * @example  *  * var array = [1, 2, 3];  *  * _(array).reverse().value()  * // => [3, 2, 1]  *  * console.log(array);  * // => [3, 2, 1]

## ▶️ `null`
`function` · *  * Executes the chain sequence to resolve the unwrapped value.  *  * @name value  * @memberOf _  * @since 0.1.0  * @alias toJSON, valueOf  * @category Seq  * @returns {*} Returns the resolved unwrapped value.  * @example  *  * _([1, 2, 3]).value();  * // => [1, 2, 3]