# [Hola Media Player API](https://hola.org/player)
An HTML5 Media Player that instantly streams http, torrents and magnets to the browser.

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
* video formats: mp4, mkv and avi
* browsers: Chrome, Firefox. coming soon: IE.
* mobile: coming soon: Android App.
* seek/reposition
* subtitles

## Example: &lt;a&gt; link
```html
<a href="http://hola.org/play#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent">
  Watch SunFlower Movie
</a>
```
[Live demo](http://hola.org/play#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent)

## Example: &lt;script&gt; and &lt;div&gt;
```html
<script src="//hola.org/play_page.js"></script>
<div class="hola-embedded-player"
  v="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4.torrent">
</div> 
```
[Live demo](http://jsbin.com/faceyu/8/)

## Example: &lt;iframe&gt;
```html
<iframe width="770" height="500" frameborder="0" allowfullscreen
  src="//hola.org/play_embed#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent">
</iframe>
```
[Live demo](http://jsbin.com/faceyu/6/)

## Example: make all torrent and magnet links pop up a media player upon hover
```html
<script src="//hola.org/play_page.js"></script>
<script>window.hola_player.init({links: 'hover'});</script>
```
[Live demo](http://jsbin.com/faceyu/9/)


## Subtitles (soon to be released)
Supported formats:
- srt
- vtt
- srt/vtt inside a zip file

Language detection:
- Auto detection from subtitles file name. If the file name contains any 2/3 letter language abbreviation (eg. en.srt, eng.srt, fr.srt,...) we will use it as the subtitles language.
- Force explicit subtitles lanaguge: sub1=en,xxx.srt (you can use any 2/3 letter lanaguage abbreviation)

### Examples
```html
<iframe src="//hola.org/play_embed#v=xxx.torrent&sub1=eng.srt&sub2=fr.srt"></iframe>
```
```html
<div class="hola-embedded-player" sub1="eng.srt" sub2="fr.srt"></div>
```

## API parameters

### parameters formatting

* url (link or iframe src):
  `http://hola.org/play#v=...&param1=...&param2=...&param3=...`
* div parameters:
  `&lt;div class="hola-embedded-player" v="..." param1="..." param2="..." param3="..."&gt;`

### `v=VIDEO_SOURCE`

* `v=http://../clip.mp4` - http that holds mp4/mkv/avi video
* `v=http://../clip.mp4.torrent` - torrent that holds mp4/mkv/avi video
* `v=magnet:...` - magnet link that holds mp4/mkv/avi video

### `sub=SUBTITLES_SOURCE` (coming soon)

* srt subtitles from http source: `sub=http://../clip_subtitles.srt`
* srt inside zip: `sub=http://../clip_subtitles.zip`
* multiple subtitles: `sub1=http://... sub2=http://... sub3=http://...`
* explicit subtitles langauge : `sub=en,http://...`
