# What is Client and Server?

In web development any device which works at the user-end and is connected to the internet is called the client, it can be either your mobile, laptop, or personal computer.

A server can be imagined like a computer that works 24x7 and is connected to the internet. It is at this computer where all the files of your site are stored. When we enter some URL in the browser the webpage which is displayed to you was stored in some servers previously.

Terms: Url, Server, Requests

# Request to Response: How it works?

So what is a request?. Just as the work itself expresses, a web request is a request which is sent from the client(i.e. Browsers) to the server asking for some data which are present in the server.

As a response to the request which the browsers just sent the server will process the request and will return the required data which can be either a Webpage or some other data.

Terms: Request, response, browser, and servers.

## URL: Uniform Resource Locator

"https://join.tinkerhub.org" In short this is called an URL. But if we take a close look we can see more things such as Protocol used, Domain Name, Sub-Domain name, and more. I will break it up for you.

"https" is called the protocol part of a URL. Its full form is HyperText Transfer Protocol and the "s" stands for secure as it is more secure with end-to-end encryption compared to HTTP and HTTPS is more widely used because of its security features.

"tinkerhub" is called is the domain part of the URL. just like we all have unique fingerprints, shouldn't there be something to identify the servers. That is where his domain name comes into play. these domain names are referring to the server where the data is stored.

Task: There won't be any fun if I narrate it all like a story. To find out for yourself what "join" means. I will give you some clue, it's also called sub-domain.

## DNS: Domain Name System

I am sure that most of you have heard of the term "IP Address" it stands for "Internet Protocol Address" and is used to identify devices that are connected to the internet and are unique for each device.

Servers also have these IP Address which look like this 2001:db8:3333:4444:5555:6666:7777:8888(IPv6) or 192.0.2.146(IPv4).

What If I told you now onward instead of typing "youtube.com" you have you memorize and typing in some random group of numbers and strings. You can do it let's say for some five-six websites. If there were no DNS Servers you would have to do the same for all the websites.

Let me come to the point. So basically DNS Servers act as a dictionary that converts those human-readable things like "youtube.com" to the IP Address which points to the server where all the youtube videos and their data are being stored so that the request can be delivered to the correct server and the response can be returned.

Terms: IP Address, IPv6, IPv4, and DNS Server

---

So when you enter the domain name into the browser's search bar, first your request is sent to the DNS Server to resolve the IP Address of the server. After the IP Address of the server you are requesting has been found your request is sent to it. After processing the request the server returns the response which contains the data

if you tried to visit some website most probably the response would be containing the webpage that is to be displayed to you. If you like to explore more take a look at this.

### [How Web Works By Academind ](https://academind.com/tutorials/how-the-web-works/)



<details><summary></summary>Thank You<script async src="https://cdn.splitbee.io/sb.js"></script></details>
