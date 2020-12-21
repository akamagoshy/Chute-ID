﻿// ==UserScript==
// @name         MySPD Chute to Lable transform Script
// @namespace    http://amazon.com/
// @version      0.1
// @description  A Tampermonkey userscript which rename Chute IDs to Lables
// @updateURL    https://raw.githubusercontent.com/sriem/MySPD_rename/main/MySPD_rename_script.js
// @downloadURL  https://raw.githubusercontent.com/sriem/MySPD_rename/main/MySPD_rename_script.js
// @author       No author
// @credits      No credits
// @match      https://insights-grafana.corp.amazon.com/*
// @grant        none
// ==/UserScript==

var interval = setInterval(function() {

    (function () {
        var replacements, regex, key, textnodes, node, s;

        replacements = {
S01254: "BOX-A-001-A (TOP)",
S01176: "BOX-A-001-A (BOTTOM)",
S01252: "BOX-A-002-A (TOP)",
S01178: "BOX-A-002-A (BOTTOM)",
S01250: "BOX-A-003-A (TOP)",
S01180: "BOX-A-003-A (BOTTOM)",
S01246: "BOX-A-004-A (TOP)",
S01184: "BOX-A-004-A (BOTTOM)",
S01244: "BOX-A-005-A (TOP)",
S01186: "BOX-A-005-A (BOTTOM)",
S01242: "BOX-A-006-A (TOP)",
S01188: "BOX-A-006-A (BOTTOM)",
S01240: "BOX-A-007-A (TOP)",
S01190: "BOX-A-007-A (BOTTOM)",
S01238: "BOX-A-008-A (TOP)",
S01192: "BOX-A-008-A (BOTTOM)",
S01236: "BOX-A-009-A (TOP)",
S01194: "BOX-A-009-A (BOTTOM)",
S01234: "BOX-A-010-A (TOP)",
S01196: "BOX-A-010-A (BOTTOM)",
S01232: "BOX-A-011-A (TOP)",
S01198: "BOX-A-011-A (BOTTOM)",
S01230: "BOX-A-012-A (TOP)",
S01200: "BOX-A-012-A (BOTTOM)",
S01227: "BOX-A-013-A (TOP)",
S01203: "BOX-A-013-A (BOTTOM)",
S01226: "BOX-A-014-A (TOP)",
S01204: "BOX-A-014-A (BOTTOM)",
S01224: "BOX-A-015-A (TOP)",
S01206: "BOX-A-015-A (BOTTOM)",
S01222: "BOX-A-016-A (TOP)",
S01208: "BOX-A-016-A (BOTTOM)",
S01218: "BOX-A-017-A (TOP)",
S01212: "BOX-A-017-A (BOTTOM)",
S01217: "BOX-A-018-A (TOP)",
S01213: "BOX-A-018-A (BOTTOM)",
S01216: "BOX-A-019-A (TOP)",
S01215: "BOX-A-019-A (BOTTOM)",
S01295: "FLAT-A-001 (TOP)",
S01135: "FLAT-A-001 (BOTTOM)",
S01293: "FLAT-A-002 (TOP)",
S01137: "FLAT-A-002 (BOTTOM)",
S01291: "FLAT-A-003 (TOP)",
S01239: "FLAT-A-003 (BOTTOM)",
S01289: "FLAT-A-004 (TOP)",
S01141: "FLAT-A-004 (BOTTOM)",
S01287: "FLAT-A-005 (TOP)",
S01143: "FLAT-A-005 (BOTTOM)",
S01285: "FLAT-A-006 (TOP)",
S01145: "FLAT-A-006 (BOTTOM)",
S01283: "FLAT-A-007 (TOP)",
S01147: "FLAT-A-007 (BOTTOM)",
S01281: "FLAT-A-008 (TOP)",
S01149: "FLAT-A-008 (BOTTOM)",
S01277: "FLAT-A-009 (TOP)",
S01153: "FLAT-A-009 (BOTTOM)",
S01269: "FLAT-A-010 (TOP)",
S01161: "FLAT-A-010 (BOTTOM)",
S01267: "FLAT-A-011 (TOP)",
S01163: "FLAT-A-011 (BOTTOM)",
S01266: "FLAT-A-012 (TOP)",
S01164: "FLAT-A-012 (BOTTOM)",
S01263: "FLAT-A-013 (TOP)",
S01167: "FLAT-A-013 (BOTTOM)",
S01261: "FLAT-A-014 (TOP)",
S01169: "FLAT-A-014 (BOTTOM)",
S01259: "FLAT-A-015 (TOP)",
S01171: "FLAT-A-015 (BOTTOM)",
S01257: "FLAT-A-016 (TOP)",
S01173: "FLAT-A-016 (BOTTOM)",
S01253: "BOX-B-001-A (TOP)",
S01177: "BOX-B-001-A (BOTTOM)",
S01251: "BOX-B-002-A (TOP)",
S01179: "BOX-B-002-A (BOTTOM)",
S01249: "BOX-B-003-A (TOP)",
S01181: "BOX-B-003-A (BOTTOM)",
S01247: "BOX-B-004-A (TOP)",
S01183: "BOX-B-004-A (BOTTOM)",
S01245: "BOX-B-005-A (TOP)",
S01185: "BOX-B-005-A (BOTTOM)",
S01243: "BOX-B-006-A (TOP)",
S01187: "BOX-B-006-A (BOTTOM)",
S01241: "BOX-B-007-A (TOP)",
S01189: "BOX-B-007-A (BOTTOM)",
S01239: "BOX-B-008-A (TOP)",
S01191: "BOX-B-008-A (BOTTOM)",
S01237: "BOX-B-009-A (TOP)",
S01193: "BOX-B-009-A (BOTTOM)",
S01235: "BOX-B-010-A (TOP)",
S01195: "BOX-B-010-A (BOTTOM)",
S01233: "BOX-B-011-A (TOP)",
S01197: "BOX-B-011-A (BOTTOM)",
S01231: "BOX-B-012-A (TOP)",
S01199: "BOX-B-012-A (BOTTOM)",
S01229: "BOX-B-013-A (TOP)",
S01201: "BOX-B-013-A (BOTTOM)",
S01228: "BOX-B-014-A (TOP)",
S01202: "BOX-B-014-A (BOTTOM)",
S01225: "BOX-B-015-A (TOP)",
S01205: "BOX-B-015-A (BOTTOM)",
S01223: "BOX-B-016-A (TOP)",
S01207: "BOX-B-016-A (BOTTOM)",
S01221: "BOX-B-017-A (TOP)",
S01209: "BOX-B-017-A (BOTTOM)",
S01219: "BOX-B-018-A (TOP)",
S01211: "BOX-B-018-A (BOTTOM)",
S01304: "FLAT-B-001 (TOP)",
S01126: "FLAT-B-001 (BOTTOM)",
S01302: "FLAT-B-002 (TOP)",
S01128: "FLAT-B-002 (BOTTOM)",
S01300: "FLAT-B-003 (TOP)",
S01130: "FLAT-B-003 (BOTTOM)",
S01299: "FLAT-B-004 (TOP)",
S01131: "FLAT-B-004 (BOTTOM)",
S01297: "FLAT-B-005 (TOP)",
S01133: "FLAT-B-005 (BOTTOM)",
S01294: "FLAT-B-006 (TOP)",
S01136: "FLAT-B-006 (BOTTOM)",
S01292: "FLAT-B-007 (TOP)",
S01138: "FLAT-B-007 (BOTTOM)",
S01290: "FLAT-B-008 (TOP)",
S01140: "FLAT-B-008 (BOTTOM)",
S01288: "FLAT-B-009 (TOP)",
S01142: "FLAT-B-009 (BOTTOM)",
S01284: "FLAT-B-010 (TOP)",
S01146: "FLAT-B-010 (BOTTOM)",
S01282: "FLAT-B-011 (TOP)",
S01148: "FLAT-B-011 (BOTTOM)",
S01280: "FLAT-B-012 (TOP)",
S01150: "FLAT-B-012 (BOTTOM)",
S01278: "FLAT-B-013 (TOP)",
S01152: "FLAT-B-013 (BOTTOM)",
S01276: "FLAT-B-014 (TOP)",
S01154: "FLAT-B-014 (BOTTOM)",
S01268: "FLAT-B-015 (TOP)",
S01162: "FLAT-B-015 (BOTTOM)",
S01265: "FLAT-B-016 (TOP)",
S01165: "FLAT-B-016 (BOTTOM)",
S01264: "FLAT-B-017 (TOP)",
S01166: "FLAT-B-017 (BOTTOM)",
S01262: "FLAT-B-018 (TOP)",
S01168: "FLAT-B-018 (BOTTOM)",
S01260: "FLAT-B-019 (TOP)",
S01170: "FLAT-B-019 (BOTTOM)",
S01258: "FLAT-B-020 (TOP)",
S01172: "FLAT-B-020 (BOTTOM)",
S01256: "FLAT-B-021 (TOP)",
S01174: "FLAT-B-021 (BOTTOM)",
S01306: "BOX-C-001-A (TOP)",
S01124: "BOX-C-001-A (BOTTOM)",
S01308: "BOX-C-002-A (TOP)",
S01122: "BOX-C-002-A (BOTTOM)",
S01310: "BOX-C-003-A (TOP)",
S01120: "BOX-C-003-A (BOTTOM)",
S01312: "BOX-C-004-A (TOP)",
S01118: "BOX-C-004-A (BOTTOM)",
S01315: "BOX-C-005-A (TOP)",
S01115: "BOX-C-005-A (BOTTOM)",
S01317: "BOX-C-006-A (TOP)",
S01113: "BOX-C-006-A (BOTTOM)",
S01319: "BOX-C-007-A (TOP)",
S01111: "BOX-C-007-A (BOTTOM)",
S01321: "BOX-C-008-A (TOP)",
S01109: "BOX-C-008-A (BOTTOM)",
S01323: "BOX-C-009-A (TOP)",
S01107: "BOX-C-009-A (BOTTOM)",
S01325: "BOX-C-010-A (TOP)",
S01105: "BOX-C-010-A (BOTTOM)",
S01327: "BOX-C-011-A (TOP)",
S01103: "BOX-C-011-A (BOTTOM)",
S01329: "BOX-C-012-A (TOP)",
S01101: "BOX-C-012-A (BOTTOM)",
S01333: "BOX-C-013-A (TOP)",
S01097: "BOX-C-013-A (BOTTOM)",
S01335: "BOX-C-014-A (TOP)",
S01095: "BOX-C-014-A (BOTTOM)",
S01337: "BOX-C-015-A (TOP)",
S01093: "BOX-C-015-A (BOTTOM)",
S01339: "BOX-C-016-A (TOP)",
S01091: "BOX-C-016-A (BOTTOM)",
S01341: "BOX-C-017-A (TOP)",
S01089: "BOX-C-017-A (BOTTOM)",
S01343: "BOX-C-018-A (TOP)",
S01087: "BOX-C-018-A (BOTTOM)",
S01345: "BOX-C-019-A (TOP)",
S01085: "BOX-C-019-A (BOTTOM)",
S01348: "BOX-C-020-A (TOP)",
S01082: "BOX-C-020-A (BOTTOM)",
S01350: "BOX-C-021-A (TOP)",
S01080: "BOX-C-021-A (BOTTOM)",
S01352: "BOX-C-022-A (TOP)",
S01078: "BOX-C-022-A (BOTTOM)",
S01354: "BOX-C-023-A (TOP)",
S01076: "BOX-C-023-A (BOTTOM)",
S01356: "BOX-C-024-A (TOP)",
S01074: "BOX-C-024-A (BOTTOM)",
S01370: "BOX-C-025-A (TOP)",
S01060: "BOX-C-025-A (BOTTOM)",
S01372: "BOX-C-026-A (TOP)",
S01058: "BOX-C-026-A (BOTTOM)",
S01374: "BOX-C-027-A (TOP)",
S01056: "BOX-C-027-A (BOTTOM)",
S01376: "BOX-C-028-A (TOP)",
S01054: "BOX-C-028-A (BOTTOM)",
S01378: "BOX-C-029-A (TOP)",
S01052: "BOX-C-029-A (BOTTOM)",
S01380: "BOX-C-030-A (TOP)",
S01050: "BOX-C-030-A (BOTTOM)",
S01383: "BOX-C-031-A (TOP)",
S01047: "BOX-C-031-A (BOTTOM)",
S01384: "BOX-C-032-A (TOP)",
S01046: "BOX-C-032-A (BOTTOM)",
S01387: "BOX-C-033-A (TOP)",
S01043: "BOX-C-033-A (BOTTOM)",
S01389: "BOX-C-034-A (TOP)",
S01041: "BOX-C-034-A (BOTTOM)",
S01391: "BOX-C-035-A (TOP)",
S01039: "BOX-C-035-A (BOTTOM)",
S01393: "BOX-C-036-A (TOP)",
S01037: "BOX-C-036-A (BOTTOM)",
S01395: "BOX-C-037-A (TOP)",
S01035: "BOX-C-037-A (BOTTOM)",
S01399: "BOX-C-038-A (TOP)",
S01033: "BOX-C-038-A (BOTTOM)",
S01399: "BOX-C-039-A (TOP)",
S01031: "BOX-C-039-A (BOTTOM)",
S01402: "BOX-C-040-A (TOP)",
S01028: "BOX-C-040-A (BOTTOM)",
S01404: "BOX-C-041-A (TOP)",
S01026: "BOX-C-041-A (BOTTOM)",
S01407: "BOX-C-042-A (TOP)",
S01023: "BOX-C-042-A (BOTTOM)",
S01409: "BOX-C-043-A (TOP)",
S01021: "BOX-C-043-A (BOTTOM)",
S01411: "BOX-C-044-A (TOP)",
S01019: "BOX-C-044-A (BOTTOM)",
S01413: "BOX-C-045-A (TOP)",
S01017: "BOX-C-045-A (BOTTOM)",
S01415: "BOX-C-046-A (TOP)",
S01015: "BOX-C-046-A (BOTTOM)",
S01417: "BOX-C-047-A (TOP)",
S01013: "BOX-C-047-A (BOTTOM)",
S01418: "BOX-C-048-A (TOP)",
S01012: "BOX-C-048-A (BOTTOM)",
S01296: “I don’t exist”,
S01134: “I don’t exist”,
S01298: "FLAT-C-001 (TOP)",
S01132: "FLAT-C-001 (BOTTOM)",
S01301: "FLAT-C-002 (TOP)",
S01129: "FLAT-C-002 (BOTTOM)",
S01303: "FLAT-C-003 (TOP)",
S01127: "FLAT-C-003 (BOTTOM)",
S01305: "FLAT-C-004 (TOP)",
S01125: "FLAT-C-004 (BOTTOM)",
S01365: "FLAT-C-005 (TOP)",
S01065: "FLAT-C-005 (BOTTOM)",
S01307: "BOX-D-001-A (TOP)",
S01123: "BOX-D-001-A (BOTTOM)",
S01309: "BOX-D-002-A (TOP)",
S01121: "BOX-D-002-A (BOTTOM)",
S01311: "BOX-D-003-A (TOP)",
S01119: "BOX-D-003-A (BOTTOM)",
S01313: "BOX-D-004-A (TOP)",
S01117: "BOX-D-004-A (BOTTOM)",
S01314: "BOX-D-005-A (TOP)",
S01116: "BOX-D-005-A (BOTTOM)",
S01316: "BOX-D-006-A (TOP)",
S01114: "BOX-D-006-A (BOTTOM)",
S01318: "BOX-D-007-A (TOP)",
S01112: "BOX-D-007-A (BOTTOM)",
S01320: "BOX-D-008-A (TOP)",
S01110: "BOX-D-008-A (BOTTOM)",
S01322: "BOX-D-009-A (TOP)",
S01108: "BOX-D-009-A (BOTTOM)",
S01324: "BOX-D-010-A (TOP)",
S01106: "BOX-D-010-A (BOTTOM)",
S01326: "BOX-D-011-A (TOP)",
S01104: "BOX-D-011-A (BOTTOM)",
S01328: "BOX-D-012-A (TOP)",
S01102: "BOX-D-012-A (BOTTOM)",
S01331: "BOX-D-013-A (TOP)",
S01099: "BOX-D-013-A (BOTTOM)",
S01334: "BOX-D-014-A (TOP)",
S01096: "BOX-D-014-A (BOTTOM)",
S01336: "BOX-D-015-A (TOP)",
S01094: "BOX-D-015-A (BOTTOM)",
S01338: "BOX-D-016-A (TOP)",
S01092: "BOX-D-016-A (BOTTOM)",
S01340: "BOX-D-017-A (TOP)",
S01090: "BOX-D-017-A (BOTTOM)",
S01342: "BOX-D-018-A (TOP)",
S01088: "BOX-D-018-A (BOTTOM)",
S01344: "BOX-D-019-A (TOP)",
S01086: "BOX-D-019-A (BOTTOM)",
S01347: "BOX-D-020-A (TOP)",
S01083: "BOX-D-020-A (BOTTOM)",
S01349: "BOX-D-021-A (TOP)",
S01081: "BOX-D-021-A (BOTTOM)",
S01351: "BOX-D-022-A (TOP)",
S01079: "BOX-D-022-A (BOTTOM)",
S01353: "BOX-D-023-A (TOP)",
S01077: "BOX-D-023-A (BOTTOM)",
S01355: "BOX-D-024-A (TOP)",
S01075: "BOX-D-024-A (BOTTOM)",
S01364: "BOX-D-025-A (TOP)",
S01066: "BOX-D-025-A (BOTTOM)",
S01371: "BOX-D-026-A (TOP)",
S01059: "BOX-D-026-A (BOTTOM)",
S01373: "BOX-D-027-A (TOP)",
S01057: "BOX-D-027-A (BOTTOM)",
S01375: "BOX-D-028-A (TOP)",
S01055: "BOX-D-028-A (BOTTOM)",
S01377: "BOX-D-029-A (TOP)",
S01053: "BOX-D-029-A (BOTTOM)",
S01379: "BOX-D-030-A (TOP)",
S01051: "BOX-D-030-A (BOTTOM)",
S01381: "BOX-D-031-A (TOP)",
S01049: "BOX-D-031-A (BOTTOM)",
S01382: "BOX-D-032-A (TOP)",
S01048: "BOX-D-032-A (BOTTOM)",
S01386: "BOX-D-033-A (TOP)",
S01044: "BOX-D-033-A (BOTTOM)",
S01388: "BOX-D-034-A (TOP)",
S01042: "BOX-D-034-A (BOTTOM)",
S01390: "BOX-D-035-A (TOP)",
S01040: "BOX-D-035-A (BOTTOM)",
S01392: "BOX-D-036-A (TOP)",
S01038: "BOX-D-036-A (BOTTOM)",
S01394: "BOX-D-037-A (TOP)",
S01036: "BOX-D-037-A (BOTTOM)",
S01396: "BOX-D-038-A (TOP)",
S01034: "BOX-D-038-A (BOTTOM)",
S01398: "BOX-D-039-A (TOP)",
S01032: "BOX-D-039-A (BOTTOM)",
S01403: "BOX-D-040-A (TOP)",
S01027: "BOX-D-040-A (BOTTOM)",
S01406: "BOX-D-041-A (TOP)",
S01024: "BOX-D-041-A (BOTTOM)",
S01408: "BOX-D-042-A (TOP)",
S01022: "BOX-D-042-A (BOTTOM)",
S01410: "BOX-D-043-A (TOP)",
S01020: "BOX-D-043-A (BOTTOM)",
S01412: "BOX-D-044-A (TOP)",
S01018: "BOX-D-044-A (BOTTOM)",
S01414: "BOX-D-045-A (TOP)",
S01016: "BOX-D-045-A (BOTTOM)",
S01416: "BOX-D-046-A (TOP)",
S01014: "BOX-D-046-A (BOTTOM)",
S01419: "BOX-D-047-A (TOP)",
S01011: "BOX-D-047-A (BOTTOM)",
S01420: "BOX-D-048-A (TOP)",
S01010: "BOX-D-048-A (BOTTOM)",
S01422: "BOX-D-049-A (TOP)",
S01008: "BOX-D-049-A (BOTTOM)",
S01424: "BOX-D-050-A (TOP)",
S01006: "BOX-D-050-A (BOTTOM)",
S01425: "BOX-D-051-A (TOP)",
S01005: "BOX-D-051-A (BOTTOM)",
S01427: "BOX-D-052-A (TOP)",
S01003: "BOX-D-052-A (BOTTOM)",
S01868: "FLATE-001",
S01862: "FLATE-002",
S01856: "FLATE-003",
S01850: "FLATE-004",
S01844: "FLATE-005",
S01838: "FLATE-006",
S01832: "FLATE-007",
S01826: "FLATE-008",
S01820: "FLATE-009",
S01814: "FLATE-010",
S01808: "FLATE-011",
S01802: "FLATE-012",
S01796: "FLATE-013",
S01790: "FLATE-014",
S01784: "FLATE-015",
S01778: "FLATE-016"
S01772: "FLATE-017",
S01766: "FLATE-018",
S01760: "FLATE-019",
S01754: "FLATE-020",
S01748: "FLATE-021",
S01742: "FLATE-022",
S01736: "FLATE-023",
S01730: "FLATE-024",
S01724: "FLATE-025",
S01718: "FLATE-026",
S01712: "FLATE-027",
S01706: "FLATE-028",
S01700: "FLATE-029",
S01694: "FLATE-030",
S01688: "FLATE-031",
S01870: "BG-E-001-A",
S01869: "BG-E-001-B",
S01864: "BG-E-002-A",
S01863: "BG-E-002-B",
S01858: "BG-E-003-A",
S01857: "BG-E-003-B",
S01852: "BG-E-004-A",
S01851: "BG-E-004-B",
S01846: "BG-E-005-A",
S01845: "BG-E-005-B",
S01840: "BG-E-006-A",
S01839: "BG-E-006-B",
S01834: "BG-E-007-A",
S01833: "BG-E-007-B",
S01828: "BG-E-008-A",
S01827: "BG-E-008-B",
S01822: "BG-E-009-A",
S01821: "BG-E-009-B",
S01816: "BG-E-010-A",
S01815: "BG-E-010-B",
S01810: "BG-E-011-A",
S01809: "BG-E-011-B",
S01804: "BG-E-012-A",
S01803: "BG-E-012-B",
S01798: "BG-E-013-A",
S01797: "BG-E-013-B",
S01792: "BG-E-014-A",
S01791: "BG-E-014-B",
S01786: "BG-E-015-A",
S01785: "BG-E-015-B",
S01780: "BG-E-016-A",
S01779: "BG-E-016-B",
S01774: "BG-E-017-A",
S01773: "BG-E-017-B",
S01768: "BG-E-018-A",
S01767: "BG-E-018-B",
S01762: "BG-E-019-A",
S01761: "BG-E-019-B",
S01756: "BG-E-020-A",
S01755: "BG-E-020-B",
S01750: "BG-E-021-A",
S01749: "BG-E-021-B",
S01744: "BG-E-022-A",
S01743: "BG-E-022-B",
S01738: "BG-E-023-A",
S01737: "BG-E-023-B",
S01732: "BG-E-024-A",
S01731: "BG-E-024-B",
S01726: "BG-E-025-A",
S01725: "BG-E-025-B",
S01720: "BG-E-026-A",
S01719: "BG-E-026-B",
S01714: "BG-E-027-A",
S01713: "BG-E-027-B",
S01708: "BG-E-028-A",
S01707: "BG-E-028-B",
S01702: "BG-E-029-A",
S01701: "BG-E-029-B",
S01696: "BG-E-030-A",
S01695: "BG-E-030-B",
S01690: "BG-E-031-A",
S01689: "BG-E-031-B",
S01865: "FLAT-F-001",
S01859: "FLAT-F-002",
S01847: "FLAT-F-003",
S01841: "FLAT-F-004",
S01835: "FLAT-F-005",
S01829: "FLAT-F-006",
S01817: "FLAT-F-007",
S01811: "FLAT-F-008",
S01805: "FLAT-F-009",
S01799: "FLAT-F-010",
S01787: "FLAT-F-011",
S01781: "FLAT-F-012",
S01775: "FLAT-F-013",
S01769: "FLAT-F-014",
S01757: "FLAT-F-015",
S01751: "FLAT-F-016",
S01745: "FLAT-F-017",
S01739: "FLAT-F-018",
S01733: "FLAT-F-019",
S01727: "FLAT-F-020",
S01721: "FLAT-F-021",
S01715: "FLAT-F-022",
S01703: "FLAT-F-023",
S01697: "FLAT-F-024",
S01691: "FLAT-F-025",
S01685: "FLAT-F-026",
S01867: "BG-F-001-A",
S01866: "BG-F-001-B",
S01861: "BG-F-002-A",
S01860: "BG-F-002-B",
S01849: "BG-F-003-A",
S01848: "BG-F-003-B",
S01843: "BG-F-004-A",
S01842: "BG-F-004-B",
S01837: "BG-F-005-A",
S01836: "BG-F-005-B",
S01831: "BG-F-006-A",
S01830: "BG-F-006-B",
S01819: "BG-F-007-A",
S01818: "BG-F-007-B",
S01813: "BG-F-008-A",
S01812: "BG-F-008-B",
S01807: "BG-F-009-A",
S01806: "BG-F-009-B",
S01801: "BG-F-010-A",
S01800: "BG-F-010-B",
S01789: "BG-F-011-A",
S01788: "BG-F-011-B",
S01783: "BG-F-012-A",
S01782: "BG-F-012-B",
S01777: "BG-F-013-A",
S01776: "BG-F-013-B",
S01771: "BG-F-014-A",
S01770: "BG-F-014-B",
S01759: "BG-F-015-A",
S01758: "BG-F-015-B",
S01753: "BG-F-016-A",
S01752: "BG-F-016-B",
S01747: "BG-F-017-A",
S01746: "BG-F-017-B",
S01741: "BG-F-018-A",
S01740: "BG-F-018-B",
S01735: "BG-F-019-A",
S01734: "BG-F-019-B",
S01729: "BG-F-020-A",
S01728: "BG-F-020-B",
S01723: "BG-F-021-A",
S01722: "BG-F-021-B",
S01717: "BG-F-022-A",
S01716: "BG-F-022-B",
S01705: "BG-F-023-A",
S01704: "BG-F-023-B",
S01699: "BG-F-024-A",
S01698: "BG-F-024-B",
S01693: "BG-F-025-A",
S01692: "BG-F-025-A",
S01687: "BG-F-026-A",
S01686: "BG-F-026-B",
S01443: "FLAT-G-001",
S01449: "FLAT-G-002",
S01455: "FLAT-G-003",
S01461: "FLAT-G-004",
S01467: "FLAT-G-005",
S01473: "FLAT-G-006",
S01479: "FLAT-G-007",
S01485: "FLAT-G-008",
S01491: "FLAT-G-009",
S01497: "FLAT-G-010",
S01503: "FLAT-G-011",
S01509: "FLAT-G-012",
S01515: "FLAT-G-013",
S01521: "FLAT-G-014",
S01527: "FLAT-G-015",
S01533: "FLAT-G-016",
S01539: "FLAT-G-017",
S01545: "FLAT-G-018",
S01551: "FLAT-G-019",
S01557: "FLAT-G-020",
S01563: "FLAT-G-021",
S01569: "FLAT-G-022",
S01575: "FLAT-G-023",
S01581: "FLAT-G-024",
S01587: "FLAT-G-025",
S01593: "FLAT-G-026",
S01599: "FLAT-G-027",
S01605: "FLAT-G-028",
S01611: "FLAT-G-029",
S01617: "FLAT-G-030",
S01623: "FLAT-G-031",
S01629: "FLAT-G-032",
S01635: "FLAT-G-033",
S01641: "FLAT-G-034",
S01647: "FLAT-G-035",
S01653: "FLAT-G-036",
S01659: "FLAT-G-037",
S01665: "FLAT-G-038",
S01671: "FLAT-G-039",
S01677: "FLAT-G-040",
S01444: "BG-G-001-A",
S01445: "BG-G-001-B",
S01450: "BG-G-002-A",
S01451: "BG-G-002-B",
S01456: "BG-G-003-A",
S01457: "BG-G-003-B",
S01462: "BG-G-004-A",
S01463: "BG-G-004-B",
S01468: "BG-G-005-A",
S01469: "BG-G-005-B",
S01474: "BG-G-006-A",
S01475: "BG-G-006-B",
S01480: "BG-G-007-A",
S01481: "BG-G-007-B",
S01486: "BG-G-008-A",
S01487: "BG-G-008-B",
S01492: "BG-G-009-A",
S01493: "BG-G-009-B",
S01498: "BG-G-010-A",
S01499: "BG-G-010-B",
S01504: "BG-G-011-A",
S01505: "BG-G-011-B",
S01510: "BG-G-012-A",
S01511: "BG-G-012-B",
S01516: "BG-G-013-A",
S01517: "BG-G-013-B",
S01522: "BG-G-014-A",
S01523: "BG-G-014-B",
S01528: "BG-G-015-A",
S01529: "BG-G-015-B",
S01534: "BG-G-016-A",
S01535: "BG-G-016-B",
S01540: "BG-G-017-A",
S01541: "BG-G-017-B",
S01546: "BG-G-018-A",
S01547: "BG-G-018-B",
S01552: "BG-G-019-A",
S01553: "BG-G-019-B",
S01558: "BG-G-020-A",
S01559: "BG-G-020-B",
S01564: "BG-G-021-A",
S01565: "BG-G-021-B",
S01570: "BG-G-022-A",
S01571: "BG-G-022-B",
S01576: "BG-G-023-A",
S01577: "BG-G-023-B",
S01582: "BG-G-024-A",
S01583: "BG-G-024-B",
S01588: "BG-G-025-A",
S01589: "BG-G-025-B",
S01594: "BG-G-026-A",
S01595: "BG-G-026-B",
S01600: "BG-G-027-A",
S01601: "BG-G-027-B",
S01606: "BG-G-028-A",
S01607: "BG-G-028-B",
S01612: "BG-G-029-A",
S01613: "BG-G-029-B",
S01618: "BG-G-030-A",
S01619: "BG-G-030-B",
S01624: "BG-G-031-A",
S01625: "BG-G-031-B",
S01630: "BG-G-032-A",
S01631: "BG-G-032-B",
S01636: "BG-G-033-A",
S01637: "BG-G-033-B",
S01642: "BG-G-034-A",
S01643: "BG-G-034-B",
S01648: "BG-G-035-A",
S01649: "BG-G-035-B",
S01654: "BG-G-036-A",
S01655: "BG-G-036-B",
S01660: "BG-G-037-A",
S01661: "BG-G-037-B",
S01666: "BG-G-038-A",
S01667: "BG-G-038-B",
S01672: "BG-G-039-A",
S01673: "BG-G-039-B",
S01678: "BG-G-040-A",
S01679: "BG-G-040-B",
S01440: "FLAT-H-001",
S01446: "FLAT-H-002",
S01452: "FLAT-H-003",
S01458: "FLAT-H-004",
S01464: "FLAT-H-005",
S01476: "FLAT-H-006",
S01482: "FLAT-H-007",
S01488: "FLAT-H-008",
S01494: "FLAT-H-009",
S01506: "FLAT-H-010",
S01512: "FLAT-H-011",
S01518: "FLAT-H-012",
S01524: "FLAT-H-013",
S01536: "FLAT-H-014",
S01542: "FLAT-H-015",
S01548: "FLAT-H-016",
S01554: "FLAT-H-017",
S01566: "FLAT-H-018",
S01572: "FLAT-H-019",
S01578: "FLAT-H-020",
S01584: "FLAT-H-021",
S01590: "FLAT-H-022",
S01596: "FLAT-H-023",
S01602: "FLAT-H-024",
S01608: "FLAT-H-025",
S01614: "FLAT-H-026",
S01620: "FLAT-H-027",
S01626: "FLAT-H-028",
S01632: "FLAT-H-029",
S01638: "FLAT-H-030",
S01650: "FLAT-H-031",
S01656: "FLAT-H-032",
S01662: "FLAT-H-033",
S01668: "FLAT-H-034",
S01674: "FLAT-H-035",
S01441: "BG-H-001-A",
S01442: "BG-H-001-B",
S01447: "BG-H-002-A",
S01448: "BG-H-002-B",
S01453: "BG-H-003-A",
S01454: "BG-H-003-B",
S01459: "BG-H-004-A",
S01460: "BG-H-004-B",
S01465: "BG-H-005-A",
S01466: "BG-H-005-B",
S01477: "BG-H-006-A",
S01478: "BG-H-006-B",
S01483: "BG-H-007-A",
S01484: "BG-H-007-B",
S01489: "BG-H-008-A",
S01490: "BG-H-008-B",
S01495: "BG-H-009-A",
S01496: "BG-H-009-B",
S01507: "BG-H-010-A",
S01508: "BG-H-010-B",
S01513: "BG-H-011-A",
S01514: "BG-H-011-B",
S01519: "BG-H-012-A",
S01520: "BG-H-012-B",
S01525: "BG-H-013-A",
S01526: "BG-H-013-B",
S01537: "BG-H-014-A",
S01538: "BG-H-014-B",
S01543: "BG-H-015-A",
S01544: "BG-H-015-B",
S01549: "BG-H-016-A",
S01550: "BG-H-016-B",
S01555: "BG-H-017-A",
S01556: "BG-H-017-B",
S01567: "BG-H-018-A",
S01568: "BG-H-018-B",
S01573: "BG-H-019-A",
S01574: "BG-H-019-B",
S01579: "BG-H-020-A",
S01580: "BG-H-020-B",
S01585: "BG-H-021-A",
S01586: "BG-H-021-B",
S01591: "BG-H-022-A",
S01592: "BG-H-022-B",
S01597: "BG-H-023-A",
S01598: "BG-H-023-B",
S01603: "BG-H-024-A",
S01604: "BG-H-024-B",
S01609: "BG-H-025-A",
S01610: "BG-H-025-B",
S01615: "BG-H-026-A",
S01616: "BG-H-026-B",
S01621: "BG-H-027-A",
S01622: "BG-H-027-B",
S01627: "BG-H-028-A",
S01628: "BG-H-028-B",
S01633: "BG-H-029-A",
S01634: "BG-H-029-B",
S01639: "BG-H-030-A",
S01640: "BG-H-030-B",
S01651: "BG-H-031-A",
S01652: "BG-H-031-B",
S01657: "BG-H-032-A",
S01658: "BG-H-032-B",
S01663: "BG-H-033-A",
S01664: "BG-H-033-B",
S01669: "BG-H-034-A",
S01670: "BG-H-034-B",
S01675: "BG-H-035-A",
S01676: "BG-H-035-B",
S01214: "JP TSO",
S01428: "CHUTE BYPASS",
S01435: "JP MANUAL INDUCT",
S01890: "JP MANUAL INDUCT",


        };

        regex = {};
        for (key in replacements) {
            regex[key] = new RegExp(key, "g");
        }

        textnodes = document.evaluate(
            "//body//text()",
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null
        );

        for (var i = 0; i < textnodes.snapshotLength; i++) {
            node = textnodes.snapshotItem(i);
            s = node.data;
            for (key in replacements) {
                s = s.replace(regex[key], replacements[key]);
            }
            node.data = s;
        }
    })();

}, 5000);








