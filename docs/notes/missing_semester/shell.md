# Shell

## Using the shell
The terminal *prompt*  often looks like this:

`che@che-ubuntu:~/Desktop$ `

It tells you where you currently are, which is `~` (short for "home"). The `$` tells you that you are not the root user, and `#` indicates you are the root user.

We can switch to root user by using the command `sudo su`, it lets you "do" something "as su: (short for "super user", or "root").

and command `exit` can be used to quit root privilige.

---
Suppose we have a file `brightness` that need to be in `root` in order to do writing, you may think the following code will work but it will not:

``` bash
sudo echo 3 > brightness
An error occurred while redirecting file 'brightness'
open: Permission denied
```

The correct code should be:
```bash
echo 3 > sudo brightness
```

::: tip
In this case, the *shell* is authenticated as user and tries to open the brightness file for writing before setting that as `sudo echo`'s output, but is prevented from doing so since the shell does not run as `root`.
:::

::: tip Important to know
Operations like `|`, `>` and `<` are done by the shell, not by the individual program. These individual programs just read from their input and write to their output, whatever it may be
:::

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

If a shell is asked to execute a command that doesn't match one of its programming keywords, it consults an enviroment variable called `$PATH` that lists which directories the shell should search for programs when it is given a command:

``` bash
che@che-ubuntu:~$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
che@che-ubuntu:~$ which echo
/usr/bin/echo
che@che-ubuntu:~$ /usr/bin/echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

::: tip
When we run the `echo` command, the shell sees that it should execute the program `echo`, and the searches through the `:` separated list of directiries in `$PATH` for a file by that name. When it finds it, it runs it. We can find out which file is executed for a given program name using the `which` program. We can also bypass `$PATH` entirely by giving the *path* to the file we want to execute.
:::

## Navigating in the shell
::: tip
A path that starts with `/` is called an *absolute* path. Any other path is a *relative* path. Relative paths are relative to the current working directory, which we can see with the `pwd` command and change with the `cd` command. In a path, `.` referes to the current directory, and `..` to its parent directory.
:::

### ls command
Unless a directory is given as its first argument, `ls` will print the contents of the current directory.

``` bash
che@che-ubuntu:~/Desktop/codespace$ ls -l
total 464
-rw-rw-r--   1 che che    137 2月  12 15:13 deploy.sh
drwxrwxr-x   4 che che   4096 2月  12 14:48 docs
drwxrwxr-x 801 che che  32768 2月  12 15:53 node_modules
-rw-rw-r--   1 che che    578 2月  12 15:51 package.json
-rw-rw-r--   1 che che 427564 2月  12 15:51 package-lock.json
```
The above output gives us a bunch more information about each file or directory present. First, the `d` at the beginning of the second line tells us that `docs` is a directory. 

The follow three groups of three characters (`rwx`) indicate what permissions the owner of the file (first `che`), the owning group (second `che`), and everyone else respectively have on the relevant item. A `-` indicates that the given principal does not have the given permission. 

## Connecting programs
In the shell, programs have two primary "streams" associated with them: their input steam and their output stream.

The simplest form of redirection is `< file` and `> file`. These let you rewire the input and output steams of a program to a file respectively:

``` bash
che@che-ubuntu:~/Desktop$ echo hello > hello.txt
che@che-ubuntu:~/Desktop$ cat hello.txt 
hello
che@che-ubuntu:~/Desktop$ cat < hello.txt 
hello
che@che-ubuntu:~/Desktop$ cat < hello.txt > hello2.txt
che@che-ubuntu:~/Desktop$ cat hello2.txt 
hello
```
In the second last command, the content of `hello.txt` is first passed to `cat`, and then pushed to `hello2.txt`.

You can alos use `>>` to append to a file. Where this kind of input/output redirection really shines is in the use of *pipes*. The `|` operator lets you "chain" programs such that the output of one is the input of another:

``` bash
che@che-ubuntu:~/Desktop$ ls -l
total 43876
drwxrwxr-x 5 che che     4096 2月  12 15:51 codespace
-rwxrwxr-x 1 che che 44922808 2月   5 01:11 Panda5.0.3.AppImage
che@che-ubuntu:~/Desktop$ ls -l | tail -n1
-rwxrwxr-x 1 che che 44922808 2月   5 01:11 Panda5.0.3.AppImage
```
