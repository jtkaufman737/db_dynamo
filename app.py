from flask import Flask, jsonify, request
from psycopg2 import connect, extensions, sql

adm_conn = connect(
  host = 'localhost',
  database = 'sql_samurai',
  user = 'samurai_admin',
  password = '&b@nana$26'
)

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def home():
    if request.method == 'POST':
        # get the isolation leve for autocommit
        autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT
        email = request.form['email']
        DB_NAME = 'test12'

        # set the isolation level for the adm_connection's cursors then instantiate
        adm_conn.set_isolation_level( autocommit )
        cursor = adm_conn.cursor()
        query = f"SELECT db_name FROM db_users WHERE email='{email}'"
        cursor.execute(query)
        result = cursor.fetchall()

        if not result:
            # create user with authentication, how we'll avoid collisions...
            cursor.execute(f""" CREATE USER "{email}" WITH PASSWORD '{email}'""")

            # lets sql samurai admin track users and the names they pick for tables
            cursor.execute(f""" INSERT INTO db_users SELECT '{email}', uuid_generate_v1(), '{DB_NAME}' RETURNING db_id;""")
            new_db_id = cursor.fetchall()[0][0]

            cursor.execute(f''' CREATE DATABASE "{new_db_id}"''')
            cursor.execute(f''' GRANT ALL PRIVILEGES ON DATABASE "{new_db_id}" TO "{email}"''')
            # cursor.execute(f''' ALTER DATABASE "{new_db_id}" OWNER TO "{email}"''') # Damn this part isn't working not sure why...

            return "Created something!"
        else:
            for res in results:
                return f"""
                 <h1> {res} </h1>
                 """
        # close at finish to protect us from memory leaks
        cursor.close()
        adm_conn.close()
    else:
        return """
            <form method="POST">
              Email: <input type="text" name="email"><br/>
              <input type="submit" value="Submit"<br/>
            </form>
            """
