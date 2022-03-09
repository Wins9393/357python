import time
import requests
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/pictureOfTheDay', methods=['GET'])
def getPixOfTheDay():
    response = requests.get("https://api.nasa.gov/planetary/apod?api_key=EiYWprWCvQ27CZzbslZ89fqfiPxo7x3mFVHYYduz")
    print(response.status_code)

    return response.json()

@app.route('/marsPhotos', methods=['GET'])
def getMarsPhotos():
    response = requests.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=EiYWprWCvQ27CZzbslZ89fqfiPxo7x3mFVHYYduz")
    print(response.status_code)

    return response.json()


