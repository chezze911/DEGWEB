source 'https://rubygems.org'

ruby "2.6.0"
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.0.2'

group :production do
  gem 'pg', '0.20.0'
end

group :development, :test do
  gem 'sqlite3'
end

# Use SCSS for stylesheets
gem 'bootstrap-sass', '~> 3.3.6'
gem 'sass-rails', '>= 3.2'
gem 'bootswatch-rails'
gem 'jquery-ui-rails'

# page load 
gem 'rack-mini-profiler'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Jquery validation
gem 'jquery-validation-rails'

# Use ActiveModel has_secure_password
gem 'bcrypt'

gem "letter_opener", group: :development
gem 'premailer-rails'
gem 'nokogiri'
# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'responders' 

#seed data
gem 'faker'
# gem 'faker-vehicle'

#attachments and amazon s3
gem 'paperclip'
# gem 'aws-sdk', '< 2.0'
gem 'aws-sdk', '~>1.6'

gem 'aws-sdk-s3' 

#environment keys
gem 'figaro'

#pagination
gem 'will_paginate', '~> 3.0.6'

# email
gem 'postmark-rails'

# search
gem 'scoped_search'

# read xslx spreadsheets for seed data
gem 'roo'

# business days calculation
gem 'business_time'

gem 'rails_12factor', group: :production

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  #guard automates various tasks by running custom rules whenever
  # file or directories are modified.
  gem 'guard-bundler', require: false

  #testing plugin
  gem 'guard-rspec', require: false

end

gem "recaptcha", require: "recaptcha/rails"

gem "turnout"
# ruby "2.3.0"
