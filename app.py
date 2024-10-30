from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

# Home route to start building
@app.route('/')
def index():
    return render_template('index.html')

# Route for creating a new page and saving content to a file
@app.route('/create', methods=['POST'])
def create_page():
    data = request.json
    content = data.get("content", "")

    # Save the content to an HTML file
    with open("output_page.html", "w") as file:
        file.write(content)

    return jsonify({"message": "Page created and saved successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)

