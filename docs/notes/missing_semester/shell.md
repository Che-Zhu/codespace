# Shell

## Using the shell
The terminal *prompt*  often looks like this:

`che@che-ubuntu:~/Desktop$ `

It tells you where you currently are, which is `~` (short for "home"). The `$` tells you that you are not the root user, and `#` indicates you are the root user.

We can switch to root user by using the command `sudo su`:

`root@che-ubuntu:/home/che/Desktop#`

and command `exit` can be used to quit root privilige

---

We can execute a command with *arguments*:

``` bash
che@che-ubuntu:~/Desktop$ echo hello
hello
```
The shell parses the command by splitting it by whitespace, and then runs the program indicated by the first word, supplying each subsequent word as an argument that the program can access.

::: tip
If you want to provide an argument that contains spaces or other special characters (e.g. a directory named "My Photos"), you can either quote the argument with `'` or `"` (`"My Photos"`), or escape just the relevant characters with `\` (`My\ Photos`).
:::


