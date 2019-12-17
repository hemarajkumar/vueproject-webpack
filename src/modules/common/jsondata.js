
var navmenu = {"menulist":[
  {"Title":"All Products",  "category":"viewall", "id":"viewall", "href": "viewall"},
  {"Title":"Mens Wear", "category":"menswear", "id":"cat01", "href": "menswear"},
  {"Title":"Womens Wear", "category":"womenswear",  "id":"cat02", "href": "womenswear"},
  {"Title":"Hand Bages", "category":"handbags", "id":"cat03", "href": "handbags"},
  {"Title":"Accessories", "category":"accessories", "id":"cat04", "href": "accessories"}
]}


var carouselList = {"lists":[
  {
  "Title":"Title 1",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 2",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 3",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 4",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 5",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 6",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 7",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 8",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 9",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 10",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]}
]}

module.exports = {
  menu: navmenu,
  carousel: carouselList
}
/*
var catTitle = {"cattitle":[
  {"Title":"Produts Category....",  "Description": "Explore our products ...", "id":"viewall"},
  {"Title":"Mens Wear Category ....", "Description": "Explore our Mens Wear products ...", "id":"cat01"},
  {"Title":"Womens Wear Category ....", "Description": "Explore our Womens Wear products ...", "id":"cat02"},
  {"Title":"Hand Bages Category ....", "Description": "Explore our Hand Bags ...", "id":"cat03"},
  {"Title":"Accessories Category ....", "Description": "Explore our Accessories  ...", "id":"cat04"}
]}

var productAdded=[]


var productlList = {"lists":[
{
"Title":"Mens Wear",
"id":"cat01",
"list":[
{"id":"cat01_01", "name":"Shirt 1", "price":"15.00", "wasprice":"18.00", "image":"dist/images/shirt1.jpg",
  "roundelImg":"dist/images/roundelbg.png", "color":"white", "quantity":"10"},
{"id":"cat01_02", "name":"Shirt 2", "price":"18.00", "image":"dist/images/shirt2.jpg", "color":"blue", "quantity":"0" },
{"id":"cat01_03", "name":"Shirt 3", "price":"12.00", "image":"dist/images/shirt3.jpg", "color":"blue", "quantity":"5"},
{"id":"cat01_04", "name":"Shirt 4", "price":"34.00", "wasprice":"42.00", "image":"dist/images/shirt5.jpg",
  "color":"blue", "roundelImg":"dist/images/roundelbg.png", "quantity":"10"},
{"id":"cat01_05", "name":"Shirt 5", "price":"30.00", "image":"dist/images/shirt6.jpg", "color":"pink", "quantity":"0"},
{"id":"cat01_06", "name":"Shirt 6", "price":"40.00", "image":"dist/images/shirt7.jpg", "color":"green", "quantity":"10"},
{"id":"cat01_07", "name":"Shirt 7", "price":"30.00", "wasprice":"40.00", "image":"dist/images/shirt8.jpg",
  "color":"black", "roundelImg":"dist/images/roundelbg.png", "quantity":"10"},
{"id":"cat01_08", "name":"Shirt 8", "price":"42.00", "image":"dist/images/shirt9.jpg", "color":"black", "quantity":"1"},
{"id":"cat01_09", "name":"Shirt 10", "price":"10.00", "wasprice":"15.00", "image":"dist/images/shirt11.jpg", "color":"black", "quantity":"10"},
{"id":"cat01_10", "name":"Shirt 9", "price":"20.00", "image":"dist/images/shirt10.jpg", "color":"red", "quantity":"10"},
{"id":"cat01_11", "name":"Shirt 11", "price":"14.00", "image":"dist/images/shirt12.jpg", "color":"red", "quantity":"10"},
{"id":"cat01_12", "name":"Shirt 12", "price":"24.00", "image":"dist/images/shirt13.jpg", "color":"red", "quantity":"10"},
{"id":"cat01_13", "name":"Shirt 13", "price":"35.00", "wasprice":"44.00", "image":"dist/images/shirt14.jpg",
  "color":"red", "roundelImg":"dist/images/roundelbg.png", "quantity":"10"},
{"id":"cat01_14", "name":"Shirt 14", "price":"22.00", "wasprice":"30.00", "image":"dist/images/shirt19.jpg",
  "color":"yellow", "quantity":"10"},
{"id":"cat01_15", "name":"Shirt 15", "price":"28.00", "image":"dist/images/shirt20.jpg", "color":"yellow",
  "roundelImg":"dist/images/roundelbg.png", "quantity":"0"},
{"id":"cat01_16", "name":"Shirt 16", "price":"26.00", "wasprice":"32.00", "image":"dist/images/shirt21.jpg",
 "color":"yellow", "quantity":"10"},
{"id":"cat01_17", "name":"Shirt 17", "price":"21.00", "image":"dist/images/shirt17.jpg", "color":"blue", "quantity":"10"},
{"id":"cat01_18", "name":"Shirt 18", "price":"30.00", "image":"dist/images/shirt22.jpg", "color":"black", "quantity":"10"}
]},
{
"Title":"Womens Wear",
"id":"cat02",
"list":[
{"id":"cat02_02", "name":"Womens wear 1", "price":"29.00", "image":"dist/images/clothing2.jpg", "color":"blue", "quantity":"10"},
{"id":"cat02_03", "name":"Womens wear 2", "price":"19.00", "wasprice":"38.00", "image":"dist/images/clothing3.jpg",
 "color":"red", "quantity":"0"}
]},
{
"Title":"Hand Bages",
"id":"cat03",
"list":[
{"id":"cat03_01", "name":"Hand Bag 1", "price":"20.00", "wasprice":"32.00", "image":"dist/images/handbags1.jpg",
 "color":"grey", "quantity":"10"},
{"id":"cat03_02", "name":"Hand Bag 2", "price":"30.00", "wasprice":"45.00", "image":"dist/images/handbags2.jpg",
 "roundelImg":"dist/images/roundelbg.png", "color":"blue", "quantity":"0"},
{"id":"cat03_03", "name":"Hand Bag 3", "price":"30.00", "image":"dist/images/handbags3.jpg", "color":"black", "quantity":"10"}
]},
{
"Title":"Accessories",
"id":"cat04",
"list":[
{"id":"cat04_01", "name":"Accessories 1", "price":"49.99", "wasprice":"60.00", "image":"dist/images/accessories1.jpg",
 "color":"brown", "quantity":"10"},
{"id":"cat04_02", "name":"Accessories 2", "price":"39.99", "image":"dist/images/accessories2.jpg", "color":"orange", "quantity":"0"},
{"id":"cat04_03", "name":"Accessories 3", "price":"20.00", "wasprice":"30.00", "image":"dist/images/accessories3.jpg",
 "roundelImg":"dist/images/roundelbg.png", "color":"brown", "quantity":"10"},
{"id":"cat04_04", "name":"Accessories 3", "price":"22.00", "image":"dist/images/accessories4.jpg", "color":"blue", "quantity":"0"}
]}
]} 
}*/
