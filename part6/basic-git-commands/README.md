### Basic git commands

#### Set a username and email on your local git
```
git config --global user.name "user"

git config --global user.email "mail@example.com"
```

#### Initialize git in your project folder
```
git init
```
<hr>

#### Commit to local repo in your project folder(Use it to commit your changes every time you make some)
```
git add .

git commit -m "message"
```

#### Connect remote repo and push your changes to remote
```
git remote add origin https://github.com/username/reponame.git

git push -u origin branchname
```

#### Pull your changes in remote to your local system (When changes to your repo happen outside your system)
```
git pull origin branchname
```
<hr>

#### Clone your remote repo to your system
```
git clone https://github.com/username/reponame.git
```


<details><summary></summary>Thank You<script async src="https://cdn.splitbee.io/sb.js"></script></details>
