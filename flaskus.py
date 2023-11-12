import flask
from flask import Flask
from waitress import serve
from flask_cors import CORS
from calcs import Taschenrechner


app = Flask(__name__)
CORS(app)
rechner = Taschenrechner()

@app.route('/version')
def version_request():
    return "1.0 -- Lukas Kohlhase"
@app.route('/add',methods=['POST'])
def addition_request():
    requestinfos={key: value for key,value in flask.request.json.items()}
    return str(rechner.addition(requestinfos['wert1'],requestinfos['wert2']))

@app.route('/sub',methods=['POST'])
def sub_request():
    requestinfos={key: value for key,value in flask.request.json.items()}
    return str(rechner.subtraktion(requestinfos['wert1'],requestinfos['wert2']))

@app.route('/mul',methods=['POST'])
def mul_request():
    requestinfos={key: value for key,value in flask.request.json.items()}
    return str(rechner.multiplikation(requestinfos['wert1'],requestinfos['wert2']))

if __name__ == '__main__':
    serve(app,port=8100)