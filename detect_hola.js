// use check_hola_ext_installed() to detect if hola extension is installed
// or not
function check_hola_ext_installed(found_cb, not_foun_cb){
    var link = window.chrome ?
        'chrome-extension://gkojfkhlekighikafcpjkiklfbnlmeio/icon.png' :
        'resource://jid1-4p0kohsjxu1qgg-at-jetpack/hola_firefox_ext/'+
        'data/img/logo.png';
    return $("<img/>").load(found_cb).error(not_foun_cb)
    .attr("src", link+'?rc='+Date.now());
}

// use check_hola_svc_installed to detect if hola svc (torrent engine) is
// installed or not
function check_hola_svc_installed(found_cb, not_foun_cb){
     return $.ajax({dataType: 'json', cache: false,
        url: 'http://127.0.0.1:6853/callback.json'})
     .done(found_cb).fail(not_foun_cb);
}

// usage example: check_hola_ext_installed
check_hola_ext_installed(function(){ console.log('hola ext found'); },
    function(){ console.log('hola ext not found'); });

// usage example: check_hola_svc_installed
check_hola_svc_installed(function(){ console.log('hola svc found'); },
    function(){ console.log('hola svc not found'); });

