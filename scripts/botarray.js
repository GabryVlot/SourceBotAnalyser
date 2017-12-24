var _ = require('underscore');
var fs = require('fs');
const patterns = JSON.parse(fs.readFileSync('../patterns.json', 'utf8'));

var _ac=["\x72\x75\x6e\x46\x6f\x6e\x74\x73","\x70\x69\x78\x65\x6c\x44\x65\x70\x74\x68","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x32\x32\x2c","\x5c\x5c\x22","\x64\x6d\x5f\x65\x6e","\x70\x73\x75\x62","\x63\x74\x61","\x74\x61\x63\x74","\x66\x70\x63\x66","\x64\x6f\x4e\x6f\x74\x54\x72\x61\x63\x6b","\x77\x65\x62\x72\x74\x63\x4b\x65\x79","\x6f\x6e\x6d\x6f\x75\x73\x65\x64\x6f\x77\x6e","\x6b\x65\x79\x70\x72\x65\x73\x73","\x76\x63\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x61\x70\x69\x63\x61\x6c\x6c","\x74\x6f\x46\x69\x78\x65\x64","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x37\x30\x2c","\x33","\x63\x68\x61\x72\x43\x6f\x64\x65","\x2c\x73\x65\x74\x53\x44\x46\x4e\x3a","\x76\x63","\x75\x6e\x6b","\x2c\x73\x35","\x61\x63\x6f\x73","\x6e\x5f\x63\x6b","\x74\x6f\x45\x6c\x65\x6d\x65\x6e\x74","\x6a\x6f\x69\x6e","\x6d\x72","\x68\x70\x75","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x30\x2c","\x64\x6f\x65\x5f\x63\x6e\x74","\x6f\x6e","\x6d\x6d\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x62\x63","\x63\x68\x72\x6f\x6d\x65","\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x45\x64\x67\x65\x20\x50\x44\x46\x20\x56\x69\x65\x77\x65\x72","\x77\x65\x62\x73\x74\x6f\x72\x65","\x2c\x73\x34","\x73\x74\x72\x69\x6e\x67","\x69\x6e\x70\x75\x74","\x70\x65\x5f\x76\x65\x6c","\x3c\x2f\x62\x70\x64\x3e","\x41\x76\x65\x6e\x69\x72\x20\x4e\x65\x78\x74","\x63\x73","\x61\x70\x70\x6c\x79\x46\x75\x6e\x63","\x2c\x73\x37\x3a","\x75\x6e\x64\x65\x66","\x50\x6f\x69\x6e\x74\x65\x72\x45\x76\x65\x6e\x74","\x61\x6a\x5f\x6c\x6d\x74\x5f\x64\x6f\x61\x63\x74","\x6f\x6e\x6b\x65\x79\x75\x70","\x68\x74\x65","\x64\x61\x74\x61","\x75\x70\x64\x61\x74\x65\x74","\x68\x61\x73\x49\x6e\x64\x65\x78\x65\x64\x44\x42","\x6f\x6e\x63\x6c\x69\x63\x6b","\x77\x65\x62\x64\x72\x69\x76\x65\x72","\x46\x69\x6c\x65\x52\x65\x61\x64\x65\x72","\x30\x61\x34\x36\x47\x35\x6d\x31\x37\x56\x72\x70\x34\x6f\x34\x63","\x43\x6f\x75\x72\x69\x65\x72\x20\x4e\x65\x77","\x73\x65\x73\x73\x69\x6f\x6e\x5f\x69\x64","\x61\x66\x53\x62\x65\x70\x38\x79\x6a\x6e\x5a\x55\x6a\x71\x33\x61\x4c\x30\x31\x30\x6a\x4f\x31\x35\x53\x61\x77\x6a\x32\x56\x5a\x66\x64\x59\x4b\x38\x75\x59\x39\x30\x75\x78\x71","\x61\x6c\x70\x68\x61","\x61\x76\x61\x69\x6c\x57\x69\x64\x74\x68","\x43\x6f\x75\x72\x69\x65\x72","\x70\x65\x72\x6d\x69\x73\x73\x69\x6f\x6e\x73","\x2c","\x55\x62\x75\x6e\x74\x75\x20\x4d\x65\x64\x69\x75\x6d","\x74\x61","\x6a\x73\x5f\x70\x6f\x73\x74","\x65\x6e\x41\x64\x64\x48\x69\x64\x64\x65\x6e","\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c","\x77\x65\x62\x6b\x69\x74\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65","\x63\x6c\x69\x65\x6e\x74\x58","\x73\x68\x69\x66\x74\x4b\x65\x79","\x61\x70\x69\x5f\x70\x75\x62\x6c\x69\x63\x5f\x6b\x65\x79","\x62\x61\x74\x3a","\x63\x6c\x65\x61\x72\x43\x61\x63\x68\x65","\x78\x31\x31\x3a","\x61\x6a\x5f\x69\x6e\x64\x78\x5f\x74\x61\x63\x74","\x69\x73\x49\x67\x6e","\x4c\x61\x74\x6f","\x58\x50\x61\x74\x68\x52\x65\x73\x75\x6c\x74","\x72\x56\x61\x6c","\x61\x6a\x5f\x6c\x6d\x74\x5f\x74\x61\x63\x74","\x3a","\x63\x66\x5f\x75\x72\x6c","\x41\x70\x70\x6c\x65\x20\x47\x6f\x74\x68\x69\x63","\x64\x6f\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x61\x6a\x5f\x69\x6e\x64\x78","\x61\x62\x63\x64\x65\x66\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x78\x79\x7a\x31\x32\x33\x34\x35\x36\x37\x38\x39\x30\x3b\x2b\x2d\x2e","\x68\x6b\x64","\x2c\x63\x70\x65\x6e\x3a","\x61\x70\x69\x63\x61\x6c\x6c\x5f\x62\x6d","\x3b\x20\x70\x61\x74\x68\x3d\x2f\x3b\x20\x65\x78\x70\x69\x72\x65\x73\x3d\x46\x72\x69\x2c\x20\x30\x31\x20\x46\x65\x62\x20\x32\x30\x32\x35\x20\x30\x38\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b","\x68\x65\x69\x67\x68\x74","\x70\x69","\x41\x70\x70\x6c\x65\x20\x4c\x69\x47\x6f\x74\x68\x69\x63","\x75\x72\x6c","\x6a\x61\x76\x61\x45\x6e\x61\x62\x6c\x65\x64","\x7d","\x73\x65\x6e\x64","\x73\x63\x72\x65\x65\x6e","\x68\x62","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x36\x2c","\x43\x6f\x72\x73\x69\x76\x61\x20\x48\x65\x62\x72\x65\x77","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x38\x30\x2c","\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e","\x70\x61\x67\x65\x58","\x64\x6d\x65\x5f\x63\x6e\x74","\x52\x65\x61\x6c\x50\x6c\x61\x79\x65\x72\x28\x74\x6d\x29\x20\x47\x32\x20\x4c\x69\x76\x65\x43\x6f\x6e\x6e\x65\x63\x74\x2d\x45\x6e\x61\x62\x6c\x65\x64\x20\x50\x6c\x75\x67\x2d\x49\x6e\x20\x28\x33\x32\x2d\x62\x69\x74\x29","\x6d\x6f\x75\x73\x65\x75\x70","\x6d\x6f\x7a\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65","\x2c\x22\x61\x75\x74\x68\x22\x20\x3a\x20\x22","\x74\x6f\x75\x63\x68\x73\x74\x61\x72\x74","\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e","\x64\x6f\x5f\x64\x69\x73","\x6f\x6e\x6d\x6f\x75\x73\x65\x75\x70","\x31","\x64\x65\x76\x69\x63\x65\x6d\x6f\x74\x69\x6f\x6e","\x61\x6a\x5f\x74\x79\x70\x65","\x69\x6e\x66\x6f\x72\x6d\x69\x6e\x66\x6f","\x46\x61\x6e\x74\x61\x73\x71\x75\x65\x20\x53\x61\x6e\x73\x20\x4d\x6f\x6e\x6f","\x2c\x22\x61\x75\x74\x68\x22\x3a\x22","\x70\x6f\x77","\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65","\x70\x6c\x75\x67\x69\x6e\x73","\x67\x66","\x69\x31\x3a","\x74\x64\x75\x63\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x66\x69\x6c\x6c\x53\x74\x79\x6c\x65","\x55\x52\x4c","\x63\x64\x6f\x61","\x63\x74\x72\x6c\x4b\x65\x79","\x51\x75\x69\x63\x6b\x54\x69\x6d\x65\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x73\x74\x61\x72\x74\x54\x72\x61\x63\x6b\x69\x6e\x67","\x70\x6f\x69\x6e\x74\x65\x72\x75\x70","\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65","\x64\x65\x76\x69\x63\x65\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e","\x6c\x65\x6e\x67\x74\x68","\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64","\x73\x65\x6e\x64\x42\x65\x61\x63\x6f\x6e","\x2c\x62","\x67\x65\x74\x42\x61\x74\x74\x65\x72\x79","\x65\x78\x70","\x44\x61\x6d\x61\x73\x63\x75\x73","\x43\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72","\x42\x75\x66\x66\x65\x72","\x76\x69\x62\x3a","\x6f\x66\x66\x73\x65\x74\x48\x65\x69\x67\x68\x74","\x63\x6c\x69\x65\x6e\x74\x48\x65\x69\x67\x68\x74","\x6f\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68","\x6f\x70\x63\x3a","\x66\x69\x6c\x6c\x52\x65\x63\x74","\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65","\x66\x70\x56\x61\x6c\x73\x74\x72","\x77\x68\x69\x63\x68","\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x69\x6f\x6e","\x6f\x6e\x6c\x6f\x61\x64","\x62\x6f\x64\x79","\x4d\x61\x63\x20\x4f\x53\x20\x58\x20\x31\x30\x5f\x35","\x63\x6f\x6f\x6b\x69\x65\x45\x6e\x61\x62\x6c\x65\x64","\x72\x73\x74","\x72\x43\x46\x50","\x2c\x30","\x72\x6f\x75\x6e\x64","\x43\x65\x6e\x74\x75\x72\x79","\x68\x6f\x6d\x65\x2e\x68\x74\x6d\x6c","\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68","\x50\x4c\x55\x47\x49\x4e\x53","\x64\x32","\x72\x65\x71\x75\x65\x73\x74\x4d\x65\x64\x69\x61\x4b\x65\x79\x53\x79\x73\x74\x65\x6d\x41\x63\x63\x65\x73\x73","\x68\x6d\x6d","\x68\x74\x74\x70\x73\x3a","\x72\x61\x6e\x64\x6f\x6d","\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x2c\x6c\x6f\x63\x3a","\x43\x68\x72\x6f\x6d\x65\x20\x52\x65\x6d\x6f\x74\x65\x20\x44\x65\x73\x6b\x74\x6f\x70\x20\x56\x69\x65\x77\x65\x72","\x66\x6f\x6e\x74\x73","\x63\x61\x6c\x6c\x50\x68\x61\x6e\x74\x6f\x6d","\x52\x54\x43\x50\x65\x65\x72\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e","\x61\x74\x74\x61\x63\x68\x45\x76\x65\x6e\x74","\x74\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74\x4b\x65\x79","\x6c\x61\x6e\x67","\x6d\x6f\x6e\x6f\x73\x70\x61\x63\x65","\x64\x6f\x6d\x41\x75\x74\x6f\x6d\x61\x74\x69\x6f\x6e","\x6c\x6f\x63","\x64\x6f\x65\x5f\x76\x65\x6c","\x73\x65\x73\x73\x69\x6f\x6e\x53\x74\x6f\x72\x61\x67\x65\x4b\x65\x79","\x59\x6f\x75\x54\x75\x62\x65\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x79","\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74","\x6c\x76\x63","\x63\x61\x63\x68\x65","\x70\x64","\x64\x65\x66\x61\x75\x6c\x74\x5f\x73\x65\x73\x73\x69\x6f\x6e","\x64\x69\x73\x46\x70\x43\x61\x6c\x4f\x6e\x54\x69\x6d\x65\x6f\x75\x74","\x67\x65\x74\x5f\x63\x6f\x6f\x6b\x69\x65","\x6d\x6f\x7a\x48\x69\x64\x64\x65\x6e","\x6e\x6f\x6e\x65","\x6f\x6e\x6b\x65\x79\x70\x72\x65\x73\x73","\x70\x64\x5f\x65\x6e","\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e","\x64\x65\x66\x61\x75\x6c\x74","\x43\x6f\x6d\x69\x63\x20\x4e\x65\x75\x65","\x68\x74\x74\x70\x73\x3a\x2f\x2f","\x66\x69\x6c\x6c\x54\x65\x78\x74","\x74\x5f\x65\x6e","\x61\x72\x63","\x3c\x40\x6e\x76\x34\x35\x2e\x20\x46\x31\x6e\x36\x33\x72\x2c\x50\x72\x31\x6e\x37\x31\x6e\x36\x21","\x74\x5f\x64\x69\x73","\x43\x61\x6c\x69\x62\x72\x69","\x63\x63","\x70\x65\x6e","\x61\x70\x70\x6c\x79","\x74\x68\x72","\x4a\x61\x76\x61\x20\x41\x70\x70\x6c\x65\x74\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x61\x70\x70\x4d\x69\x6e\x6f\x72\x56\x65\x72\x73\x69\x6f\x6e","\x77\x65\x62\x6b\x69\x74\x47\x65\x74\x47\x61\x6d\x65\x70\x61\x64\x73","\x61","\x77\x65\x62\x6b\x69\x74\x48\x69\x64\x64\x65\x6e","\x5f\x70\x68\x61\x6e\x74\x6f\x6d","\x70\x72\x6f\x64\x75\x63\x74\x53\x75\x62","\x70\x61\x73\x73\x77\x6f\x72\x64","\x63\x68\x6b\x6e\x75\x6c\x6c","\x64\x33","\x70\x61\x72\x73\x65","\x4d\x53\x49\x45","\x64\x72\x69\x76\x65\x72","\x53\x6f\x75\x72\x63\x65\x20\x53\x61\x6e\x73\x20\x50\x72\x6f","\x63\x68\x65\x63\x6b\x5f\x73\x74\x6f\x70\x5f\x70\x72\x6f\x74\x6f\x63\x6f\x6c","\x67\x65\x74\x43\x6f\x6e\x74\x65\x78\x74","\x63\x6c\x69\x65\x6e\x74\x57\x69\x64\x74\x68","\x4e\x65\x77\x20\x59\x6f\x72\x6b","\x61\x76\x61\x69\x6c\x48\x65\x69\x67\x68\x74","\x41\x72\x69\x61\x6c\x48\x65\x62\x72\x65\x77\x2d\x4c\x69\x67\x68\x74","\x41\x6c\x4e\x69\x6c\x65","\x73\x70\x6c\x69\x74","\x66\x6f\x6e\x74\x53\x69\x7a\x65","\x53\x69\x6c\x76\x65\x72\x6c\x69\x67\x68\x74\x20\x50\x6c\x75\x67\x2d\x49\x6e","\x73\x65\x74\x5f\x63\x6f\x6f\x6b\x69\x65","\x2c\x73\x33\x3a","\x73\x64\x66\x6e","\x3c\x2f\x73\x65\x74\x53\x44\x46\x4e\x3e","\x52\x6f\x62\x6f\x74\x6f","\x44\x65\x66\x61\x75\x6c\x74\x20\x42\x72\x6f\x77\x73\x65\x72\x20\x48\x65\x6c\x70\x65\x72","\x3d\x3d","\x42\x61\x74\x61\x6e\x67","\x43\x65\x6e\x74\x75\x72\x79\x20\x47\x6f\x74\x68\x69\x63","\x72\x69\x72","\x64\x69\x76","\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65","\x6d\x65\x5f\x76\x65\x6c","\x73\x74\x61\x72\x74\x5f\x74\x73","\x64\x6d\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x6e\x6f\x77","\x31\x36\x70\x74\x20\x41\x72\x69\x61\x6c","\x50\x61\x6c\x61\x74\x69\x6e\x6f\x2d\x42\x6f\x6c\x64","\x65\x6e\x63\x6f\x64\x65","\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72","\x2c\x75\x61\x65\x6e\x64\x2c","\x73\x65\x6e\x73\x6f\x72\x5f\x64\x61\x74\x61","\x6d\x6f\x7a\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e","\x67\x65\x74\x64\x75\x72\x6c","\x24\x63\x64\x63\x5f\x61\x73\x64\x6a\x66\x6c\x61\x73\x75\x74\x6f\x70\x66\x68\x76\x63\x5a\x4c\x6d\x63\x66\x6c\x5f","\x30","\x7b\x22\x73\x65\x6e\x73\x6f\x72\x5f\x64\x61\x74\x61\x22\x3a\x22","\x74\x6f\x75\x63\x68\x6d\x6f\x76\x65","\x64\x6f\x61\x64\x6d\x61\x5f\x65\x6e","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x72\x6f\x6b\x65","\x67\x65\x74\x53\x74\x6f\x72\x61\x67\x65\x55\x70\x64\x61\x74\x65\x73","\x66\x70\x56\x61\x6c\x43\x61\x6c\x63\x75\x6c\x61\x74\x65\x64","\x68\x6f\x73\x74\x6e\x61\x6d\x65","\x5f\x61\x62\x63\x6b","\x78\x61\x67\x67","\x6e\x61\x6d\x65","\x68\x6e","\x66\x75\x6e\x63\x74\x69\x6f\x6e","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x6d\x73\x4d\x61\x6e\x69\x70\x75\x6c\x61\x74\x69\x6f\x6e\x56\x69\x65\x77\x73\x45\x6e\x61\x62\x6c\x65\x64","\x75\x73\x65\x72\x41\x67\x65\x6e\x74","\x63\x62\x72\x74","\x73\x65\x61\x72\x63\x68","\x74\x5f\x74\x73\x74","\x6f\x39","\x70\x72\x6f\x64\x75\x63\x74","\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30","\x64\x6f\x5f\x65\x6e","\x70\x61\x74\x70","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x37\x2c","\x50\x4f\x53\x54","\x63\x68\x61\x72\x41\x74","\x65\x6d\x69\x74","\x78\x31\x32\x3a","\x74\x65\x5f\x63\x6e\x74","\x4e\x6f\x74\x6f","\x6f\x6e\x62\x6c\x75\x72","\x6d\x6f\x75\x73\x65","\x61\x6a\x5f\x73\x73","\x68\x74\x63","\x66\x63\x3a","\x61\x75\x74\x68","\x70\x6d\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x69\x6e\x73","\x76\x65\x72","\x63\x70\x61","\x68\x74\x73","\x2f\x2f","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x39\x2c","\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x69\x6f\x6e\x49\x6e\x63\x6c\x75\x64\x69\x6e\x67\x47\x72\x61\x76\x69\x74\x79","\x6c\x6f\x63\x61\x74\x69\x6f\x6e","\x74\x6f\x44\x61\x74\x61\x55\x52\x4c","\x74\x64","\x6d\x73\x48\x69\x64\x64\x65\x6e","\x2c\x73\x31\x3a","\x50\x49","\x73\x64\x5f\x64\x65\x62\x75\x67","\x63\x6f\x6c\x6f\x72\x44\x65\x70\x74\x68","\x6d\x6f\x7a\x49\x73\x4c\x6f\x63\x61\x6c\x6c\x79\x41\x76\x61\x69\x6c\x61\x62\x6c\x65","\x70\x72\x6f\x64","\x32\x64","\x3c\x62\x70\x64\x3e","\x4f\x73\x77\x61\x6c\x64","\x6c\x69\x73\x74\x46\x75\x6e\x63\x74\x69\x6f\x6e\x73","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x31\x2c","\x78\x31","\x64\x6f\x63\x75\x6d\x65\x6e\x74","\x67\x65\x74\x5f\x62\x72\x6f\x77\x73\x65\x72","\x6e\x61\x76\x69\x67\x61\x74\x6f\x72","\x6f\x6e\x70\x6f\x69\x6e\x74\x65\x72\x75\x70","\x47\x6f\x6f\x67\x6c\x65\x20\x54\x61\x6c\x6b\x20\x50\x6c\x75\x67\x69\x6e\x20\x56\x69\x64\x65\x6f\x20\x52\x65\x6e\x64\x65\x72\x65\x72","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x32\x2c","\x69\x6e\x69\x74\x5f\x74\x69\x6d\x65","\x62\x6d\x69\x73\x63","\x64\x6d\x65\x5f\x76\x65\x6c","\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74","\x66\x6f\x72\x45\x61\x63\x68","\x6f\x70\x65\x72\x61","\x4d\x6f\x6e\x61\x63\x6f","\x63\x65\x5f\x6a\x73\x5f\x70\x6f\x73\x74","\x6b\x65\x79\x43\x6f\x64\x65","\x6b\x65\x79\x75\x70","\x74\x6f","\x57\x69\x64\x65\x76\x69\x6e\x65\x20\x43\x6f\x6e\x74\x65\x6e\x74\x20\x44\x65\x63\x72\x79\x70\x74\x69\x6f\x6e\x20\x4d\x6f\x64\x75\x6c\x65","\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74","\x68\x61\x73\x4c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65","\x69\x6e\x64\x65\x78\x4f\x66","\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66","\x64\x69\x73\x70\x6c\x61\x79","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x31\x2c","\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68","\x76\x63\x5f\x63\x6e\x74","\x64\x6f\x63\x75\x6d\x65\x6e\x74\x4d\x6f\x64\x65","\x70\x72\x65\x76\x66\x69\x64","\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73","\x76\x63\x61\x63\x74","\x6d\x61\x63\x74","\x77\x65\x62\x6b\x69\x74\x54\x65\x6d\x70\x6f\x72\x61\x72\x79\x53\x74\x6f\x72\x61\x67\x65","\x61\x63\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74","\x77\x69\x74\x68\x43\x72\x65\x64\x65\x6e\x74\x69\x61\x6c\x73","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x36\x2c","\x73\x6c\x69\x63\x65","\x73\x74\x6f\x72\x65\x57\x65\x62\x57\x69\x64\x65\x54\x72\x61\x63\x6b\x69\x6e\x67\x45\x78\x63\x65\x70\x74\x69\x6f\x6e","\x6d\x73\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65","\x73\x68\x69\x66\x74","\x6d\x65\x64\x69\x61\x44\x65\x76\x69\x63\x65\x73","\x6d\x6f\x7a\x50\x68\x6f\x6e\x65\x4e\x75\x6d\x62\x65\x72\x53\x65\x72\x76\x69\x63\x65","\x65\x6d\x61\x69\x6c","\x75\x61\x72","\x73\x66\x34","\x68\x76\x63","\x2c\x61\x2d","\x69\x6e\x64\x65\x78\x65\x64\x44\x62\x4b\x65\x79","\x67\x65\x74\x5f\x63\x66\x5f\x64\x61\x74\x65","\x64\x69\x73","\x5f","\x43\x68\x72\x6f\x6d\x65\x20\x50\x44\x46\x20\x56\x69\x65\x77\x65\x72","\x36\x70\x74\x20\x41\x72\x69\x61\x6c","\x3b","\x70\x75\x73\x68","\x6f\x6e\x6b\x65\x79\x64\x6f\x77\x6e","\x41\x76\x65\x6e\x69\x72","\x73\x70\x61\x77\x6e","\x63\x6d\x61","\x43\x61\x6e\x74\x61\x72\x65\x6c\x6c","\x53\x68\x6f\x63\x6b\x77\x61\x76\x65\x20\x46\x6c\x61\x73\x68","\x66\x6f\x6e\x74\x46\x61\x6d\x69\x6c\x79","\x66\x70\x56\x61\x6c","\x74\x6d\x65\x5f\x63\x6e\x74","\x6d\x6f\x75\x73\x65\x64\x6f\x77\x6e","\x32","\x68\x70\x64","\x68\x74\x6d","\x4d\x69\x63\x72\x6f\x73\x6f\x66\x74\x20\x53\x61\x6e\x73\x20\x53\x65\x72\x69\x66","\x41\x64\x6f\x62\x65\x20\x42\x72\x61\x69\x6c\x6c\x65","\x64\x6d\x5f\x64\x69\x73","\x70\x65\x5f\x63\x6e\x74","\x62\x6d","\x61\x6c\x74\x46\x6f\x6e\x74\x73","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x34\x2c","\x69\x64","\x78\x32","\x2f\x5f\x62\x6d\x2f\x5f\x64\x61\x74\x61","\x68\x6d\x75","\x68\x61\x72\x64\x77\x61\x72\x65\x43\x6f\x6e\x63\x75\x72\x72\x65\x6e\x63\x79","\x6b\x61\x63\x74","\x2c\x63\x2d\x6e\x75\x6c\x6c","\x6d\x6f\x7a\x41\x6c\x61\x72\x6d\x73","\x6f\x66\x66","\x74\x6f\x53\x74\x72\x69\x6e\x67","\x6e\x75\x6d\x62\x65\x72","\x76\x69\x62\x72\x61\x74\x65","\x78","\x6d\x65\x74\x61\x4b\x65\x79","\x63\x6b\x61","\x73\x65\x72\x76\x69\x63\x65\x57\x6f\x72\x6b\x65\x72","\x68\x6b\x75","\x69\x50\x68\x6f\x74\x6f\x50\x68\x6f\x74\x6f\x63\x61\x73\x74","\x61\x6a\x5f\x69\x6e\x64\x78\x5f\x64\x6d\x61\x63\x74","\x4a\x61\x76\x61\x20\x50\x6c\x75\x67\x2d\x69\x6e\x20\x32\x20\x66\x6f\x72\x20\x4e\x50\x41\x50\x49\x20\x42\x72\x6f\x77\x73\x65\x72\x73","\x67\x65\x74\x5f\x73\x74\x6f\x70\x5f\x73\x69\x67\x6e\x61\x6c\x73","\x63\x6f\x6f\x6b\x69\x65","\x47\x65\x6e\x65\x76\x61","\x6b\x65\x5f\x63\x6e\x74","\x74\x73\x74","\x66\x61\x73","\x64\x65\x66\x61\x75\x6c\x74\x56\x61\x6c\x75\x65","\x65\x6e\x47\x65\x74\x4c\x6f\x63","\x2d","\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64","\x76\x61\x6c\x75\x65","\x3d","\x44\x65\x76\x69\x63\x65\x4d\x6f\x74\x69\x6f\x6e\x45\x76\x65\x6e\x74","\x69\x50\x68\x6f\x6e\x65","\x70\x72\x6f\x74\x6f\x63\x6f\x6c","\x73\x65\x6c\x65\x6e\x69\x75\x6d","\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65","\x72\x67\x62\x28\x31\x32\x30\x2c\x20\x31\x38\x36\x2c\x20\x31\x37\x36\x29","\x67\x63\x6b","\x6d\x64\x75\x63\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x62\x6c\x75\x65\x74\x6f\x6f\x74\x68","\x7a\x31","\x65\x76\x65\x6e\x74","\x47\x6f\x6f\x67\x6c\x65\x20\x45\x61\x72\x74\x68\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x73\x65\x72\x69\x66","\x68\x69\x64\x64\x65\x6e","\x48\x65\x6c\x76\x65\x74\x69\x63\x61\x20\x4e\x65\x75\x65","\x70\x61\x67\x65\x59","\x51\x75\x69\x63\x6b\x73\x61\x6e\x64","\x4d\x69\x63\x72\x6f\x73\x6f\x66\x74\x2e\x58\x4d\x4c\x48\x54\x54\x50","\x66\x6f\x72\x6d\x69\x6e\x66\x6f","\x77\x72\x63\x3a","\x64\x6f\x61\x5f\x74\x68\x72\x6f\x74\x74\x6c\x65","\x54\x49\x2d\x4e\x73\x70\x69\x72\x65","\x4c\x6f\x62\x73\x74\x65\x72","\x7b\x22\x73\x65\x73\x73\x69\x6f\x6e\x5f\x69\x64\x22\x20\x3a\x20\x22","\x6b\x65\x5f\x76\x65\x6c","\x67\x62","\x61\x6a\x5f\x69\x6e\x64\x78\x5f\x64\x6f\x61\x63\x74","\x63\x61\x6c\x6c","\x73\x63\x3a","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x32\x30\x2c","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x35\x2c","\x63\x6e\x73","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x38\x2c","\x4f\x70\x65\x6e\x20\x53\x61\x6e\x73","\x77\x69\x64\x74\x68","\x70\x64\x75\x63\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x63\x64\x6d\x61","\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e","\x69\x72","\x61\x70\x69\x64\x2e\x63\x66\x6f\x72\x6d\x61\x6e\x61\x6c\x79\x74\x69\x63\x73\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x31\x2f\x61\x74\x74\x65\x6d\x70\x74","\x48\x54\x4d\x4c\x45\x6c\x65\x6d\x65\x6e\x74","\x2d\x31","\x42\x69\x72\x63\x68\x20\x53\x74\x64","\x6f\x6e\x4c\x69\x6e\x65","\x39\x30\x70\x78","\x6d\x6f\x7a\x49\x6e\x6e\x65\x72\x53\x63\x72\x65\x65\x6e\x59","\x68\x79\x70\x6f\x74","\x55\x6e\x69\x74\x79\x20\x50\x6c\x61\x79\x65\x72","\x54\x6f\x75\x63\x68\x45\x76\x65\x6e\x74","\x2c\x73\x36\x3a","\x6e\x6f\x6e\x3a","\x6b\x65\x79\x64\x6f\x77\x6e","\x70\x6f\x69\x6e\x74\x65\x72\x54\x79\x70\x65","\x3b\x20","\x7e","\x74\x64\x75\x63\x65\x5f\x63\x6e\x74","\x73\x65\x73\x73\x69\x6f\x6e\x53\x74\x6f\x72\x61\x67\x65","\x6f\x6e\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65","\x68\x74\x74\x70\x3a\x2f\x2f","\x73\x70\x61\x6e","\x70\x6c\x75\x67\x69\x6e\x49\x6e\x66\x6f","\x70\x72\x6f\x74\x6f\x74\x79\x70\x65","\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x4b\x65\x79","\x64\x6d\x61\x63\x74","\x64\x6d\x61\x5f\x74\x68\x72\x6f\x74\x74\x6c\x65","\x61\x6c\x74\x4b\x65\x79","\x50\x61\x6c\x61\x74\x69\x6e\x6f","\x42\x61\x73\x69\x63\x20","\x57\x69\x6e\x64\x6f\x77\x73\x20\x4d\x65\x64\x69\x61\x20\x50\x6c\x61\x79\x65\x72\x20\x50\x6c\x75\x67\x2d\x69\x6e\x20\x44\x79\x6e\x61\x6d\x69\x63\x20\x4c\x69\x6e\x6b\x20\x4c\x69\x62\x72\x61\x72\x79","\x73\x74\x79\x6c\x65","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x32\x2c","\x72\x65\x71\x75\x69\x72\x65\x64","\x2c\x73\x32\x3a","\x72\x65\x70\x6c\x61\x63\x65","\x69\x50\x61\x64\x3b","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x38\x2c","\x72\x65\x74\x75\x72\x6e\x2f\x2a\x40\x63\x63\x5f\x6f\x6e\x21\x40\x2a\x2f\x21\x31","\x63\x72\x65\x64\x65\x6e\x74\x69\x61\x6c\x73","\x77\x65\x62\x6b\x69\x74\x52\x54\x43\x50\x65\x65\x72\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e","\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f","\x72\x65\x71\x75\x65\x73\x74\x57\x61\x6b\x65\x4c\x6f\x63\x6b","\x73\x71\x72\x74","\x67\x61\x6d\x6d\x61","\x72\x65\x74\x75\x72\x6e\x20","\x73\x74\x72\x6f\x6b\x65\x53\x74\x79\x6c\x65","\x6c\x61\x6e\x67\x75\x61\x67\x65","\x66\x66","\x61\x74\x61\x6e\x68","\x74\x79\x70\x65","\x70\x61\x72\x73\x65\x49\x6e\x74","\x73\x74\x61\x72\x74\x64\x6f\x61\x64\x6d\x61","\x7a","\x77\x65\x6e","\x72\x6f\x74\x61\x74\x69\x6f\x6e\x52\x61\x74\x65","\x70\x6c\x65\x6e","\x65\x6e\x52\x65\x61\x64\x44\x6f\x63\x55\x72\x6c","\x6d\x6f\x7a\x52\x54\x43\x50\x65\x65\x72\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e","\x72\x67\x62\x28\x31\x30\x32\x2c\x20\x32\x30\x34\x2c\x20\x30\x29","\x67\x64","\x6b\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x43\x61\x6d\x62\x72\x69\x61","\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65","\x70\x6f\x73\x69\x74\x69\x6f\x6e\x3a\x20\x72\x65\x6c\x61\x74\x69\x76\x65\x3b\x20\x6c\x65\x66\x74\x3a\x20\x2d\x39\x39\x39\x39\x70\x78\x3b\x20\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x3a\x20\x68\x69\x64\x64\x65\x6e\x3b\x20\x64\x69\x73\x70\x6c\x61\x79\x3a\x20\x62\x6c\x6f\x63\x6b\x20\x21\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74","\x68\x6d\x64","\x74\x6f\x75\x63\x68\x63\x61\x6e\x63\x65\x6c","","\x62\x75\x74\x74\x6f\x6e","\x57\x65\x62\x4b\x69\x74\x2d\x69\x6e\x74\x65\x67\x72\x69\x65\x72\x74\x65\x20\x50\x44\x46","\x66\x6f\x6e\x74","\x70\x64\x75\x63\x65\x5f\x63\x6e\x74","\x62\x64","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x31\x35\x2c","\x69\x73\x54\x72\x75\x73\x74\x65\x64","\x70\x6d\x65\x5f\x63\x6e\x74","\x3c\x69\x6e\x69\x74\x2f\x3e","\x62\x65\x74\x61","\x64\x6d\x3a","\x46\x75\x74\x75\x72\x61","\x74\x6d\x65\x5f\x63\x6e\x74\x5f\x6c\x6d\x74","\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65","\x3c\x63\x66\x73\x75\x62\x6d\x69\x74\x2f\x3e","\x67\x65\x74\x46\x6c\x6f\x61\x74\x56\x61\x6c","\x72\x65\x74\x75\x72\x6e\x20\x61","\x75\x6e\x64\x65\x66\x69\x6e\x65\x64","\x2c\x63\x2d","\x42\x65\x6c\x6c\x20\x4d\x54","\x73\x74\x6f\x72\x61\x67\x65","\x79\x31","\x44\x72\x6f\x69\x64\x20\x53\x65\x72\x69\x66","\x69\x73\x63\x3a","\x70\x61\x63\x74","\x44\x65\x76\x69\x63\x65\x4f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e\x45\x76\x65\x6e\x74","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x30\x2c","\x63\x6f\x6f\x6b\x69\x65\x5f\x63\x68\x6b\x5f\x72\x65\x61\x64","\x6f\x6e\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6e\x67\x65","\x74\x61\x72\x67\x65\x74","\x61\x73\x69\x6e","\x66\x6f\x6e\x74\x73\x5f\x6f\x70\x74\x6d","\x63\x77\x65\x6e\x3a","\x41\x64\x6f\x62\x65\x20\x48\x65\x62\x72\x65\x77","\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64","\x65\x78\x63\x65\x70\x74\x69\x6f\x6e","\x66\x69\x64\x63\x6e\x74","\x4e\x61\x74\x69\x76\x65\x20\x43\x6c\x69\x65\x6e\x74","\x61\x75\x74\x6f\x63\x6f\x6d\x70\x6c\x65\x74\x65","\x62\x69\x6e\x64","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x33\x2c","\x63\x61\x6e\x76\x61\x73","\x2c\x64","\x74\x65\x6c","\x4d\x69\x6e\x69\x6f\x6e\x20\x50\x72\x6f","\x74\x65\x78\x74","\x72\x65\x67\x69\x73\x74\x65\x72\x50\x72\x6f\x74\x6f\x63\x6f\x6c\x48\x61\x6e\x64\x6c\x65\x72","\x41\x64\x6f\x62\x65\x20\x41\x63\x72\x6f\x62\x61\x74","\x6f\x70\x65\x6e","\x66\x6c\x6f\x6f\x72","\x61\x62\x73","\x4d\x69\x63\x72\x6f\x73\x6f\x66\x74\x20\x4f\x66\x66\x69\x63\x65\x20\x4c\x69\x76\x65\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x53\x68\x6f\x63\x6b\x77\x61\x76\x65\x20\x66\x6f\x72\x20\x44\x69\x72\x65\x63\x74\x6f\x72","\x55\x62\x75\x6e\x74\x75\x20\x52\x65\x67\x75\x6c\x61\x72","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x30\x39\x2c","\x74\x65\x5f\x76\x65\x6c","\x6f\x6e\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e","\x68\x61\x73\x53\x65\x73\x73\x69\x6f\x6e\x53\x74\x6f\x72\x61\x67\x65","\x57\x65\x62\x45\x78\x36\x34\x20\x47\x65\x6e\x65\x72\x61\x6c\x20\x50\x6c\x75\x67\x69\x6e\x20\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72","\x4d\x6f\x7a\x69\x6c\x6c\x61\x20\x44\x65\x66\x61\x75\x6c\x74\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x6f\x64","\x73\x65\x64","\x67\x65\x74\x5f\x74\x79\x70\x65","\x69\x6e\x64\x65\x78\x65\x64\x44\x42","\x22\x2c\x22\x73\x65\x6e\x73\x6f\x72\x5f\x64\x61\x74\x61\x22\x20\x3a\x20\x22","\x63\x73\x73\x54\x65\x78\x74","\x73\x6f\x72\x74","\x63\x6c\x69\x65\x6e\x74\x59","\x23\x66\x36\x30","\x54\x69\x6d\x65\x73","\x62\x70\x64","\x68\x63","\x22","\x6d\x65\x5f\x63\x6e\x74","\x69\x6d\x75\x6c","\x6f\x6e\x66\x6f\x63\x75\x73","\x63\x6c\x69\x63\x6b","\x6d\x64\x75\x63\x65\x5f\x63\x6e\x74","\x2d\x31\x2c\x32\x2c\x2d\x39\x34\x2c\x2d\x31\x32\x31\x2c","\x68\x6b\x70","\x73\x75\x62\x73\x74\x72\x69\x6e\x67","\x67\x65\x74\x6d\x72","\x67\x65\x74\x47\x61\x6d\x65\x70\x61\x64\x73","\x41\x64\x6f\x62\x65\x41\x41\x4d\x44\x65\x74\x65\x63\x74","\x53\x68\x61\x72\x65\x50\x6f\x69\x6e\x74\x20\x42\x72\x6f\x77\x73\x65\x72\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x63\x6b\x69\x65","\x52\x65\x61\x6c\x50\x6c\x61\x79\x65\x72\x20\x56\x65\x72\x73\x69\x6f\x6e\x20\x50\x6c\x75\x67\x69\x6e","\x61\x6a\x5f\x6c\x6d\x74\x5f\x64\x6d\x61\x63\x74","\x61\x62","\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74","\x64\x6f\x61\x63\x74","\x72\x76\x65","\x50\x61\x70\x79\x72\x75\x73","\x68\x66","\x3c\x73\x65\x74\x53\x44\x46\x4e\x3e","\x6d\x6d\x65\x5f\x63\x6e\x74","\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c\x65\x6d\x65\x6e\x74","\x64\x65\x6e","\x58\x44\x6f\x6d\x61\x69\x6e\x52\x65\x71\x75\x65\x73\x74","\x74\x6f\x75\x63\x68\x65\x6e\x64"];

fs.readFile('async.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }

    let hoi = _.clone(data);
    for (var i=0; i<_ac.length; i++){
        const hexPiece = _ac[i];
        // const translated = hexPiece.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        //     return String.fromCharCode(parseInt(arguments[1], 16));
        // });

        const postFix = new RegExp('[' + i + ']');
      //  const hallo = /\\/;
        const replacePart = '_ac' + '\\[' + i + ']';
        const re = new RegExp(replacePart,"g");
        console.log('replacing', re, _ac[i]);
        hoi = hoi.replace(re, _ac[i]);
        console.log('match', hoi);
        fs.appendFileSync('indexFile.txt', i + ' @@ ' + hexPiece + '\n');
        // _.each(patterns.searchPatterns['WebBot'], function(pattern){
        //     if(hexPiece.toLowerCase().indexOf(pattern.toLowerCase()) !== -1)
        //         console.log('Found', hexPiece, i);
        // });
    };


    fs.writeFileSync('async_translated.js', hoi);
});

