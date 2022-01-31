
from flask import Flask, render_template
from AzureDB import AzureDB


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route("/tts/")
def tts():
	return render_template('tts.html')

@app.route("/stt/")
def stt():
	return render_template('stt.html')

@app.route("/db/")
def who():
	with AzureDB() as a:
		data = a.azureGetData()
	return render_template('quotes.html',data=data)

@app.route("/hi/<username>")
def greet(username):
	return f"Hi there, {username}!"



