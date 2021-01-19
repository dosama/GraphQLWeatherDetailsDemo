const actions = {
     GET_WEATHER_DETAILS:()=> {return {type:'SET_WEATHER_DETAILS'}},
     GET_WEATHER_DETAILS_SUCCESS:(data:any)=> {return {type:'GET_WEATHER_DETAILS_SUCCESS',payload:data}},
     GET_WEATHER_DETAILS_FAILURE:(data:any)=> {return {type:'GET_WEATHER_DETAILS_FAILURE',payload:data}},
     IS_LOADING:(data:Boolean)=> {return {type:'IS_LOADING',payload:data}}
};

export default actions;
