# JW Player Integration
When migrating from JW Player (or other player) to Hola Player, you may want to do it step by step.
It is possible to support both JW Player and Hola Player on the same page, enabling Hola Player just for a subset of platform (eg. chrome windows).

## Before you start
- If you block requests depending on the `Referer` header, make sure to whitelist hola.org
  All the requests will have `Reffer` set to `http://hola.org/be_mp_popover?rc=1427206453284`

### Example JW Player/Hola Player
- Load hola script //hola.org/play_loader.js
- Integrate the code below in your site.
- The code below assumes jquery is used. The code must be called after jquery is loaded
- The following html elements are used to start playing the video
  `#player_display_button` and `.jwpreview.jwbestfit`
- The video to play is taken from global `config.file`
- Video title is taken from the text of `.videotitle span` (or from video file name)
- Set `use_hola` to toggle loading Hola Player or JW Player
- Set `plugin_url` to load plugins from another source

#### Static loading of play_loader.js (preferred)
```html
<script src="//hola.org/play_loader.js"></script>
```
#### Dynamic loading of play_loader.js
Note: only load play_loader.js once (either static or dynamic)
```js
$('<script>', {src: '//hola.org/play_loader.js'}).appendTo('body')
```
#### Integrate code below
```js
function hola_player_init(){
    // XXX: set browser to enable hola player on specific browser
    // (set browsers = [] to use hola on all compatible browser
    // to enable only on speicfic browsers use:
    // ['chrome', 'firefox'] or ['chrome windows', 'firefox windows'])
    var browsers = [];
    if (!window.hola_compatible_browser ||
        !window.hola_compatible_browser(browsers))
    {
        return;
    }
    var $container = $('<div>').hide().appendTo($('body'))
    .attr('style', 'position: absolute; z-index: 1000; '+
        'width: 100%; height: 100%; left: 50%; top: 50%');
    $('#player_display_button, .jwpreview.jwbestfit')
    .click(function(event){
        event.preventDefault();
        event.stopPropagation();
        $('#player_display').hide();
        // XXX: change opt values
        // v: full url of video to play
        // title: video title
        // pluign: full url of the subtitles plugin
        // container: the html element were to put the player
        // save_bandwidth: set to use hola peer network to save bandwidth
        window.hola_load_player({
            v: config.file,
            title: $($('.videotitle span')[0]).text(),
            subtitles: config.tracks,
            plugin_url: location.protocol+'//'+location.host+
                '/assets/js/hl_plugin.json',
            container: $container,
            save_bandwidth: true});
    });
    // XXX: add code to handle player events
    window.addEventListener('message', function(e){
        if (!e.data || !e.data.id)
            return;
        if (!/hola_vjs\..*/.test(e.data.id))
            return;
    });
}

function init_timer(){
    if (!$('#player_display_button') || !$('#player_display_button')[0]
        || !$('.jwpreview.jwbestfit') || !$('.jwpreview.jwbestfit')[0])
    {
        setTimeout(init_timer, 250);
        return;
    }
    hola_player_init();
}

init_timer();
```

### hola_load_player(opt)
Use hola_load_player to start the hola player.  
Options:
#### `v`, string
The video to play (full url)
#### `title`, string
The title for the video
#### `subtitles` - array
Set subtitles to use for the video. eg:  
`{subtitles: [{file: 'http://xxx/subtitle.srt', label: 'English', default: true}]`
#### `plugin_url`, string
The url for the plugin to use to automatically download subtitles and video poster
#### `container`, string/dom element/jquery element
The dom element where the player will be inserted
#### `save_bandwidth`, true/false
Set to use hola peer network to save bandwidth
### `player_type`, html5/flash
Set player type, default is html5
