
export const api = axios.create({
    baseUrl: 'https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple',
    timeout: 3000
})