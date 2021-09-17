from flask import Flask
from neo4j import GraphDatabase
import os
import time
app = Flask(__name__)

@app.route('/')
def home():
    return "Home"

@app.route('/test')
def hello_world():

    driver = GraphDatabase.driver(
        os.environ.get('DB_URI'),
        auth=(os.environ.get('DB_USR'),os.environ.get('DB_PSW'))
    )

    start_time = time.time()
    with driver.session() as session:
        res = session.run("MATCH (n) RETURN n").single()
    end_time = time.time() - start_time

    return str(end_time)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=int(8080))