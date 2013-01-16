# G5 Engineering Site

This is G5's implementation of RefineryCMS to showcase the Engineers and what we do,
how we do it, and what we do for fun.  If you are a contributor, awesome. Clone the
repo and get started!


## Requirements

* [Ruby 1.9.3](http://www.ruby-lang.org/en/downloads/)
* [Bundler](http://gembundler.com/)
* [Heroku Toolbelt](https://toolbelt.heroku.com)


## Installation

```bash
$ git clone https://github.com/g5search/g5engsite.git
$ cd g5engsite
$ bundle install --path vendor/bundle
```

And create your local database

```bash
$ rake db:migrate
$ rake db:seed
```

### Alternate DB Installation

If you have been added as a colloborator to the Heroku web application you can
use taps to get the latest version of the RefineryCMS database.

From RAILS_ROOT

```bash
$ heroku db:pull
```


## Usage

The G5 engineering website relies on RefineryCMS. Below are some resources to
getting you started with Refinery.

### RefineryCMS Guides

* Documentation is available in the [guides](http://refinerycms.com/guides)
* Questions can be asked on our [Google Group](http://group.refinerycms.org)

### Running Locally

The Heroku toolbelt comes bundled with Foreman. Create a local ```.dotenv```
file with the S3_BUCKET, S3_KEY and S3_SECRET if you want to view production
assets locally.

You may want to also consider setting the ```RACK_ENV``` to development in
your local environment:

```bash
$ echo "RACK_ENV=development" >>.env
```

Otherwise, simply start your app:

```bash
$ foreman start
```

And visit http://localhost:5000.


## Deployment

```bash
$ git push heroku master
```

The live site is running at http://engineering.getg5.com/


## Authors

* David Ryder [@libryder](https://github.com/libryder)
* Levi Brown [@levibrown](https://github.com/levibrown)
* Michael Mitchell [@variousred](https://github.com/variousred)
* John Lucia [@johnlucia](https://github.com/johnlucia)
* Colton Fent [@coltomatic](https://github.com/coltomatic)
* Chris Kraybill [@ckraybill](https://github.com/ckraybill)


## Contributing

1. Clone it
2. Get it running
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Write your code and **specs**
5. Commit your changes (`git commit -am 'Add some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request
