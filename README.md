# Getting into Docker

This is a demo project for learning about Docker.

+   [Part 1](http://jarrettmeyer.com/blog/2015/04/22/getting-into-docker/)

## Running the project

This project runs inside of a [Vagrant](https://www.vagrantup.com) virtual machine. Please install Vagrant on your computer.

As usual, clone this repository. Start the virtual machine, and use ssh to enter the VM.

```
$ git clone git@github.com:jarrettmeyer/getting_into_docker.git
$ cd ./getting_into_docker
$ vagrant up
$ vagrant ssh
```

Once you are inside the VM, build and run the application.

```
$ cd ~/getting_into_docker
$ ./build.sh
$ ./run.sh
```
