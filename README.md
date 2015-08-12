# [Hola Media Player API](https://hola.org/player)
An embeddable HTML/JS widget for sites to instantly stream torrents and magnets to the browser.

[Live demo](http://jsbin.com/faceyu/8/)
```html
<script src="//hola.org/play_page.js"></script>
<div class="hola-embedded-player"
  v="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4.torrent">
</div> 
```

## Features
* instant streaming
* protocols: http, torrent files and magnet links
* embeddable as div, iframe, script or simple link to video
* video formats: mp4, mkv, avi, asf, asx, avi, divx, flv, m2v, m4p, m4v, mkv, mov,
  mpe, mpeg, mpg, mpg4, ogg, ogv, vob, webm, wmv, wvx
* browsers: Chrome, Firefox, IE, Safari
* operating systems: Windows XP and above, Android
* seek/reposition
* subtitles

** Please note that the use of the Hola Player is subject to its terms of use, available on http://hola.org/legal_publishers

### &lt;a&gt; link
```html
<a href="http://hola.org/play#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent">
  Watch SunFlower Movie
</a>
```
[Live demo](http://hola.org/play#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent)

### &lt;script&gt; and &lt;div&gt;
```html
<script src="//hola.org/play_page.js"></script>
<div class="hola-embedded-player"
  v="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4.torrent">
</div> 
```
[Live demo](http://jsbin.com/faceyu/8/)

### &lt;iframe&gt;
```html
<iframe width="770" height="500" frameborder="0" allowfullscreen
  src="//hola.org/play_embed#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent">
</iframe>
```
[Live demo](http://jsbin.com/faceyu/6/)

### make all torrent and magnet links pop up a media player upon hover
```html
<script src="//hola.org/play_page.js"></script>
<script>window.hola_player.init({links: 'hover'});</script>
```
[Live demo](http://jsbin.com/faceyu/9/)

### HTTP streaming
Instant streaming of MP4 files without any client-side software installation
* [Live demo](http://jsbin.com/faceyu/29/)
* [Live demo](http://hola.org/play#v=http%3A%2F%2F0.s3.envato.com%2Fh264-video-previews%2F80fad324-9db4-11e3-bf3d-0050569255a8%2F490527.mp4)

### Responsive player
Fit player to available space
* [Live demo](http://jsbin.com/vitira/1/)

### Multiple video quality options (HD mode)
* [Live demo](http://hola.org/play#sources=%5B%7B%22file%22%3A%22http%3A%2F%2Fmirrorblender.top-ix.org%2Fmovies%2Fsintel-2048-surround.mp4%22%2C%22label%22%3A%222048x872%22%7D%2C%7B%22file%22%3A%22http%3A%2F%2Fmirrorblender.top-ix.org%2Fmovies%2Fsintel-1024-surround.mp4%22%2C%22label%22%3A%221024x436%22%2C%22default%22%3Atrue%7D%5D)

### Subtitles
Supported formats:
- srt
- vtt
- srt/vtt inside a zip file

Language detection:
- Auto detection from subtitles file name. If the file name contains any 2/3 letter language abbreviation (eg. en.srt, eng.srt, fr.srt,...) we will use it as the subtitles language.
- Force explicit subtitles lanaguge: sub1=en,xxx.srt (you can use any 2/3 letter lanaguage abbreviation)

```html
<iframe src="//hola.org/play_embed#v=xxx.torrent&sub1=eng.srt&sub2=fr.srt"></iframe>
```
[Live demo](http://jsbin.com/faceyu/18/)

```html
<div class="hola-embedded-player" sub1="eng.srt" sub2="fr.srt"></div>
```
[Live demo](http://jsbin.com/faceyu/20/)

#### Subtitles from json
It is possible to specify a json with multiple subtitles options in different languages.
Example:
```json
{
	"subs": {
		"vid10001": {
			"english": [
				{
					"url": "https://durian.blender.org/wp-content/content/subtitles/sintel_en.srt"
				}
			],
			"spanish": [
				{
					"url": "https://durian.blender.org/wp-content/content/subtitles/sintel_es.srt"
				}
			]
		}
	}
}
```
* [Json example](http://hola.org/player/api/vid10001)
* [Live demo](http://jsbin.com/faceyu/26)

### Subtitles plugins
It is possible to specifiy subtitles plugin for automatic subtitle download:
* json plugin
* xmlrpc plugin

Add hola_player.json to the root of your site domain to set plugins.
It is also possible to explicity set a config json to your video using `config_url=http://`

[hola_player.json example](http://hola.org/player/api/hola_player.json)

### Subtitles json plugin
Set `OPEN_VIDEO_ID=id` to your video and hola will automatically download the subtitles.
```json
{
	"plugin": [
		{
			"type": "json",
			"subtitle_url": "http://hola.org/player/api/{OPEN_VIDEO_ID}"
		}
	]
}		
```
* [Live demo](http://jsbin.com/faceyu/28)

### Subtitles xmlrpc plugin

## API parameters

### parameters formatting

* url (link or iframe src):
  `http://hola.org/play#v=...&param1=...&param2=...&param3=...`
   (all params values must be uri-encoded)
* div parameters:
  `<div class="hola-embedded-player" v="..." param1="..." param2="..." param3="...">`

### v=VIDEO_SOURCE

* `v=http://../clip.mp4` - http that holds mp4/mkv/avi video
* `v=http://../clip.mp4.torrent` - torrent that holds mp4/mkv/avi video
* `v=magnet:...` - magnet link that holds mp4/mkv/avi video

### sources=MULTIPLE_SOURCES
* `sources=MULTIPLE_SOURCS` - where MULTIPLE SOURCES is `encodeURIComponent(JSON.stringify(array))` and `array = [{file: 'http://.../clip.mp4', label: '720'}, {file: 'http://.../clip4_2.mp4, label: '480'}]`

### title=VIDEO_TITLE

* `title="Video Title"` - set the video title. if not specified,  auto-detect video title (from file name, torrent info)

### player_type=html5/flash
* `player_type=html5` - use html5 player (default)
* `player_type=flash` - user flash player

### responsive=0/1
* `responsive=0` - default, player size is static
* `responsive=1` - player size depends on iframe size

### poster=POSTER_URL

* `poster=http://../poster.png` - url for the video poster image  
[Live demo](http://jsbin.com/wozipo/2/)
 
### autoplay=0/1 (coming soon)

* `autoplay=0` - default, don't auto start playing the video
* `autoplay=1` - auto start playing the video

### start=START_SEC (coming soon)

* `start=100` - start playing video 100sec after video start

### start_at=START_PERCENT

* `start_at=10` - start playing video 10% after video start

### duration=DURATION_SEC (coming soon)

* `duration=3600` - set the video duration to be used before the video information is retrieved

### sub=SUBTITLES_SOURCE

* srt subtitles from http source: `sub=http://../clip_subtitles.srt`
* srt inside zip: `sub=http://../clip_subtitles.zip`
* multiple subtitles: `sub1=http://... sub2=http://... sub3=http://...`
* explicit subtitles langauge : `sub=en,http://...`
* subtitles json: `sub=json,http://...`

### sub_default=VALUE
* automatic selection of subtitles (use previous user selection, default to browser locale): `sub_default=on`
* explicit subtitle language: `sub_default=en`
* subtitles off: `sub_default=off`

### config_url=JSON_URL
* explicit set configuration url: `config_url=http://yoursite.com/path/to/your_player_config.json`
* put `hola_player.json` at the root of your site: `http://yoursite.com/hola_player.json`

## Events
* hola_vjs.play
* hola_vjs.pause
* hola_vjs.ended
* hola_vjs.loadedalldata
* hola_vjs.playing
* hola_vjs.timeupdate
* hola_vjs.durationchange
* hola_vjs.progress
* hola_vjs.fullscreenchange
* hola_vjs.error
* hola_vjs.volumechange
* hola_vjs.waiting
* hola_vjs.qualitychange
