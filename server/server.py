from flask import Flask, render_template, jsonify
app = Flask(__name__)


@app.route('/api')
def index():
    return jsonify({
        'status': 'This is the backend'
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
