# BBC Services

JSON description of the BBC broadcasting services. It includes TV and radios.
It tends to be done in a way that would be useable and consistent for any broadcasting company.

This is a *work in progress* prototype.
With a secret wish for a global widespread.

## Why?

Because actually there is **no consistent public API** to retrieve either existing channels and/or relevant data
(like starting/ending broadcasting hours).

Because we need **something simple** to *use*, to *update* and to *deploy*.

Because it is a **common need** for every project.

## Philosophy

It MUST work for backend projects.

It MUST work for frontend projects.

It MUST NOT require more than a single line of code to include the content.

It MUST be let you the opportunity to upgrade safely.

## Install

> *Notice*: none of these methods work yet.

By either using one of this known working methods:

### `npm` Module

```bash
npm install --save https://github.com/oncletom/bbc-services.git
```

### `bower` component

```bash
bower install --save oncletom/bbc-services
```


### `git` submodule

```
git submodule add https://github.com/oncletom/bbc-services.git <path of your vendor data>
```

## Usage

> *Notice*: none of these methods work yet.

### Node.js Module

```javascript
var services = require('bbc-services');

console.dir(services.bbc_one);
```

### Bundled Testable HTTP API

Easy way to expode data for your local projects. Better than a *Lorem Ipsum*, real data!

```bash
npm start
```

Then hit a result:

```bash
curl -XGET http://localhost:9000/services/bbc_one.json
```

