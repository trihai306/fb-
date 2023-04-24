import eel
import sys
from base import Facebook
from test_friends import Friends
from test_cookies import login
from load_cookies import check_cookies
from facebook import FacebookTool


@eel.expose
def hello(x):
    print("run demo and print " + x)


@eel.expose
def get_options_value(options):
    print(options)


@eel.expose
def create_post(options):
    print(options)
    content = options.content
    if(options.hasImage):
        image_url = options.image_url
    if(options.hasPostStory):
        print(options.hasPostStory)
    if(options.likeSelfPost):
        print(options.likeSelfPost)


@eel.expose
def auto_comment(options):
    print(options)
    facebook = Facebook()
    facebook.auto_comment(options["page_url"], options["comment_content"])
    return "success"


@eel.expose
def search_friends_base_address(key, cookies, username, password, browser):
    friends = Friends("http://facebook.com", cookies,
                      username, password, browser)
    return friends.search_friends_base_address(key)


@eel.expose
def search_friends_of_friends(key, cookies, username, password, browser):
    friends = Friends("http://facebook.com", cookies,
                      username, password, browser)
    return friends.search_friends_of_friend(key)


@eel.expose
def check_cookies_fe(cookies_cuser, username, password):
    print(cookies_cuser)
    try:
        if(cookies_cuser):
            print("check cookies!")
            return check_cookies(cookies_cuser, username, password)
        else:
            res = login(username, password)
            return res
    except ValueError as error:
        raise ValueError(error)


@eel.expose
def search_phonebox_key(options,keyword, nums):
    facebook = FacebookTool(options["cookies"], options['openBrowser'])
    result = facebook.search_phonebox_key(keyword, int(nums))
    return result

@eel.expose
def search_groups(options, link, options_pick,  nums):
    # print(options)
    # print(link)
    # print(options_pick)
    # print(nums)
    facebook = FacebookTool(options["cookies"], options['openBrowser'])
    result = facebook.search_groups(link, options_pick, int(nums))
    return result

@eel.expose
def search_suggest_friend(options, keyword, nums):
    facebook = FacebookTool(options["cookies"], options['openBrowser'])
    result = facebook.search_suggest_friend(keyword, int(nums))
    # print(result)
    return result

@eel.expose
def login_fe(username, password):
    res = login(username, password)
    print(res)
    return res


if __name__ == '__main__':
    if sys.argv[1] == '--develop':
        directory = 'src'
        app = None
        page = {'port': 3005}
        eel_kwargs = dict(
            host='127.0.0.1',
            port=8080,
            size=(1280, 800)
        )
        print("start eel be!")
        eel.init(directory, ['.tsx', '.ts', '.jsx', '.js', '.html'])

        eel.start(page, mode=app, **eel_kwargs)
    if sys.argv[1] == '--prod':
        eel.init("dist")
        eel.start("index.html")
