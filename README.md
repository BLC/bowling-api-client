bowling-api-client
==================================

Integrates into the progressive jackpot programming challenge API using jquery.

## Installation

The easiest way to use this library in your project is to include it as a git submodule.

```bash
  git submodule add git@github.com:clarkr/bowling-api-client.git ./client
```

Then, include the files in your html.

```html
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src='client/lib/client.js'></script>
```

## Usage

Create an instance of `BowlingApiClient`:

```javascript
  var client = new BowlingApiClient('http://bowling-api.nextcapital.com/api');
```

Then use it:

*Create a User*

```javascript
  client.createUser({
    email: 'email@exmaple.org',
    password: 'password',
    success: function(user) {
      ['id', 'email', 'password'].forEach(function(key) {
        console.log(user[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Login a User*

```javascript
  client.loginUser({
    email: 'email@exmaple.org',
    password: 'password',
    success: function(user) {
      ['id', 'email', 'password'].forEach(function(key) {
        console.log(user[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Create a League*

```javascript
  client.createLeague({
    name: 'The Cats',
    success: function(league) {
      ['id', 'userId', 'name', 'bowlers', 'jackpotBalance'].forEach(function(key) {
        console.log(league[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Create a Bowler*

```javascript
  client.createBowler ({
    name: 'Billy Bowler',
    success: function(bowler) {
      ['id', 'userId', 'name'].forEach(function(key) {
        console.log(bowler[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Get Bowlers*

```javascript
  client.getBowlers ({
    success: function(bowlers) {
      bowlers.forEach(function(bowler) {
        console.log(bowler);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Join a League*

```javascript
  client.joinLeague({
    bowlerId: 123,
    leagueId: 456,
    success: function(league) {
      ['id', 'userId', 'name', 'bowlers', 'jackpotBalance'].forEach(function(key) {
        console.log(league[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Purchase a Ticket*

```javascript
  client.purchaseTicket({
    bowlerId: 123,
    leagueId: 456,
    success: function(ticket) {
      ['id', 'date', 'bowlerId', 'leagueId'].forEach(function(key) {
        console.log(ticket[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Draw a Winner*

```javascript
  client.drawWinner({
    leagueId: 456,
    success: function(bowler) {
      ['id', 'userId', 'name'].forEach(function(key) {
        console.log(bowler[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Update a Jackpot Roll*

```javascript
  client.updateRoll({
    leagueId: 456,
    pinsKnockedDown: 7,
    success: function(payout) {
      ['id', 'leagueId','bowlerId','date','pinsKnockedDown','payout','paidOut'].forEach(function(key) {
        console.log(payout[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```

*Get Jackpot History*

```javascript
  client.getLeaguePayouts ({
    leagueId: 456,
    success: function(payouts) {
      payouts.forEach(function(payout) {
        console.log(payout);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText).message);
    }
  });
```
