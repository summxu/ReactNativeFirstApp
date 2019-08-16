/* 这里是子的 reducer,相当于子的store */
import Types from "../../action/types";

/* 创建默认 state */
const defaultState = {
  theme: 'blue'
}

/* 写一个action的参数传递 
   第一个参数是state，第二个是 action 传来的值
   尽量避免修改定义的defaultState，而是创建了一个state的副本
*/
export default function onAction (state = defaultState, action) {
  switch (action.type) {
    case Types.THEME_CHANGE:
      /* 如果没有action值 返回默认的blue
         如果有action值 覆盖action传过来的 theme
       */
      return {
        ...state,
        theme: action.theme
      }
      break;
    default:
      return state
      break;
  }
}