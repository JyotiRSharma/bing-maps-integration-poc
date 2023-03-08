# bing-maps-integration-poc
A React POC to integrate bing maps routing

## Installation:
```bash
git clone https://github.com/JyotiRSharma/bing-maps-integration-poc
```

Doesn't require npm as all files are downloaded from respective CDNs.

Paste your bing maps API key in the bing api script to access bing maps:

```html
<script src='https://www.bing.com/api/maps/mapcontrol?key=__BingAPIKEY__&callback=loadMapScenario'></script>
```

## More customizations
Use Bing maps [official docs](https://www.bing.com/api/maps/sdkrelease/mapcontrol/isdk/directionscreatetruckroute#HTML) to add more features to your maps.

## Contribution Guidelines
Whenever working on a new feature
- Please pull dev branchto have latest stable code
- Create a new ```feature-branch```
- Aftter feature is completed and dev tested
- Perform rebase from dev branch

```bash
git rebase dev
```
- Raise a PR to dev branch and fix conflicts if any via

```bash
git pull origin dev
```
- After PR is approved it will be merged into dev

