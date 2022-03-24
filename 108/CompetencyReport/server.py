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

@app.route("/api/product/<id>")
def got_by_id(id):
    for product in catalog:
        if product["_id"] == id:
            return json.dumps(product)
    
    # NOT FOUND: Error 404
    return abort(404, "No product with that ID was found")

@app.route("/api/product/cheapest", methods=["GET"])
def lowest_product():

    lowest = catalog[0]
    for product in catalog:
        if product["price"] < lowest["price"]:
            lowest = product
    return json.dumps(f"Cheapest product {lowest}")


@app.route("/api/categories", methods=["GET"])
def unique_categories():
    categories = []
    for prod in catalog:
        category = prod["category"]

        if not category in categories:
            categories.append(category)

    return json.dumps(f"Categories: {categories}")




# 
# Ticket 2345
# Creat and endpoint that allow the client to get all the products
# for an specified category
# /api/catalog/guitar where guitar is the category in question
# 

@app.route("/api/catalog/<category>")
def product_category(category):
    result = []
    for product in catalog:
        if product["category"] == category:
            result.append(product)
    return json.dumps(result)


app.run(debug=True)