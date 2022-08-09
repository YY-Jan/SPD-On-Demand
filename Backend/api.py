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
    print('get limit? ',request.get_json()['limits'])
    limits = request.get_json()['limits']
    values = request.get_json()['values']

    infos = {'SVy': (600), 'lb': 12*1000, 'stiffiner_design': 'Lai'}
    rests = {'db': (400, 800)}

    for k, v in values.items():
        if k == 'Vyl':
            infos['Vyratio'] = float(values['Vyl'])/float(values['SVy'])
        else:
            infos[k] = float(v)
        print("Backend get item: ", k, v)

    for k, v in limits.items():
        v = v.strip()
        if v:
            vname, m = k[:-4], k[-3:] 
            if m == 'min':
                rests.setdefault(vname, [0,0])[0] = float(v)
            elif m == 'max':
                rests.setdefault(vname, [0,0])[1] = float(v)
            print(rests[vname])
    print("!!!!", rests)

    res = main(infos, rests)
    print('get result in Backend:', res)
    return {'dimensions': res['dimensions'], 'weight': res['weight'], 'delta':res['delta'], 'DCR':res['DCR']}
