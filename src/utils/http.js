import {
    fetch as fetchfill
} from 'whatwg-fetch';
import qs from 'querystring'
import 'es6-promise'

export const http = (method, url, data) => {

    if (method == "GET") {
        var str = '';
        for (let key in data) {
            str += '&' + key + '=' + data[key];

        }

        url = url + '?' + str.slice(1);


        return fetchfill(url)
            .then(res => res.json())
    } else {

       document.cookie = 'cps=baidu_seo; _ga=GA1.2.498604796.1555502816; _gid=GA1.2.1538631334.1555502816; Qs_lvt_123962=1555502813%2C1555567911; Hm_lvt_357ac846ca00ee9cc3d6479a2ad9a33c=1555502819,1555567915; Qs_pv_123962=4349638845365876000%2C1907688394546024200%2C4460553676346481700%2C267198204646617400; TY_SESSION_ID=a236030d-1760-4613-88fb-d35696c0730c; ordertype=; sigo_unix=1555596910361; sigo_sessionKey=u63yNW2YYdh6sRkb; Hm_lpvt_357ac846ca00ee9cc3d6479a2ad9a33c=1555635827; IsLogin=true; UserID=VQEfz67eY3o='
        return fetchfill(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: qs.stringify(data)
            })
            .then(res => res.json())
    }


}


