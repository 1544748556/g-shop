var app = new Vue({
    el: '#app',
    data: {
        bofang: true,
        query: "",
        musiclist: [],
        name: "",
        url: "",
        pic: "",
        hotComments: [],
        isPlaying: false,
        isShow: false,
        total: "",
        liked: false,
        mvurl: "",
        historyList: [{
                    name: '后来'
                },
                {
                    name: '丑八怪'
                }
            ]

            ,
    },
    methods: {
        play() {
            this.isPlaying = true
        },

        pause() {
            this.isPlaying = false
        },

        searchmusic() {
            var that = this
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function (res) {
                // console.log(res);
                that.musiclist = res.data.result.songs;
            }, function (err) {})
        },

        playmusic(musicId) {
            var that = this;
            // 获取歌曲url
            axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(function (res) {
                that.url = res.data.data[0].url
                // console.log(musicId);
            }, function (err) {})
            // 获取专辑图片 
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(function (res) {
                // console.log(res);
                that.pic = res.data.songs[0].al.picUrl
            }, function (err) {})
            // 获取评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(function (res) {
                console.log(res);
                that.hotComments = res.data.hotComments;
                that.total = res.data.total;
                // that.liked = res.data.hotComments.liked
            }, function (err) {})
        },

        playMV(mvid) {
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(function (res) {
                that.mvurl = res.data.data.url
                // console.log(mvurl);
                that.isShow = true
            }, function (err) {})
        },

        hide() {
            this.isShow = false;
            this.mvurl = ""
        },

        dianzan() {
            this.liked = !this.liked
        }
    }
})