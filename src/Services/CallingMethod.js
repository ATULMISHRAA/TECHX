import Api from './Api';

class CallingMethod {
    constructor(props){}

    save(route, obj) {
        return Api.post(route+'/save', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    list(route,obj) {
        return Api.post(route+'/list', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    edit(route, id) {
        return Api.get(route+'/edit/'+id).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    update(route, obj) {
        return Api.post(route+'/update', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    
    delete(route, id) {
        return Api.get(route+'/delete/'+id).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    update_status(route, obj) {
        return Api.post(route+'/status_change', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    
    export(route,obj) {
        return Api.post(route+'/export', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    get_search_list(route,obj) {
        return Api.basePost(route, obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    customGet(route, id) {
        return Api.get(route+'/'+id).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    webGetData(route) {
        return Api.webGet(route).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    webPostData(route, obj) {
        return Api.webPost(route, obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

}
export default new CallingMethod();