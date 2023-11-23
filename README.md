# Node-ts-multiplication-app

## Description

This is a simple application to generate multiplication tables

## Installation

```
npm install
```

## Usage
    
 ```
 node app --help

 ```


## Options

```    
    --help     Show help                                             [boolean]
    --version  Show version number                                   [boolean]
-b, --base     Base of multiplication table                [number] [required]
-l, --limit    Limit of multiplication table              [number] [default: 10]
-s, --show    Show table in console                 [boolean] [default: false]
-n, --name    Name of file to save table              [string] [default: "multiplication-table"]
-d, --destination  Destination of file to save table  [string] [default: "./outputs"]
```

## Examples

```
node app -b 100 -l 10 -s -d ./your-destination -n your-table-name

```

# Output: your-table-name.txt

```
 100 x 1 = 100
 100 x 2 = 200
 100 x 3 = 300
 100 x 4 = 400
 100 x 5 = 500
 100 x 6 = 600
 100 x 7 = 700
 100 x 8 = 800
 100 x 9 = 900
 100 x 10 = 1000

```


    