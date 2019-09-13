const express = require('express');
const path = require('path');
const checkoutRouter = require('./routes/checkout');

const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const webpackDevMiddleware = dev ? require('webpack-dev-middleware') : false;
const webpack = dev ? require('webpack') : false;
const webpackConfig = dev ? require('../webpack.config') : false;

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/checkout', checkoutRouter);

// Use webpack middleware in development. Allows page refresh to recompile
// assets automatically. Must go before 404 handler and static file handler.
if (dev) {
  const webpackDevConfig = {};
  Object.assign(webpackDevConfig, webpackConfig);
  const compiler = webpack(webpackDevConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath
    })
  );
}

// Serve public assets. Must go after dev middleware.
app.use('/', express.static(path.join(__dirname, 'public')));

// Serve static compiled assets. Must go after dev middleware.
app.use('/', express.static(path.join(path.dirname(__dirname), 'build')));

// Catch unhandled route, set 404 response and forward to error handler. This
// should go after all other routes.
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler. This will print stacktraces in the response
// body.
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
      title: 'Error',
      message: err.message,
      error: err
    });
  });
}

// Production error handler. No stacktraces is displayed to user in the
// response.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    message: 'An unexpected error has occurred',
    error: null
  });
});

module.exports = app;
