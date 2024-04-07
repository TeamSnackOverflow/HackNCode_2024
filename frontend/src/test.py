from flask import Flask, request, jsonify
from PIL import Image  # For image processing
from DECIMER import predict_SMILES
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'bmp'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/process_image', methods=['POST'])
def process_image():
    # Check if a file is uploaded
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']

    # Validate file extension
    if image.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if image and not allowed_file(image.filename):
        return jsonify({'error': 'Unsupported file format'}), 400

    # Load and pre-process the image
    output = ''
    try:
        # img = Image.open(image)
        smiles=predict_SMILES(image)
        output = smiles
    except Exception as e:
        return jsonify({'error': f'Error processing image: {str(e)}'}), 400


    return jsonify({'response': output})

if __name__ == '__main__':
    app.run(port=8080,debug=True)