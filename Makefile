default:
	npm install

jshint:
	./node_modules/.bin/jshint \
	"lib"

tests:
	./node_modules/.bin/_mocha \
	"test/**/*-test*" \
	-t 20000 -R spec