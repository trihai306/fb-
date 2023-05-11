from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random
import os
import pickle
import json
import time
import sys

class Content:
    def __init__(self):
        self.like = 0
        self.comment = []


def crawl_comment(link, nums):
    # 1 . khai báo biến browser
    options = Options()
    # options.add_argument("--headless")  # prevent show mock browser

    # service = Service(executable_path="./chromedriver")
    if getattr(sys, 'frozen', False):
        base_path = sys._MEIPASS
    else:
        base_path = os.path.dirname(os.path.abspath(__file__))
    chromedriver_path = os.path.join(base_path, "chromedriver.exe")
    service = Service(executable_path=chromedriver_path)
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(link)

    sleep(random.randint(3, 5))

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
                        driver.add_cookie(cookie)
                    driver.refresh()
                stop_flag = 1
                break
        if(stop_flag == 1):
            break

    sleep(random.randint(3, 5))

    content_comment = Content()

    root = driver.find_element(By.ID, 'm_story_permalink_view')

    current_url = driver.current_url

    content_cmt = root.find_element(By.XPATH, './div[2]')

    emotions = content_cmt.find_element(By.XPATH, './div/div[3]/a')
    emotions.click()
    sleep(random.randint(3, 5))
    likes = driver.find_element(By.ID, 'root').find_element(
        By.XPATH, "./table/tbody/tr/td/div/div/a[2]").text
    print(f"Likes: {likes} ")
    driver.get(current_url)
    sleep(random.randint(3, 5))
    more_comment = driver.find_element(By.ID, 'add_comment_link_placeholder')
    comments = driver.find_element(By.ID, 'm_story_permalink_view').find_elements(
        By.XPATH, './div[2]/div/div[5]/div')
    for comment in comments:
        # print(
        #     f'Tác giả: {comment.find_element(By.TAG_NAME, "h3").text}. Nội dung:  {comment.find_element(By.XPATH, "./div[1]").text} ')
        print(comment.text)


crawl_comment("https://mbasic.facebook.com/story.php?story_fbid=pfbid0XR6rTft6wFqnkHHRD7JJj5BXRSeCYRhtNCSJT3crCLaX4BELPJ2h69k2zsZ3EQgkl&id=112943320241635&eav=Afb2Ha3QW8HxUMxYq2w9dFLvJVaCMyFDrhuMX7XgDVPDNEQ15ZmUxNDn8yyAYL1Y4g4&refid=17&_ft_=qid.-4292872449082540587%3Amf_story_key.821230562746237%3Atop_level_post_id.821230562746237%3Atl_objid.821230562746237%3Acontent_owner_id_new.112943320241635%3Athrowback_story_fbid.821230562746237%3Apage_id.112943320241635%3Aphoto_id.821230532746240%3Astory_location.4%3Astory_attachment_style.photo%3Aott.ottAX9w2IT75hhnL9PD%3Asty.22%3Aent_attachement_type.MediaAttachment%3Aapp_id.121876164619130%3Apage_insights.%7B%22112943320241635%22%3A%7B%22page_id%22%3A112943320241635%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A112943320241635%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntStatusCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A266%2C%22publish_time%22%3A1682353423%2C%22story_name%22%3A%22EntStatusCreationStory%22%2C%22story_fbid%22%3A%5B821230562746237%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A4%2C%22targets%22%3A%5B%7B%22actor_id%22%3A112943320241635%2C%22page_id%22%3A112943320241635%2C%22post_id%22%3A821230562746237%2C%22role%22%3A1%2C%22share_id%22%3A0%7D%5D%7D%7D%3Aprofile_id.112943320241635%3Aactrs.112943320241635%3Atds_flgs.3%3Athid.112943320241635%3A306061129499414%3A2%3A1682353423%3A1682353423%3A466142951010026955%3A%3A821230562746237%3Aftmd_400706.111111l&__tn__=%2AW-R&paipv=0#footer_action_list", 10)
