

  // Build configuration
  build: {
    // remove axios repeat package, only package once
    vendor: ["axios", "~/plugins/mint-ui"],

    // 全局 stylus css 变量引入
    styleResources: {
			stylus: [
				resolve(__dirname, './assets/stylus/common/variables.styl')
			]
		},

  }
};
