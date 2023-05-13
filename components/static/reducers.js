export function pageContentReducer(
    state = {
        page: null,
        loading: true,
        error: null
    },
    action
) {
    switch (action.type) {
        case 'GET_PAGE_CONTENT_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'GET_PAGE_CONTENT_SUCCESS':
            return {
                page: action.page,
                loading: false,
                error: null
            };
        case 'GET_PAGE_CONTENT_ERROR':
            return {
                page: null,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
