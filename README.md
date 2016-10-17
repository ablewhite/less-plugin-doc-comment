# plugin-less-no-comment
Remove block comments

It removes `/* this comment */` but keeps `/*! this comment */`

## Usage
```
  lessc --no-comment file.less
```

## This version
Updated to include support for `/***! doc comment ***/`-style comments
