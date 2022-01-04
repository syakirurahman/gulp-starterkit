## Stuff that need attension

### Warning durring `npm i`

```sh
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
```

### Security warnings

`30` vulnerabilities (`2` low, `15` moderate, `13` **high**)

```sh
$ npm ls urix
gulp-starterkit@1.0.0 gulp-starterkit
└─┬ gulp-watch@5.0.1
  └─┬ chokidar@2.1.8
    └─┬ braces@2.3.2
      └─┬ snapdragon@0.8.2
        └─┬ source-map-resolve@0.5.3
          └── urix@0.1.0
```

```sh
$ npm ls resolve-url
gulp-starterkit@1.0.0 gulp-starterkit
└─┬ gulp-watch@5.0.1
  └─┬ chokidar@2.1.8
    └─┬ braces@2.3.2
      └─┬ snapdragon@0.8.2
        └─┬ source-map-resolve@0.5.3
          └── resolve-url@0.2.1
```

```sh
$ npm ls chokidar
gulp-starterkit@1.0.0 gulp-starterkit
├─┬ gulp-watch@5.0.1
│ └── chokidar@2.1.8
├─┬ gulp@4.0.2
│ └─┬ glob-watcher@5.0.5
│   └── chokidar@2.1.8 deduped
└─┬ sass@1.45.2
  └── chokidar@3.5.2
```

```sh
$ npm ls uuid
gulp-starterkit@1.0.0 gulp-starterkit
└─┬ gulp-imagemin@7.1.0
  └─┬ imagemin-optipng@7.1.0
    └─┬ exec-buffer@3.2.0
      └─┬ tempfile@2.0.0
        └── uuid@3.4.0
```

```sh
$ npm ls svgo
gulp-starterkit@1.0.0 gulp-starterkit
└─┬ gulp-imagemin@7.1.0
  └─┬ imagemin-svgo@7.1.0
    └── svgo@1.3.2
```