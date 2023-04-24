from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import random

# 1 . khai báo biến browser
options = Options()
options.add_argument("--headless--")  # prevent show mock browser

service = Service(executable_path="./chromedriver")
driver = webdriver.Chrome(service=service, options=options)

# 2. Mở thử một trang web
driver.get("https://www.facebook.com/aow.page/posts/pfbid02RxAPefPZE1C4jm3ByyWAJvvnDhqJPaupBsa9sYvdzyoUFHZypuDiKkdKXVj14mzxl?__cft__[0]=AZV759lgpbmZECVO6y6Yv7dkMTVkgQo5TN9rhG06tOZHFcHxqjhcyi30inJNPFUiyhE2hwZ3ofIPhCWyIRKMlzcYmDmIDYj0Fm2u4_OM6NEwTtRwg0ivy3sIi0Y9UyuCxXeOPYeTfrRrF7CUaCL8_3K_SgDqNrcGwWE5GZqj2IOWYILqImHVavP4-wmRBaH10QjJzTD4CBu_ulCCxlvpItDb&__tn__=%2CO%2CP-R")

sleep(random.randint(5,10))

showcomment_link = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div/div/div/div/div[1]/div/div[2]/div[2]/form/div[2]/div[2]/div[1]/div/div[3]/span[1]/a")
showcomment_link.click()
# 3. Dừng chương trình 5 giây

sleep(random.randint(5,10))

# lấy comment. show more link
showmore_link = driver.find_element(By.XPATH,"/html/body/div[1]/div[2]/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div/div/div/div/div[1]/div/div[2]/div[2]/form/div[2]/div[3]/div[2]/div/a/div/span")
showmore_link.click()

sleep(random.randint(5,10))

# likes = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[8]/div/div/div[4]/div/div/div[1]/div/div[1]/div/div[1]/div/span/div/span[1]/span/span")

# print(likes.text)

# sleep(random.randint(5,10))
comment_list = driver.find_elements(By.XPATH,"//div[@aria-label='Comment']")
# print(comment_list)

# lặp trong tất cả comment và hiển thị nội dung
for cmt in comment_list: 
    # Hiển thị tên người và nội dung, cách nhau bởi dấu:
    poster = cmt.find_element(By.CLASS_NAME, "_6qw4")
    content = cmt.find_element(By.CLASS_NAME, "_3l3x") 
    if(poster.text and content.text):
        print("*",poster.text,":",content.text)
        
sleep(random.randint(5,10))

driver.close()
