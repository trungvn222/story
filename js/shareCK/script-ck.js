(function () {
    function e() {
        var e = jQuery(".us_mail_your_name").val(),
            t = jQuery(".us_mail_url").val(),
            n = jQuery(".us_mail_your_email").val(),
            r = jQuery(".us_mail_recipient_email").val(),
            i = jQuery(".us_mail_message").val(),
            s = jQuery(".us_mail_captcha").val();
        jQuery.ajax({
            type: "POST",
            url: us_script.ajaxurl,
            data: {
                action: "us_send_mail",
                url: t,
                your_name: e,
                your_email: n,
                recipient_email: r,
                message: i,
                captcha: s
            },
            success: function (e) {
                var t = jQuery(".us_mail_response"),
                    n = jQuery(".us_mail_form_holder");
                t.hide().removeClass("alert alert-danger alert-info alert-success");
                if (e === "ok") {
                    t.fadeIn().addClass("alert alert-success").html(us_script.success);
                    n.html("");
                    setTimeout(function () {
                        jQuery(".us_modal");
                        jQuery.magnificPopup.instance.close()
                    }, 2e3)
                } else t.fadeIn().html(e).addClass("alert alert-danger")
            },
            error: function (e, t, n) {
                console.log(n)
            }
        })
    }
    jQuery(document).ready(function () {
        jQuery(".us_mail_send").on("click", function () {
            jQuery(".us_mail_response").addClass("alert alert-info").html(us_script.trying);
            e()
        });
        jQuery(".us_mail a").magnificPopup({
            type: "inline",
            midClick: !0,
            removalDelay: 300,
            mainClass: "us_mail_fade us_wrapper"
        });
        jQuery(".us_total").ultimate_social_deux({
            share: {
                facebook: !0,
                twitter: !0,
                googlePlus: !0,
                pinterest: !0,
                linkedin: !0,
                stumble: !0,
                delicious: !0,
                buffer: !0,
                reddit: !0,
                vkontakte: !0
            },
            template: '<div class="us_box"><div class="us_share">' + us_script.total_shares_text + '</div><div class="us_count">{total}</div></div>',
            urlCurl: us_script.sharrre_url
        });
        jQuery(".us_twitter").ultimate_social_deux({
            share: {
                twitter: !0
            },
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-twitter"></i></div><div class="us_count">{total}</div></a>',
            buttons: {
                twitter: {
                    via: us_script.tweet_via
                }
            },
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("twitter");
                return !1
            }
        });
        jQuery(".us_twitter_no_count").ultimate_social_deux({
            share: {
                twitter: !1
            },
            buttons: {
                twitter: {
                    via: us_script.tweet_via
                }
            },
            click: function (e, t) {
                e.openPopup("twitter");
                return !1
            }
        });
        jQuery(".us_facebook").ultimate_social_deux({
            share: {
                facebook: !0
            },
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-facebook"></i></div><div class="us_count">{total}</div></a>',
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("facebook");
                return !1
            }
        });
        jQuery(".us_facebook_no_count").ultimate_social_deux({
            share: {
                facebook: !1
            },
            click: function (e, t) {
                e.openPopup("facebook");
                return !1
            }
        });
        jQuery(".us_googleplus").ultimate_social_deux({
            share: {
                googlePlus: !0
            },
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-gplus"></i></div><div class="us_count">{total}</div></a>',
            urlCurl: us_script.sharrre_url,
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("googlePlus");
                return !1
            }
        });
        jQuery(".us_googleplus_no_count").ultimate_social_deux({
            share: {
                googlePlus: !1
            },
            click: function (e, t) {
                e.openPopup("googlePlus");
                return !1
            }
        });
        jQuery(".us_pinterest").ultimate_social_deux({
            share: {
                pinterest: !0
            },
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-pinterest"></i></div><div class="us_count">{total}</div></a>',
            urlCurl: us_script.sharrre_url,
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("pinterest");
                return !1
            }
        });
        jQuery(".us_pinterest_no_count").ultimate_social_deux({
            share: {
                pinterest: !1
            },
            enableHover: !1,
            click: function (e, t) {
                e.openPopup("pinterest");
                return !1
            }
        });
        jQuery(".us_linkedin").ultimate_social_deux({
            share: {
                linkedin: !0
            },
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-linkedin"></i></div><div class="us_count">{total}</div></a>',
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("linkedin");
                return !1
            }
        });
        jQuery(".us_linkedin_no_count").ultimate_social_deux({
            share: {
                linkedin: !1
            },
            click: function (e, t) {
                e.openPopup("linkedin");
                return !1
            }
        });
        jQuery(".us_stumble").ultimate_social_deux({
            share: {
                stumbleupon: !0
            },
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-stumbleupon"></i></div><div class="us_count">{total}</div></a>',
            urlCurl: us_script.sharrre_url,
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("stumbleupon");
                return !1
            }
        });
        jQuery(".us_stumble_no_count").ultimate_social_deux({
            share: {
                stumbleupon: !1
            },
            click: function (e, t) {
                e.openPopup("stumbleupon");
                return !1
            }
        });
        jQuery(".us_delicious").ultimate_social_deux({
            share: {
                delicious: !0
            },
            urlCurl: us_script.sharrre_url,
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-delicious"></i></div><div class="us_count">{total}</div></a>',
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("delicious");
                return !1
            }
        });
        jQuery(".us_delicious_no_count").ultimate_social_deux({
            share: {
                delicious: !1
            },
            click: function (e, t) {
                e.openPopup("delicious");
                return !1
            }
        });
        jQuery(".us_buffer").ultimate_social_deux({
            share: {
                buffer: !0
            },
            enableHover: !1,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-buffer"></i></div><div class="us_count">{total}</div></a>',
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("buffer");
                return !1
            }
        });
        jQuery(".us_buffer_no_count").ultimate_social_deux({
            share: {
                buffer: !1
            },
            click: function (e, t) {
                e.openPopup("buffer");
                return !1
            }
        });
        jQuery(".us_reddit").ultimate_social_deux({
            share: {
                reddit: !0
            },
            urlCurl: us_script.sharrre_url,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-reddit"></i></div><div class="us_count">{total}</div></a>',
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("reddit");
                return !1
            }
        });
        jQuery(".us_reddit_no_count").ultimate_social_deux({
            share: {
                reddit: !1
            },
            click: function (e, t) {
                e.openPopup("reddit");
                return !1
            }
        });
        jQuery(".us_vkontakte").ultimate_social_deux({
            share: {
                vkontakte: !0
            },
            buttons: {
                vkontakte: {
                    url: jQuery(".us_vkontakte").attr("data-url"),
                    media: jQuery(".us_vkontakte").attr("data-media"),
                    description: jQuery(".us_vkontakte").attr("data-text")
                }
            },
            urlCurl: us_script.sharrre_url,
            template: '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-vkontakte"></i></div><div class="us_count">{total}</div></a>',
            click: function (e, t) {
                e.simulateClick();
                e.openPopup("vkontakte");
                return !1
            }
        });
        jQuery(".us_vkontakte_no_count").ultimate_social_deux({
            share: {
                vkontakte: !1
            },
            buttons: {
                vkontakte: {
                    url: jQuery(".us_pinterest").attr("data-url"),
                    media: jQuery(".us_pinterest").attr("data-media"),
                    description: jQuery(".us_pinterest").attr("data-text")
                }
            },
            click: function (e, t) {
                e.openPopup("vkontakte");
                return !1
            }
        })
    })
})(jQuery);