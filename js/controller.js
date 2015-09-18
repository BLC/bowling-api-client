$(function() {
  var client = new BowlingApiClient('http://localhost:8190/api');

  $('#create-user').submit(function(){
    var email = this.email.value;
    var password = this.password.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.createUser({ email: email, password: password, success: success,
    error: error });
    return false;
  });

  $('#login-user').submit(function(){
    var email = this.email.value;
    var password = this.password.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.loginUser({ email: email, password: password, success: success,
    error: error });
    return false;
  });

  $('#create-league').submit(function(){
    var name = this.name.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.createLeauge({ name: name, success: success, error: error });
    return false;
  });

  $('#create-bowler').submit(function(){
    var name = this.name.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.createBowler({ name: name, success: success, error: error });
    return false;
  });
});
