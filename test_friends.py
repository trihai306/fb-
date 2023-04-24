import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random
import json
from load_cookies import check_cookies
import os
import json
import time

class Person:
    def __init__(self, name, other_info):
        self.name = name
        self.other_info = other_info
    
    def to_json(self):
        return json.dumps(self.__dict__, ensure_ascii=False)


class Friends:
    def __init__(self, link, cookies, openBrowser = False):
        options = Options()
        if(openBrowser == False):
            options.add_argument("--headless")
            
        options.add_argument('--disable-gpu')
        service = Service(executable_path="./chromedriver")
        self.browser = webdriver.Chrome(service=service, options=options)
        self.browser.get("http://mbasic.facebook.com")

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
                if 'name' in obj and obj['name'] == 'c_user' and obj['value'] == str(cookies):
                    if obj['expiry'] <= int(time.time()):
                        print("login")
                    else:
                        for cookie in data_load:
                            self.browser.add_cookie(cookie)
                        self.browser.refresh()    
                    stop_flag = 1
                    break
            if(stop_flag == 1):
                break 
    
        sleep(random.randint(3,5))

    def get_xpath(self, content):
        return self.browser.find_element(By.XPATH, content)

    def get_xpath_mul(self, content):
        return self.browser.find_elements(By.XPATH, content)

    def get_byId(self, content):
        return self.browser.find_element(By.ID, content)

    def search_friends_base_address(self, address):
        search_input = self.get_xpath("//input[@aria-autocomplete='list']")
        search_input.send_keys(address)
        sleep(random.randint(3, 5))
        search_input.send_keys(Keys.ENTER)
        sleep(random.randint(3, 5))
        people_option = self.get_xpath(
            "//div[@aria-label='Bộ lọc kết quả']//div[@role='list']//div[@role='listitem'][3]")
        people_option.click()
        sleep(random.randint(3, 5))
        friend_option = self.get_xpath(
            "//div[@aria-label='Bộ lọc kết quả']//div[@role='list'][1]//div[@role='listitem'][3]//div[@role='listitem'][1]")
        friend_option.click()
        sleep(random.randint(3, 5))
        my_friend_option = self.get_byId("Bạn bè của tôi")
        my_friend_option.click()
        sleep(random.randint(3, 5))
        while True:
            try:
                end = self.browser.find_element(By.CLASS_NAME, 'x2b8uid')
                if end.is_displayed():
                    break
            except Exception:
                pass

            self.browser.execute_script(
                "window.scrollTo(0, document.body.scrollHeight);")
            sleep(random.randint(5, 10))
        friends = self.get_xpath_mul(
            "//div[@role='feed']/div[@class='x1yztbdb']")
        
        results = []  

        for index,friend in enumerate(friends):
            name = friend.find_element(
                By.CSS_SELECTOR, '[role="presentation"]').text
            other_info = friend.find_element(By.XPATH, f'/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[{index+1}]/div/div/div/div/div/div/div/div/div/div/div[2]/div[1]/div[1]/div/div[2]/span/span').text
            person = Person(name, other_info).to_json()
            results.append(person)
            
        return results
            

    def search_friends_of_friend(self, name):
        search_input = self.get_xpath("//input[@aria-autocomplete='list']")
        search_input.send_keys(name)
        sleep(random.randint(3, 5))
        search_input.send_keys(Keys.ENTER)
        sleep(random.randint(3, 5))
        people_option = self.get_xpath(
            "//div[@aria-label='Bộ lọc kết quả']//div[@role='list']//div[@role='listitem'][3]")
        people_option.click()
        sleep(random.randint(3, 5))
        friend_option = self.get_xpath(
            "//div[@aria-label='Bộ lọc kết quả']//div[@role='list'][1]//div[@role='listitem'][3]//div[@role='listitem'][1]")
        friend_option.click()
        sleep(random.randint(3, 5))
        my_friend_option = self.get_byId("Bạn của bạn bè")
        my_friend_option.click()
        sleep(random.randint(3, 5))
        while True:
            try:
                end = self.browser.find_element(By.CLASS_NAME, 'x2b8uid')
                if end.is_displayed():
                    break
            except Exception:
                pass

            self.browser.execute_script(
                "window.scrollTo(0, document.body.scrollHeight);")
            sleep(random.randint(10, 15))
        friends = self.get_xpath_mul(
            "//div[@role='feed']/div[@class='x1yztbdb']")
        
        results = []        

        for index,friend in enumerate(friends):
            name = friend.find_element(
                By.CSS_SELECTOR, '[role="presentation"]').text
            other_info = friend.find_element(By.XPATH, f'/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[{index+1}]/div/div/div/div/div/div/div/div/div/div/div[2]/div[1]/div[1]/div/div[2]/span/span').text
            person = Person(name, other_info).to_json()
            results.append(person)
        print(results)
        return results

    def post_wall_friend(self, url, content = None, image = None):
        print("Post wall to friend")
        print(content)
        self.browser.get(url)
        sleep(random.randint(3,5))
        write_post = self.get_xpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div[4]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/div")
        write_post.click()
        sleep(random.randint(3,5))
        content_form = self.get_xpath("/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/div[1]/p")
        content_form.send_keys(content)
        sleep(random.randint(3,5))
        post_btn = self.get_xpath("/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[3]/div[2]")
        post_btn.click()
        
    def chat_friend(self, url, content = None, image = None):
        print("Chat Friend")
        print(content)
        self.browser.get(url)
        sleep(random.randint(3,5))
        message_content = self.get_xpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div[2]/div/div/div[2]/div/div/div[4]/div[2]/div/div/div[1]/p")
        message_content.send_keys(content)
        message_content.send_keys(Keys.ENTER)
        
if __name__ == '__main__':
    friends = Friends("http://facebook.com", '100091345735868' ,True) # cuser cookies
    # friends.search_friends_base_address("Hà Nội")
    # friends.search_friends_of_friend("an")
    
    # Đăng tường bạn bè
    # friends.post_wall_friend("https://www.facebook.com/thihang.phan.9212", "Hello world!")
    
    # Nhắn tin bạn bè
    friends.chat_friend("https://www.facebook.com/messages/t/100012135511720", "Xin chao")
