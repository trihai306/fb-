import pickle
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
import random
import json
import asyncio
import tracemalloc
from load_cookies import check_cookies
import os
import time
import sys

class Profile: 
    def __init__(self):
        self.name = None
        self.living = {}
        self.education = []
        self.work = []
        self.contactInfo = {}
        self.basicInfo = {}
        self.nicknames ={}
        self.relationship = {}
        self.family = {}
        self.bio = {}
        self.yearOverviews ={}
        self.quote = {}
    def to_json(self):
        return json.dumps(self.__dict__, ensure_ascii=False)
        
        

class FacebookTool:
    def __init__(self, cookies, openBrowser = False):
        options = Options()
        if(openBrowser == False):
            options.add_argument("--headless")
            
        options.add_argument('--disable-gpu')
        # service = Service(executable_path="./chromedriver")
        if getattr(sys, 'frozen', False):
            base_path = sys._MEIPASS
        else:
            base_path = os.path.dirname(os.path.abspath(__file__))
        chromedriver_path = os.path.join(base_path, "chromedriver.exe")
        service = Service(executable_path=chromedriver_path)
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
        
    def open_tab(self, url):
        self.browser.execute_script("window.open(arguments[0],'_blank');", url)
        
    def crawl_profile(self,link, makeFriend=True):
        profile = Profile()
        if(makeFriend == False):
            self.browser.get(link)
            sleep(random.randint(1,3))
            root = self.browser.find_element(By.ID, 'root')
            see_profile_btn = root.find_element(By.XPATH, "./table/tbody/tr/td/div/section[4]/a")
            see_profile_btn.click()
        else:
            self.browser.get(link)
        sleep(random.randint(1,3))
        try:
            profile.name = self.browser.find_element(By.ID, 'm-timeline-cover-section').find_element(By.TAG_NAME,'strong').text
            introduce_btn = self.browser.find_element(By.ID, 'm-timeline-cover-section').find_element(By.XPATH, "./div[last()]/a[1]")
            introduce_btn.click()
            sleep(random.randint(1,3))
        except NoSuchElementException:
            print("it's not your friend!")
            profile.name = self.browser.find_element(By.ID, 'objects_container').find_element(By.TAG_NAME,'strong').text
        try:
            education = self.browser.find_element(By.ID, 'education').find_elements(By.XPATH, "./div/div/div")
            print(self.browser.find_element(By.ID, 'education').find_element(By.TAG_NAME, 'header').text)
            for item in education:
                profile.education.append(item.find_element(By.XPATH,'./div/div[1]/div[1]//span').text)
        except:
            print("no info about education")
        try:
            work = self.browser.find_element(By.ID, 'work').find_elements(By.XPATH, "./div/div/div")
            print(self.browser.find_element(By.ID, 'work').find_element(By.TAG_NAME, 'header').text)
            for item in work:
                profile.work.append(item.find_element(By.XPATH, "./div/div[1]/div[1]/span").text)
        except:
            print("no info about works")
        try:
            living = self.browser.find_element(By.ID, 'living').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'living').find_element(By.TAG_NAME, 'header').text)
            for item in living:
                profile.living[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print("no info about living")
        
        try:
            contactInfo = self.browser.find_element(By.ID, 'contact-info').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'contact-info').find_element(By.TAG_NAME, 'header').text)
            for item in contactInfo:
                profile.contactInfo[item.find_element(By.XPATH, ".//td[1]").text] =  item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about contract info')
        
        try:
            basicInfo = self.browser.find_element(By.ID, 'basic-info').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'basic-info').find_element(By.TAG_NAME, 'header').text)
            for item in basicInfo:
                profile.basicInfo[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about basic info')
        
        try:
            nicknames = self.browser.find_element(By.ID, 'nicknames').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'nicknames').find_element(By.TAG_NAME, 'header').text)
            for item in nicknames:
                profile.nicknames[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about nicks name')
        
        try:
            relationship = self.browser.find_element(By.ID, 'relationship').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'relationship').find_element(By.TAG_NAME, 'header').text)
            for item in relationship:
                profile.relationship[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about relationship!')
        
        try:
            family = self.browser.find_element(By.ID, 'family').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'family').find_element(By.TAG_NAME, 'header').text)
            for item in family:
                profile.family[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about family!')
        
        try:
            bio = self.browser.find_element(By.ID, 'bio').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'bio').find_element(By.TAG_NAME, 'header').text)
            for item in bio:
                profile.bio[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about bio!')
        
        try:
            yearOverviews = self.browser.find_element(By.ID, 'year-overviews').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'year-overviews').find_element(By.TAG_NAME, 'header').text)
            for item in yearOverviews:
                profile.yearOverviews[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about year overviews')
        
        try:
            quote = self.browser.find_element(By.ID, 'quote').find_elements(By.XPATH, "./div/div//table")
            print(self.browser.find_element(By.ID, 'quote').find_element(By.TAG_NAME, 'header').text)
            for item in quote:
                profile.quote[item.find_element(By.XPATH, ".//td[1]").text] = item.find_element(By.XPATH, './/td[2]').text
        except:
            print('No info about quotes')
        return profile.to_json()
    
    def search_phonebox_key(self,keyword, nums):
        results_profiles = []
        search_input = self.browser.find_element(By.CSS_SELECTOR, 'input[name="query"]:first-of-type')
        search_input.send_keys(keyword) 
        search_input.send_keys(Keys.ENTER)
        sleep(random.randint(1,3))
        search_more_btn = self.browser.find_element(By.CSS_SELECTOR, '.bo.bp')
        search_more_btn.click()
        sleep(random.randint(1,3))
        options = self.browser.find_elements(By.TAG_NAME, 'li')

        options[2].find_element(By.TAG_NAME, 'a').click()
        sleep(random.randint(1,3))
        count = 0
        
        while(count < nums):
            page_link = self.browser.current_url
            results = self.browser.find_element(By.ID, 'BrowseResultsContainer')
            res_li = results.find_elements(By.XPATH, "./div/div/div/div/div")
            profile_links = []
            for item in res_li:
                profile_links.append(item.find_element(By.TAG_NAME, 'a').get_attribute("href"))
            for link in profile_links:
                profile = self.crawl_profile(link)
                results_profiles.append(profile)
                count += 1
                print(f"count = {count} done")
                print('-------------------')
                if(count == nums):
                    break
            if(count == nums):
                break;
            
            self.browser.get(page_link)
            sleep(random.randint(3,5))
            try:
                search_more_page = self.browser.find_element(By.ID, 'see_more_pager').find_element(By.TAG_NAME, "a")
                search_more_page.click()
                sleep(random.randint(3,5))
            except:
                print('No at all')
        print("crawl done!")
        return results_profiles
        
    def search_groups(self, link, options, nums):
        self.browser.get(link)
        sleep(random.randint(3,5))
        
        results_profiles = []

        root = self.browser.find_element(By.ID, 'root') 
        try:
            member = root.find_element(By.XPATH, "./div[1]/header/table/tbody/tr/td[2]")
        except:
            raise ValueError("Tài khoản chưa tham gia nhóm")
        member.click()
        sleep(random.randint(3,5))
        root = self.browser.find_element(By.ID, 'root') 
        member = root.find_element(By.XPATH, "./table/tbody/tr/td/div[3]/ul/li[5]/table/tbody/tr/td[1]/a")
        member.click()
        sleep(random.randint(3,5))
        if options == 'friends':
            root = self.browser.find_element(By.ID, 'root') 
            btn_all = root.find_element(By.XPATH, './div[1]/div[3]/div/a')
            btn_all.click()
            sleep(random.randint(3,5))
        else:
            root = self.browser.find_element(By.ID, 'root') 
            btn_all = root.find_element(By.XPATH, './div[1]/div[4]/div/a')
            btn_all.click()
            sleep(random.randint(3,5))
            
        count = 0
        while(count < nums):
            page_link = self.browser.current_url         
            root = self.browser.find_element(By.ID, 'root') 
            results = root.find_elements(By.XPATH, './div[1]/div/table')
            profile_links = []
            for item in results:
                profile_links.append(item.find_element(By.TAG_NAME, 'a').get_attribute("href"))
            for link in profile_links:
                profile = self.crawl_profile(link)
                results_profiles.append(profile)
                count += 1
                print(f"count = {count} done")
                print('-------------------')
                if(count == nums):
                    break
            if(count == nums):
                break
            self.browser.get(page_link)
            sleep(random.randint(3,5))
            try:
                search_more_items = self.browser.find_element(By.ID, 'm_more_item').find_element(By.TAG_NAME, "a")
                search_more_items.click()
                sleep(random.randint(3,5))
            except:
                break
                print('Already out of members')
        return results_profiles
     
    def search_suggest_friend(self, keywords, nums):
        results_profiles = []
        header = self.browser.find_element(By.ID, 'header')
        friends_a = header.find_element(By.XPATH,'./nav/a[6]')
        friends_a.click()
        sleep(random.randint(3,5))
        friendCenterSearchBox = self.browser.find_element(By.ID, 'friends_center_search_box') 
        input_search = friendCenterSearchBox.find_element(By.XPATH,"./div/div/table/tbody/tr/td[1]/div/label/input")
        input_search.send_keys(keywords)
        input_search.send_keys(Keys.ENTER)
        count = 0
        while(count < nums):
            friendsCenterMain = self.browser.find_element(By.ID, 'friends_center_main') 
            page_link = self.browser.current_url         
            results = friendsCenterMain.find_elements(By.XPATH, './div[1]//table')
            profile_links = []
            for item in results:
                profile_links.append(item.find_element(By.TAG_NAME, 'a').get_attribute("href"))

            for link in profile_links:
                profile = self.crawl_profile(link, False)
                results_profiles.append(profile)
                count += 1
                print(f"count = {count} done")
                print('-------------------')
                if(count == nums):
                    print("abc")
                    break
            if(count == nums):
                break
            self.browser.get(page_link)
            sleep(random.randint(3,5))
            try:
                friendsCenterMain = self.browser.find_element(By.ID, 'friends_center_main') 
                search_more_items = friendsCenterMain.find_element(By.XPATH, './div[2]').find_element(By.TAG_NAME, "a")
                search_more_items.click()
                sleep(random.randint(3,5))
            except:
                print('Already out of members')
                break
        print("crawl done!")
        # for profile in results_profiles:
        #     print(profile.living)
        return results_profiles
        

# async def main():
#     print('Starting coroutine')
#     tool = FacebookTool('100027475503280' ,True)
    
#     # Search danh bạ theo từ khóa
#     # tool.search_phonebox_key("khoa",3)
    
#     # Search thành viên trong nhóm
#     # tool.search_groups("https://mbasic.facebook.com/groups/420893461836711/?refid=27&paipv=0&eav=Afbu02F9K8lSbzv4OkhKajvtSv2R1zNj7QUef3F4Jle9o81o7IIWZQSEUOA8Uaec_yU"
#     #                    , "all", 10)
    
#     # Search gợi ý bạn bè
#     # tool.crawl_profile("https://mbasic.facebook.com/glinhgettingglowingg?eav=AfbUX4pBT_iWACwZ2eEymPVzqOrWBq0OBr0haMc-KW-1qx6Y76OsLoN7NMMD1XVSUzQ&paipv=0")
#     tool.search_suggest_friend('hằng',3)
        
# asyncio.run(main())
    