# Next Academy - Final Group Project

This was a group challenge to create a web application incorporating what we have learned throughout the bootcamp. 
We decided on a full-stack app combining React as the front-end framework, Flask to serve data via RESTful API and PostgreSQL.

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
