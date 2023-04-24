


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

options = Options()
options.add_argument("--headless--")  # prevent show mock browser

service = Service(executable_path="./chromedriver")
browser = webdriver.Chrome(service=service, options=options)

browser.get("https://www.facebook.com/permalink.php?story_fbid=pfbid0JzJewevFPFxXv5FqLJ9MJNQUtbsXggJgFmfgbvKwXcitBKPgzGoeN1xvQLLtciS5l&id=100091345735868")

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

while True:
    try:
        end = browser.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[2]/div[1]/div[2]/span/span')
        end.click()
        sleep(random.randint(3, 5))
    except Exception:
        break

list_comments_ul = browser.find_element(By.XPATH, "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/ul")
list_comments_li = list_comments_ul.find_elements(By.XPATH, "//li//div[1]//div[2]//ul//li[2]")


for comment in list_comments_li:
    comment.click()
    
sleep(random.randint(10,20))

list_content = list_comments_ul.find_elements(By.XPATH, "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/ul/li")
for content in list_content:
    input = content.find_element(By.CSS_SELECTOR,"p")
    input.send_keys("hello world!")
    input.send_keys(Keys.ENTER)
    sleep(random.randint(1,2))
    
sleep(random.randint(3,5))