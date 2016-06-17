
###1. Deleting `.Trash-1000` files.

Note: [Where they come from.](http://superuser.com/questions/169980/what-is-trash-and-trash-1000)

In the normal scenario, if you can see these Linux hidden files on your Windows partition, you may be able to just delete them by selecting the folder and hitting `Del` or `Shift + Del`.

In the abnormal scenario :laughing:, it will have some sort of `Access Denied` or `Filename too long` or `Filename invalid` error.
In this specific case, when I'd received `Filename too long or invalid` after trying to delete it from `Command Prompt`, I went to the Volume's Properties > Tools > Error Checking and performed the `Check`. Depending on how much it has to check, this process may take a while. Once it's done, we go ahead and delete the folder like we normally would have. Simple.
