# Hola Media Player API
[Hola Media Player](https://hola.org/player) is an HTML5 Media Player that streams
HTTP and BITTORRENT files to browsers, and plays many formats including MP4, MKV, and AVI.

Use this API to add Media to your web pages:
* link to the media
* embed it in the page with &lt;script&gt; and &lt;div&gt; tag
* embed it in the page with &lt;iframe&gt;
* make all torrent and magent links popup a player upon hover

## Example: &lt;script&gt; and &lt;div&gt;
```
<script src="//hola.org/play_page.js"></script>
<div class="hola-embedded-player" v="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4.torrent"></div> 
```
[Live demo](http://jsbin.com/faceyu/8/)

## Example: &lt;iframe&gt;
```
<iframe width="770" height="500" frameborder="0" allowfullscreen src="//hola.org/play_embed#v=http%3A%2F%2Fdistribution.bbb3d.renderfarming.net%2Fvideo%2Fmp4%2Fbbb_sunflower_1080p_30fps_normal.mp4.torrent"></iframe>
```
[Live demo](http://jsbin.com/faceyu/6/)

## Example: torrent and magent links popup a player upon hover
```
<script src="//hola.org/play_page.js"></script>
<script>window.hola_player.init({links: 'hover'});</script>
```
[Live demo](http://jsbin.com/faceyu/9/)
