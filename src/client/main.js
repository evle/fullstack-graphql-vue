
const app = new Vue({
    el: "#app",
    data: {
        query: '',
        weather: '',
        searching: false,
        untouched:'',
        message: '查询'
    },
    methods: {
        search: async function () {
            this.message = '查询中...'
            const query = `{
                weather(city: "${this.query}") {
                    realtime {
                        weather {
                            info
                            temperature
                        }
                    }
                    pm25 {
                        pm25 {
                            des
                            quality
                        }
                    }
                    weather {
                        week
                        info {
                            day
                        }
                    }
                }
            }`

            const requestOptions = {
                headers: new Headers({ "content-type": "application/json" }),
                method: "post",
                body: JSON.stringify({ query }),
              }

            const incomingData = await fetch("/graphql", requestOptions)
                                .then(rawResponse => rawResponse.json())    
            // console.log(incomingData.data.weather)
            this.weather = incomingData.data.weather || []
            console.log(this.weather.length)
            console.log(this.weather)
            this.message = '查询'
            // console.log(this.weather.pm25.pm25.quality)
            this.searching = true
        }
    }
})