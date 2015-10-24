var Model = require('./model');

var Controller = {
  	create:function (req,res){
  		console.log('create');
       var dados = { name: 'Skol', desciption: 'opa', alchool:9.0, price:90.0,category:'pilsen'};
	   var model = new Model(dados); 
	   var msg = '';

	  	model.save( function(err, data) { 
			if (err) { 
			    console.log('Erro:' , err );
			    msg = err; 
			} else {
			  console.log('Cerveja inserida:', data); 
			  msg = data;
			}
			res.json(msg);
		});
  	},
  	retrieve:function (req,res){
  		console.log('retrieve');
		var query = {};
		Model.find(query, function(err, data) { 
		if (err) { 
		    console.log('Erro:' , err );
		    msg = err; 
		} else {
			console.log('Listagem:', data); 
			msg = data;
		}		
		res.json(msg);
	});
  	},
  	update:function (req,res){
		 
        var query = {name: /skol/i};
		
		var mod = {
			name:'Brahma',
			description:'Masomenote'
		};

		var optional = {
			upsert:false,
			multi:true
		};

		Model.update(query,mod,optional,function(err,data){
			if(err){
				console.log('Erro',err);
				msg = err; 
			}
			else{
				console.log('Cervejas atualizadas com sucesso...', data);
				msg = data;
			}
			res.json(msg);
		});
 	},
  	delete:function (req,res){
		var query = {name: /brahma/i} ;

		Model.remove(query,function(err,data){
			if(err){
				console.log('Erro', err);
				msg = err; 
			}
			else{
				console.log('Cerveja deletada com sucesso, quantidade', data.result);
				msg = data;
		    }			
		 res.json(msg);
		});
	}  	
  };

module.exports = Controller;