from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Home route to start building
@app.route('/')
def index():
    return render_template('index.html')

# Route for creating a new page
@app.route('/create', methods=['POST'])
def create_page():
    data = request.json
    # Here we save or process the data, for now we just return it
    return jsonify({"message": "Page created successfully!", "data": data}), 200

if __name__ == '__main__':
    app.run(debug=True)
