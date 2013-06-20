$(function () {

            $("#player1").igVideoPlayer({
                sources: ['http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4',
						'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm',
						'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv'
                ],
                width: 720,
                posterUrl: 'http://igniteuisamples.dev.infragistics.local/13-1/images/samples/video-player/ig-pres.png',
                fullscreen: false,
                browserControls: false,
                autohide: false,
                autoplay: false,
                autohideDelay: 2000,
                title: '$$(ig_pres)',
                bookmarks: [
					{
					    title: '$$(Design)',
					    description: '$$(ig_design_pres)',
					    time: 14
					},
					{
					    title: '$$(Develop)',
					    description: '$$(ig_develop_pres)',
					    time: 46
					},
					{
					    title: '$$(Experience)',
					    description: '$$(ig_experience_pres)',
					    time: 74
					},
					{
					    title: '$$(Final)',
					    description: '$$(ig_logo)',
					    time: 100
					}
                ]
            });

        });