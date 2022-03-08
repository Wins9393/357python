import tornado.web
import tornado.ioloop


class uploadHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('../public/index.html')

    def post(self):
        files = self.request.files["file"]
        for f in files:
            print(f)

if (__name__ == '__main__'):
    app = tornado.web.Application([
        ('/', uploadHandler)
    ])

app.listen(8080)
print("Listening on port 8080")

tornado.ioloop.IOLoop.instance().start()