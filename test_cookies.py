import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
# 1 . khai báo biến browser
options = Options()
options.add_argument("--headless--")  # prevent show mock browser

service = Service(executable_path="./chromedriver")
browser = webdriver.Chrome(service=service, options=options)

# 1. Open Facebook
browser.get("http://facebook.com")

# 2. Try to login
email_form = browser.find_element(By.ID, 'email')
email_form.send_keys("0948281268")

password_form = browser.find_element(By.ID, "pass")
password_form.send_keys("khoalatoiday")
password_form.send_keys(Keys.ENTER)
sleep(10)

pickle.dump(browser.get_cookies(), open("my_cookies.pkl", "wb"))

# browser.close()