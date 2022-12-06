[a]: /assets/PythonProjects/scriptspam-1.gif
# scriptspam
scriptspam is a script which copies, pastes and enter the line of any text file you give it. This is great if you want to spam your friends with a Bee Movie script, or spam a scammer with a Shrek script.
## Requirements
* [Python](https://www.python.org/downloads/)
* [pyautogui](/PythonProjects/scriptspam.html#pyautogui)
* [scriptspam project](https://github.com/icepcp/PythonProjects/tree/main/scriptspam)
### pyautogui
Use pip to install pyautogui
```
pip install pyautogui
```
## Running
1. In your scriptspam folder, run ```spammer.py```
```
python spammer.py
```
2. The script will ask you for a filename. Type one of the included filenames (bee.txt/shrek.txt)
```
Type filename: bee.txt
```
3. The script will now ask your for seconds before disaster. Type in a number, it will be parsed into seconds.
::: info
This will halt the script for the amount of seconds you typed in
:::
```
Seconds before disaster: 5
```
4. Watch the world burn...
## Troubleshooting
### Unable to import 'pyautogui'
You do not have pyautogui module installed. Please install it using [these instructions](/PythonProjects/scriptspam.html#pyautogui)
### 'python' is not recognized as an internal or external command, operable program or batch file. (or similar)
#### (for Windows only)
This means that Python has not been added to your environment variables. Run ```py``` to see what version of Python you have installed, head to the [Python download page](https://www.python.org/downloads/) and download your specific version. Once the download has completed, open it and follow these steps:

![Python Installation modification][a]

## Got questions?
Open up a [new discussion](https://github.com/icepcp/PythonProjects/discussions/new) and I'll try my best to answer it.  
Ran into an issue even though you followed all the steps? Open up an [issue](https://github.com/icepcp/PythonProjects/issues/new) and provide all possible details.  
Know how to fix the issue though? Fork my repo and fix the issue and I'll merge it.

#### Congrats! You've made it to the end, thanks for reading along :D