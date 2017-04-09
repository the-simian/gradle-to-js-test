```
$ node index.js
WORKING------------------------
{ dependencies: { compile: { exclude: 'group: \'com.google.android.gms\', module: \'play-services-location\'\r' } },
  '\r': '' }
BROKEN------------------------
E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\deep-assign\index.js:28
                to[key] = val;
                        ^

TypeError: Cannot assign to read only property '0' of object '[object String]'
    at assignKey (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\deep-assign\index.js:28:11)
    at assign (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\deep-assign\index.js:43:4)
    at assignKey (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\deep-assign\index.js:30:13)
    at assign (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\deep-assign\index.js:43:4)
    at deepAssign (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\deep-assign\index.js:64:3)
    at deepParse (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\gradle-to-js\lib\parser.js:135:27)
    at deepParse (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\gradle-to-js\lib\parser.js:137:27)
    at ReadStream.<anonymous> (E:\Users\Simian\Desktop\gradle-to-js-test\node_modules\gradle-to-js\lib\parser.js:392:13)
    at emitOne (events.js:96:13)
    at ReadStream.emit (events.js:191:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at ReadStream.Readable.push (_stream_readable.js:134:10)
    at onread (fs.js:1939:12)
    at FSReqWrap.wrapper [as oncomplete] (fs.js:628:17)
```

working output:
``
{
    dependencies: {
        compile: {
            exclude: 'group: \'com.google.android.gms\', module: \'play-services-location\'\r'
        }
    },
    '\r': ''
}
```
