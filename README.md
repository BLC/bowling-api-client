bowling-api-client
==================================

Integrates into the progressive jackpot programming challenge API using jquery.

## Installation

The easiest way to use this library in your project is to include it as a git submodule.

```bash
  git submodule add git@github.com:BLC/bowling-api-client.git ./client
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
    email: 'test@exmaple.com',
    password: 'password',
    success: function(user) {
      Object.keys(user).forEach(function(key) {
        console.log(key + ':' + user[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Login a User*

```javascript
  client.loginUser({
    email: 'email@exmaple.org',
    password: 'password',
    success: function(user) {
      Object.keys(user).forEach(function(key) {
        console.log(key + ':' + user[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Create a League*

```javascript
  client.createLeague({
    name: 'The Cats',
    success: function(league) {
      Object.keys(league).forEach(function(key) {
        console.log(key + ':' + league[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Create a Bowler*

```javascript
  client.createBowler ({
    name: 'Billy Bowler',
    success: function(bowler) {
      Object.keys(bowler).forEach(function(key) {
        console.log(key + ':' + bowler[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Get Bowlers*

```javascript
  client.getBowlers({
    success: function(bowlers) {
      bowlers.forEach(function(bowler) {
        console.log(bowler);
      });
    },
    error: function(xhr) {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```
*Get Leagues*

```javascript
  client.getLeagues({
    success: function(leagues) {
      leagues.forEach(function(league) {
        console.log(league);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```
*Get Lotteries for a League*

```javascript
  client.getLotteries({
    leagueId: 1,
    success: function(lotteries) {
      lotteries.forEach(function(lottery) {
        console.log(lottery);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Join a League*

```javascript
  client.joinLeague({
    bowlerId: 1,
    leagueId: 1,
    success: function(bowlers) {
      bowlers.forEach(function(bowler) {
        console.log(bowler);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Purchase a Ticket*

```javascript
  client.purchaseTicket({
    bowlerId: 1,
    leagueId: 1,
    lotteryId: 1,
    success: function(ticket) {
      Object.keys(ticket).forEach(function(key) {
        console.log(key + ':' + ticket[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Draw a Winner*

```javascript
  client.drawWinner({
    leagueId: 1,
    lotteryId: 1,
    success: function(bowler) {
      Object.keys(bowler).forEach(function(key) {
        console.log(key + ':' + bowler[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```

*Update a Jackpot Roll*

```javascript
  client.updateRoll({
    leagueId: 1,
    lotteryId: 1,
    pinsKnockedDown: 7,
    success: function(roll) {
      Object.keys(roll).forEach(function(key) {
        console.log(key + ':' + roll[key]);
      });
    },
    error: function(xhr)  {
      console.log(JSON.parse(xhr.responseText));
    }
  });
```
