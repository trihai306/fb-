import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random
import sys
import json
import os

def login(username, password):
    options = Options()
    # service = Service(executable_path="./chromedriver")
    if getattr(sys, 'frozen', False):
        base_path = sys._MEIPASS
    else:
        base_path = os.path.dirname(os.path.abspath(__file__))
    chromedriver_path = os.path.join(base_path, "chromedriver.exe")
    service = Service(executable_path=chromedriver_path)
    browser = webdriver.Chrome(service=service, options=options)
    browser.get("http://mbasic.facebook.com")
    email_form = browser.find_element(By.ID, 'm_login_email')
    email_form.send_keys(username) # emails
    password_form = browser.find_element(By.ID, "password_input_with_placeholder").find_element(By.CSS_SELECTOR, 'input')
    password_form.send_keys(password) # password
    password_form.send_keys(Keys.ENTER)
    
    sleep(random.randint(3,5))
    
    ok_btn = browser.find_element(By.CSS_SELECTOR, 'form')
    ok_btn.click()
    
    sleep(random.randint(3,5))
    
    if 'login' in browser.current_url:
        browser.close()
        raise ValueError(f"Sai tài khoản hoặc mật khẩu của username: {username}") 

    cookies_json = json.dumps(browser.get_cookies())
    if os.path.exists("cookies.pkl"):
        with open('cookies.pkl', 'rb') as f:
            try:
                cookies_data = pickle.load(f)
            except EOFError:
                cookies_data = []
    else:
        cookies_data = []
    c_user = browser.get_cookie("c_user").get('value')
    stop_flag = 0
    for i, data in enumerate(cookies_data):
        data_load = json.loads(data)
        for obj in data_load:
            if 'name' in obj and obj['name'] == 'c_user' and obj['value'] == c_user:
                print("found it!")
                cookies_data.pop(i)
                cookies_data.insert(i, cookies_json)
                stop_flag = 1
                break
        if stop_flag == 1:
            break
    if(stop_flag == 0):
        cookies_data.append(cookies_json)
    with open('cookies.pkl', 'wb') as f:
        pickle.dump(cookies_data, f)
    return c_user

# login(sys.argv[1], sys.argv[2])
# with open('cookies.pkl', 'rb') as f:
#     datas = pickle.load(f)
#     for data in datas:
#         print(data)
#         print("------------")
