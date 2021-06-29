export default class TodoService {
    _apiBase = "http://localhost:3001";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`);
        }
        console.log(res);
        return await res.json();
    }
}

