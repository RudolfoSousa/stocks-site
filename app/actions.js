'use server'

const BASEURL = `${process.env.brapiBaseUrl}/quote`
const TOKEN = process.env.brapiApiToken

const headers = {
    'Authorization': `Bearer ${TOKEN}`
}

export async function search(param) {
    const URL = `${BASEURL}/list?search=${param} `;
    const res = await fetch(URL, {
        headers,
    })

    if (res.status != 200) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json();

    if (data.stocks) {
        return ({
            funds: data.stocks.filter(({ type }) => type === "fund"),
            stocks: data.stocks.filter(({ type }) => type === "stock"),
            bdrs: data.stocks.filter(({ type }) => type === "bdr"),
            count: data.stocks.length,
        })
    } else {
        return null
    }
}

export async function getStocks(params) {
    const {order = "desc", limit = 5, type = 'fund', sort = ""} = params;
    const URL = `${BASEURL}/list?sortOrder=${order}&limit=${limit}&type=${type}&sortBy=${sort}`;
    const res = await fetch(URL, {
        headers
    })

    const data = await res.json();

    return data;
}

export async function getStock(params) {
    const {tickers} = params;
    const URL = `${BASEURL}/${tickers}`;
    const res = await fetch(URL, {
        headers
    })

    const data = await res.json();

    return data;
}