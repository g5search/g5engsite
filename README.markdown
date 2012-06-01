#G5 Engineering Site#
  
##Getting Started  

This is G5's implementation of RefineryCMS to showcase the Engineers and what we do, 
how we do it, and what we do for fun.  If you are a contributor, awesome. Clone the 
repo and get started!

```plain
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

###RefineryCMS Guides  
* Documentation is available in the [guides](http://refinerycms.com/guides)
* Questions can be asked on our [Google Group](http://group.refinerycms.org)

##Contributing  

Please follow our workflow:  

1. Create a branch
2. Commit changes to branch
3. Submit a pull request
