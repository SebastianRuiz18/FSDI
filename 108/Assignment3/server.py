# venv\scripts\activate          on cmd to start venv
# python server.py (name of file) to start server
from flask import Flask, abort
import json
from mock_data import catalog

app = Flask("Server")


@app.route("/")
def home():
    return "Hello from Flask"



@app.route("/me")
def about_me():
    return "Sebastian Ruiz"





##########################################
############  API ENDPOINTs   ############ 
############  RETURN Json  ###############
##########################################





@app.route("/api/catalog", methods=["GET"])
def get_catalog():
    return json.dumps(catalog)


@app.route("/api/catalog", methods=["POST"])
def save_catalog():
    pass



# /api/catalog/count -> how manu products exist in the catalog
@app.route("/api/catalog/count", methods=["GET"])
def noProd_catalog():
    count = len(catalog)
    return json.dumps(f"Products in catalog: {count}")

@app.route("/api/catalog/total", methods=["GET"])
def total_of_catalog():
    sumT = 0
    for product in catalog:
        sumT = sumT + product["price"]
    return json.dumps(f"Sum of prices {sumT}")

@app.route("/api/catalog/<id>")
def got_by_id(id):
    for product in catalog:
        if product["_id"] == id:
            return json.dumps(product)
    
    # NOT FOUND: Error 404
    return abort(404, "No product with that ID was found")

app.run(debug=True)