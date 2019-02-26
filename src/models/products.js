import axios from 'axios';

function Ajax(payload) {
  axios.get('http://yapi.uanla.test:7777/mock/17/catering/order').then((res) => {
  	console.log(res.data);
    return res.data
  })
}

export default {
  namespace: 'products',
  state: {
  	name:'suwei',
  	data:[]
  },
  effects: {
      // payload = {
      //     currCatalog,
      //     currBrand,
      //     currCollectStatus
      // }
      *add({ payload }, { call, put }) {
          //call方法首参数为要调用的异步方法
          const data = yield call(Ajax, payload);
          //put方法类似于dispatch方法
          yield put({
              //本模块内方法的type不需要加namespace前缀
              type: 'saveGoods',
              payload: {
                  data,
                },
          });
      },
  },
  reducers: {
    saveGoods(state,{payload}) {
      return {
      	...state, 
      	data: payload
      }
    },
  },
};
