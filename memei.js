"use strict";
var tnum = 'zh_cn';
var language = {
    en_us: 'English',
    zh_tw: 'Traditional Chinese'
};
var trans = {
    en_us: {
        days: 'd',
        hours: 'h',
        minute: 'm',
        second: 's',
        msg_v1: 'ETH address cannot be empty',
        msg_v2: 'Please enter a valid ETH address',
        msg_v3: 'Copy successful',
        copy: 'Copy',
        v1: 'MEME assets',
        v2: 'Parachutage',
        v3: 'How to get MEMEI? ',
        v4: 'The total amount of MEMEI in circulation is 100,000,000, 8% of which is planned to be airdropped to the community, 40% of which will participate in crowd-funding, and the rest 52% of which will be used for liquidity mining. There will be no token reserves, pre-mining and additional issuance. ',
        v5: 'If the crowdfunded amount is not up to 1000ETH when the crowdfunding ends, all crowdfunded ETH will be refunded to the paying account and the crowdfunded MEMEI will be injected into liquidity mining pools. ',
        v6: 'MEMEI is the equity token of Memeswap, a decentralized Nft asset exchange platform that was initiated by MEME self-governed community. MEMEI can move artistic assets and facilitate their circulation on chain by leveraging the features of ERC721 and ERC155 protocols.Memeswap will use optimostoc rollup technology to reduce transaction gas costs.',
        v7: 'Participate in the airdrop',
        v8: 'Enter ETH address',
        v9: 'Please enter your Ethereum address to participate in the MEMEI airdrop',
        v10: 'Submit',
        v11: 'Crowdfunding address',
        v12: 'Balance',
        v13: 'Invited',
        v14: 'Invitation reward',
        v15: 'Use your wallet',
        v16: 'Send ETH to the crowdfunding address. ',
        v17: 'Invitation link',
        v18: 'My QR code',
        v19: 'My QR code picture',
        v20: 'Save QR code',
        v21: 'Close',
        v22: 'Copy and share your link. You and the invitee will be rewarded with 100 MEMEI at the same time. Each person can invite up to 10 people. Each person can get a maximum of 1000 MEMEI. If it is recognized as cheating, the reward will be cancelled. If you participate in crowdfunding, a refund will be implemented. ',
        v23: 'Airdrop instructions',
        v24: '8,000,000 MEMEI tokens will be airdropped, 3,000,000 of which will be airdropped to MEME holding accounts randomly and the other 5,000,000 to MEMEI community. Submit an ETH address to be a recipient of the airdrop. 100 MEMEI will be transferred to every participant and 100 more for each successful referral. A maximum of 1,000 MEMEI will be granted to each participant. ',
        v25: 'MEMEI airdrop event will end on Oct 18. Once the event ends, MEMEI token will be automatically granted to the submitted ETH address. Afterwards, MEMEI will be launchd on uniswap and Huobi and on Memeswap by the end of October. ',
        v26: 'Crowdfunding rules',
        v27: 'A total of 40,000,000 MEMEI are planned to be crowdfunded. Crowdfunding time: Sep 29 2020 - 23:59:59 Oct 18 2020 (UTC+8)',
        v28: 'Price of crowdfunding: Phase 1: 1ETH =50000 MEMEI; Phase 2: 1ETH=33333 MEMEI',
        v29: 'Phase I crowdfunding will start from Sep 29 and last till 400ETH are collected. Phase II crowdfunding will start from collecting the 401th ETH and last till Oct 18. Tokens will be issued in a first come first served manner. Early participants have more chances of success. Unsuccessful purchases when the crowdfunding ends will be refunded to the payment account. All ETH crowdfunded by users will be used to facilitate cross-chain liquidity.',
        v30: 'Crowdfunding method',
        v31: 'Use your wallet to send ETH to the crowdfunding address',
        v32: 'After the airdrop is over, MEMEI will be automatically sent to your source address according to the source address of your ETH sent',
        v33: 'This airdrop adopts anti-fraud AI algorithm. Fraudsters will be disqualified from the event and their ETH contribution will be returned to the paying account.',
        v34: 'Airdrop ETH address do not fill in the exchange\'s  address or other application address,it must be the decentralized wallet ETH address.',
        v35: 'Person',
        v36: 'Price of crowdfunding: Phase 1: 1ETH =50000 MEMEI; Phase 2: 1ETH=33333 MEMEI. The earlier the participation, the greater the success rate. ',
        v37: 'Subscription record',
        v38: 'Time',
        v39: 'Transfer in',
        v40: 'Get',
        v41: 'MEMEI contract address',
        v42: 'MEMEI Smart Contract Code',
        v43: 'Price of crowdfunding: Phase 1: 1ETH =50000 MEMEI; Phase 2: 1ETH=33333 MEMEI',
        v44: 'MEMEI tokens can now be obtained by participating in MEMEI airdrops, MEMEI crowdfunding, etc. In the future, MEMEI can be obtained through liquidity mining and exchanges.',
        v45: 'Countdown',
        v46: 'The number of airdrops and crowdfunding is limited, and the smart aggregator will issue MEMEI according to the time sequence of transferring ETH',
    },
    
    zh_tw: {
        days: '天',
        hours: '時',
        minute: '分',
        second: '秒',
        msg_v1: 'ETH地址不能為空',
        msg_v2: '請輸入有效的ETH地址',
        msg_v3: '複製成功',
        copy: '複製',
        v1: 'MEME 資產',
        v2: '空投活動',
        v3: '如何獲得MEMEI ？ ',
        v4: 'MEMEI總量為100000000枚。其中8%將用於社區空投，40%將參與眾籌，52%將用於流動性挖礦，無任何預留和預挖以及增發行為。 ',
        v5: '如眾籌截止時未達到1000ETH的額度，眾籌的ETH將原路返回，眾籌部分的MEMEI代幣將註入流動性礦池。 ',
        v6: 'MEMEI是Memeswap的權益通證，Memeswap是由MEME自治社區發起的Nft資產去中心化交易平臺，利用ERC721和ERC155協議的特性，實現藝術資產上鏈和鏈上流通。Memeswap將採用optimostoc rollup技術，降低交易gas費用。 ',
        v7: '參加空投',
        v8: '輸入ETH地址',
        v9: '請輸入你的以太坊地址參與MEMEI空投',
        v10: '提交',
        v11: '眾籌地址',
        v12: '餘額',
        v13: '已邀請',
        v14: '邀請獎勵',
        v15: '使用您的錢包',
        v16: '發送ETH到眾籌地址。 ',
        v17: '邀請鏈接',
        v18: '我的二維碼',
        v19: '我的二維碼圖片',
        v20: '保存二維碼',
        v21: '關閉',
        v22: '複製並分享你的鏈接，你和被邀請人同時獎勵 100 MEMEI，每人最多可邀請 10人。每人最多獲得 1000 MEMEI， 如被識別為作弊， 將取消獎勵。如參與眾籌，將執行退款。 ',
        v23: '空投說明',
        v24: 'MEMEI總空投數量為8000000枚，其中3000000枚將隨機空投給MEME持幣地址，MEMEI社區空投數量為5000000枚，在網站提交ETH地址即可參與本次空投活動。參加活動用戶即可獲得100枚MEMEI，每邀請壹位好友增加100枚，最多可獲得1000枚MEMEI。',
        v25: 'MEMEI空投於10月18日結束，結束後將自動發放MEMEI代幣至提交的ETH地址，然後將直接上線uniswap和火幣交易所，10月底上線Memeswap。 ',
        v26: '眾籌規則',
        v27: '眾籌總量40000000枚MEMEI，眾籌時間：2020-09-29 至 2020-10-18 23:59:59（UTC+8）',
        v28: '眾籌價格 第壹期 1ETH =50000 MEMEI 第貳期 1ETH=33333 MEMEI',
        v29: '第壹期眾籌於9月29日開始至籌集到400ETH為止，第貳期眾籌從收第401枚ETH開始，截止至10月18日。額度按照時間排序，開始發放代幣, 越早參與成功率越大。如眾籌完畢，未能購買成功將原路自動退款。用戶參與眾籌所得的所有ETH將用於提供跨鏈流動性。',
        v30: '眾籌方式',
        v31: '使用您的錢包發送ETH到眾籌地址',
        v32: '空投結束後，根據您發送ETH的來源地址，將 MEMEI 自動發送到您的來源地址',
        v33: '本次空投啟用人工智能算法識別作弊， 被識別為作弊者將取消空投，參與認籌的將原路退回 ETH',
        v34: '空投ETH地址勿填寫交易所的地址或者其他應用地址，必須是去中心化錢包ETH地址。 ',
        v35: '人',
        v36: '第壹期 1 ETH=50000 MEMEI 第貳期 1 ETH=33333 MEMEI 額度按照時間排序，開始發放代幣，&nbsp;越早參與成功率越大 ',
        v37: '認購記錄',
        v38: '時間',
        v39: '轉入',
        v40: '獲得',
        v41: 'MEMEI 合約地址',
        v42: 'MEMEI 智能合約代碼',
        v43: '眾籌價格 第壹期 1 ETH=50000 MEMEI 第貳期 1 ETH=33333 MEMEI',
        v44: '現在可以通過參與MEMEI空投，MEMEI眾籌等方式獲取MEMEI代幣，未來可通過流動性挖礦以及在交易所獲取MEMEI。',
        v45: '結束倒計時',
        v46: '空投和眾籌數量有限，智能聚合器會根據轉入ETH的時間順序發放MEMEI',
    }
};

