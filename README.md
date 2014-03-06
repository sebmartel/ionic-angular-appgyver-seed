Share2Give Mobile Application
=============================

An Appgyver Steroids project that consists of a mobile application for
Android and iOS.

### Getting Started

* [install steroids](http://academy.appgyver.com/courses/2/lessons/32)

### Getting the code

The workflow for this project follows the Integration-Manager model. If you intend to contribute and actively work on this repository, you are better off by forking the master repository instead of starting with a clone or a zip download.

Contact [Seb Martel](mailto:seb_martel@yahoo.com) and provide your Bitbucket username, requesting access to the Share2Give development team. Once you have access to the team's repositories, visit the s2g-app repository and fork it. Next you will clone your fork to your local machine:

    $ git clone git@bitbucket.org:[your-username]/s2g-app.git

    NOTE: Be sure that you are in fact cloning your FORK and not the repository belonging to the team.

To remain in sync with the orignal repository managed by the team, you will want to setup an 'upstream' remote link:

    $ cd s2g-app
    $ git remote add upstream git@bitbucket.org:share2give/s2g-app.git

When you are ready to pull the latest version of the repository to your local repository, you will issue:
    
    $ git pull upstream master

and resolve any resulting merge conflicts. Once everything is working locally, you can push to your fork and issue a pull requests to 'upstream' to get your work committed to the master repository.

### Running the Application

    $ steroids update
    $ steroids connect --watch

### Running Tests

### Some Handy tasks

### Useful Links
