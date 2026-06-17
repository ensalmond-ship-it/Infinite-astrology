"""
app.py - The main server for Infinite Astrology Hub

This is the "brain" of the application. It:
- Listens for requests from the website
- Processes data (like calculating birth charts)
- Sends results back to the website

Think of it like a restaurant kitchen:
- The website sends orders (requests)
- The server processes them (calculates)
- The server sends results (responses)
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Create the Flask app
app = Flask(__name__)

# Allow requests from the website (CORS = Cross-Origin Resource Sharing)
# This lets our website talk to our server
CORS(app)

# Load environment variables (like settings)
from dotenv import load_dotenv
load_dotenv()


# ====================
# ROUTES (Endpoints)
# ====================
# Routes are like doors - they handle different requests

@app.route('/', methods=['GET'])
def home():
    """
    The home route - just says the server is running
    
    Request: GET /
    Response: { "status": "Server is running!" }
    """
    return jsonify({
        "status": "Server is running!",
        "message": "Welcome to Infinite Astrology Hub API"
    })


@app.route('/api/birth-chart', methods=['POST'])
def calculate_birth_chart():
    """
    Calculate a birth chart from birth information
    
    Request: POST /api/birth-chart
    Body: {
        "name": "John",
        "birthDate": "03/15/1995",
        "birthTime": "02:30 PM",
        "birthLocation": "New York, NY"
    }
    
    Response: {
        "name": "John",
        "zodignSun": "Pisces",
        "zodignMoon": "Gemini",
        ... more info ...
    }
    """
    
    # Get the data sent from the website
    data = request.get_json()
    
    # Check if all required data is here
    required_fields = ['name', 'birthDate', 'birthTime', 'birthLocation']
    
    for field in required_fields:
        if field not in data:
            return jsonify({
                "error": f"Missing required field: {field}"
            }), 400
    
    # For now, just return what we got back
    # TODO: Actually calculate the birth chart
    
    response = {
        "name": data.get('name'),
        "birthDate": data.get('birthDate'),
        "birthTime": data.get('birthTime'),
        "birthLocation": data.get('birthLocation'),
        "status": "Birth information received",
        "message": "Birth chart calculation coming soon!"
    }
    
    return jsonify(response), 200


@app.route('/api/test', methods=['GET'])
def test():
    """
    A simple test endpoint to make sure the server is working
    
    Request: GET /api/test
    Response: { "test": "success" }
    """
    return jsonify({
        "test": "success"
    })


# ====================
# ERROR HANDLING
# ====================
# These handle errors gracefully

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors (page not found)"""
    return jsonify({
        "error": "Not found",
        "message": "This endpoint does not exist"
    }), 404


@app.errorhandler(500)
def server_error(error):
    """Handle 500 errors (server error)"""
    return jsonify({
        "error": "Server error",
        "message": "Something went wrong on the server"
    }), 500


# ====================
# RUN THE SERVER
# ====================

if __name__ == '__main__':
    # Get settings from environment or use defaults
    debug_mode = os.getenv('FLASK_DEBUG', 'False') == 'True'
    port = int(os.getenv('PORT', 5000))
    
    # Start the server
    print(f"Starting Infinite Astrology Hub server...")
    print(f"Server running at http://localhost:{port}")
    print(f"API endpoint: http://localhost:{port}/api/")
    
    app.run(
        debug=debug_mode,
        host='0.0.0.0',
        port=port
    )