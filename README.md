# smite-party
A web companion application for the Smite game by Hi-Rez Studios

[Smite Official Site](https://www.smitegame.com/ "Smite Official Site")

## Functionality
This app currently will take 5 players and return randomized roles and god assignments based on those roles. This specific part of the application is focused on front end rendering. 

[Link to Service Repo](https://github.com/cptran777/smite-party-service)
[Link to Service Repo Rework](https://github.com/cptran777/smite-party-api)

## Extensions

Currently the first iteration of the app will be each player can create randomized roles in an isolated environment. Gods are then picked from a fixed set for those roles. There will be 5 fields for names and assign roles to those names. 

### Iteration Plans: 

1) Ability to choose to assign roles or roles and gods.  

2) Ability to choose the pool of roles/gods to assign from. Also choose number of players to assign. 

Iteration plans 3 and 4 may be separated from the simplified part where you just enter in 5 names and get 5 roles. 

3) Ability to enter the application as a party and have role assignments based on that

4) User login and authentication

Beyond -- Become an whole resource for things Smite related

## Architecture

This application is meant for web and mobile web, built in React framework. Because of load times for JavaScript heavy frameworks such as Angular and Ember, React seemed like a better choice as this application is meant to be as mobile-friendly as possible.

Why mobile friendly?

This application is a companion application for Smite players, who will likely be on PC or console playing a game client already. This makes accessing the application on mobile much more convenient than having a laptop nearby and pulling up a desktop browser. 

For the first iteration of this application, the architecture is fairly simple. The backend is a Node server that will serve up the React frontend. It will also communicate with a service that will house most of the randomization logic, and the service will also communicate with a database that contains the gods.

A note on the use of Redux:

Redux may seem like overkill at the moment, but keeping future iterations in mind, the clean uni-directional data flow of Redux and single source of state that Redux can provide will be essential in the application. Hopefully it won't kill the mobile loading times. 

## Deployment

This application will be deployed on Heroku for simplicity. 

## Issues and Challenges 
