function fetchData() {
    document.getElementById('data-output').textContent = 'Fetching data...';
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data-output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('data-output').textContent = 'Error fetching data';
        });
}

function trainModel() {
    document.getElementById('train-output').textContent = 'Training model...';
    fetch('/train')
        .then(response => response.json())
        .then(data => {
            document.getElementById('train-output').textContent = `Accuracy: ${data.accuracy}\nMessage: ${data.message}`;
        })
        .catch(error => {
            document.getElementById('train-output').textContent = 'Error training model';
        });
}

function predict() {
    document.getElementById('predict-output').textContent = 'Getting prediction...';
    fetch('/predict')
        .then(response => response.json())
        .then(data => {
            document.getElementById('predict-output').textContent = `Prediction: ${JSON.stringify(data.prediction, null, 2)}`;
        })
        .catch(error => {
            document.getElementById('predict-output').textContent = 'Error getting prediction';
        });
}
