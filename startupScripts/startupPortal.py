from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep

link = "https://172.31.240.19:4443" #Internal IP Address of machine running the http static server 

connected = False

def connectGuest(link):

    global connected

    try:
        chromeOptions = Options()
        chromeOptions.add_argument("--use-fake-ui-for-media-stream")
        chromeOptions.add_argument("--kiosk")
        chromeOptions.add_argument("--disable-notifications")
        chromeOptions.add_argument("--disable-infobars")
        driver = webdriver.Chrome(chrome_options=chromeOptions)
        print("Loading page...")
        driver.get(link)
        print("Page loaded.")

        connected = True

        print("Status: connected")
    except Exception as e:
        driver.quit()
        connected = False
        print(e)
        print("Connection failed:")
        print("Status: disconnected")


while(True):
    if(connected):
        sleep(5000)
    else:
        connectGuest(link)
