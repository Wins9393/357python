import time
import requests
# import calendar
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# Fonctionne
# @app.route('/pictureOfTheDay', methods=['GET'])
# def getPixOfTheDay():
#     response = requests.get("https://api.nasa.gov/planetary/apod?api_key=EiYWprWCvQ27CZzbslZ89fqfiPxo7x3mFVHYYduz")
#     print(response.status_code)

#     return response.json()

@app.route('/pictureOfTheDay/<date>', methods=['GET'])
def getPixOfTheDay(date):
        response = requests.get("https://api.nasa.gov/planetary/apod?date=" + date + "&api_key=EiYWprWCvQ27CZzbslZ89fqfiPxo7x3mFVHYYduz")
        print(response.status_code)

        return response.json()  

@app.route('/marsPhotos', methods=['GET'])
def getMarsPhotos():
    response = requests.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=EiYWprWCvQ27CZzbslZ89fqfiPxo7x3mFVHYYduz")
    print(response.status_code)

    return response.json()


""" Test pour récupérer un calendrier HTML dans le front

@app.route('/calendar', methods=['GET'])
def getHTMLCalendar():
    hc = calendar.HTMLCalendar(calendar.MONDAY)
    str = hc.formatyear(2022)

    return str

"""

