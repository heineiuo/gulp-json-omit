# gulp-json-omit

## Install

```javascript
npm install gulp-json-omit --save
```

## Use

```javascript
var gulp = require('gulp')
var jsonomit = require('gulp-json-omit'）

gulp.task('jsonomit', function(){
	return gulp.src('src/*.json')
		.pipe(jsonomit(['secret', 'password']))
		.pipe(gulp.dest('/dist'))
})

```

## License

MIT License.