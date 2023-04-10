import eel
import sys
from base import Facebook

@eel.expose
def hello(x):
    print("run demo and print " + x)
    
@eel.expose
def get_options_value(options):
   print(options)   
   
@eel.expose
def create_post(options):
    print(options);
    content = options.content
    if(options.hasImage):
        image_url = options.image_url
    if(options.hasPostStory):
        print(options.hasPostStory)
    if(options.likeSelfPost):
        print(options.likeSelfPost)
        
@eel.expose
def login(username, password):
    facebook = Facebook()
    facebook.login(username, password)

@eel.expose
def auto_comment(options):
    print(options)
    facebook = Facebook()
    facebook.auto_comment(options["page_url"], options["comment_content"])
    return "success"

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
    else:
        eel.init("dist")
        eel.start("index.html")