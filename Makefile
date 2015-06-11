default:
	npm install

jshint:
	./node_modules/.bin/jshint \
	"lib"

test:
	./node_modules/.bin/_mocha \
	"tests/integration/**/*-test*" \
	-t 20000 -R spec