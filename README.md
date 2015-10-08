# experimental-hq

#Switch to Python 3.x

Simple is best:

    alias python=python3


1. http://stackoverflow.com/questions/3339530/change-default-python-version-from-2-4-to-2-6
2. http://askubuntu.com/questions/320996/make-default-python-command-to-use-python-3


#Install pip + httpie tren koding
  
	wget https://bootstrap.pypa.io/get-pip.py
	sudo python get-pip.py 
	sudo pip install httpie

	http "https://graph.facebook.com/butchiso/feed?access_token=286986714771065|ECA9OaR83KSDtDOrDU-VIA8Xn5g&fields=id&limit=10"

	http "https://graph.facebook.com/butchiso/feed?access_token=286986714771065|ECA9OaR83KSDtDOrDU-VIA8Xn5g&fields=id&limit=10" If-None-Match:"\"8060e0abdda8b72112add3f834a666601f24a63c\""