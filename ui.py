import eel
import sys

@eel.expose
def hello(x):
    print("run demo and print " + x)
    
@eel.expose
def get_options_value(options):
   print(options)   
    
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