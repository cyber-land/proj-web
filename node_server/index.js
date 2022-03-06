const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json()) //usa il middleware per fare il parsing del json nelle richieste ricevute
//app.use(express.static('public')) //serve images, CSS files, and JavaScript files in a dir named public
app.use(cors())

const PORT = 3000

const cfuns = require('./functions_for_category.js');
const afuns = require('./functions_for_activity.js');

const statusAlive = () => {
  res.json({server: 'alive'});
};

app.get('/', statusAlive) //sostituito da public
app.get('/activities', afuns.getActivities)
app.get('/activities/:activityId', afuns.getActivity)
app.post('/activities', afuns.createActivity) //POST localhost:3000/categories {"name": "js", "category": "3"}
app.delete('/activities/', afuns.deleteActivities)
app.delete('/activities/:activityId', afuns.deleteActivity)
app.get('/categories', cfuns.getCategories)
app.get('/categories?name=:name', cfuns.getIdFromName)
app.get('/categories/:categoryId', cfuns.getCategory)
app.post('/categories', cfuns.createCategory) //POST localhost:3000/categories {"name": "history"}
app.put('/categories/:categoryId', cfuns.updateCategory)  //PUT localhost:3000/categories {"name": "math"}
app.delete('/categories/', cfuns.deleteCategories)
app.delete('/categories/:categoryId', cfuns.deleteCategory)

app.listen(PORT, function(err){
  if (err) console.log(err)
  console.log('server listening on port:', PORT);
});
