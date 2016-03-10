# gulp-json-omit

## Install
```
npm install gupl-json-omit --save
```

## Use
```
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