BowlingApiClient = (function() {
  var BowlingApiClient = function(endpoint) {
    this.endpoint = endpoint;
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
    var params = $.extend(requestParams(options), {
      type: 'POST',
      data: JSON.stringify({ email: email, password: password })
    });
    $.ajax(this.endpoint + '/login', params);
  };

  BowlingApiClient.prototype.createUser = function(options) {
    var league;
    email = options.email;
    password = options.password;

    var registerBowlersCallback = function(bowler) {
      this.joinLeague({ bowlerId: bowler.id, leagueId: league.id });
    }.bind(this);

    var createBowlersCallback = function(_league) {
      league = _league;

      ['Billy Bowler', 'Sally Strike', 'Pauly Pins'].forEach(function(name) {
        this.createBowler({ name: name, success: registerBowlersCallback });
      }.bind(this));
    }.bind(this);

    var createLeagueCallback = function() {
      this.createLeague({ name: 'Example League', success: createBowlersCallback });
    }.bind(this);

    var success = options.success;
    options.success = function(user) {
      createLeagueCallback();
      if(success) {
        success(user);
      }
    };

    var params = $.extend(requestParams(options), {
      type: 'POST',
      data: JSON.stringify({ email: email, password: password })
    });
    delete params.headers;
    $.ajax(this.endpoint + '/users', params);
  };

  BowlingApiClient.prototype.createLeague = function(options) {
    $.ajax(this.endpoint + '/leagues', $.extend(requestParams(options), {
      type: 'POST',
      data: JSON.stringify({ name: options.name })
    }));
  };

  BowlingApiClient.prototype.createBowler = function(options) {
    $.ajax(this.endpoint + '/bowlers', $.extend(requestParams(options), {
      type: 'POST',
      data: JSON.stringify({ name: options.name })
    }));
  };

  BowlingApiClient.prototype.getBowlers = function(options) {
    $.ajax(this.endpoint + '/leagues/' + options.leagueId + '/bowlers', requestParams(options));
  };

  BowlingApiClient.prototype.getLeagueBowlers = function(options) {
    $.ajax(this.endpoint + '/bowlers', requestParams(options));
  };

  BowlingApiClient.prototype.getLeagues = function(options) {
    $.ajax(this.endpoint + '/leagues', requestParams(options));
  };

  BowlingApiClient.prototype.getLotteries = function(options) {
    $.ajax(this.endpoint + '/leagues/' + options.leagueId + '/lotteries', requestParams(options));
  };

  BowlingApiClient.prototype.joinLeague = function(options) {
    $.ajax(this.endpoint + '/leagues/' + options.leagueId + '/bowlers',
      $.extend(requestParams(options), {
        type: 'PUT',
        data: JSON.stringify({ bowler_id: options.bowlerId })
      })
    );
  };

  BowlingApiClient.prototype.purchaseTicket = function(options) {
    $.ajax(this.endpoint + '/leagues/' + options.leagueId + '/lotteries/' +
      options.lotteryId + '/tickets', $.extend(requestParams(options), {
        type: 'POST',
        data: JSON.stringify({ bowler_id: options.bowlerId })
      })
    );
  };

  BowlingApiClient.prototype.drawWinner = function(options) {
    $.ajax(this.endpoint + '/leagues/' + options.leagueId + '/lotteries/' +
      options.lotteryId + '/roll', requestParams(options)
    );
  };

  BowlingApiClient.prototype.updateRoll = function(options) {
    $.ajax(this.endpoint + '/leagues/' + options.leagueId + '/lotteries/' +
      options.lotteryId + '/roll/', $.extend(requestParams(options), {
        type: 'PUT',
        data: JSON.stringify({ pin_count: options.pinCount })
      })
    );
  };

  return BowlingApiClient;
})();
