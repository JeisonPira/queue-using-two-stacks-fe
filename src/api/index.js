export const apiGet = (url, page, limit) => {
    return fetch(`${url}?page=${page}&limit=${limit}`).then(
        v => v.json()
    )
};


export const apiPost = (url, obj) => {
    return fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: new Headers({"Content-type": "application/json"})
    }).then(v => v)
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r;
        });
};

