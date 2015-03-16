# JW Player Integration
When migrating from JW Player (or other player) to Hola Player, you may want to do it step by step.
It is possible to support both JW Player and Hola Player on the same page, enabling Hola Player just for a subset of platform (eg. chrome windows).

### Example JW Player/Hola Player
- The code below assumes jquery is used. The code must be called after jquery is loaded
- The following html elements are used to start playing the video
  `#player_display_button` and `.jwpreview.jwbestfit`
- The video to play is taken from global `config.file`
- Video title is taken from the text of `.videotitle span` (or from video file name)
- Set `use_hola` to toggle loading Hola Player to JW Player
- Set `plugin_url` to load plugins from another source

```js
var plugin;
function start_play(v){
    if (!plugin)
        console.warn('starting player without plugin - no subtitles');
    var title = $($('.videotitle span')[0]).text()||'Video Title';
    var player_url = '//hola.org/be_mp_popover#v='+encodeURIComponent(v)+
        '&title='+encodeURIComponent(title)+'&responsive=1'
        '&config='+encodeURIComponent(JSON.stringify({plugin: plugin}));
    var $div = $('<div>');
    $div.attr('style', 'position: absolute; z-index: 1000; width: 100%; '+
        'height: 100%; left: 50%; top: 50%');
    var $frame = $('<iframe>', {src: player_url, width: '100%', height: '100%',
        frameborder: 0, allowfullscreen: 'y'}).attr('is_embed', 1);
    $frame.attr('style', 'position: relative; width: 100%; height: 100%; '+
        'left: -50%; top: -50%');
    $frame.appendTo($div);
    $div.appendTo($('body'));
}

function get_plugin(){
    // XXX: set plugin_url to fetch plugin for subtitles
    var plugin_url = '/assets/js/hl_plugin.json';
    $.ajax({url: plugin_url, dataType: 'json'})
    .done(function(data){ plugin = data; })
    .fail(function(xhr, status, err){
        console.error('failed get_plugin '+status+' '+plugin_url);
    });
}

function load_player(){
    var is_chrome = window.chrome;
    var is_windows = /\bwindows\b/i.test(navigator.userAgent);
    // XXX: set use_hola to enable hola player
    var use_hola = is_windows && is_chrome;
    if (!use_hola)
        return;
    var v = config.file;
    $('#player_display_button, .jwpreview.jwbestfit')
    .click(function(event){
        event.preventDefault();
        event.stopPropagation();
        $('#player_display').hide();
        start_play(v);
    });
    window.addEventListener('message', function(e){
        if (!e.data || !e.data.id)
            return;
        if (!/hola_vjs\..*/.test(e.data.id))
            return;
        console.log('got '+e.data.id);
    });
    get_plugin();
}

function init_timer(){
    if (!$ || !$('#player_display_button') || !$('#player_display_button')[0]
        || !$('.jwpreview.jwbestfit') || !$('.jwpreview.jwbestfit')[0])
    {
        setTimeout(init_timer, 250);
        return;
    }
    load_player();
}

init_timer();
```
