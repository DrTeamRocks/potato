all: composer

serve:
	php -t ./public/ -S localhost:8888

composer:
	composer update

styles:
	find public/css -name "*.scss" | \
	    while read style; \
		do \
		    scss --style compressed $$style > `dirname $$style`/`basename $$style .scss`.css; \
	    done

static:
	php -f ./public/index.php > ./public/index.html
