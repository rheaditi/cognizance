# Jekyll & GitHub Pages on Windows

1. Install [Ruby](http://rubyinstaller.org/downloads) version **2.x.x** and the appropriate [32-bit](http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe) or [64-bit](http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe) version of the DevKit.
2. Install bundler: `gem install bundler`
3. If setting up for an existing project, skip this step. Else:  
  `touch Gemfile`
4. Make sure the Gemfile contains the following:  

  ```ruby
  source 'https://rubygems.org'  
  gem 'github-pages', group: :jekyll_plugins
  ```
5. Run `bundle install`, this installs all github-jekyll plugins etc.
6. `git checkout -b gh-pages` for a project site  
7. Run `bundle exec jekyll new . --force` to setup a new jekyll project.
8. `bundle exec jekyll serve` and check it out in the browser.
