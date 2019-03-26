//
//	Nectar Mobile Admin
//	Cloud Code Functions
//	
//	main.js
//
//	Author:	Brian Chapin
//	Copyright (c) 2016 2017 2018 2019 Brian Chapin, Chapin Productions. All rights reserved.
// 


Parse.Cloud.define('modifyUser', async function(request) {
	console.log("modifyUser cloud function");
	
	let userId = request.params.userId;
	let userName = request.params.userName;
	let password = request.params.password;
	let enabled = request.params.enabled;
	let email = request.params.email;
	
	console.log("looking for user with id: ");
	
	const query = new Parse.Query(Parse.User);
	//query.equalTo("objectId",userId);
	const users = await query.find({ 
		useMasterKey: true 
	});
	console.log("back from await");
	
	let user = users[0];
	/*
	let needSave = false;
	if (userName){
		user.set("username",userName);
		needSave = true;
		console.log("set user name");
	}

	if (password){
		user.set("password",password);
		needSave = true;
	}
	if (email){
		user.set("email",email);
		needSave = true;
	}
	if (enabled!=undefined){
		user.set("enabled",enabled);
		needSave = true;
	}*/
	
	user.set("enabled",false);
	console.log("about to save");
	
	await user.save({useMasterKey: true});
	console.log("about to return");
	return user;
	
	
});



Parse.Cloud.define('getInstallationsCount', async function(request) {
	console.log("cloud code function getInstallationsCount");
	const query = new Parse.Query(Parse.Installation);
	const count = await query.count({ 
		useMasterKey: true 
	});
	return count;
});

Parse.Cloud.define('getInstallations', async function(request) {
	console.log("cloud code function getInstallations");
	var skip = request.params.skip;
	var limit = request.params.limit;
	const query = new Parse.Query(Parse.Installation);
	query.skip(skip);
	query.limit(limit);
	query.descending("createdAt");
	const installations = await query.find({ 
		useMasterKey: true 
	});
	return installations;
});

Parse.Cloud.beforeDelete("ImageObject", (request) => {
	var file = request.object.get("imageFile");
    if (file){
    	var filename = file.name();
    	var completeUrl = 'https://nectarpdx-dev.herokuapp.com/parse/files/' + filename;
    	Parse.Cloud.httpRequest({
			method: 'DELETE',
			url: completeUrl,
			headers: {
				'X-Parse-Application-Id': 'QKWEPTeb2AELN3LpwEVTPO8akdWtrZkDkBFbZ6Dc',
				'X-Parse-Master-Key': 'OeQ6xHxHtWrJ3VKmyFoSSkhNNFLIN6ydakMQ3ytK'
			}
		}).then(function(httpResponse) {
  			console.log(httpResponse.text);
		}, function(httpResponse) {
  			console.error('Request failed with response code ' + httpResponse.status);
		});
    }
    var file = request.object.get("thumbnailImageFile");
    if (file){
    	var filename = file.name();
    	var completeUrl = 'https://nectarpdx-dev.herokuapp.com/parse/files/' + filename;
    	Parse.Cloud.httpRequest({
			method: 'DELETE',
			url: completeUrl,
			headers: {
				'X-Parse-Application-Id': 'QKWEPTeb2AELN3LpwEVTPO8akdWtrZkDkBFbZ6Dc',
				'X-Parse-Master-Key': 'OeQ6xHxHtWrJ3VKmyFoSSkhNNFLIN6ydakMQ3ytK'
			}
		}).then(function(httpResponse) {
  			console.log(httpResponse.text);
		}, function(httpResponse) {
  			console.error('Request failed with response code ' + httpResponse.status);
		});
    }
    var file = request.object.get("smallImageFile");
    if (file){
    	var filename = file.name();
    	var completeUrl = 'https://nectarpdx-dev.herokuapp.com/parse/files/' + filename;
    	Parse.Cloud.httpRequest({
			method: 'DELETE',
			url: completeUrl,
			headers: {
				'X-Parse-Application-Id': 'QKWEPTeb2AELN3LpwEVTPO8akdWtrZkDkBFbZ6Dc',
				'X-Parse-Master-Key': 'OeQ6xHxHtWrJ3VKmyFoSSkhNNFLIN6ydakMQ3ytK'
			}
		}).then(function(httpResponse) {
  			console.log(httpResponse.text);
		}, function(httpResponse) {
  			console.error('Request failed with response code ' + httpResponse.status);
		});
    }
    var file = request.object.get("mediumImageFile");
    if (file){
    	var filename = file.name();
    	var completeUrl = 'https://nectarpdx-dev.herokuapp.com/parse/files/' + filename;
    	Parse.Cloud.httpRequest({
			method: 'DELETE',
			url: completeUrl,
			headers: {
				'X-Parse-Application-Id': 'QKWEPTeb2AELN3LpwEVTPO8akdWtrZkDkBFbZ6Dc',
				'X-Parse-Master-Key': 'OeQ6xHxHtWrJ3VKmyFoSSkhNNFLIN6ydakMQ3ytK'
			}
		}).then(function(httpResponse) {
  			console.log(httpResponse.text);
		}, function(httpResponse) {
  			console.error('Request failed with response code ' + httpResponse.status);
		});
    }
    var file = request.object.get("largeImageFile");
    if (file){
    	var filename = file.name();
    	var completeUrl = 'https://nectarpdx-dev.herokuapp.com/parse/files/' + filename;
    	Parse.Cloud.httpRequest({
			method: 'DELETE',
			url: completeUrl,
			headers: {
				'X-Parse-Application-Id': 'QKWEPTeb2AELN3LpwEVTPO8akdWtrZkDkBFbZ6Dc',
				'X-Parse-Master-Key': 'OeQ6xHxHtWrJ3VKmyFoSSkhNNFLIN6ydakMQ3ytK'
			}
		}).then(function(httpResponse) {
  			console.log(httpResponse.text);
		}, function(httpResponse) {
  			console.error('Request failed with response code ' + httpResponse.status);
		});
    }
});

