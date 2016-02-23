# Apache, MySQL, PHP etc
 
[Main Guide](http://jason.pureconcepts.net/2015/10/install-apache-php-mysql-mac-os-x-el-capitan) is here. An article explaining everything for OS X El Capitan.

# Steps

So I don't have to go follow that link again. :P


#### 1. Enable Apache

Already installed. Start the service by:

```
apachectl start
```

Then check `localhost` for the "It Works!" page.


#### 2. Config backup

```
cd /etc/apache2/
cp httpd.conf httpd.conf.bak
```


#### 3. Edit config - enable PHP

In `httpd.conf`, uncomment the line `LoadModule php5_module libexec/apache2/libphp5.so` and restart apache `sudo apachectl restart`.

#### 4. Document root

By default it is at `/Library/WebServer/Documents`. Or execute `grep DocumentRoot httpd.conf` to find it.

```
sudo touch /Library/WebServer/Documents/phpinfo.php
subl /Library/WebServer/Documents/phpinfo.php
```

Add the following to the file: `<?php phpinfo();?>`

Now check `localhost/phpinfo.php` to see if PHP is working fine.

#### 5. Download & install MySQL for Mac

[Download link](http://dev.mysql.com/downloads/mysql/)

Mount the .dmg and install the .pkg

#### 6. Starting the server

Preferences > MySQL > Start MySQL Server

#### 7. Add mysql to the path

Open `/etc/paths/` and append `/usr/local/mysql/bin` to it. (First line)

Login to the client using the root password that was generated during the installation. (Hopefully you kept note of that)

```
mysql -u root -p
```
