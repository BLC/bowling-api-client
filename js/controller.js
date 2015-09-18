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

  $('#join-league').submit(function(){
    var bowlerId = this.bowlerId.value;
    var leagueId = this.leagueId.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.joinLeague({ bowlerId: bowlerId, leagueId: leagueId,
      success: success, error: error });
    return false;
  });

  $('#purchase-ticket').submit(function(){
    var bowlerId = this.bowlerId.value;
    var leagueId = this.leagueId.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.purchaseTicket({ bowlerId: bowlerId, leagueId: leagueId,
      success: success, error: error });
    return false;
  });

  $('#draw-winner').submit(function(){
    var leagueId = this.leagueId.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.drawWinner({ leagueId: leagueId, success: success, error: error });
    return false;
  });

  $('#update-roll').submit(function(){
    var leagueId = this.leagueId.value;
    var pinsKnockedDown = this.pinsKnockedDown.value;
    var success = function() { alert('success'); };
    var error = function() { alert('error'); };
    client.updateRoll({ leagueId: leagueId, pinsKnockedDown: pinsKnockedDown, success: success,
      error: error
    });
    return false;
  });
});
