import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random

options = Options()
options.add_argument("--headless--")  # prevent show mock browser

service = Service(executable_path="./chromedriver")
browser = webdriver.Chrome(service=service, options=options)

browser.get("http://facebook.com")

# load cookies
cookies = pickle.load(open("my_cookies.pkl", "rb"))
print(cookies)
for cookie in cookies:
    browser.add_cookie(cookie)
    
# refresh brwoser
browser.refresh()

sleep(random.randint(5,10))



browser.close()