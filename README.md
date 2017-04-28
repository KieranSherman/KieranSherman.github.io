## Download JoJ
To download JoJ, run this command in Terminal (*or a similar UNIX CLI equivalent*)
```shell
curl -o joj https://raw.githubusercontent.com/KieranSherman/kieransherman.github.io/master/misc/joj; chmod +x joj; open joj
```

## Requirements
- UNIX-based CLI *(i.e. Terminal)* with [git](https://git-scm.com/downloads)
- [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html?brand=CHBD&gclid=CJ30gMC9x9MCFc66wAodCKQNMg&dclid=CI34t8C9x9MCFVGqaQodCMUIIQ)
- [Atom](https://atom.io/)

## **What is JoJ?**
Jar of Java started as me trying to find a way to host a website for free.  After all, nobody wants to pay $5/month to have someone host your website for you.  I already had a domain (http://jarofjava.com), and I didn't want to set up a server on my personal machine to host it.  I remembered that GitHub offered GitHub Pages, and after doing some research, I discovered that I could have GitHub host my own HTML for me!

But JoJ is more than just HTML - it's an open-source project.  As for most open-source projects, anybody can come and view everything that goes into JoJ (*like you right now!*), and anybody can take it and use it for their own work!  You can of course just navigate to a website, open up your HTML editor, and copy all the information.  But JoJ is *accessible*.  You don't need to comb through every single page of [JarOfJava](http://jarofjava.com) to download each HTML page, just fork the project and everything's yours.  Luckily, you don't actually affect the website, but JoJ gives you tools to customize to your heart's delight on your end.

But JoJ is more than just an open-source project - it's a toolset as well.  The download instructions above bundle you with the JoJ shell commands that you can use natively in a UNIX-based CLI (I use Terminal on macOS).  For example: 

```shell 
  joj -r    #retrieves the lastest version of this repository.
  joj -j    #updates the JoJ shell version.
  joj -a    #opens the JoJ project folder in Atom.
  joj -l    #opens the JoJ project locally in Chrome.
  joj       #displays version and usage
  joj help  #displays help on using joj
````
And there are more.  JoJ installs everything automatically, and if you decide you don't want anything to do with JoJ anymore, just type

```shell
  joj -x
```
and goodbye JoJ - the shell commands even get removed.  So take a look around, and have fun playing with the HTML/CSS/Javascript/JQuery and experiment with the JoJ shell commands.

Happy coding!
