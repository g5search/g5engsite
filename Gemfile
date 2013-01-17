source 'https://rubygems.org'

ruby '1.9.3'

gem 'rails', '3.2.11'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

group :development, :test do
  gem 'sqlite3'
end


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  gem 'therubyracer', :platform => :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :production do
  gem 'pg'
end

gem 'jquery-ui-rails'
gem 'jquery-rails'
gem 'bootstrap-sass'
gem 'bourbon'
gem 'fog'
gem 'thin'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

# Refinery CMS
gem 'refinerycms', '~> 2.0.5'

# Specify additional Refinery CMS Extensions here (all optional):
gem 'refinerycms-i18n', '~> 2.0.0'
gem 'refinerycms-blog'
gem 'refinerycms-page-images', '~> 2.0.0'
#  gem 'refinerycms-inquiries', '~> 2.0.0'
#  gem 'refinerycms-search', '~> 2.0.0'
gem 'refinerycms-profiles', :path => 'vendor/extensions'
gem 'refinerycms-wordpress-import', :git => 'git://github.com/maleko/refinerycms-wordpress-import.git'

group :development do
  gem 'guard'
  gem 'guard-livereload'
  gem 'taps'
end
