# app.py
from flask_cors import CORS
from flask import Flask, request, jsonify
import openai


app = Flask(__name__)
CORS(app)

# Ensure you have set OPENAI_API_KEY in your environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data['message']

    # Call the OpenAI API
    response = openai.Completion.create(
        engine="text-davinci-003", # Or whichever engine you prefer
        prompt=user_message,
        max_tokens=150
    )

    # Send the response back to the client
    return jsonify({'reply': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)
