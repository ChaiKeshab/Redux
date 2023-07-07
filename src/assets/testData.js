import newsData from './example2.json'

export const testData = () => {
    return newsData.articles[Math.floor(Math.random() * 10)].title
}
