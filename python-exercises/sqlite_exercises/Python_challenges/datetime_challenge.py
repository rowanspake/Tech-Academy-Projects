from datetime import datetime
import pytz



portland_time = datetime.now(pytz.timezone('US/Pacific'))
portland_hour = portland_time.strftime('%H')

london_time = datetime.now(pytz.utc)
london_hour = london_time.strftime('%H')

new_york_time = datetime.now(pytz.timezone('US/Eastern'))
new_york_hour = new_york_time.strftime('%H')

branches = {'Portland':portland_hour,
            'London':london_hour,
            'New York':new_york_hour}

def branchOpen():
    print("All branches are open from 9am to 5pm local time:")
    for x in branches:
        branch = int(branches[x])
        if 9 >= branch <= 17:
            print("The",x,"branch is open")
        else:
            print("The",x,"branch is closed")

branchOpen()
