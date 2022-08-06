from tkinter import Variable
from flask import Flask, request
from flask_cors import CORS
from optimizer.main import main

app = Flask(__name__)
CORS(app)


@app.route('/optimize')
def get_opt_res():
    print("request /optimize")
    return {'weight': main()}


@app.route('/optimize', methods=['POST'])
def postInput():
    print('data?', request.data, request.get_json()['Vyl'])

    infos = {'SVy': (600), 'lb': 12*1000, 'stiffiner_design': 'Lai'}
    rests = {'db': (400, 800)}

    for k, v in request.get_json().items():
        if k == 'Vyu':
            infos['SVy'] = int(v)

        print("Backend get item: ", k, v)

    res = main(infos, rests)
    print('get result in Backend:', res)
    # print("to list(): ",res['dimensions'].tolist())
    # return { 'weight': res['weight']}
    return {'dimensions': res['dimensions'], 'weight': res['weight'], 'delta':res['delta'], 'DCR':res['DCR']}
