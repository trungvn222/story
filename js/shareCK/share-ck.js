/*!
 *  Sharrre.com - Make your sharing widget!
 *  Version: beta 1.3.5
 *  Author: Julien Hany
 *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
 var us_sharrre = {"facebook_height":"500","facebook_width":"900","twitter_height":"500","twitter_width":"900","googleplus_height":"500","googleplus_width":"900","delicious_height":"550","delicious_width":"550","stumble_height":"550","stumble_width":"550","linkedin_height":"550","linkedin_width":"550","pinterest_height":"320","pinterest_width":"720","buffer_height":"500","buffer_width":"900","reddit_height":"500","reddit_width":"900","vkontakte_height":"500","vkontakte_width":"900"};
(function (t, n, r, i) {
    function f(e, n) {
        this.element = e;
        this.options = t.extend(!0, {}, o, n);
        this.options.share = n.share;
        this._defaults = o;
        this._name = s;
        this.init()
    }

    function l(e, t, s, o) {
        var u = n.screenLeft != i ? n.screenLeft : screen.left,
            a = n.screenTop != i ? n.screenTop : screen.top;
        width = n.innerWidth ? n.innerWidth : r.documentElement.clientWidth ? r.documentElement.clientWidth : screen.width;
        height = n.innerHeight ? n.innerHeight : r.documentElement.clientHeight ? r.documentElement.clientHeight : screen.height;
        var f = width / 2 - s / 2 + u,
            l = height / 2 - o / 2 + a,
            c = n.open(e, t, "scrollbars=yes, width=" + s + ", height=" + o + ", top=" + l + ", left=" + f);
        n.focus && c.focus()
    }
    var s = "ultimate_social_deux",
        o = {
            className: "sharrre",
            share: {
                facebook: !1,
                twitter: !1,
                googlePlus: !1,
                pinterest: !1,
                linkedin: !1,
                stumbleupon: !1,
                delicious: !1,
                buffer: !1,
                reddit: !1,
                vkontakte: !1
            },
            shareTotal: 0,
            template: "",
            title: "",
            url: r.location.href,
            text: r.title,
            urlCurl: "sharrre.php",
            count: {},
            total: 0,
            shorterTotal: !0,
            enableHover: !0,
            enableCounter: !0,
            enableTracking: !1,
            hover: function () {},
            hide: function () {},
            click: function () {},
            render: function () {},
            buttons: {
                googlePlus: {
                    url: "",
                    urlCount: !1,
                    size: "medium",
                    lang: "en-US",
                    annotation: ""
                },
                facebook: {
                    url: "",
                    urlCount: !1,
                    action: "like",
                    layout: "button_count",
                    width: "",
                    send: "false",
                    faces: "false",
                    colorscheme: "",
                    font: "",
                    lang: "en_US"
                },
                twitter: {
                    url: "",
                    urlCount: !1,
                    count: "horizontal",
                    hashtags: "",
                    via: "",
                    related: "",
                    lang: "en"
                },
                delicious: {
                    url: "",
                    urlCount: !1,
                    size: "medium"
                },
                stumbleupon: {
                    url: "",
                    urlCount: !1,
                    layout: "1"
                },
                reddit: {
                    url: "",
                    urlCount: !1
                },
                vkontakte: {
                    url: "",
                    urlCount: !1,
                    media: "",
                    description: ""
                },
                linkedin: {
                    url: "",
                    urlCount: !1,
                    counter: ""
                },
                pinterest: {
                    url: "",
                    media: "",
                    description: "",
                    urlCount: !1,
                    layout: "horizontal"
                },
                buffer: {
                    url: "",
                    media: "",
                    description: "",
                    layout: "horizontal",
                    urlCount: !1,
                    tweetText: ""
                }
            }
        }, u = {
            googlePlus: "",
            reddit: "",
            stumbleupon: "",
            pinterest: "",
            facebook: "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",
            twitter: "http://opensharecount.com/count.json?url={url}&callback=?",
            delicious: "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
            linkedin: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            vkontakte: "",
            buffer: "https://api.bufferapp.com/1/links/shares.json?url={url}&callback=?"
        }, a = {
            googlePlus: function (e) {
                l("https://plus.google.com/share?hl=" + e.buttons.googlePlus.lang + "&url=" + encodeURIComponent(e.buttons.googlePlus.url !== "" ? e.buttons.googlePlus.url : e.url), "googlePlus", us_sharrre.googleplus_width, us_sharrre.googleplus_height)
            },
            facebook: function (e) {
                l("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e.buttons.facebook.url !== "" ? e.buttons.facebook.url : e.url) + "&t=" + e.text + "", "facebook", us_sharrre.facebook_width, us_sharrre.facebook_height)
            },
            twitter: function (e) {
                l("https://twitter.com/intent/tweet?text=" + encodeURIComponent(e.text) + "&url=" + encodeURIComponent(e.buttons.twitter.url !== "" ? e.buttons.twitter.url : e.url) + (e.buttons.twitter.via !== "" ? "&via=" + e.buttons.twitter.via : ""), "twitter", us_sharrre.twitter_width, us_sharrre.twitter_height)
            },
            delicious: function (e) {
                l("http://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent(e.buttons.delicious.url !== "" ? e.buttons.delicious.url : e.url) + "&title=" + e.text, "delicious", us_sharrre.delicious_width, us_sharrre.delicious_height)
            },
            stumbleupon: function (e) {
                l("http://www.stumbleupon.com/badge/?url=" + encodeURIComponent(e.buttons.stumbleupon.url !== "" ? e.buttons.stumbleupon.url : e.url), "stumble", us_sharrre.stumble_width, us_sharrre.stumble_height)
            },
            linkedin: function (e) {
                l("https://www.linkedin.com/cws/share?url=" + encodeURIComponent(e.buttons.linkedin.url !== "" ? e.buttons.linkedin.url : e.url) + "&token=&isFramed=true", "linkedin", us_sharrre.linkedin_width, us_sharrre.linkedin_height)
            },
            pinterest: function (e) {
                l("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(e.buttons.pinterest.url !== "" ? e.buttons.pinterest.url : e.url) + "&media=" + encodeURIComponent(e.media) + "&description=" + encodeURIComponent(e.text), "pinterest", us_sharrre.pinterest_width, us_sharrre.pinterest_height)
            },
            buffer: function (e) {
                l("http://bufferapp.com/add?url=" + encodeURIComponent(e.buttons.buffer.url !== "" ? e.buttons.buffer.url : e.url) + "&text=" + e.buttons.buffer.tweetText + "&via=&picture=&count=" + e.buttons.buffer.layout + "&source=button", "buffer", us_sharrre.buffer_width, us_sharrre.buffer_height)
            },
            reddit: function (e) {
                l("http://reddit.com/submit?url=" + encodeURIComponent(e.buttons.reddit.url !== "" ? e.buttons.reddit.url : e.url) + "&title=" + encodeURIComponent(e.text), "reddit", us_sharrre.reddit_width, us_sharrre.reddit_height)
            },
            vkontakte: function (e) {
                l("http://vkontakte.ru/share.php?url=" + encodeURIComponent(e.buttons.vkontakte.url !== "" ? e.buttons.vkontakte.url : e.url) + "&title=" + encodeURIComponent(e.buttons.vkontakte.description) + "&image=" + encodeURIComponent(e.buttons.vkontakte.media), "vkontakte", us_sharrre.vkontakte_width, us_sharrre.vkontakte_height)
            }
        };
    f.prototype.init = function () {
        var e = this;
        if (this.options.urlCurl !== "") {
            u.googlePlus = this.options.urlCurl + "?url={url}&type=googlePlus&action=us_sharrre";
            u.stumbleupon = this.options.urlCurl + "?url={url}&type=stumbleupon&action=us_sharrre";
            u.reddit = this.options.urlCurl + "?url={url}&type=reddit&action=us_sharrre";
            u.pinterest = this.options.urlCurl + "?url={url}&type=pinterest&action=us_sharrre";
            u.vkontakte = this.options.urlCurl + "?url={url}&type=vkontakte&action=us_sharrre"
        }
        t(this.element).addClass(this.options.className);
        typeof t(this.element).data("title") != "undefined" && (this.options.title = t(this.element).attr("data-title"));
        typeof t(this.element).data("url") != "undefined" && (this.options.url = t(this.element).data("url"));
        typeof t(this.element).data("text") != "undefined" && (this.options.text = t(this.element).data("text"));
        typeof t(this.element).data("media") != "undefined" && (this.options.media = t(this.element).attr("data-media"));
        typeof t(this.element).data("description") != "undefined" && (this.options.description = t(this.element).attr("data-description"));
        t.each(this.options.share, function (t, n) {
            n === !0 && e.options.shareTotal++
        });
        e.options.enableCounter === !0 ? t.each(this.options.share, function (t, n) {
            if (n === !0) try {
                e.getSocialJson(t)
            } catch (r) {}
        }) : e.options.template !== "" ? this.options.render(this, this.options) : this.loadButtons();
        t(this.element).click(function () {
            e.options.click(e, e.options);
            return !1
        })
    };
    f.prototype.getSocialJson = function (e) {
        var n = this,
            r = 0,
            i = u[e].replace("{url}", encodeURIComponent(this.options.url));
        this.options.buttons[e].urlCount === !0 && this.options.buttons[e].url !== "" && (i = u[e].replace("{url}", this.options.buttons[e].url));
        if (i != "" && n.options.urlCurl !== "") t.getJSON(i, function (t) {
            if (typeof t.count != "undefined" || typeof t.shares != "undefined") {
                if (t.count) var i = t.count + "";
                else if (t.shares) var i = t.shares + "";
                else var i = "0";
                i = i.replace("Ă‚Â ", "");
                r += parseInt(i, 10)
            } else typeof t[0] != "undefined" ? r += parseInt(t[0].total_posts, 10) : t.data && t.data.length > 0 && typeof t.data[0].total_count != "undefined" ? r += parseInt(t.data[0].total_count, 10) : typeof t[0] != "undefined";
            n.options.count[e] = r;
            n.options.total += r;
            n.renderer();
            n.rendererPerso()
        }).error(function () {
            n.options.count[e] = 0;
            n.rendererPerso()
        });
        else {
            n.renderer();
            n.options.count[e] = 0;
            n.rendererPerso()
        }
    };
    f.prototype.rendererPerso = function () {
        var t = 0;
        for (e in this.options.count) t++;
        t === this.options.shareTotal && this.options.render(this, this.options)
    };
    f.prototype.renderer = function () {
        var e = this.options.total,
            n = this.options.template;
        this.options.shorterTotal === !0 && (e = this.shorterTotal(e));
        if (n !== "") {
            n = n.replace("{total}", e);
            t(this.element).html(n)
        }
    };
    f.prototype.openPopup = function (e) {
        a[e](this.options)
    };
    f.prototype.shorterTotal = function (e) {
        e >= 1e6 ? e = (e / 1e6).toFixed(2) + "M" : e >= 1e3 && (e = (e / 1e3).toFixed(1) + "k");
        return e
    };
    f.prototype.simulateClick = function () {
        var e = t(this.element).html();
        t(this.element).html(e.replace(this.options.total, this.options.total + 1))
    };
    f.prototype.update = function (e, t) {
        e !== "" && (this.options.url = e);
        t !== "" && (this.options.text = t)
    };
    t.fn[s] = function (e) {
        var n = arguments;
        if (e === i || typeof e == "object") return this.each(function () {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new f(this, e))
        });
        if (typeof e == "string" && e[0] !== "_" && e !== "init") return this.each(function () {
            var r = t.data(this, "plugin_" + s);
            r instanceof f && typeof r[e] == "function" && r[e].apply(r, Array.prototype.slice.call(n, 1))
        })
    }
})(jQuery, window, document);