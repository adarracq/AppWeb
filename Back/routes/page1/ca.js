module.exports = function(app){

  app.post('/page1', async function(req, res){
    var request = page1(req.body.user,
                        req.body.password,
                        req.body.bdd);
    await app.executeSQLQuery(req, res, request);
  });
}


function page1 (user, password, bdd){
  return `SELECT	70000 as Ca,
              		41000 as Car,
              		10 as col1,
              		12 as col2,
              		12 as col3,
              		13 as col4,
              		8  as col5,
              		4  as col6,
              		12 as col7,
              		9  as col8,
              		20 as col9,
              		0  as col10,
              		8  as col11,
              		0  as col12,
              		29 as obj,
              		18 as objr`
}
