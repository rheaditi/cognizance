# Intro
Main guide I'm following is [this](http://railsapps.github.io/installrubyonrails-mac.html).

## Pre-requisites
* xcode command line tools
* gpg
* Homebrew
* git


## Steps

### 1. Get RVM
 [Detailed instructions](https://rvm.io/rvm/install).
 * `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`
 * `\curl -sSL https://get.rvm.io | bash -s stable`
 * `\curl -sSL https://get.rvm.io | bash -s -- --ignore-dotfiles`
 *  `type rvm | head -n 1`
 *  if all goes well, output should be `rvm is a function`
 *  `echo rvm_auto_reload_flag=2 >> ~/.rvmrc`
 *  `rvm get stable --autolibs=enable` Update to current stable RVM.
 *  Restart terminal / logout-login.

### 2. Install Ruby & gem

 * Check latest recommended version at http://www.ruby-lang.org/en/downloads/.
 * `rvm install ruby-VERSION` eg: `rvm install ruby-2.3.0`
 * Verify by running `ruby -v` to see if the version is correct.
 * `gem update --system`  to update gem to the latest version.
 * `gem update` updates the installed gems. `gem list` for list of gems currently installed and `gem outdated` for listing the gems that should be upgraded.
 * `echo "gem: --no-document" >> ~/.gemrc` to disable downloading of docs -> speeds up the process of installing gems.
 * Some essential gems to install:
   * `gem install bundler`
   * `gem install nokogiri`

### 3. Install Rails

 * (Optional) switch to another local gemset `rvm use ruby-<RUBY_VERSION>@rails<RAILS_VERSION> --create` eg: `rvm use ruby-2.3.0@rails4.2 --create`
 * `gem install rails`
 * `rails -v` should give you the version recommended at http://rubygems.org/gems/rails

### 4. Installtion of Rails is now done!

Good job. High-five! =)

## Setting up an application

Replace APP_NAME with your app name & RUBY_VERSION with the version accordingly. =P

```shell
$ mkdir APP_NAME
$ cd APP_NAME
$ rvm use ruby-RUBY_VERSION@APP_NAME --ruby-version --create
$ gem install rails
$ rails new .
$ rails server
```

Last line should host your dev server and you can check it out on localhost:3000 (most likely).

