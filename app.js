const Express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const Server = require('http').Server;
const _ = require('underscore');
const lz = require('lz-string');

const app = Express();
const server = new Server(app);   // Initialize the server
const router = Express.Router();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

// Set app bundle URL depends on running environment
var appBundleUrl;
switch (env) {
    case 'production':
    appBundleUrl = '/dist/app.bundle.js';
    break
    case 'development':
    appBundleUrl = 'http://localhost:8080/app.bundle.js';
    break
}

// Configure support for ejs templates
// app.set(Express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cors());
app.use(morgan('dev'));

// Define static assets folder
app.use('/public', Express.static(path.join(__dirname, 'public')));
app.use('/static', Express.static(path.join(__dirname, 'src', 'static')));
app.use('/dist', Express.static(path.join(__dirname, 'dist')));
app.use('/api', router);

app.get('/healthz', function (req, res) {
  res.sendStatus(200);
});

app.get('/', function (req, res) {
  const fullURL = req.protocol + '://' + req.get('host');

  res.render('index', { 'APP_BUNDLE_URL': appBundleUrl }, (err, html) => {
    html = html.replace(/\$OG_TITLE/g, 'Python Level Challenge');
    html = html.replace(/\$OG_DESCRIPTION/g, `Let's take a look Python quiz and show off your score.`);
    html = html.replace(/\$OG_IMAGE/g, `${fullURL}/static/img/intro/og_image_dimensions.png`);

    res.send(html);
  });
});

app.get('/quiz', function (req, res) {
  const fullURL = req.protocol + '://' + req.get('host');

  res.render('index', { 'APP_BUNDLE_URL': appBundleUrl }, (err, html) => {
    html = html.replace(/\$OG_TITLE/g, 'Python Level Challenge');
    html = html.replace(/\$OG_DESCRIPTION/g, `Let's take a look Python quiz and show off your score.`);
    html = html.replace(/\$OG_IMAGE/g, `${fullURL}/static/img/intro/og_image_dimensions.png`);

    res.send(html);
  });
});

app.get('/result', function (req, res) {
  const resultList = require('./src/static/json/result_list');
  const answerList = require('./src/static/json/python_answer.json');
  const fullURL = req.protocol + '://' + req.get('host');

  const answers = decodeAnswer(req.query.query);
  const score = answers[1].filter((answer, index) => {
    return answer === parseInt(answerList[answers[0][index] - 1].Answer)
  }).length;
  const result = _.sample(resultList[score]);

  res.render('index', { 'APP_BUNDLE_URL': appBundleUrl }, (err, html) => {
  html = html.replace(/\$OG_TITLE/g, `Your level is ${result.Name}`);
  html = html.replace(/\$OG_DESCRIPTION/g, `${result.Description.replace(/\"/g, `&quot;`)}`);
  html = html.replace(/\$OG_IMAGE/g, `${fullURL}/static/img/ogImage/level_${score}.png`);
  res.send(html);
  });
});

router.get('/', function (req, res) {
  res.json({ api: 'Here is an API endpoint.' });
});


// Start the server
server.listen(port, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});

function decodeAnswer(encoded) {
  const decodedString = lz.decompressFromEncodedURIComponent(encoded);

  try {
    return JSON.parse(decodedString);
  } catch (e) {
    return null;
  }
}