//
//	Cloud Code: hello
//	
//	Notes:	Legacy for testing only. Remove for production
//		
//	

//
//	Cloud code promise example with helper function
//

/*
var Example = Parse.Object.extend("Example");

function exampleFunction() {
  var query = new Parse.Query(Example);
  query.equalTo('Like',1);
  return query.find().then(function(examplesLikedOnce){
    var promises = [];
    for (var i = 0; i < examplesLikedOnce.length; i++) {
      var example = examplesLikedOnce[i];
      var promise = example.save({Like:4});
      promises.push(promise);
    }
    return Parse.Promise.when(promises).then(function(){
      return examplesLikedOnce.length;
    });
  }); 
}

Parse.Cloud.define("nice", function(request, response) {
    exampleFunction().then(function(numExamples){
      response.success("The number of Example objects with 1 like: "+numExamples);
    }, function(error){
      response.error(error);
    });
});
*/

/*
Parse.Cloud.define("pushchannelsampleusingpromises", function (request, response) {
	Parse.Push.send({
  		channels: ['test-channel'],
  		data: {
    		alert: 'Test',
    		badge: 1,
    		sound: 'default'
  		}
	}, { useMasterKey: true }).then(() => {
  		console.log('Push ok');
  		response.sucess("push sent");
	}, (e) => {
  		console.log('Push error', e);
  		response.error("error with push: " + e);
	});
});

Parse.Cloud.define("pushquerysampleusingpromises", function (request, response) {
	var query = new Parse.Query(Parse.Installation);
	query.equalTo('channels', 'test-channel');
	
	Parse.Push.send({
  		where: query
  		data: {
    		alert: 'Test',
    		badge: 1,
    		sound: 'default'
  		}
	}, { useMasterKey: true }).then(() => {
  		console.log('Push ok');
  		response.sucess("push sent");
	}, (e) => {
  		console.log('Push error', e);
  		response.error("error with push: " + e);
	});
});
*/
/*
Parse.Cloud.define('hello', (request) => {
	console.log("Successfully called hello cloud code function");
  	return 'Hi';
});

Parse.Cloud.afterSave("ImageObject", (request) => {
    if (request.object.isNew()) {
    	console.log('is new ImageObject');
    } else {
    	console.log("is not new ImageObject");
    }
});

Parse.Cloud.afterDelete("ImageObject", (request) => {
    console.log("would decrement counter here");
});
*/

