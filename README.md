# oreqs packages

oreqs is query strings parser. This is my [qs](https://github.com/ljharb/qs) impl.

oreqs packages include two packages, oreqs lib and current qs test code. I implement oreqs as pass test of qs.

## motivation

[qs](https://github.com/ljharb/qs) has so many functions, but I don't need most. I want small one. And I want it as tree shakable one.

## what is query string

[Query string](https://en.wikipedia.org/wiki/Query_string) is a part of a uniform resource locator (URL) that assigns values to specified parameters.

### schema

Every HTTP [URL](https://en.wikipedia.org/wiki/URL) conforms to the syntax of a generic URI.

```
URI = scheme:[//authority]path[?query][#fragment]
```

But the query string's syntax is not well defined. Sometimes can use `;` not `&`

### encoding

URL's query string should be Percent-encoded. The rule is [here](Percent-encoding). The decoder is given [decodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent).
