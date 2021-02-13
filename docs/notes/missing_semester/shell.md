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

## Exercises answers 
1. Making sure we are running an appropriate shell

``` bash
che@che-ubuntu:/$ echo $SHELL
/bin/bash
```

2. Create a new directory called `missing` under `/tmp`

``` bash
che@che-ubuntu:/$ cd tmp && mkdir missing
```

3. Look up the `touch` program (`man touch`)

4. Use `touch` to create a new file called `semester` in `missing`

``` bash
che@che-ubuntu:/tmp$ cd missing/ && touch semester
```

5. Write the following into that file, one at a time:

::: details
#!/bin/sh
curl --head --silent https://missing.csail.mit.edu
:::

``` bash
che@che-ubuntu:/tmp/missing$ echo '#!/bin/sh' > semester
che@che-ubuntu:/tmp/missing$ echo 'curl --head --silent https://missing.csail.mit.edu' >> semester
```

::: tip
`#` starts a comment in Bash, and `!` has a special meaning even within double-quoted strings. Bash treats single-quoted strings (`'`) differently: [Bash quoting](https://www.gnu.org/software/bash/manual/html_node/Quoting.html)
:::

6. Try to execute the file by using script `./semester`

``` bash
che@che-ubuntu:/tmp/missing$ echo '#!/bin/sh' > semester
che@che-ubuntu:/tmp/missing$ echo 'curl --head --silent https://missing.csail.mit.edu' >> semester
che@che-ubuntu:/tmp/missing$ ls -l
total 4
-rw-rw-r-- 1 che che 61 2月  13 17:44 semester

```
It does not work because we are trying to execute this file without `x` (execute) permission, and the user `che` have only `r` (read) and `w` (write) permissions according to `ls -l` command output.

7. Run the command by explicitly starting the `sh` interpreter, and giving it the file `semester` as the first argument.

``` bash
che@che-ubuntu:/tmp/missing$ sh semester
HTTP/2 200 
content-type: text/html; charset=utf-8
server: GitHub.com
last-modified: Thu, 11 Feb 2021 04:30:47 GMT
access-control-allow-origin: *
etag: "6024b2f7-1f31"
expires: Fri, 12 Feb 2021 15:23:44 GMT
cache-control: max-age=600
x-proxy-cache: MISS
x-github-request-id: A9EE:47A3:AC1A7:B4619:60269B21
accept-ranges: bytes
date: Sat, 13 Feb 2021 10:00:21 GMT
via: 1.1 varnish
age: 0
x-served-by: cache-tyo11929-TYO
x-cache: HIT
x-cache-hits: 1
x-timer: S1613210422.579820,VS0,VE181
vary: Accept-Encoding
x-fastly-request-id: 0cd46721fae068c29f4e5cc8b8c4ab71c914d07f
content-length: 7985
```

It works because we are not executing the file `semester`directly. Instead we use the Bash interpreter to execute the file.

8. Look up the `chmod` program using `man chmod`

9. Use `chmod` to make it possible to run the command `./semester` rather than having to type `sh semester`.

``` bash
che@che-ubuntu:/tmp/missing$ 
```

::: tip
How does shell know that the file is supposed to be interpreted using `sh`? [shebang](en.m.wikipedia.org/wiki/Shebang_(Unix))
:::

10. Use `|` and `>` to write the "last modified" date output by `semester ` into a file called `last-modified.txt` in your home directory.

