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
* video formats: mp4, mkv, avi, wmv, divx, xvid, asf, asx, flv, m2v, m4p, m4v, mov,
  mpe, mpeg, mpg, mpg4, ogg, ogv, vob, webm, wvx
* browsers: Chrome, Firefox, IE, Safari
* operating systems: Windows XP and above, Android
* seek/reposition
* subtitles

Use of the Hola Player is subject to [Hola Player terms of use](http://hola.org/legal_publishers)

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

### Make all torrent and magnet links pop up a media player upon hover
```html
<script src="//hola.org/play_page.js"></script>
<script>window.hola_player.init({links: 'hover'});</script>
```
[Live demo](http://jsbin.com/faceyu/9/)

### Responsive player
Fit player to available space
* [Live demo](http://jsbin.com/vitira/1/)

### Multiple video quality options
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

## [Plugins](//github.com/hola/player/blob/master/plugins.md): Automatic Subtitles fetching via XMLRPC/JSON, posters, and video search box

Plugins are JSON files that enable Hola to automatically fetch subtitles from a subtitles server, and posters from a video search server,
using XMLRPC or JSON requests.
Plugins also allow adding a video search boxes to refer searches to your site, google, or any other search engine.

* [How to write a plugin](//github.com/hola/player/blob/master/plugins.md)
* How to load a plugin: set `config_url=http://yoursite.com/hola_config.json` in the video params, and place that plugin file on your server in that location.

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

### responsive=0|1
* `responsive=0` - default, player size is static
* `responsive=1` - player size depends on iframe size

### poster=POSTER_URL

* `poster=http://../poster.png` - url for the video poster image  
[Live demo](http://jsbin.com/wozipo/2/)
 
### autoplay=0|1 (coming soon)

* `autoplay=0` - default, don't auto start playing the video
* `autoplay=1` - auto start playing the video

### start=START_SEC (coming soon)

* `start=100` - start playing video 100sec after video start

### start_at=START_PERCENT

* `start_at=10` - start playing video 10% after video start

### duration=DURATION_SEC (coming soon)

* `duration=3600` - set the video duration to be used before the video information is retrieved

### video_tag=0|1
* `video_tag=0` - open hola browser with VLC engine to play videos
* `video_tag=1` - default, in supporting browsers try playing MP4 videos in same browser using browser's `<video>` tag

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

## Reporting bugs

How to report an issue/bug with Hola Media Player:

* In order to narrow the scope of the bug, please reproduce it with one of our above JSBin live samples.
* If it does not reproduce in any of the samples, modify the relevant sample in JSBin, in a way that reproduces the problem you have.
* [Open an issue](//github.com/hola/player/issues) and include in it the link to JSBin that reproduces the problem, with an explanation of how to reproduce it, along with the exact browser version.

This will give us a systematic reproduction and will allow us to debug and solve the bug faster.

Feel free to also open issues with suggestions for improvement, or feature requests!

### Known open issues

* responsive=1 does not display well.
  Target fix date: 10-Sep-2015
* In Firefox and Hola Browser, in full screen, some videos have blue artifacts at the top part of the screen.
  Target fix date: 18-Sep-2015
* No way to disable subtitles embedded into MKV files.
  Target fix date: 15-Sep-2015
  
