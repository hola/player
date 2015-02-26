# Plugins

The Hola Player has plugin api for extending its functionality.
The following plugins are supported:
* Fetching subtitles (under development)
* Fetching poster (SOON)
* Fetching video description (SOON)
* More to come... Please submit requests for missing api.

### Subtitles XML-RPC plugin (subs-xmlrpc)
```json
{
	"type": "subs-xmlrpc",
	"url": "http://hola.org/player/api/xml-rpc",
	"user_agent": "HolaTestUserAgent",
	"user": "",
	"password": "",
	"OPEN_VIDEO_ID.regex": "\\<a .*href=\".*hola\\.org.*/vid([0-9]+\\b)",
	"search_subtitles": {
		"by_id": {
			"vid": "{OPEN_VIDEO_ID}"
		},
		"by_free_text": {
			"query": "{OPEN_VIDEO_TITLE}"
		}
	}
}
```



