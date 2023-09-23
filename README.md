## Live At

This project is currently live at https://front-end-otp-validation.onrender.com

## Video Demo 
Comming soon

## Tech Used

This project uses a number of open source projects to work properly:

- [ReactJS](https://react.dev) - Front-end JavaScript library for building user interfaces based on components.
- [TailwindCSS](https://tailwindcss.com/) - An open source CSS framework.
- [NodeJS](https://nodejs.org/en) - Back-end JavaScript runtime environment
- [Express](https://expressjs.com/) - Back end web application framework for building RESTful APIs
- [Twilio](https://www.twilio.com/en-us) -  Provides programmable communication tools (SMS, Calls)

## Installation

Requires [Node.js](https://nodejs.org/) v16+ to run.

#### Running the server
###### Before running the server make sure that you have provided below variables in the ./server/.env file
- TWILIO_ACCOUNT_SID ( required )
- TWILIO_AUTH_TOKEN ( required )
- TWILIO_VERIFIED_NUMBER ( required )
- PORT ( optional ) -> default port 5000

```sh
cd ./server
npm install 
npm start
```

#### Running the client
```sh
cd ./server/client/
echo "REACT_APP_API_URL= http://127.0.0.1:5000/api" > .env
npm install 
npm start
```

#### Access Server and client givent links
|  | client | server |
| ---- | ----- | ----- |
| Runs on | https://127.0.0.1:3000 | https://127.0.0.1:5000  |


#### Glimps of the app

- page 1
![sc3](https://res.cloudinary.com/dnwcamylp/image/upload/v1695462578/io9f80nwumdnpyyovp4x.png)
- page 2
![sc2](https://res.cloudinary.com/dnwcamylp/image/upload/v1695462578/oymyzyckbatfjqvtvqct.png)
- page 3
![sc1](https://res.cloudinary.com/dnwcamylp/image/upload/v1695462579/olevxv0rhwjkbi9sb81x.png)