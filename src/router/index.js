import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Information from '@/pages/index/information'
import Unload from '@/pages/index/unload'
import Card from '@/pages/index/card'
import CardHome from '@/pages/index/cardHome'
import CardInformation from '@/pages/index/cardInformation'
import CreateSuccessful from '@/pages/index/createSuccessful'
import CreateFail from '@/pages/index/createFail'
import Flow from '@/pages/index/flow'
import Introduction from '@/pages/index/introduction'
import Loading from '@/pages/index/loading'
import Login from '@/pages/login/index'
import Fail from '@/pages/login/fail'
import Code from '@/pages/login/code'
import Repayment from '@/pages/quota/index'
import BranchFail from '@/pages/quota/branchFail'
import Pay from '@/pages/quota/pay'
import Repay from '@/pages/quota/repay'
import CardList from '@/pages/quota/cardList'
import Detail from '@/pages/quota/detail'
import PayState from '@/pages/quota/payState'
import Separate from '@/pages/quota/separate'
import PayCode from '@/pages/quota/payCode'
import Branch from '@/pages/quota/branch'
import Question from '@/pages/question/index'
import Open from '@/pages/question/open'
import Money from '@/pages/question/money'
import Calculation from '@/pages/question/calculation'
import Other from '@/pages/question/other'
import Promote from '@/pages/question/promote'
import Hot1 from '@/pages/question/hot1'
import Hot2 from '@/pages/question/hot2'
import Hot3 from '@/pages/question/hot3'
import Hot4 from '@/pages/question/hot4'
import Hot5 from '@/pages/question/hot5'
import Set from '@/pages/set/index'
import Way from '@/pages/set/way'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
      	title:"宜享花"
      }
    },{
      path: '/information',
      name: 'information',
      component: Information,
      meta:{
      	title:"开户基本信息"
      }
    },{
      path: '/loading',
      name: 'loading',
      component: Loading,
      meta:{
      	title:"审核中"
      }
    },{
      path: '/unload',
      name: 'unload',
      component: Unload,
      meta:{
      	title:"身份信息"
      }
    },{
      path: '/card',
      name: 'card',
      component: Card,
      meta:{
      	title:"银行卡信息"
      }
    },{
      path: '/cardHome',
      name: 'cardHome',
      component: CardHome,
      meta:{
      	title:"选择开户银行"
      }
    },{
      path: '/cardInformation',
      name: 'cardInformation',
      component: CardInformation,
      meta:{
      	title:"账户信息"
      }
    },{
      path: '/createSuccessful',
      name: 'createSuccessful',
      component: CreateSuccessful,
      meta:{
      	title:"宜享花"
      }
    },{
      path: '/createFail',
      name: 'createFail',
      component: CreateFail,
      meta:{
      	title:"开户失败"
      }
    },{
    	path: '/login',
      name: 'login',
      component: Login,
      meta:{
      	title:"登录"
      }
    },{
    	path: '/code',
      name: 'code',
      component: Code,
      meta:{
      	title:"登录"
      }
    },{
    	path: '/fail',
      name: 'fail',
      component: Fail,
      meta:{
      	title:"登录失败"
      }
    },{
    	path: '/introduction',
      name: 'introduction',
      component:Introduction,
      meta:{
      	title:"产品介绍"
      }
    },{
      path: '/flow',
      name: 'flow',
      component: Flow,
      meta:{
      	title:"宜享花"
      }
    },{
      path: '/repayment',
      name: 'repayment',
      component: Repayment,
      meta:{
      	title:"还款"
      }
    },{
      path: '/pay',
      name: 'pay',
      component: Pay,
      meta:{
      	title:"还款信息"
      }
    },{
      path: '/branchFail',
      name: 'branchFail',
      component: BranchFail,
      meta:{
      	title:"账单分期"
      }
    },{
      path: '/cardList',
      name: 'cardList',
      component: CardList,
      meta:{
      	title:"选择还款银行卡"
      }
    },{
      path: '/detail',
      name: 'detail',
      component: Detail,
      meta:{
      	title:"账单详情"
      }
    },{
      path: '/payState',
      name: 'payState',
      component: PayState,
      meta:{
      	title:"还款结果"
      }
    },{
      path: '/separate',
      name: 'separate',
      component: Separate,
      meta:{
      	title:"现金分期"
      }
    },{
      path: '/repay',
      name: 'repay',
      component: Repay,
      meta:{
      	title:"还款"
      }
    },{
      path: '/payCode',
      name: 'payCode',
      component: PayCode,
      meta:{
      	title:"验证"
      }
    },{
      path: '/branch',
      name: 'branch',
      component: Branch,
      meta:{
      	title:"申请账单分期"
      }
    },{
      path: '/question',
      name: 'question',
      component: Question,
      meta:{
      	title:"常见问题"
      }
    },{
      path: '/open',
      name: 'open',
      component: Open,
      meta:{
      	title:"开户过程问题"
      }
    },{
      path: '/money',
      name: 'money',
      component: Money,
      meta:{
      	title:"费用计算问题"
      }
    },{
      path: '/Calculation',
      name: 'calculation',
      component: Calculation,
      meta:{
      	title:"还款问题"
      }
    },{
      path: '/other',
      name: 'other',
      component: Other,
      meta:{
      	title:"其它问题"
      }
    },{
      path: '/hot1',
      name: 'hot1',
      component: Hot1,
      meta:{
      	title:"什么样的客户可以申请“宜享花”？"
      }
    },{
      path: '/hot2',
      name: 'hot2',
      component: Hot2,
      meta:{
      	title:"额度审批通过后我要等多久才能开始消费？"
      }
    },{
      path: '/hot3',
      name: 'hot3',
      component: Hot3,
      meta:{
      	title:"我应该通过何种方式进行还款？"
      }
    },{
      path: '/hot4',
      name: 'hot4',
      component: Hot4,
      meta:{
      	title:"如果额度不够用怎样才能提高我的消费额度？"
      }
    },{
      path: '/hot5',
      name: 'hot5',
      component: Hot5,
      meta:{
      	title:"消费利息是多少？"
      }
    },{
      path: '/promote',
      name: 'promote',
      component: Promote,
      meta:{
      	title:"调额申请"
      }
    },{
      path: '/set',
      name: 'set',
      component: Set,
      meta:{
      	title:"设置"
      }
    },{
      path: '/way',
      name: 'way',
      component: Way,
      meta:{
      	title:"划扣方式"
      }
    }
  ]
})