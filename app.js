var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var productRouter = require('./routes/products');
var mailRouter = require('./routes/mails');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
    res.setHeader('Content-Range', 'bytes : 0-9/*')
    next()
})
// res.setHeader('Content-Range', `${result.length}`)  //something liel said to do, maybe res and not result
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products',productRouter)
app.use('/mail', mailRouter);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);





// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });
  
//   // error handler
//   app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });
  
module.exports = app;
