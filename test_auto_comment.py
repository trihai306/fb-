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

browser.get("https://www.facebook.com/permalink.php?story_fbid=pfbid0JzJewevFPFxXv5FqLJ9MJNQUtbsXggJgFmfgbvKwXcitBKPgzGoeN1xvQLLtciS5l&id=100091345735868")

# load cookies
cookies = pickle.load(open("my_cookies.pkl", "rb"))
for cookie in cookies:
    browser.add_cookie(cookie)
    
# refresh brwoser
browser.refresh()

sleep(random.randint(5, 10))



comment_content = browser.find_element(By.XPATH, '//div[@aria-label="Viết bình luận"]')
input_comment = comment_content.find_element(By.XPATH, '//p')
input_comment.send_keys("hello")
input_comment.send_keys(Keys.ENTER)

sleep(random.randint(5, 10))
