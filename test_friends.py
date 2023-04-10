import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random


class Friends:
    def __init__(self, link):
        options = Options()
        options.add_argument("--headless")
        options.add_argument('--disable-gpu')
        service = Service(executable_path="./chromedriver")
        self.browser = webdriver.Chrome(service=service, options=options)

        self.browser.get(link)

        # load cookies
        cookies = pickle.load(open("my_cookies.pkl", "rb"))
        for cookie in cookies:
            self.browser.add_cookie(cookie)

        # refresh brwoser
        self.browser.refresh()

        sleep(random.randint(5, 10))

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
            sleep(random.randint(10, 15))
        friends = self.get_xpath_mul(
            "//div[@role='feed']/div[@class='x1yztbdb']")

        for friend in friends:
            name = friend.find_element(
                By.CSS_SELECTOR, '[role="presentation"]').text
            print(name)

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

        for friend in friends:
            name = friend.find_element(
                By.CSS_SELECTOR, '[role="presentation"]').text
            print(name)

if __name__ == '__main__':
    friends = Friends("http://facebook.com")
    # friends.search_friends_base_address("Hà Nội")
    friends.search_friends_of_friend("an")
