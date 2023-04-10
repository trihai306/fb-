
import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random

class Facebook:
    def __init__(self):
        options = Options()
        options.add_argument("--headless--")  # prevent show mock browser

        service = Service(executable_path="./chromedriver.exe")
        self.browser = webdriver.Chrome(service=service, options=options)
        
    def get_link(self,page_url):
        self.browser.get(page_url)

    def close(self):
        self.browser.close()

    def login(self, username, password):
        self.get_link("http://facebook.com/login")
        sleep(random.randint(5, 10))
        email_form = self.browser.find_element(By.ID, 'email')
        email_form.send_keys(username)
        password_form = self.browser.find_element(By.ID, "pass")
        password_form.send_keys(password)
        password_form.send_keys(Keys.ENTER)
        sleep(random.randint(5, 10))
        pickle.dump(self.browser.get_cookies(), open("my_cookies.pkl", "wb"))
        
    def load_cookes(self):
        cookies = pickle.load(open("my_cookies.pkl", "rb"))
        print(cookies)
        for cookie in cookies:
            print(12345)
            self.browser.add_cookie(cookie)
        sleep(random.randint(5,10))
        self.browser.refresh()
        sleep(random.randint(5,10))
        
    def auto_comment(self, page_url, content_comment):
        self.get_link(page_url)
        self.load_cookes()
        comment_content = self.browser.find_element(By.XPATH, '//div[@aria-label="Viết bình luận"]')
        input_comment = comment_content.find_element(By.XPATH, '//p')
        input_comment.send_keys(content_comment)
        sleep(random.randint(5, 10))
        input_comment.send_keys(Keys.ENTER)
        sleep(random.randint(5, 10))
        self.close()
    
    
        

            