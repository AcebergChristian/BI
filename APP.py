# -*- coding:utf-8 -*-
#!/usr/bin/python
import urllib.request
from urllib import parse
from flask import Flask,render_template,request,redirect,session,make_response
from flask_cors import CORS,cross_origin
import time
import pymysql
import uuid
import json


app = Flask(__name__, static_folder='static')
CORS(app, resources=r'/*')


@app.route('/')
def index():
    return render_template('index.html')
    # response = make_response(render_template('index.html'))
    # response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    # response.headers['Pragma'] = 'no-cache'
    # return response

@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


#接受前端提交的账密
@app.route('/login/getidpwd', methods=['POST'])
def getidpwd():
    data = request.get_json()
    if data["id"] == "admin" and data["pwd"] == "admin":
        return {"msg":"success"}
    else:
        return {"msg":"账号或密码不正确"}
    

#前端向后端提交sql字符串的接口
#目前没用
def executesql(data):
    db=pymysql.connect(
        host = "localhost",
        user = "root",
        password = "aceberg",
        database = "mysql",
        port=3306,
        charset='utf8mb4')
    
    cursor = db.cursor()
    #print(db)
    getmysqldata='请检查SQL'
    try:
        cursor.execute(data)
        getmysqldata = json.loads(json.dumps(cursor.fetchall(),default=str))
        #print("OK",type(getmysqldata))
    except:
        db.rollback()
        print("Error: unable to fecth data")
    
    # 关闭数据库连接
    db.close()
    return getmysqldata


if __name__ == '__main__':
    app.config['SQLALCHEMY_ECHO'] = True
    app.run(debug=True,host='127.0.0.1',port=5000)
    



