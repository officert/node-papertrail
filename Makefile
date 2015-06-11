default:
	npm install

#create symlink so we can run tests using the module
post-install:
	cd ./node_modules; \
	ln -snf ../../node-papertrail; \

jshint:
	./node_modules/.bin/jshint \
	"lib"

tests:
	./node_modules/.bin/_mocha \
	"test/**/*-test*" \
	-t 20000 -R spec