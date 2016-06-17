## 1. Installing latest version of nodejs.

### Option 1:

Use npm package `n`.  
  
### Option 2:

This installs both node & npm:
```
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Then we update `npm`:
```
$ sudo npm install -g npm@<version>
```

## 2. Installing a specific version of package.

```
$ npm install <name>@<version>
```
