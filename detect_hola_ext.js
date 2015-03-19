// use check_hola_ext_installed() to detect if hola extension is installed or not
function check_hola_ext_installed(found_cb, not_foun_cb){
    var link = window.chrome ?
        'chrome-extension://gkojfkhlekighikafcpjkiklfbnlmeio/icon.png' :
        'resource://jid1-4p0kohsjxu1qgg-at-jetpack/hola_firefox_ext/'+
        'data/img/logo.png';
    $("<img/>").load(found_cb).error(not_foun_cb)
    .attr("src", link+'?rc='+Date.now());
}

// usage example:
check_hola_ext_installed(function(){ console.log('hola found'); },
    function(){ console.log('hola not found'); });
