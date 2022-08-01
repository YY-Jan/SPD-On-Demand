# from time import time
from flask import Flask
from optimizer.main import main

app = Flask(__name__)

# @app.route('/time')
# def get_current_time():
#     print("request /time")
#     # return {'time': time()}

@app.route('/optimize')
def get_opt_res():
    print("request /optimize")
    return {'weight': main()}