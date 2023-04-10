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
for cookie in cookies:
    browser.add_cookie(cookie)
    
# refresh brwoser
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

content.send_keys("xin chao toi la hang")

sleep(random.randint(5,10))

post_btn = browser.find_element(By.XPATH, "/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[3]/div[2]/div")

post_btn.click()

# browser.close()