<!--
 * @Description : NOTE 实现 Fragment
 * @Date        : 2021-11-25 23:22:55 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-25 23:35:52 +0800
 * @LastEditors : JackChou
-->
<script>
export default {
  name: "Fragment",
  // functional: true,
  render() {
    // eslint-disable-next-line vue/no-deprecated-dollar-scopedslots-api
    return this.$scopedSlots.default({
      props: this.$props,
    });
  },
};
</script>
