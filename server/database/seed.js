const Items = require('./database.js');
const dataB = require('./index.js');
const mongoose = require('mongoose');




let mockData = [
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar1.webp",
        "name": "Superstar Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar2.webp",
        "name": "Superstar Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1_V2.webp",
        "name": "NMD_R1 V2 Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SAMBAROSE1.webp",
        "name": "SAMBAROSE Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$43",
        "sale_price": "$43",
        "crossed_price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Continental_Vulc.webp",
        "name": "Continental Vulc Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$33",
        "sale_price": "$33",
        "crossed_price": "$65"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Samba_OG1.webp",
        "name": "Samba OG Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Stan_Smith1.webp",
        "name": "Stan Smith Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Falcon1.webp",
        "name": "Falcon Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$70",
        "sale_price": "$70",
        "crossed_price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Falcon2.webp",
        "name": "Falcon Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$80",
        "sale_price": "$80",
        "crossed_price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Continental_80-1.webp",
        "name": "Continental 80 Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SAMBAROSE2.webp",
        "name": "SAMBAROSE Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-1.webp",
        "name": "NMD_R1 Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Rivalry_Low1.webp",
        "name": "Rivalry Low Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$40",
        "sale_price": "$40",
        "crossed_price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Swift_Run1.webp",
        "name": "Swift Run Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$43"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-2.webp",
        "name": "NMD_R1 Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Stan_Smith2.webp",
        "name": "Stan Smith Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Americana_Low1.webp",
        "name": "Americana Low Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$56",
        "sale_price": "$56",
        "crossed_price": "$70"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar3.webp",
        "name": "Superstar Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar4.webp",
        "name": "Superstar Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$51",
        "sale_price": "$51",
        "crossed_price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Falcon3.webp",
        "name": "Falcon Shoes",
        "type": "Women's Originals",
        "color": "Gray",
        "price": "$50",
        "sale_price": "$50",
        "crossed_price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/3MC_Vulc1.webp",
        "name": "3MC Vulc Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$62"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/3MC_Vulc2.webp",
        "name": "3MC Vulc Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$65"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Rivalry_Low2.webp",
        "name": "Rivalry Low Shoes",
        "type": "Women's Originals",
        "color": "Pink",
        "price": "$56",
        "sale_price": "$56",
        "crossed_price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-3.webp",
        "name": "NMD_R1 Shoes",
        "type": "Women's Originals",
        "color": "Gray",
        "price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Supercourt1.webp",
        "name": "Supercourt Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$63",
        "sale_price": "$63",
        "crossed_price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar5.webp",
        "name": "Superstar Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$40"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar6.webp",
        "name": "Superstar Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SAMBAROSE3.webp",
        "name": "SAMBAROSE Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$70",
        "sale_price": "$70",
        "crossed_price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/adidas_Sleek1.webp",
        "name": "adidas Sleek Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$64",
        "sale_price": "$64",
        "crossed_price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Samba_OG2.webp",
        "name": "Samba OG Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/3MC-1.webp",
        "name": "3MC Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$65"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar7.webp",
        "name": "Superstar Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Gazelle1.webp",
        "name": "Gazelle Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar8.webp",
        "name": "Superstar Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Samba_OG3.webp",
        "name": "Samba OG Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$38"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Swift_Run2.webp",
        "name": "Swift Run Shoes",
        "type": "Women's Originals",
        "color": "Pink",
        "price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Continental_80-2.webp",
        "name": "Continental 80 Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$56",
        "sale_price": "$56",
        "crossed_price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SAMBAROSE4.webp",
        "name": "SAMBAROSE Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$70",
        "sale_price": "$70",
        "crossed_price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Stan_Smith3.webp",
        "name": "Stan Smith Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar9.webp",
        "name": "Superstar Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Continental_80-3.webp",
        "name": "Continental 80 Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$64",
        "sale_price": "$64",
        "crossed_price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/X_PLR1.webp",
        "name": "X_PLR Shoes",
        "type": "Originals",
        "color": "Gray",
        "price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/LXCON1.jpg",
        "name": "LXCON Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$84",
        "sale_price": "$84",
        "crossed_price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Superstar_Metal_Toe1.webp",
        "name": "Superstar Metal Toe Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$110"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/adidas_Sleek2.webp",
        "name": "adidas Sleek Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/adidas_Sleek_Super1.webp",
        "name": "adidas Sleek Super Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-4.webp",
        "name": "NMD_R1 Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Nizza_Trefoil1.webp",
        "name": "Nizza Trefoil Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$42",
        "sale_price": "$42",
        "crossed_price": "$60"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Adilette1.webp",
        "name": "Adilette Slides",
        "type": "Women's Originals",
        "color": "White",
        "price": "$23",
        "sale_price": "$23",
        "crossed_price": "$45"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/U_Path_Run1.webp",
        "name": "U_Path Run Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Handball_Spezial1.webp",
        "name": "Handball Spezial Shoes",
        "type": "Originals",
        "color": "Blue",
        "price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-5.webp",
        "name": "NMD_R1 Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/OZWEEGO1.webp",
        "name": "OZWEEGO Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$84",
        "sale_price": "$84",
        "crossed_price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/3MC_Vulc3.webp",
        "name": "3MC Vulc Shoes",
        "type": "Originals",
        "color": "Gray",
        "price": "$46",
        "sale_price": "$46",
        "crossed_price": "$65"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/ZX_750-1.webp",
        "name": "ZX 750 HD Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Stan_Smith4.webp",
        "name": "Stan Smith Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar10.webp",
        "name": "Superstar Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Stan_Smith5.webp",
        "name": "Stan Smith Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$110"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Gazelle2.webp",
        "name": "Gazelle Shoes",
        "type": "Women's Originals",
        "color": "Brown",
        "price": "$72",
        "sale_price": "$72",
        "crossed_price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Coast_Star1.webp",
        "name": "Coast Star Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$35",
        "sale_price": "$35",
        "crossed_price": "$70"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SC_Premiere1.webp",
        "name": "SC Premiere Shoes",
        "type": "Women's Originals",
        "color": "Pink",
        "price": "$60",
        "sale_price": "$60",
        "crossed_price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/FYW_S-97-1.webp",
        "name": "FYW S-97 Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$70",
        "sale_price": "$70",
        "crossed_price": "$140"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Continental_80-4.webp",
        "name": "Continental 80 Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Nizza_Trefoil2.webp",
        "name": "Nizza Trefoil Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$42",
        "sale_price": "$42",
        "crossed_price": "$60"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Continental_80-5.webp",
        "name": "Continental 80 Shoes",
        "type": "Women's Originals",
        "color": "Pink",
        "price": "$50",
        "sale_price": "$50",
        "crossed_price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Top_Ten_Hi1.webp",
        "name": "Top Ten Hi Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/ZX_Flux1.webp",
        "name": "ZX Flux Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Adilette_Lite1.webp",
        "name": "Adilette Lite Slides",
        "type": "Women's Originals",
        "color": "Pink",
        "price": "$30"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Gazelle3.webp",
        "name": "Gazelle Shoes",
        "type": "Women's Originals",
        "color": "Purple",
        "price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Team_Court1.webp",
        "name": "Team Court Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$49",
        "sale_price": "$49",
        "crossed_price": "$70"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar11.webp",
        "name": "Superstar Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Nite_Jogger1.webp",
        "name": "Nite Jogger Shoes",
        "type": "Originals",
        "color": "Gray",
        "price": "$98",
        "sale_price": "$98",
        "crossed_price": "$140"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/X_PLR2.webp",
        "name": "X_PLR Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-6.webp",
        "name": "NMD_R1 Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Disney_Mickey_Mouse_Superstar1.webp",
        "name": "Disney Mickey Mouse Superstar Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar12.webp",
        "name": "Superstar Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Superstar_Laceless1.webp",
        "name": "Superstar Laceless Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Matchbreak_Super1.webp",
        "name": "Matchbreak Super Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$70"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SL_72-1.webp",
        "name": "SL 72 Shoes",
        "type": "Originals",
        "color": "Green",
        "price": "$63",
        "sale_price": "$63",
        "crossed_price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Supercourt_RX1.webp",
        "name": "Supercourt RX Shoes",
        "type": "Women's Originals",
        "color": "Gray",
        "price": "$84",
        "sale_price": "$84",
        "crossed_price": "$140"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/adidas_Sleek_Super2.webp",
        "name": "adidas Sleek Super Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$54",
        "sale_price": "$54",
        "crossed_price": "$90"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-7.webp",
        "name": "NMD_R1 Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$104",
        "sale_price": "$104",
        "crossed_price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Superstar_Bold_Women's1.webp",
        "name": "Superstar Bold Women's Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$110"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-8.webp",
        "name": "NMD_R1 Shoes",
        "type": "Women's Originals",
        "color": "Gray",
        "price": "$104",
        "sale_price": "$104",
        "crossed_price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1-9.webp",
        "name": "NMD_R1 Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$104",
        "sale_price": "$104",
        "crossed_price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Supercourt_RX2.webp",
        "name": "Supercourt RX Shoes",
        "type": "Women's Originals",
        "color": "Brown",
        "price": "$112",
        "sale_price": "$112",
        "crossed_price": "$140"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Continental_80-6.webp",
        "name": "Continental 80 Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$77",
        "sale_price": "$77",
        "crossed_price": "$110"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SC_Premiere2.webp",
        "name": "SC Premiere Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$60",
        "sale_price": "$60",
        "crossed_price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Nite_Jogger2.webp",
        "name": "Nite Jogger Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$91",
        "sale_price": "$91",
        "crossed_price": "$130"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Nizza_RF1.webp",
        "name": "Nizza RF Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$49",
        "sale_price": "$49",
        "crossed_price": "$70"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/U_Path_X1.webp",
        "name": "U_Path X Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$51",
        "sale_price": "$51",
        "crossed_price": "$85"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar13.webp",
        "name": "Superstar Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Adiease1.webp",
        "name": "Adiease Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$60"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/superstar14.webp",
        "name": "Superstar Shoes",
        "type": "Women's Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Kiellor_Xtra1.webp",
        "name": "Kiellor Xtra Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$96",
        "sale_price": "$96",
        "crossed_price": "$120"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Gazelle_Vintage1.webp",
        "name": "Gazelle Vintage Shoes",
        "type": "Originals",
        "color": "Green",
        "price": "$100"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/EQT_Gazelle1.webp",
        "name": "EQT Gazelle Shoes",
        "type": "Women's Originals",
        "color": "Green",
        "price": "$55",
        "sale_price": "$55",
        "crossed_price": "$110"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Nizza_Trefoil3.webp",
        "name": "Nizza Trefoil Shoes",
        "type": "Women's Originals",
        "color": "White",
        "price": "$42",
        "sale_price": "$42",
        "crossed_price": "$60"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Samba_OG4.webp",
        "name": "Samba OG Shoes",
        "type": "Originals",
        "color": "Black",
        "price": "$80"
    },
    {
        "image": "https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/Pro_Model1.webp",
        "name": "Pro Model Shoes",
        "type": "Originals",
        "color": "White",
        "price": "$90"
    }
]


// let db = mongoose.connection
const insertAdidasData = function() {
    Items.create(mockData)
      .then(() => mongoose.connection.close())
      .catch((err)=>console.log(err));
};
  
insertAdidasData();
