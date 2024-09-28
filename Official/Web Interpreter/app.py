from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/run', methods=['POST'])
def run_stayzia_code():
    data = request.get_json()
    code = data.get('code', '')

    if not code:
        return jsonify({"error": "No Stayzia code provided"}), 400
    
    # Placeholder for actual Stayzia code execution (needs implementation)
    try:
        # Simulate executing Stayzia code
        result = f"Executed Stayzia code: {code}"
        return jsonify({"output": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
