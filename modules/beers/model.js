var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){ console.log('Erro de conexao.',err ) ;});
                             
db.on('open', function(){ console.log('Conexão Aberta') });
                             
db.on('conected', function(err){ console.log('Conectado') });
                             
db.on('disconnected', function(){ console.log('Desconectado') });                 

var Schema = mongoose.Schema;

var json_schema = {  name:{type:String, default:''}
					,description:{type:String, default:''}
					,alchool:{type:Number,min:0}
					,price:{type:Number,min:0}
					,category:{type:String,default:''}
					,created_at:{type:Date,default:Date.now()}
                  }

var BeerSchema = new Schema(json_schema);

module.exports = mongoose.model('Beer', BeerSchema);

