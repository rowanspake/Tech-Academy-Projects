import os
import time

path = "C:\\script_assignment\\script_assignment_dir"
dirs = os.listdir(path)

for file in dirs:
    print(file)

fName = "bonanza.txt"
fPath = "C:\\script_assignment\\script_assignment_dir"

abPath = os.path.join(fPath,fName)
print(abPath)

modification_time = os.path.getmtime(path)
local_time = time.ctime(modification_time)
print("Last modification time:", local_time)

print(os.getcwd())
