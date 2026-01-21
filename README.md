# 🚗 Car Price Predictor (Machine Learning Web App)

## 📌 Project Overview
Car Price Predictor is a **Flask-based Machine Learning web application** that predicts the **price of a used car** based on user inputs.

The user provides the following details:
- Car Company (Make)
- Car Model
- Manufacturing Year
- Kilometers Travelled
- State
- City

The application uses a **pre-trained Linear Regression model** to generate real-time price predictions.

---

## 🎯 Problem Statement
Estimating the correct resale price of a used car is challenging because the price depends on multiple factors such as:
- Brand value
- Car usage (kilometers driven)
- Location
- Age of the vehicle

This project aims to **predict used car prices using Machine Learning** to assist buyers and sellers in making informed decisions.

---

## 🗂 Dataset
- Dataset File: `true_car_listings.csv`
- Data Cleaning:
  - Removed rows with missing values in:
    - Make
    - Model
    - State
    - City

### Features Used:
- Year  
- Mileage  
- City  
- State  
- Make  
- Model  

### Target Variable:
- Car Price

---

## ⚙️ Technologies Used
- **Programming Language:** Python
- **Libraries & Tools:**
  - Pandas
  - NumPy
  - Scikit-learn
  - Flask
  - Pickle
- **Frontend:** HTML (Flask Templates)
- **Version Control:** Git & GitHub

---

## 🧠 Machine Learning Model
- **Algorithm Used:** Linear Regression
- **Model File:** `LinearRegrationModel.pkl`
- **Training Notebook:** `price_predictor.ipynb`

---

## 🔄 Project Workflow
1. Load and clean the dataset  
2. Select relevant features  
3. Train Linear Regression model  
4. Save the trained model using Pickle  
5. Develop Flask web application  
6. Predict car price based on user input  

---

## 🖥 Web Application Features
- Dynamic dropdowns:
  - Company → Model
  - State → City
- Real-time price prediction
- Input validation
- Proper error handling

---

## 🚀 How to Run the Project Locally

### 1️⃣ Clone the Repository
https://github.com/rohitdeundi1/Prediction_Project.git

### 2️⃣ Create Virtual Environment (Optional)
conda create -n carprice python=3.10
conda activate carprice

### 3️⃣ Install Dependencies
pip install flask pandas numpy scikit-learn

### 4️⃣ Run the Application
python app.py


```bash
