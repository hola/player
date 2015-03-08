# Plugin New API (SOON TO BE RELEASED)

The Hola Player has plugin api for extending its functionality.
The following plugins are supported:
* Fetching subtitles (see below)
* Fetching poster (SOON)
* Search (SOON)
* More to come... Please submit requests for missing api.

### How to develop your first plugin
To start plugin development:
* Go to your hola settings [plugins](http://hola.org/access/my/settings#plugins) tab
* Click "Enter development mode"
* Create a new plugin

### XML-RPC Protocol
```json
{
	"name": "Subtitles example for xml-rpc",
	"author": "John Smith",
	"parse": [
		{
			"selector": "a[href*=\"hola.org/\"]",
			"regex": {
				"attr.href": "hola.org/.*/vid([0-9]+\\b)",
				"set": {
					"OPEN_VIDEO_ID": "{1}"
				}
			}
		}
	],
	"fetch": [
		{
			"priority": 1,
			"xml_rpc": {
				"url": "http://hola.org/player/api/xml-rpc",
				"user_agent": "HolaTestUserAgent"
			},
			"method": "SearchSubtitles",
			"args": [
				{
					"vid": "{OPEN_VIDE_ID}"
				}
			],
			"response": {
				"subtitles": {
					"locale": "ISO639",
					"display_name": "SubFileName",
					"zip_link": "ZipDownloadLink"
				}
			}
		},
		{
			"priority": 0,
			"xml_rpc": {
				"url": "http://hola.org/player/api/xml-rpc",
				"user_agent": "HolaTestUserAgent"
			},
			"method": "SearchSubtitles",
			"args": [
				{
					"query": "{OPEN_VIDEO_TITLE}"
				}
			],
			"response": {
				"subtitles": {
					"locale": [
						"ISO639",
						"SubLanguageID",
						"LanguageName"
					],
					"display_name": "SubFileName",
					"zip_link": "ZipDownloadLink"
				}
			}
		}
	]
}
```

### Publish your plugin
To publish your plugin:
* Create a share link in [plugins](http://hola.org/access/my/settings#plugins) tab in your hola settings.
* Publish your plugin link on the web (your site, your github page, other)
* Email [api@hola.org](mailto:api@hola.org) your site link and we will publish it in our plugin developers section

