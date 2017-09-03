# Hello, my name is ***Mister Potato***

I'm a simple project skeleton for quickly creating landing pages on PHP,
I'm using the TWIG template engine and are able to generate static HTML.

    composer create-project drteam/potato my_project

## Ok, what next?

So, you have a new dummy project with open source template based on twitter bootstrap,
but page looks ugly, for fix this you just need run one simple command:

    make

This command contain three subtasks:

    make composer
    make bower
    make styles

This is required for normal work of system.

## Small HOWTO

How to generate static HTML:

    make static

How to start the loopback php server:

    make serve

Now you can open http://localhost:8888 in your browser.
