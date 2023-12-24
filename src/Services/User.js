import Api from './Api';

class User {
    constructor(props){}

    save(obj) {
        return Api.post('user/save', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    list(obj) {
        return Api.post('user/list', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    edit(id) {
        return Api.get('user/edit/'+id).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    update(obj) {
        return Api.post('user/update', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    
    delete(id) {
        return Api.get('user/delete/'+id).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    update_status(obj) {
        return Api.post('user/status_change', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    
    add_wallet_amount(obj) {
        return Api.post('user/add_wallet_amount', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    deduct_wallet_amount(obj) {
        return Api.post('user/deduct_wallet_amount', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    getBidList(obj) {
        return Api.post('user/get-bid-list', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    getWalletHist(obj) {
        return Api.post('user/get-wallet-history', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    removeBankDetail(obj) {
        return Api.post('user/remove-bank-detail', obj).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
}
export default new User();