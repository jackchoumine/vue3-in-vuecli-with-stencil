/*
 * @Description :
 * @Date        : 2021-11-22 04:38:01 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-22 04:54:33 +0800
 * @LastEditors : JackChou
 */
// https://github.com/vuejs/vue-next/issues/1414
module.exports = {
  chainWebpack: (config) => {
    // config.resolve.symlinks(false),
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...(options || {}),
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      }));
  },
};
