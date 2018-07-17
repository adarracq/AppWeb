//default/index.js
//prepa/index.js

module.exports = function(app){
  require('./page1/index.js')(app);
  require('./page2/index.js')(app);
  require('./page3/index.js')(app);
  require('./page4/index.js')(app);
}
