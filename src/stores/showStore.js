import { create } from 'zustand'
import axios from 'axios';
const showStore = create((set) => ({
    graphData: [],
    data: null,
    fetchData: async (id) => {

        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=121`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?market_data=true`),
        ])
        const graphData = graphRes.data.prices.map((price) => {
            const [timestamp, p] = price;
            const date = new Date(timestamp).toLocaleDateString('en-IN')
            return {
                Date: date,
                price: p,
            }
        });
        set({ graphData, data: dataRes.data });
    },
}))

export default showStore;