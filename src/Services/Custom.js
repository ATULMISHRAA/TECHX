import moment from 'moment';
const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
        resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
        reject(error);
        };
    });
};
const getDaysName = (day = '') => {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    if (day != ''){
        for (let i = 0; i < days.length; i++) {
            if (day == days[i]){
                return i+1;
            }
        }
    }
    return days;
};

const amountFormat = (amount) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 1 }).format(amount)
};
const setTimeFormat = (time) =>{
    time = time.split(':');
    var date = new Date();
    date.setHours(time[0]);
    date.setMinutes(time[1]);
    return moment(date).format('hh:mm A');
}
const getDateFormat = (date = '') => {
    let ddd = date;
    if (date == '') {
        ddd = new Date();
    }
    var m = (ddd.getMonth() + 1);;
    var dy = ddd.getDate();
    m = (m <= 9) ? '0' + m : m;
    dy = (dy <= 9) ? '0' + dy : dy;
    var cdate = ddd.getFullYear() + '-' + m + '-' + dy;
    return cdate;
};
const getMobileNoField = (user) => {
    if (typeof user) {
        var code = user.country_code;
        if (typeof user.country_code == 'string' && user.country_code.slice(0, 1) != '+') {
            code = '+' + code;
        }
        return code + ' ' + user.mobile_no
    }
    return '-';
};

/* 21-01-2022 */
const getMinusOneDayDate = (passeddate) => {
    var today = new Date();
    if (passeddate != ''){
        today = new Date(passeddate);
    }
    let todayDt = new Date();
    var time2 = todayDt.getHours() + ":" + todayDt.getMinutes() + ":" + todayDt.getSeconds();
    //time2 = "02:00:00";
    let currTime = time2.split(':');
    let currentTime = parseInt(currTime[0]) * 3600 + parseInt(currTime[1]) * 60 + ((currTime.length == 3) ? parseInt(currTime[2]) : 0);
    let threeamTime = parseInt(3) * 3600 + 0 + 0;
    if (currentTime <= threeamTime) {
        today.setDate(today.getDate() - 1);
        return getDateFormat(today);
    }
    return passeddate;
};
const capitalizeFirst = (str, splitter = []) => {
    let finalString = '';
    const defaultSplitter = ['_', '-'];
    splitter = splitter.concat(defaultSplitter); 
    
    for (let main = 0; main < splitter.length; main++) {
        const elementMain = splitter[main];
        var splittableString = str.split(elementMain);
        if(splittableString.length > 0){
            for (let i = 0; i < splittableString.length; i++) {
                const element = splittableString[i];
                finalString += (element.charAt(0).toUpperCase() + element.slice(1)) + ' ';
            }
            return finalString.trim();
        }
    }
    
    // splittableString = str.split('-');
    // if(splittableString.length > 0){
    //     for (let i = 0; i < splittableString.length; i++) {
    //         const element = splittableString[i];
    //         finalString += (element.charAt(0).toUpperCase() + element.slice(1)) + ' ';
    //     }
    //     return finalString.trim();
    // }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
/* Price Comma Function */
const addComma = num => {
    let regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

const readLess = (string, limit = 200, dotting = true) =>{
    let limitSkipper = limit;
    let descText = string.replace(/<[^>]+>/g, '').slice(0, limitSkipper);

    if(descText.trim().length <= 0 && string.length > limitSkipper){
        for (let i = limitSkipper; i <= string.length; i+limitSkipper) {
            descText = string.replace(/<[^>]+>/g, '').slice(i, (i + limitSkipper));
            if(descText.trim().length > 0){
                break;
            }
        }
    }
    if(dotting){
        return descText+'...';
    }else{
        return descText;
    }
    
}

const arrayToStringMore = (data, listArrayLength = 2, parse = true) =>{
    listArrayLength = (listArrayLength - 1);
    let changeString = '';
    const rowData = data;
    if(parse){
        rowData = JSON.parse(JSON.stringify(data));
    }
    if(rowData.length > 0){
        for (let i = 0; i < rowData.length; i++) {
            const element = rowData[i];
            if(element.label){
                changeString += element.label;
            }else{
                changeString += element;
            }
            
            if(i == listArrayLength){ break; }
            if(rowData.length > (i+1)){ 
                changeString += ', '; 
            }
            
        }
        changeString = changeString.trim();
        if(rowData.length > (listArrayLength+1)){
            changeString += ' and +'+(rowData.length - (listArrayLength+1))+' More';
        }
    }
    return changeString;
}


const lookupToCategoryBlog = (data) =>{
    let lookup = [];
    const rowLookup = JSON.parse(JSON.stringify(data));
    if(rowLookup.length > 0){
        for (let i = 0; i < rowLookup.length; i++) {
            const element = rowLookup[i];
            lookup.push(element.title);
        }
    }
    return lookup;
}


export { convertToBase64, getDaysName, amountFormat, setTimeFormat, getDateFormat, 
    getMobileNoField, getMinusOneDayDate, capitalizeFirst, addComma, readLess, arrayToStringMore,
    lookupToCategoryBlog };