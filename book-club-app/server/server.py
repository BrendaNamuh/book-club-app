from flask import Flask 

app = Flask(__name__)

# Votes API route
@app.route("/votes")
def votes():
    return {'The Catcher in the Rye':2, 'Normal People':1}


if __name__ == '__main__':
    app.run(debug=True)