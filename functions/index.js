const functions = require("firebase-functions");
const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: functions.config().twitter.key,
  consumer_secret: functions.config().twitter.secret,
  access_token_key: functions.config().twitter.access_token,
  access_token_secret: functions.config().twitter.access_token_secret,
});

function searchTweet() {
  return client.get(
    "search/tweets",
    { q: "'Diga lá, Tino' from:botdogalvao" },
    function (error, tweets, response) {
      const statusId1 = tweets.statuses[0].id_str;
      const statusId2 = tweets.statuses[1].id_str;
      postTweet(statusId1);
      postTweet(statusId2);
      return null;
    }
  );
}

function postTweet(id) {
  client.post(
    "statuses/update",
    {
      status: "Sentiu.",
      in_reply_to_status_id: id,
      auto_populate_reply_metadata: true,
    },
    function (error, tweet, response) {
      if (!error) {
        console.log(tweet.text);
      } else {
        console.log(error);
      }
      return null;
    }
  );
}

exports.botdotino = functions
  .runWith({ timeoutSeconds: 10 })
  .pubsub.schedule("* * * * *")
  .onRun((context) => {
    return searchTweet();
  });