/*
Parse.Cloud.define('getInstallationCountAuth', (request, response) {

	if (!request.user) {
		response.error("Must be signed in to call this Cloud Function.")
		return;
	}
	// The user making this request is available in request.user
	// Make sure to first check if this user is authorized to perform this change.
	// One way of doing so is to query an Admin role and check if the user belongs to that Role.
	// Replace !authorized with whatever check you decide to implement.
	
	var authorized = false;
	var requestUser = request.user;
	
	console.log('Before test: Auth = ' + authorized);
	console.log('Current user objectId: '+ requestUser.id);

	var queryRole = new Parse.Query(Parse.Role);
	queryRole.equalTo('name', 'Administrator');
	queryRole.first({
		success: function(result) { // Role Object
			console.log('Success getting administrator role');
			var role = result;
			var adminRelation = new Parse.Relation(role, 'users');
			var queryAdmins = adminRelation.query();
			queryAdmins.equalTo('objectId', requestUser.id);
			queryAdmins.first({
				success: function(result) {    // User Object
					console.log('Success getting user object: '+ requestUser.id);
					var user = result;
					user ? console.log('USER : ', user) : console.log('User not Administrator!');
					user ? authorized = true : console.log('User not Administrator!');
					
					console.log('After test: Auth = ' + authorized);
					if (!authorized) {
						response.error("Not an Admin.")
						return;    
					}

					// The rest of the function operates on the assumption that request.user is *authorized*
					
					// Parse.Cloud.useMasterKey() <-- no longer available!
	
					var query = new Parse.Query(Parse.Installation);
					query.count({ 
						useMasterKey: true 
					}) // count() will use the master key to bypass ACLs
					.then(function(count) {
						response.success(count);
					});
				},
				error: function(error) {
					response.error("User not found in Administrator role user relation.");
				}
			})
		},
		error: function(error) {
			response.error("Error getting administrator role.");
		}
	});
});*/
/*
Parse.Cloud.define('getInstallationsAuth', (request) => {

	if (!request.user) {
		response.error("Must be signed in to call this Cloud Function.")
		return;
	}
	// The user making this request is available in request.user
	// Make sure to first check if this user is authorized to perform this change.
	// One way of doing so is to query an Admin role and check if the user belongs to that Role.
	// Replace !authorized with whatever check you decide to implement.
	
	var authorized = false;
	var requestUser = request.user;
	
	console.log('Before test: Auth = ' + authorized);
	console.log('Current user objectId: '+ requestUser.id);

	var queryRole = new Parse.Query(Parse.Role);
	queryRole.equalTo('name', 'Administrator');
	queryRole.first()
  	.then(function(result) {
    	console.log('Success getting administrator role with id: ');
		var role = result;
		var adminRelation = new Parse.Relation(role, 'users');
		var queryAdmins = adminRelation.query();
		queryAdmins.equalTo('objectId', requestUser.id);
		queryAdmins.first()
  		.then(function(results) {
    		
    		console.log('Success getting user object: '+ requestUser.id);
			var user = result;
			user ? console.log('USER : ', user) : console.log('User not Administrator!');
			user ? authorized = true : console.log('User not Administrator!');
			
			console.log('After test: Auth = ' + authorized);
			if (!authorized) {
				response.error("Not an Admin.")
				return;    
			}

			// The rest of the function operates on the assumption that request.user is *authorized*
			
			// Parse.Cloud.useMasterKey() <-- no longer available!
			
			var skip = request.params.skip;
			var limit = request.params.limit;
			
			console.log('Skip = ' + skip);
			console.log('Limit = ' + limit);

			var query = new Parse.Query(Parse.Installation);
			query.skip(skip);
			query.limit(limit);
			query.descending("createdAt");
			return query.find({ 
				useMasterKey: true 
			}) // count() will use the master key to bypass ACLs
			.then(function(results) {
				console.log('found installations' + results.length);
				//return results;
			})
			.catch(function(error) {
    			// There was an error.
    			//response.error("Error getting installations.");
    			return error;
  			})
  		})
  		.catch(function(error) {
    		// There was an error.
    		//response.error("User not found in Administrator role user relation.");
    			return error;
  		});
  	})
  	.catch(function(error) {
    	// There was an error.
    	//response.error("Error getting administrator role.");
    			return error;
  	});
});*/

