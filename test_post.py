import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random
import json
import os
import time
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

browser.get("http://facebook.com")

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
browser.refresh()

sleep(random.randint(5, 10))

what_is_your_mind = browser.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div[2]/div/div/div/div[3]/div/div[2]/div/div/div/div[1]/div/div[1]/span')
what_is_your_mind.click()

sleep(random.randint(5, 10))

# audience_options_parents = browser.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/div[2]/div')
# audience_options_child = browser.find_elements(By.TAG_NAME, "div")

# audience_public = audience_options_child[0]
# audience_public.click()

# sleep(random.randint(5,10))

# done_btn = browser.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[2]/div/div/div[2]/div/div/div[2]/div/div[2]')

# sleep(random.randint(5,10))

content = browser.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/div/p')

content.send_keys("xin chao toi la hang 123")

sleep(random.randint(5,10))

post_btn = browser.find_element(By.XPATH, "/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[3]/div[2]/div")

post_btn.click()

# auto post

# browser.close()