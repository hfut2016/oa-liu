import * as home from '../services/home';
import { message } from "antd";
export default {

  namespace: 'home',

  state: {
    announces: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *announce({ payload }, { call, put }) {
      let res = yield call(home.announce);
      if (res.success) {
        yield put({ type: 'getData', payload: res.data })
      }
      return res
    },
    *sendAnnounce({ payload }, { call, put }) {
      let res = yield call(home.sendAnnounce, payload);
      if (res.success) {
        message.success('发布成功')
      }
      return res
    },
  },

  reducers: {
    getData(state, { payload }) {
      return { ...state, announces: payload };
    },
  },

};