function translate(tnum) {
    $('.cur_language').html(language[tnum]);
    $('.lang').each(function() {
        var params = $(this).attr('data-params');
        var tagName = $(this)[0].tagName.toLowerCase();
        if (tagName === 'i' && params === 'copy') {
            $(this).attr('data-original-title', trans[tnum][params]);
        } else if (tagName === 'input') {
            $(this).attr('placeholder', trans[tnum][params]);
        } else {
            $(this).html(trans[tnum][params]);
        }
    });
}

function add_zero(i) {
    return i < 10 ? "0" + i : i + "";
}

function format_st() {
    // 
    var datetimes = 1603036799;
    var lefttime = datetimes - parseInt(new Date().getTime() / 1000);
    if (lefttime <= 0) {
        return {
            d: 0,
            h: 0,
            m: 0,
            s: 0,
        }
    }
    return {
        d: add_zero(parseInt(lefttime / (24 * 60 * 60))),
        h: add_zero(parseInt(lefttime / (60 * 60) % 24)),
        m: add_zero(parseInt(lefttime / 60 % 60)),
        s: add_zero(parseInt(lefttime % 60)),
    }
}
$(document).ready(function() {




    var l = (navigator.browserLanguage || navigator.language).toLowerCase();
    if (l.indexOf('en') !== -1) {
        tnum = 'en_us';
    } else {
        tnum = 'en_us';
    }
    tnum = $.cookie('lang') ? $.cookie('lang') : tnum;
    translate(tnum);
    $('.lang-menu a').click(function(e) {
        e.preventDefault();
        tnum = $(this).attr('data-params');
        $.cookie('lang', tnum);
        translate(tnum);
    });
    $("#yifg-bg").quietflow({
        theme: "starfield",
        starSize: 0,
        starColor: 'rgba(255,255,255,0.7)'
    });
    $('.navbar-main .collapse').on('hide.bs.collapse',
        function() {
            var $this = $(this);
            $this.addClass('collapsing-out');
        });
    $('.navbar-main .collapse').on('hidden.bs.collapse',
        function() {
            var $this = $(this);
            $this.removeClass('collapsing-out');
        });
    $('.navbar-main .dropdown').on('hide.bs.dropdown',
        function() {
            var $this = $(this).find('.dropdown-menu');
            $this.addClass('close');
            setTimeout(function() {
                    $this.removeClass('close');
                },
                200);
        });
    if ($('.headroom')[0]) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 100,
            tolerance: {
                up: 30,
                down: 30
            },
        });
        headroom.init();
    }
    $('.datepicker')[0] && $('.datepicker').each(function() {
        $('.datepicker').datepicker({
            disableTouchKeyboard: true,
            autoclose: false
        });
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').each(function() {
        var popoverClass = '';
        if ($(this).data('color')) {
            popoverClass = 'popover-' + $(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });
    $('.form-control').on('focus blur',
        function(e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
    if ($(".input-slider-container")[0]) {
        $('.input-slider-container').each(function() {
            var slider = $(this).find('.input-slider');
            var sliderId = slider.attr('id');
            var minValue = slider.data('range-value-min');
            var maxValue = slider.data('range-value-max');
            var sliderValue = $(this).find('.range-slider-value');
            var sliderValueId = sliderValue.attr('id');
            var startValue = sliderValue.data('range-value-low');
            var c = document.getElementById(sliderId),
                d = document.getElementById(sliderValueId);
            noUiSlider.create(c, {
                start: [parseInt(startValue)],
                connect: [true, false],
                range: {
                    'min': [parseInt(minValue)],
                    'max': [parseInt(maxValue)]
                }
            });
            c.noUiSlider.on('update',
                function(a, b) {
                    d.textContent = a[b];
                });
        })
    }
    if ($("#input-slider-range")[0]) {
        var c = document.getElementById("input-slider-range"),
            d = document.getElementById("input-slider-range-value-low"),
            e = document.getElementById("input-slider-range-value-high"),
            f = [d, e];
        noUiSlider.create(c, {
                start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
                connect: !0,
                range: {
                    min: parseInt(c.getAttribute('data-range-value-min')),
                    max: parseInt(c.getAttribute('data-range-value-max'))
                }
            }),
            c.noUiSlider.on("update",
                function(a, b) {
                    f[b].textContent = a[b]
                })
    }
    $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {},
        doOut: function() {},
        tolerance: 200,
        throttle: 50,
        toggleClass: 'on-screen',
        debug: false
    });
    $('[data-toggle="scroll"]').on('click',
        function(event) {
            var hash = $(this).attr('href');
            var offset = $(this).data('offset') ? $(this).data('offset') : 0;
            $('html, body').stop(true, true).animate({
                    scrollTop: $(hash).offset().top - offset
                },
                600);
            event.preventDefault();
        });
    var qrcode = $('input[name=qrcode]').val();
    if (qrcode) {
        $('#qrcode').qrcode({
            width: 256,
            height: 256,
            text: qrcode
        });
    }
    var address = null;
    $('button.join-btn').on('click',
        function() {
            address = $('.address').val().trim();
            if (address === '') {
                $('.alert .text').text(trans[tnum]['msg_v1']);
                $('.alert').addClass('show');
            } else if (address.length > 1 && address.substr(0, 2) !== '0x' || address.length !== 42) {
                $('.alert .text').text(trans[tnum]['msg_v2']);
                $('.alert').addClass('show');
            } else {
                _dx.Captcha(document.getElementById('c1'), {
                    appId: '7c3f258d9c55158af374a1883eead90c', //appId
					style: 'embed',
                    width: 300,
					language: 'en',
                    success: function(token) {

                        var hosturl = "https://api.memei.io/"; //0xe2b7ff72a80cede0ba932558eb8abe166bd37a16
						 var inviteurl= window.location.search;
						 var shosturl = hosturl+inviteurl;
						//alert(shosturl);
                        $.ajax({
                            type: "POST",
                            url: shosturl,
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify({
                                ethaddress: address, //ETH address
                                Slidecode: token, //slide
                            }),
                            success: function(res) {
                                console.log(res)
                                layer.closeAll();
                                if (res.result === 'true') {
                                    $('.user-address').text(res.ETHAddress);
                                    $('.balance').text(Math.floor(res.Balance * 100) / 100);
                                    $('.members').text(res.InviteNum);
                                    $('.invbonus').text(Math.floor(res.InviteReward * 100) / 100);
                                    //ETH Log
                                    $.get(hosturl + 'api?type=getlistlog&eth=' + res.ETHAddress, null,
                                        function(res) {

                                            if (res.result === 'true') {
                                                var history = "";
                                                res.Data.forEach(function(v) {
                                                    history += ' <tr>\n' + ' <td>' + v.UpdateTime + '</td>\n' + ' <td class="text-danger">' + Math.floor(v.ETHNum * 100) / 100 + ' ETH</td>\n' + ' <td class="text-success">' + Math.floor(v.ExchangeNum * 100) / 100 + ' MEMEI</td>\n' + '                    </tr>'
                                                });
                                                $('#MEMEI-history').html(history);
                                            }
                                        }, 'json');
                                    var url = "https://memei.io/?share=" + res.InviteCode;
                                    $('#qrcode').qrcode(url);
                                    $('#share_url').html(url);
                                    $('#share_url_copy').attr('data-text', url);
                                    $('.address-panel').hide();
                                    $('.share-panel').show();
                                }
                                layer.msg(res.message);
                            }
                        });
                        layer.closeAll();
                        $('#c1').hide();
                    }
                });
                $('#c1').show();

            }

        });
    $('.address').on("input",
        function() {
            if ($(this).val().trim() !== '') {
                $('.alert').removeClass('show');
            }
        });
    $('#save_qrcode').click(function() {
        var canvas = $("#qrcode").children('canvas')[0];
        var dom = document.createElement("a");
        dom.href = canvas.toDataURL("image/png");
        dom.download = new Date().getTime() + ".png";
        dom.click();
    });
    var clipboard = new Clipboard('.copy-text');
    clipboard.on('success',
        function(e) {
			layer.msg(trans[tnum]['msg_v3'])
            e.clearSelection();
        });
    clipboard.on('error',
        function(e) {});
    var dt = format_st();

    $('#countdown').html(
        dt.d + trans[tnum]['days'] + dt.h + trans[tnum]['hours'] + dt.m + trans[tnum]['minute'] + dt.s + trans[tnum]['second']
    );
    setInterval(function() {
            var dt = format_st();
            $('#countdown').html(dt.d + trans[tnum]['days'] + dt.h + trans[tnum]['hours'] + dt.m + trans[tnum]['minute'] + dt.s + trans[tnum]['second'])
        },
        1000)
});