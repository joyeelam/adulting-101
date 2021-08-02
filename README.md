# Next Academy - Final Group Project

This was a group challenge to create a web application incorporating what we have learned throughout the bootcamp. 
We decided on a full-stack app combining React as the front-end framework, Flask to serve data via RESTful API and PostgreSQL.

<img width="1150" alt="Screenshot 2021-08-02 at 4 24 33 PM" src="https://user-images.githubusercontent.com/64724653/127830968-03e77a16-fe60-4534-95e2-d659c0e3651e.png">

**Install Dependencies**

- Python 3.9.5
- PostgreSQL 13.3

1. Run:
```
pip install -r requirements.txt
```

**Create a Database**

This application is configured to use Postgresql
```
createdb react_flask_dev
```

_\*if you name your database something else, tweak the settings in `.env`_

## Database Migrations

```
python migrate.py
```

## Running the Combined App

1. To do this, you will need to use two separate terminal windows. One for the frontend (React) and another for the backend (Flask).
```
cd web
```

2. On the first terminal, start the frontend:
```
$ npm start
```
- A browser window should open with application from React loaded (http://localhost:3000)

3. On your second terminal, start the backend:
```
$ npm run start-api
```
- Flask server can be accessed via (http://localhost:5000)
