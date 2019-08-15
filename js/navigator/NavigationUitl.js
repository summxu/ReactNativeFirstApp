/* 封装路由跳转类 */
export default class NavigationUitl {
  /* 第一个参数尽量是个对象
    可在第一个对象中传递参数
     转到指定页 面
  */
  static goPage (params, page) {
    /* 取出HOME传的navigation */
    const navigation = NavigationUitl.navigation
    if (!navigation) return
    navigation.navigate(page, { ...params })
  }
  static goHome (navigation) {
    navigation.navigate("Main")
  }
  static goBack (navigation) {
    navigation.goBack()
  }
}