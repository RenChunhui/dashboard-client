# 生产环境
build:
	@yarn build
	@find dist -name "*.js" -print0 | xargs -0 gzip -k
	@find dist -name "*.css" -print0 | xargs -0 gzip -k
