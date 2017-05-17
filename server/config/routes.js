var ejs = require('ejs')

module.exports = function(app){
  app.post('/login', function(req, res){
    var data = {f_name:req.body.f_name, l_name:req.body.l_name}
    console.log(req.body.f_name);
    res.render('pacman', data)
    // f_name = []
    // html = ejs.render('<%= f_name.join(", "); %>', {f_name:f_name});
    // res.render('<%= f_name%>', {f_name:f_name})
  })
}
