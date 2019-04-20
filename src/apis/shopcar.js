import {
    http
} from '../utils/http';

export const getcCartdatas = () => http(
    'POST',
    '/api/node_cartdatas', {
        'action': 'getcartbyuser',
        'data[userid]': '1652629',
        'data[cookkey]': 'u63yNW2YYdh6sRkb',
        'data[source_app]': 'WeiXin',
        'data[shop]': 'sigo_home'
    }
)

export const getCartdatas=()=>http(
    'POST',
    '/api/node_cartdatas',
    {
        'action': 'getcartbyuser',
        'data[userid]': '1652629',
        'data[cookkey]': 'u63yNW2YYdh6sRkb',
        'data[source_app]': 'WeiXin',
        'data[shop]': 'sigo_haitao'
    }

)