# Getting Started with React-Flask-App

Main reference `https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project`

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
- We don't need to do Flask run because under web > package.json line 25, this has been configured (change into the api subdirectory and then run `flask run`)
- Now the server will reload automatically when changes are made, there is no need to stop the flask server and restart
