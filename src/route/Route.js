import slider from './../component/slider';
import login from './../component/login';
import loginwithemail from './../component/loginwithemail';
import signup from './../component/signup';
import signupuser from './../component/signupuser';
import resetPassword from './../component/resetPassword';
import shopnowimg from './../component/shopnowimg';
import great1 from './../component/great1';
import great from './../component/great';
import OTP from './../component/OTP';
import newPassword from './../component/newPassword';
import selectcategory from './../component/selectcategory';
import servicedescription from './../component/servicedescription';
import servicetracking from './../component/servicetracking';
import notification from './../component/notification';
import opendealsdetail from './../component/opendealsdetail';
import blog from './../component/blog';
import createblog from './../component/createblog';
import group from './../component/group';
import creategroup from './../component/creategroup';
import verified from './../component/verified';
import events from './../component/events';
import createevents from './../component/createevents';
import setting from './../component/setting';
import friends from './../component/friends';
import menu from './../component/menu';
import rate from './../component/rate';
import verificationprofile from './../component/verificationprofile';
import myinformation from './../component/myinformation';
import automotive from './../component/automotive';
import addautomotive from './../component/automotive';
import chat2 from './../component/chat2';
import createpage from './../component/createpage';
import Search from './../component//Search';
import createtrip from './../component/createtrip';
import createtrip1 from './../component/createtrip1';
import createtrip2 from './../component/createtrip2';
import shopnow from './../component/shopnow';
import shopnow1 from './../component/shopnow1';
import shopnow2 from './../component/shopnow2';
import shopnow3 from './../component/shopnow3';
import paymentConfirm from './../component/paymentConfirm';
import shopnow4 from './../component/shopnow4';
import shopfinal from './../component/shopfinal';
import findsellers from './../component/findsellers';
import mychat from './../component/mychat';
import dealshistory from './../component/dealshistory';
import dealshistory2 from './../component/dealshistory2';
import flightdetail from './../component/flightdetail';
import opendeals from './../component/opendeals';
import rating from './../component/rating';
import updatePost from './../component/updatePost';
import profile from './../component/profile';
import editprofile from './../component/editprofile';
import userprofile from './../component/userprofile';
import About from './../component/about';
import history from './../component/history';
import Chatlist from './../component/chatlist';
import Chat from './../component/chat';
import videos from './../component/videos';
import offers from './../component/offers';
import Spotdetails from './../component/spotdetails';
import Terms from './../component/terms';
import Privacy from './../component/privacy';
import Addspot from './../component/addspot';

import Help from './../component/help';
import Faq from './../component/faq';
import Map from './../component/map';
import tripdetail from './../component/tripdetail';
import tripdetail2 from './../component/tripdetail2';
import tripdetail3 from './../component/tripdetail3';
import tripsummary from './../component/tripsummary';
import advancesearch from './../component/advancesearch';
import adisonline from './../component/adisonline';
import card1 from './../component/card1';
import card2 from './../component/card2';

import track from './../component/track';
import selectPayment from './../component/selectPayment';
import chat3 from './../component/chat3';
import deliver from './../component/deliver';
// import sideMenu from '../route/sideMenu';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import matches from '../component/Searchfrom/matches';
import Chatpage from '../component/chatapp.js';
import Buyerchat from '../component/buyerchatlist';
import Sellerchat from '../component/sellerchatlist';

