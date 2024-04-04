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