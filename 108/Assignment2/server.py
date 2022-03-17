from flask import Flask

app = Flask("Server")


@app.route("/")
def home():
    return "Hello from Flask"



@app.route("/me")
def about_me():
    return "Sebastian Ruiz"

app.run(debug=True)