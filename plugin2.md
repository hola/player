# Plugin New API (SOON TO BE RELEASED)

The Hola Player has plugin api for extending its functionality.
The following plugins are supported:
* Fetching subtitles
* Fetching poster (SOON)
* Search (SOON)
* ... want more? submit requests for missing api!

### How to develop your first plugin
To start plugin development:
* Go to your hola settings [plugins](http://hola.org/access/my/settings#plugins) tab
* Click "Enter development mode"
* Create a new plugin

### Plugin structure
- Hola plugin is described as a JSON object
- `OPEN_VIDEO_TITLE` - This variable is the video title (extracted from the the video meta data) and is available for your plugin as input. Use it to find subtitles for the current video.
- `parse` - A plugin MAY contain a `parse` section for getting more variables (example, you can run regex on the page html to find your video id and then use that video id to fetch subtitles for the video identified by the video id).
- `fetch` - A plugin MUST contain a `fetch` section. The `fetch` section defines the differnt ways to get subtitles for the current video.

### Example: Fetch subtitles with XML-RPC

`parse` section scans for `<a>` elements with `href` to `hola.org`, and with regex matching extracts the variable `{OPEN_VIDEO_ID}`.
If `{OPEN_VIDEO_ID}` is set, `fetch` will then send XML-RPC request to find subtitles by the video id, and use the responses for subtitles.
If there is no {OPEN_VIDEO_ID}, `fetch` will send XML-RPC requests to find subtitles by the video title, and use the responses for subtitles.  
[Import Example](http://hola.org/hola_player_plugin?plugin=%7B%22name%22%3A%22Subtitles%20example%20for%20xml-rpc%22%2C%22author%22%3A%22John%20Smith%22%2C%22parse%22%3A%5B%7B%22selector%22%3A%22a%5Bhref*%3D%5C%22hola.org%2F%5C%22%5D%22%2C%22regex%22%3A%7B%22attr.href%22%3A%22hola.org%2F.*%2Fvid(%5B0-9%5D%2B%5C%5Cb)%22%2C%22set%22%3A%7B%22OPEN_VIDEO_ID%22%3A%22%7B1%7D%22%7D%7D%7D%5D%2C%22fetch%22%3A%5B%7B%22priority%22%3A1%2C%22xml_rpc%22%3A%7B%22url%22%3A%22http%3A%2F%2Fhola.org%2Fplayer%2Fapi%2Fxml-rpc%22%2C%22user_agent%22%3A%22HolaTestUserAgent%22%7D%2C%22method%22%3A%22SearchSubtitles%22%2C%22args%22%3A%5B%7B%22vid%22%3A%22%7BOPEN_VIDEO_ID%7D%22%7D%5D%2C%22response%22%3A%7B%22subtitles%22%3A%7B%22locale%22%3A%22ISO639%22%2C%22display_name%22%3A%22SubFileName%22%2C%22zip_link%22%3A%22ZipDownloadLink%22%7D%7D%7D%2C%7B%22priority%22%3A0%2C%22xml_rpc%22%3A%7B%22url%22%3A%22http%3A%2F%2Fhola.org%2Fplayer%2Fapi%2Fxml-rpc%22%2C%22user_agent%22%3A%22HolaTestUserAgent%22%7D%2C%22method%22%3A%22SearchSubtitles%22%2C%22args%22%3A%5B%7B%22query%22%3A%22%7BOPEN_VIDEO_TITLE%7D%22%7D%5D%2C%22response%22%3A%7B%22subtitles%22%3A%7B%22locale%22%3A%5B%22ISO639%22%2C%22SubLanguageID%22%2C%22LanguageName%22%5D%2C%22display_name%22%3A%22SubFileName%22%2C%22zip_link%22%3A%22ZipDownloadLink%22%7D%7D%7D%5D%7D)  
[Live demo] (http://hola.org/publishers) (you need to import the example before testing)

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
`parse` section scans for `<a>` elements with `href` to `hola.org`, and with regex matching extracts the variable `{OPEN_VIDEO_ID}`.
If `{OPEN_VIDEO_ID}` is set, `fetch` will then send `ajax` request and parse response as `JSON` to find subtitles by the video id, and use the responses for subtitles.

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

### `parse`
The `parse` section is an array of parsers. Each parser is used to extract variables that will be used to match the current video.  
Possible inputs:
* OPEN_VIDEO_TITLE - The title of the current video
* HTML selector - Select HTML elements from the current page html and then get new variables from the elements attirbute or innerHTML

#### Example: Parse video title and extract publish year

Extracts 4 digit year from the video title, and sets the `{YEAR}` variable for later use by the `fetch` section.
`{1}` is the regex matching result on the video title.

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

Select all `<a>` elements with link to `hola.org` and regex match the element's href attribute. If matched, set `OPEN_VIDEO_ID`
to regex result `{1}`.
Later on `{OPEN_VIDEO_ID}` variable can be used in `fetch` section.

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
* Send us a pull request we will publish it in our plugin developers section

