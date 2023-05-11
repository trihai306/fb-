import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random
import os
import time
import json
import sys

options = Options()
options.add_argument("--headless--")  # prevent show mock browser

# service = Service(executable_path="./chromedriver")
if getattr(sys, 'frozen', False):
    base_path = sys._MEIPASS
else:
    base_path = os.path.dirname(os.path.abspath(__file__))
chromedriver_path = os.path.join(base_path, "chromedriver.exe")
service = Service(executable_path=chromedriver_path)
browser = webdriver.Chrome(service=service, options=options)

browser.get("https://mbasic.facebook.com/permalink.php?story_fbid=pfbid0JzJewevFPFxXv5FqLJ9MJNQUtbsXggJgFmfgbvKwXcitBKPgzGoeN1xvQLLtciS5l&id=100091345735868")

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
        if 'name' in obj and obj['name'] == 'c_user' and obj['value'] == str("100091345735868"):
            if obj['expiry'] <= int(time.time()):
                print("login")
            else:
                for cookie in data_load:
                    browser.add_cookie(cookie)
                browser.refresh()    
            stop_flag = 1
            break
    if(stop_flag == 1):
        break 

sleep(random.randint(3,5))

# auto comment 1 bài viết

comment_content = browser.find_element(By.ID, 'composerInput')
comment_content.send_keys("hello")

button_submit = browser.find_element(By.TAG_NAME, "form").find_element(By.XPATH, "./table/tbody/tr/td[2]/div/input")
button_submit.click()

sleep(random.randint(5, 10))
