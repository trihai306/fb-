import schedule
import time
import random
def do_action(job_crawl):
    start = 0
    end = 0
    finish_turns = 0
    stop_time = 0
    stop_error_status = 0
    stop_error_time = 0
    total_turns_status = 0
    total_turns = 0
    start_list_status = 0
    start_list = 0
    end_list = 0
    schedule.every(10).seconds.do(job_crawl)
    while True:
        schedule.run_pending()
        time.sleep(random.randint(start, end))
    

# schedule the method to run every 10 seconds

# loop indefinitely, running scheduled tasks as they become due