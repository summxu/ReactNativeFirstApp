/* 封装路由跳转类 */
export default class NavigationUitl {
  static toHome (navigation) {
    navigation.navigate("Main")
  }
  static goBack (navigation) {
    navigation.goBack()
  }
}