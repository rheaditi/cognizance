# APT Related

#### Remove (`apt remove <name>`)
> remove is identical to install except that packages are removed instead of installed. 
**Note that removing a package leaves its configuration files on the system.**
> If a plus sign is appended to the package name (with no intervening space), the identified package will be installed instead of removed.

#### Purge (`apt purge <name>`)
> purge is identical to remove except that packages are removed and purged (**any configuration files are deleted too**).

#### CLI for APT

Basic commands: 

|Command|Description|
|---|---|
|list|list packages based on package names|
|search|search in package descriptions|
|show|show package details|
|update|update list of available packages|
|install|install packages|
|remove|remove packages|
|upgrade|upgrade the system by installing/upgrading packages|
|full-upgrade|upgrade the system by removing/installing/upgrading packages|
|edit-sources|edit the source information file|
