#G5 Engineering Site#
  
##Getting Started
  

```bash
git clone git@github.com:libryder/g5devsite.git  
cd g5devsite
bundle
rake db:migrate
rake db:seed
rails s
```

###Add a hostname (to access production)
**sudo nano /etc/hosts**  

Add the following line:  
```bash
74.207.249.68    g5engsite.com
```

###Overriding a particular view  
For example, if you want to override the footer:
```bash
rake refinery:override view=refinery/_footer.html
```

##Contributing  

Please follow our workflow:  

1. Create a branch
2. Commit changes to branch
3. Submit a pull request
