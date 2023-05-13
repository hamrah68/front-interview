import axios from 'axios';
import host from '../../host';

function getPageContentBegin() {
    return {
        type: 'GET_PAGE_CONTENT_BEGIN'
    };
}

function getPageContentSuccess(page) {
    return {
        type: 'GET_PAGE_CONTENT_SUCCESS',
        page: page
    };
}

function getPageContentError(error) {
    return {
        type: 'GET_PAGE_CONTENT_ERROR',
        error: error
    };
}

export function getPageContent(page) {
    return function(dispatch) {
        dispatch(getPageContentBegin());
        return axios
            .get(host + '/page_contents/' + page)
            .then(response => dispatch(getPageContentSuccess(response.data)))
            .catch(error => dispatch(getPageContentError(error)));
    };
}
