# spatcher

![Made with VHS](https://vhs.charm.sh/vhs-3ZBx1vxRvJZMPnjFFFjnu5.gif)

## Motivation

The company I work for uses Swashbuckle to generate OpenAPI docs for our ASP.Net applications, but it fails to generate usable output in combintation with OData.
In order to offer our customers a usable documentation I created this tool to create patches for the JSON swagger file as we need them.

## Install

You can install the tool globally using npm:

```sh
npm config set @flexwie:registry https://npm.pkg.github.com
npm i -g @flexwie/spatch
```

This will also install the `spatch` library globally so you can use the imports in your patches.

## Usage
