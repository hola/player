# [Hola Media Player API](https://hola.org/player)
An embeddable HTML/JS widget for sites to instantly stream torrents and magnets to the browser.

[Live demo](http://jsbin.com/faceyu/8/edit?html,output)
```html
<script src="//client.h-cdn.com/hola_player.js"></script>
<div class="hola-embedded-player"
  v="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4.torrent">
</div> 
```

## Features
* instant streaming
* protocols: torrent urls and magnet links
* embeddable as [script and div](https://github.com/hola/player/blob/master/README.md#script-and-div), [iframe](https://github.com/hola/player/blob/master/README.md#iframe) or [simple link](https://github.com/hola/player/blob/master/README.md#a-link) to video
* video formats: mp4, mkv, avi, wmv, divx, xvid, asf, asx, flv, m2v, m4p, m4v, mov,
  mpe, mpeg, mpg, mpg4, ogg, ogv, vob, webm, wvx
* browsers: Chrome, Firefox, IE, Opera
* operating systems: Windows XP and above, Android
* [subtitles](https://github.com/hola/player/blob/master/README.md#sublanguage_codeencodingurl): srt, vtt, and zip packaging
* [posters](https://github.com/hola/player/blob/master/README.md#posterposter_url)
* seek/reposition
* no Hola watermark during video playing

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
<script src="//client.h-cdn.com/hola_player.js"></script>
<div class="hola-embedded-player"
  v="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4.torrent">
</div> 
```
[Live demo](http://jsbin.com/faceyu/8/edit?html,output)

### &lt;iframe&gt;
```html
<iframe width="770" height="500" frameborder="0" allowfullscreen
  src="//hola.org/play_embed#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent">
</iframe>
```
[Live demo](http://jsbin.com/faceyu/6/edit?html,output)

### Make all torrent and magnet links pop up a media player upon hover
```html
<script src="//client.h-cdn.com/hola_player.js"></script>
<script>window.hola_player.init({links: 'hover'});</script>
```
[Live demo](http://jsbin.com/faceyu/9/edit?html,output)

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

### title=VIDEO_TITLE

* `title="Video Title"` - set the video title. if not specified,  auto-detect video title (from file name, torrent info)

### poster=POSTER_URL

* `poster=http://../poster.png` - url for the video poster image  
[Live demo](http://jsbin.com/wozipo/2/edit?html,output)
 
### autoplay=0|1 (coming soon)

* `autoplay=0` - default, don't auto start playing the video
* `autoplay=1` - auto start playing the video

### start=START_SEC (coming soon)

* `start=100` - start playing video 100 sec after video start
* `start=00:01:40` - start at 1 minute and 40 seconds (which is 100 seconds). Also 
possible 1:40 or 01:40

### duration=DURATION_SEC (coming soon)

* `duration=3600` - set the video duration to be used before the video information is retrieved
* `duration=01:00:00` - duration to 1 hour (which is 3600 seconds). Also  possible 1:00:00

### video_tag=0|1
* `video_tag=0` - open hola browser with VLC engine to play videos
* `video_tag=1` - default, in supporting browsers try playing MP4 videos in same browser using browser's `<video>` tag

### sub=LANGUAGE_CODE,ENCODING,URL
[Live demo](http://jsbin.com/vunela/7/edit?html,output)

* srt subtitles from http source: `sub=en,utf-8,http://../clip_subtitles.srt`<br>
[Live demo](http://jsbin.com/fosafa/6/edit?html,output)
* srt inside zip: `sub=en,utf-8,http://../clip_subtitles.zip`<br>
[Live demo](http://jsbin.com/gicuvi/3/edit?html,output)
* multiple subtitles: `sub1=en,utf-8,http://../clip_en.srt&sub2=fr,utf-8,http://.../clip_fr.srt&sub3=es,utf-8,http://.../clip_es.srt`<br>
[Live demo](http://jsbin.com/vunela/11/edit?html,output)
* subtitles json: `sub=json,http://../clip_subtitles.json`<br>
[Live demo](http://jsbin.com/hohuge/3/edit?html,output) (with custom encoding and language) and [file example](https://raw.githubusercontent.com/hola/player/master/res/subs.json)
* force subtitles encoding: `sub=en,utf8,http://.../clip.srt` or `sub=es,latin-1,http://.../clip.srt`.<br>
[Live demo](http://jsbin.com/fosafa/3/edit?html,output)

Language codes: two- ([ISO code table](http://www.w3schools.com/tags/ref_language_codes.asp))
or four-letter (with region according to [IETF](https://en.wikipedia.org/wiki/IETF_language_tag))
language code. Examples: `en`, `en-US`, `pt-BR`

Encoding: subtitles file encoding according to
[WHATWG encodings list](https://encoding.spec.whatwg.org/#names-and-labels).
Examples: `utf-8`, `cp1251`

Supported formats: `srt`, `vtt`, and `zip` packaging.

### sub_default=on|off|URL
* `sub_default=on` - default, automatic selection of subtitles (use previous user selection, default to browser locale).
[Live demo](http://jsbin.com/hegefe/2/edit?html,output)
* `sub_default=off` - subtitles off. User needs to enable them <br>
[Live demo](http://jsbin.com/fosafa/8/edit?html,output)
* `sub_default=en` - explicit subtitle language.<br>
  If there are multiple subtitles in this language, the first one will be selected.<br>
[Live demo](http://jsbin.com/vunela/14/edit?html,output)
* `sub_default=http://.../clip.srt` - select a specific subtitles by default.<br>
  The URL needs to be the same URL previously provided to `sub=...`.<br>
[Live demo](http://jsbin.com/vunela/15/edit?html,output)

### sub_transparent=0|1 

* `sub_transparent=0` - subtitles with black background. <br>
[Live demo](http://jsbin.com/tohetu/2/edit?html,output)
* `sub_transparent=1` - default, subtitles with transparent background (only supported on `<video>` tag).<br>
[Live demo](http://jsbin.com/dusole/2/edit?html,output)

When playing video with Hola Browser, which uses VLC rendering engine, this setting is has no effect: it is always `sub_transparent=0`,
due to technical limitations of VLC module.

### file_select=NUMBER

* default - the largest file in the torrent is selected for playing.
* `file_select=3` - select the 4th file (`NUMBER` is 0 based index) <br>
[Live demo](http://jsbin.com/hegefe/edit?html,output)

## Reporting bugs

How to report an issue/bug with Hola Media Player:

* In order to narrow the scope of the bug, please reproduce it with one of our above JSBin live samples.
* If it does not reproduce in any of the samples, modify the relevant sample in JSBin, in a way that reproduces the problem you have.
* [Open an issue](//github.com/hola/player/issues) and include in it the link to JSBin that reproduces the problem, with an explanation of how to reproduce it, along with the exact browser version.

This will give us a systematic reproduction and will allow us to debug and solve the bug faster.

Feel free to also open issues with suggestions for improvement, or feature requests!

### Known open issues

* ~~WIN10 - MP4 opens in Hola Browser.<br>
  Solved: 26-Aug-2015~~
* ~~junk messages in developer console `GET chrome-extension://.../icon.png net::ERR_FAILED`.<br>
  Solved: 1-Sep-2015~~
* ~~Subtitles default size too small.<br>
  Solved: 1-Sep-2015~~
* ~~Choosing subtitles does not display the selected language [issue #20](https://github.com/hola/player/issues/20).<br>
  Solved: 27-Sep-2015~~
* ~~Setting Subtitles does not working [issue #25](https://github.com/hola/player/issues/25).<br>
  Solved: 7-Oct-2015~~
* ~~Implement `sub_transparent=1` support when using `<video>` tag.<br>
  Solved: 7-Oct-2015~~
* ~~The player don't load the subtitles with appropriated encoding [Issue #5](https://github.com/hola/player/issues/5).<br>
  Solved: 12-Oct-2015~~
* ~~`file_select=...` - Ability to select which file in the torrent to use [Issue #2](https://github.com/hola/player/issues/2).<br>
  Solved: 20-Oct-2015~~
* No way to disable subtitles embedded into MKV files.<br>
  Target fix date: 25-Oct-2015
* embedding inside https pages does not work [Issue #19](https://github.com/hola/player/issues/19).<br>
  Target fix date: 26-Oct-2015
* Embed not correctly identify the mobile [Issue #22](https://github.com/hola/player/issues/22).<br> 
  Target fix date: 27-Oct-2015
* Select an audio track in a dual audio mkv [Issue #2](https://github.com/hola/player/issues/2).<br>
  Target fix date: 29-Oct-2015
* Subtitles for Android [Issue #17] (https://github.com/hola/player/issues/17).<br>
  Target fix date: 1-Nov-2015
* In Firefox and Hola Browser, in full screen, some videos have blue artifacts at the top part of the screen.<br>
  Target fix date: 18-Nov-2015
