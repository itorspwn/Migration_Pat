from flask import Flask, render_template, redirect
import pymongo
import pandas as pd

# Create an instance of Flask
app = Flask(__name__)

# connect to MongoDB using default port
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# declare the database
db = client.migration_db

# declare the collections
census_data = db.census_data
flow_data = db.flow_data

# query database collections and transform the data back into a pandas dataframe
results1 = census_data.find()
results2 = flow_data.find()

# creates DataFrame.  
df_census = pd.DataFrame(results1)
df_flow = pd.DataFrame(results2)

# remove first index column '_id'
df_census = df_census.drop(['_id'], axis = 1)

# remove first index column '_id'
df_flow = df_flow.drop(['_id'], axis = 1)

# output dataframe from database as a json file to visualize with javascript
df_census.to_json('./static/js/census_df.json', orient = 'records') 
df_flow.to_json('./static/js/flow_df.json', orient = 'records') 

# initialize template page
@app.route("/")
def home():
    
    # Return template
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)