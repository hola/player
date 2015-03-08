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

### Plugin structure
- Hola plugin is described as a JSON object
- OPEN_VIDEO_TITLE - This variable is the video title (extracted from the the video meta data) and is available for your plugin as input. Use it to find subtitles for the current video.
- "parse" - A plugin MAY contain a "parse" section for getting more variables (example, you can run regex on the page html to find your video id and then use that video id to fetch subtitles for the video identified by the video id).
- "fetch" - A plugin MUST contain a "fetch" section. The fetch section defines the differnt ways to get subtitles for the current video.

### Example: Fetch subtitles with XML-RPC
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
					"vid": "{OPEN_VIDEO_ID}"
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

### Example: Fetch subtitles with JSON
```json
{
	"name": "Subtitles example for json",
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
			"priority": 2,
			"json": "http://hola.org/player/api/vid{OPEN_VIDEO_ID}",
			"response": {
				"path": "subs.vid{OPEN_VIDEO_ID}.*.*",
				"subtitles": {
					"locale": "..",
					"host": "hola.org",
					"zip_link": "url"
				}
			}
		}
	]
}
```

### Parse
The parse section is an array of parsers. Each parser is used to extract variables that can be used to match the current video.  
Possible inputs:
* OPEN_VIDEO_TITLE - The title of the current video
* HTML selector - Select HTML elements from the current page html and then get new variables from the elements attirbute or innerHTML

#### Example: Parse video title and extract publish year
```json
{
	"parse": [
		{
			"regex": {
				"OPEN_VIDEO_TITLE": "\\b(\\d{4})\\b",
				"set": {
					"YEAR": "{1}"
				}
			}
		}
	]
}
```

#### Example: Parse page HTML and extract video id
``` json
{
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
    ]
}
```

### Publish your plugin
To publish your plugin:
* Create a share link in [plugins](http://hola.org/access/my/settings#plugins) tab in your hola settings.
* Publish your plugin link on the web (your site, your github page, other)
* Email [api@hola.org](mailto:api@hola.org) your site link and we will publish it in our plugin developers section

