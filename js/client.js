var BowlingApiClient = function() {
  this.endpoint = arguments[0];
};

var email, password;

var getAuthorizationToken = function() {
  // Since this is just an encoding, not an encryption, this is REALLY insecure
  // unless over https, which its not.
  return btoa(email + ':' + password);
};

var requestParams = function(options) {
  return {
    contentType: 'application/json',
    headers: { Authorization: 'Basic ' + getAuthorizationToken() },
    success: options.success,
    error: options.error
  };
};


BowlingApiClient.prototype.loginUser = function(options) {
  email = options.email;
  password = options.password;
  $.ajax(this.endpoint + '/user', requestParams(options));
};


BowlingApiClient.prototype.createUser = function(options) {
  email = options.email;
  password = options.password;
  var params = $.extend(requestParams(options), {
    type: 'POST',
    data: JSON.stringify({ email: email, password: password })
  });
  delete params.headers;
  $.ajax(this.endpoint + '/user', params);
  return false;
};


BowlingApiClient.prototype.createLeauge = function(options) {
  $.ajax(this.endpoint + '/league', $.extend(requestParams(options), {
    type: 'POST',
    data: JSON.stringify({ name: options.name })
  }));
};


BowlingApiClient.prototype.createBowler = function(options) {
  $.ajax(this.endpoint + '/bowler', $.extend(requestParams(options), {
    type: 'POST',
    data: JSON.stringify({ name: options.name })
  }));
};


BowlingApiClient.prototype.joinLeague = function(options) {
  $.ajax(this.endpoint + '/league/' + options.leagueId,
    $.extend(requestParams(options), {
      type: 'PUT',
      data: JSON.stringify({ id: options.bowlerId })
    })
  );
};
