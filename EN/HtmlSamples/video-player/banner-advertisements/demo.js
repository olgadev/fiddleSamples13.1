$(function () {
var alternate = true;

        $(function () {

            $("#player1").igVideoPlayer({
                sources: ['http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4',
						'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm',
						'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv'
                ],
                width: 720,
                height: 272,
                posterUrl: 'http://igniteuisamples.dev.infragistics.local/13-1/images/samples/video-player/ig-pres.png',
                fullscreen: false,
                browserControls: false,
                autohide: false,
                autoplay: false,
                autohideDelay: 2000,
                title: '$$(ig_pres)',
                banners: [{
                    imageUrl: 'http://igniteuisamples.dev.infragistics.local/13-1/images/samples/video-player/banner.png',
                    link: 'http://quince.infragistics.com/',
                    times: [5, 20, 60],
                    visible: false,
                    closeBanner: true,
                    animate: true,
                    autohide: true,
                    hidedelay: 10000,
                    width: "200px",
                    height: "67px"
                }],
                bannerVisible: function (sender, eventArgs) {
                    if (alternate === true) {
                        eventArgs.bannerElement.css('top', 130);
                    }
                    else {
                        eventArgs.bannerElement.css('top', 0);
                    }

                    alternate = !alternate;
                },
                bannerClick: function (sender, eventArgs) {
                    $("#player1").igVideoPlayer('pause');
                }
            });

        });});