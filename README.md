# bot-do-tino

This is a twitter bot that searches tweets based on a specific query and answers them.
Currently it searches the query "Diga lá, Tino" from @botdogalvao. 

## How it is always live? 

This is based on *firebase functions*. I scheduled a "every minute" function call. 

## Limits

There is limitations for this bot. Due to Twitter API rate limits, it performs a search per minute, and answers the last two tweets.

Feel free to experiment with this!

## Demo

The demo is the twitter account @BotdoTino2 here: https://twitter.com/BotdoTino2 
