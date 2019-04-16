# 生产环境
build:
	@yarn build
	@find docs -name "*.js" -print0 | xargs -0 gzip -k
	@find docs -name "*.css" -print0 | xargs -0 gzip -k
