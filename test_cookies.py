import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random
import sys

def login(username, password):
    # 1 . khai báo biến browser
    options = Options()
    # options.add_argument("--headless")  # prevent show mock browser

    service = Service(executable_path="./chromedriver")
    browser = webdriver.Chrome(service=service, options=options)

    # 1. Open Facebook
    browser.get("http://mbasic.facebook.com")

    # 2. Try to login
    email_form = browser.find_element(By.ID, 'm_login_email')
    email_form.send_keys(username) # emails

    password_form = browser.find_element(By.ID, "password_input_with_placeholder").find_element(By.CSS_SELECTOR, 'input')
    password_form.send_keys(password) # password
    password_form.send_keys(Keys.ENTER)
    sleep(random.randint(3,5))

    ok_btn = browser.find_element(By.CSS_SELECTOR, 'form')
    ok_btn.click()

    sleep(random.randint(3,5))

    pickle.dump(browser.get_cookies(), open("my_cookies.pkl", "wb"))

login(sys.argv[1], sys.argv[2])