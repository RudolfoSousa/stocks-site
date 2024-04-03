'use server'

export async function search(param) {
    const URL = `${process.env.brapiBaseUrl}/quote/list?search=${param} `;
    const TOKEN = process.env.brapiApiToken
    const res = await fetch(URL, {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
    })

    if (res.status != 200) {
        throw new Error('Failed to fetch data')
    }
    const response = await res.json();

    if (response) {
        return ({
            funds: response.stocks.filter(({ type }) => type === "fund"),
            stocks: response.stocks.filter(({ type }) => type === "stock"),
            bdrs: response.stocks.filter(({ type }) => type === "bdr"),
            count: response.stocks.length
        })
    } else {
        throw new Error();
    }
}