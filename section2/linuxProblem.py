import json
import subprocess
dic = json.load(open('requirements.json'))
arr = dic['Dependencies']
fault = []
for i in arr:
    gg = subprocess.run(["pip3", "install", i])
    if gg.returncode == 0:
        continue
    else:
        fault.append(i)
if not fault:
    print("Success!!")
else:
    print("Was unable to install following packages")
    for k in fault:
        print(k)