const Route = createStackNavigator({

    paymentConfirm: {
        screen: paymentConfirm,
        navigationOptions: {
            header: null,
        },
    },
    selectPayment: {
        screen: selectPayment,
        navigationOptions: {
            header: null,
        },
    },
    deliver: {
        screen: deliver,
        navigationOptions: {
            header: null,
        },
    },
    card1: {
        screen: card1,
        navigationOptions: {
            header: null,
        },
    },
    card2: {
        screen: card2,
        navigationOptions: {
            header: null,
        },
    },
    slider: {
        screen: slider,
        navigationOptions: {
            header: null,
        },
    },
    adisonline: {
        screen: adisonline,
        navigationOptions: {
            header: null,
        },
    },
    tripdetail: {
        screen: tripdetail,
        navigationOptions: {
            header: null,
        },
    },
    tripdetail2: {
        screen: tripdetail2,
        navigationOptions: {
            header: null,
        },
    },
    tripdetail3: {
        screen: tripdetail3,
        navigationOptions: {
            header: null,
        },
    },
    tripsummary: {
        screen: tripsummary,
        navigationOptions: {
            header: null,
        },
    },
    opendealsdetail: {
        screen: opendealsdetail,
        navigationOptions: {
            header: null,
        },
    },
    great: {
        screen: great,
        navigationOptions: {
            header: null,
        },
    },
    great1: {
        screen: great1,
        navigationOptions: {
            header: null,
        },
    },
    chat2: {
        screen: chat2,
        navigationOptions: {
            header: null,
        },
    },
    chat3: {
        screen: chat3,
        navigationOptions: {
            header: null,
        },
    },
    Buyerchat:{
        screen:Buyerchat,
        navigationOptions:{
            header:null
        }
    },
    Sellerchat:{
        screen:Sellerchat,
        navigationOptions:{
            header:null
        }
    },
    shopnowimg: {
        screen: shopnowimg,
        navigationOptions: {
            header: null,
        },
    },
    signupuser: {
        screen: signupuser,
        navigationOptions: {
            header: null,
        },
    },
    loginwithemail: {
        screen: loginwithemail,
        navigationOptions: {
            header: null,
        },
    },
    shopnow: {
        screen: shopnow,
        navigationOptions: {
            header: null,
        },
    },
    shopnow1: {
        screen: shopnow1,
        navigationOptions: {
            header: null,
        },
    },
    shopnow2: {
        screen: shopnow2,
        navigationOptions: {
            header: null,
        },
    },
    shopnow3: {
        screen: shopnow3,
        navigationOptions: {
            header: null,
        },
    },
    shopnow4: {
        screen: shopnow4,
        navigationOptions: {
            header: null,
        },
    },
    shopfinal: {
        screen: shopfinal,
        navigationOptions: {
            header: null,
        },
    },
    matches: {
        screen: matches,
        navigationOptions: {
            header: null,
        },
    },
    findsellers: {
        screen: findsellers,
        navigationOptions: {
            header: null,
        },
    },
    dealshistory: {
        screen: dealshistory,
        navigationOptions: {
            header: null,
        },
    },
    dealshistory2: {
        screen: dealshistory2,
        navigationOptions: {
            header: null,
        },
    },
    createtrip: {
        screen: createtrip,
        navigationOptions: {
            header: null,
        },
    },
    createtrip1: {
        screen: createtrip1,
        navigationOptions: {
            header: null,
        },
    },
    createtrip2: {
        screen: createtrip2,
        navigationOptions: {
            header: null,
        },
    },
    flightdetail: {
        screen: flightdetail,
        navigationOptions: {
            header: null,
        },
    },
    mychat: {
        screen: mychat,
        navigationOptions: {
            header: null,
        },
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            header: null,
        },
    },

    opendeals: {
        screen: opendeals,
        navigationOptions: {
            header: null,
        },
    },
    Addspot: {
        screen: Addspot,
        navigationOptions: {
            header: null,
        },
    },
    editprofile: {
        screen: editprofile,
        navigationOptions: {
            header: null,
        },
    },
    userprofile: {
        screen: userprofile,
        navigationOptions: {
            header: null,
        },
    },
    updatePost: {
        screen: updatePost,
        navigationOptions: {
            header: null,
        },
    },
    Help: {
        screen: Help,
        navigationOptions: {
            header: null,
        },
    },
    Terms: {
        screen: Terms,
        navigationOptions: {
            header: null,
        },
    },
    Privacy: {
        screen: Privacy,
        navigationOptions: {
            header: null,
        },
    },
    Faq: {
        screen: Faq,
        navigationOptions: {
            header: null,
        },
    },
    login: {
        screen: login,
        navigationOptions: {
            header: null,
        },
    },
    About: {
        screen: About,
        navigationOptions: {
            header: null,
        },
    },
    Spotdetails: {
        screen: Spotdetails,
        navigationOptions: {
            header: null,
        },
    },
    Chatlist: {
        screen: Chatlist,
        navigationOptions: {
            header: null,
        },
    },
    Chatpage:{
        screen:Chatpage,
        navigationOptions: {
            header: null,
        },
    },
    // Chat: {
    //     screen: Chat,
    //     navigationOptions: {
    //         header: null,
    //     },
    // },
    Map: {
        screen: Map,
        navigationOptions: {
            header: null,
        },
    },
    videos: {
        screen: videos,
        navigationOptions: {
            header: null,
        },
    },
    advancesearch: {
        screen: advancesearch,
        navigationOptions: {
            header: null,
        },
    },
    automotive: {
        screen: automotive,
        navigationOptions: {
            header: null,
        },
    },
    addautomotive: {
        screen: addautomotive,
        navigationOptions: {
            header: null,
        },
    },
    myinformation: {
        screen: myinformation,
        navigationOptions: {
            header: null,
        },
    },
    createpage: {
        screen: createpage,
        navigationOptions: {
            header: null,
        },
    },
    verificationprofile: {
        screen: verificationprofile,
        navigationOptions: {
            header: null,
        },
    },
    setting: {
        screen: setting,
        navigationOptions: {
            header: null,
        },
    },
    notification: {
        screen: notification,
        navigationOptions: {
            header: null,
        },
    },
    friends: {
        screen: friends,
        navigationOptions: {
            header: null,
        },
    },
    verified: {
        screen: verified,
        navigationOptions: {
            header: null,
        },
    },
    group: {
        screen: group,
        navigationOptions: {
            header: null,
        },
    },
    creategroup: {
        screen: creategroup,
        navigationOptions: {
            header: null,
        },
    },
    blog: {
        screen: blog,
        navigationOptions: {
            header: null,
        },
    },
    createblog: {
        screen: createblog,
        navigationOptions: {
            header: null,
        },
    },
    menu: {
        screen: menu,
        navigationOptions: {
            header: null,
        },
    },
    events: {
        screen: events,
        navigationOptions: {
            header: null,
        },
    },
    createevents: {
        screen: createevents,
        navigationOptions: {
            header: null,
        },
    },
    rate: {
        screen: rate,
        navigationOptions: {
            header: null,
        },
    },
    signup: {
        screen: signup,
        navigationOptions: {
            header: null,
        },
    },
    servicedescription: {
        screen: servicedescription,
        navigationOptions: {
            header: null,
        },
    },
    servicetracking: {
        screen: servicetracking,
        navigationOptions: {
            header: null,
        },
    },
    resetPassword: {
        screen: resetPassword,
        navigationOptions: {
            header: null,
        },
    },
    OTP: {
        screen: OTP,
        navigationOptions: {
            header: null,
        },
    },
    newPassword: {
        screen: newPassword,
        navigationOptions: {
            header: null,
        },
    },
    selectcategory: {
        screen: selectcategory,
        navigationOptions: {
            header: null,
        },
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null,
        },
    },
    track: {
        screen: track,
        navigationOptions: {
            header: null,
        },
    },
    rating: {
        screen: rating,
        navigationOptions: {
            header: null,
        },
    },
    profile: {
        screen: profile,
        navigationOptions: {
            header: null,
        },
    },
    history: {
        screen: history,
        navigationOptions: {
            header: null,
        },
    },
    offers: {
        screen: offers,
        navigationOptions: {
            header: null,
        },
    },

}, {
    initialRouteName: 'login'
})

export default createAppContainer(Route);

