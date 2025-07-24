from flask import Flask, render_template, request, jsonify
import pandas as pd
import pickle


app = Flask(__name__)
car = pd.read_csv('true_car_listings.csv')
car.dropna(subset=["Make", "Model", "State", "City"], inplace=True)
model = pickle.load(open('LinearReggrationModel.pkl', 'rb'))

@app.route('/')
def index():
    state = sorted(car['State'].unique())
    compony = sorted(car['Make'].unique())
    return render_template('index.html',state=state, compony=compony )

@app.route('/get_models', methods=['POST'])
def get_models():
    selected_make = request.json.get('make')
    models = sorted(car[car['Make'] == selected_make]['Model'].dropna().unique().tolist())
    return jsonify(models)


@app.route('/get_cities', methods=['POST'])
def get_cities():
    selected_state = request.json.get('state')
    cities = sorted(car[car['State'] == selected_state]['City'].dropna().unique().tolist())
    return jsonify(cities)

@app.route('/predict', methods=['POST'])
def predict():
    company = request.form.get('compony')
    car_model = request.form.get('model')
    year = int(request.form.get('year'))
    state = request.form.get('state')
    city = request.form.get('city')
    km_travel = int(request.form.get('km_travel'))

    if not all([year, km_travel, city, state, company, car_model]):
        return "Please fill all the fields."

    try:
        year = int(year)
        km_travel = int(km_travel)

        input_df = pd.DataFrame([[year, km_travel, city, state, company, car_model]],
                            columns=['Year', 'Mileage', 'City', 'State', 'Make', 'Model']

                            )
        price = model.predict(input_df)[0]
        price = round(price, 2)

        return f"Predicted Price: ${price}"


    except ValueError:

        return "⚠️ Year and Kilometers Travelled must be valid numbers."

    except Exception as e:

        return f"❌ Something went wrong: {str(e)}"


if __name__ == '__main__':
    app.run(debug=True)