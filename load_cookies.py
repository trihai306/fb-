import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random
import os
import json
import sys
import time
from test_cookies import login

def check_cookies(cookies_cuser, username = '', password = ''):
    print(cookies_cuser)
    if os.path.exists("cookies.pkl"):
        with open('cookies.pkl', 'rb') as f:
            try:
                cookies_data = pickle.load(f)
            except EOFError:
                cookies_data = []
    else:
        cookies_data = []
        
    stop_flag = 0
    for data in cookies_data:
        data_load = json.loads(data)
        for obj in data_load:
            if 'name' in obj and obj['name'] == 'c_user' and obj['value'] == str(cookies_cuser):
                if obj['expiry'] <= int(time.time()):
                    print("login")
                    login(username, password)
                else:
                    print("Run cookies!")
                    options = Options()
                    # options.add_argument("--headless")  # prevent show mock browser

                    service = Service(executable_path="./chromedriver")
                    browser = webdriver.Chrome(service=service, options=options)
                    
                    browser.get("http://mbasic.facebook.com")
                    for cookie in data_load:
                        browser.add_cookie(cookie)
                    browser.refresh()    
                stop_flag = 1
                break
        if(stop_flag == 1):
            break 
   
    sleep(random.randint(3,5))
    return True

# check_cookies(sys.argv[1])
# browser.close()