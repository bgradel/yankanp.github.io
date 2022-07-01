'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6a9da49fb25cc5ffb07dd7f9514a658f",
"assets/assets/faces/faces.py": "835ae0a4ab4e19dc3c20462979e38c91",
"assets/assets/faces/sample_images/0.jpg": "0388f842686c50d08c969300e4baf704",
"assets/assets/faces/sample_images/1.jpg": "535df75c5a6f2484a22cd3bf7ede9367",
"assets/assets/faces/sample_images/10.jpg": "71cadbe7cf0ff07f708aceca3150dbd0",
"assets/assets/faces/sample_images/11.jpg": "2e7c63d8d34a026beba28c03f6313216",
"assets/assets/faces/sample_images/12.jpg": "232d604f9da961df9007c96776b03d0d",
"assets/assets/faces/sample_images/13.jpg": "f2c48957a1f530e7ebc94522f3109cb5",
"assets/assets/faces/sample_images/14.jpg": "3d86cb7c673e83609182fbaf35f55c9f",
"assets/assets/faces/sample_images/15.jpg": "9bfc53a13923425b5503402e9a4cff0a",
"assets/assets/faces/sample_images/16.jpg": "c3b4db86e8141a231a453d9936b19aaf",
"assets/assets/faces/sample_images/17.jpg": "d03b225d821674a57204b592728d5a90",
"assets/assets/faces/sample_images/18.jpg": "8f7de41fe969bb1b3812e3898ad1c528",
"assets/assets/faces/sample_images/19.jpg": "d8aff156de8957e5d0df138b70a65709",
"assets/assets/faces/sample_images/2.jpg": "91978d73bb831eac188488800c1f7626",
"assets/assets/faces/sample_images/20.jpg": "2e229a4c3e9cd43fe949962e9dd9f2f4",
"assets/assets/faces/sample_images/21.jpg": "9cf72f9e5398cea8b8e2be99f7b8d815",
"assets/assets/faces/sample_images/22.jpg": "fc17cdd1c61bf714ccc34b264a52f211",
"assets/assets/faces/sample_images/23.jpg": "45aba596dadf471c4827396c35c48408",
"assets/assets/faces/sample_images/24.jpg": "35d26ea5f9a7349516f5fc01d480cf08",
"assets/assets/faces/sample_images/25.jpg": "97a0f92ae1eefb69d2554cbf0a31e888",
"assets/assets/faces/sample_images/26.jpg": "45efbd2be5b41b1ef5395e0f60532a31",
"assets/assets/faces/sample_images/27.jpg": "8d76f5c132045493dc5fe5db78e24498",
"assets/assets/faces/sample_images/28.jpg": "fc7acdc6d4fa36791d14b02aabdf5e39",
"assets/assets/faces/sample_images/29.jpg": "bf6d66d49ddb3496add44c7d6aaae4e6",
"assets/assets/faces/sample_images/3.jpg": "178472694b83dc0d605f7c7233fdf024",
"assets/assets/faces/sample_images/30.jpg": "c5b9b43d25f1e7005b9e570f127a09a3",
"assets/assets/faces/sample_images/31.jpg": "8996b5d05a1cd91846c181b0bdbcd888",
"assets/assets/faces/sample_images/32.jpg": "361139c0f5f2a278fd265b97727536ae",
"assets/assets/faces/sample_images/33.jpg": "1c5852295fee31d7e487515756e9da95",
"assets/assets/faces/sample_images/34.jpg": "3722f6e81b026a89bf2fe78493d324fd",
"assets/assets/faces/sample_images/35.jpg": "f52005c0fc4503b20006524514b92c13",
"assets/assets/faces/sample_images/36.jpg": "402c3afa79238d80da94f474b74033a3",
"assets/assets/faces/sample_images/37.jpg": "42a9e7140ca2149f1e31f2134d76252f",
"assets/assets/faces/sample_images/38.jpg": "6a4b580487d1877b77ecb1fbf55b9d6f",
"assets/assets/faces/sample_images/39.jpg": "0a1afd59f865a3b694939377d38c3e78",
"assets/assets/faces/sample_images/4.jpg": "214cbd86dcbe357d968a5a8acd63d76a",
"assets/assets/faces/sample_images/40.jpg": "73bc73e74338b412ca6d288fb2efa1ec",
"assets/assets/faces/sample_images/41.jpg": "7bdb5aa79b11b53e15d9284e5db2f3a1",
"assets/assets/faces/sample_images/42.jpg": "5fa3ef2af1187bda8f8324b497403b98",
"assets/assets/faces/sample_images/43.jpg": "ca07df3112abe99f708d7682cb478481",
"assets/assets/faces/sample_images/44.jpg": "89a0af0685af7878fc9afb6e342226de",
"assets/assets/faces/sample_images/45.jpg": "e4d4108921a916de1f7e72175f8348bd",
"assets/assets/faces/sample_images/46.jpg": "631682fbc69179466102467982326703",
"assets/assets/faces/sample_images/47.jpg": "b1b0ad4adf4e7792414694739ccee0db",
"assets/assets/faces/sample_images/48.jpg": "6f0a39724ca3a18b2ec361b26135aafc",
"assets/assets/faces/sample_images/49.jpg": "6399088fc50488b7d003f393fa259f0d",
"assets/assets/faces/sample_images/5.jpg": "d7f5f8d9fbcc9a05764339e3ef0367a5",
"assets/assets/faces/sample_images/50.jpg": "d748503b29ed3e525f613f89f3754fc2",
"assets/assets/faces/sample_images/51.jpg": "0ec777084716c4f1705662e0f7b68bb7",
"assets/assets/faces/sample_images/52.jpg": "19f6faa21397b6f9dafe12e86743f16c",
"assets/assets/faces/sample_images/53.jpg": "701c14591ff6475c3aef1fd397af1ddd",
"assets/assets/faces/sample_images/54.jpg": "6bbaa1ea41530ce3bd5f690912f7ab19",
"assets/assets/faces/sample_images/55.jpg": "5d2a816516331382be9270697ae55bb6",
"assets/assets/faces/sample_images/56.jpg": "fad5d2599275a1ddab613bb1b58415b0",
"assets/assets/faces/sample_images/57.jpg": "dddc63f38edaf354a2839842df4f1c04",
"assets/assets/faces/sample_images/58.jpg": "f2d51dff87785c0de3d37ac88858af0f",
"assets/assets/faces/sample_images/59.jpg": "17373c96ad3517e880e00d71df9dbb75",
"assets/assets/faces/sample_images/6.jpg": "23d23d577754b2a421479c8d89367e1e",
"assets/assets/faces/sample_images/60.jpg": "141b908919a67465bc989fa28aec5692",
"assets/assets/faces/sample_images/61.jpg": "e10db26843f2ae3d8b17cc4ccad37740",
"assets/assets/faces/sample_images/62.jpg": "0b97778da6e32fcc16dd47a530b00036",
"assets/assets/faces/sample_images/63.jpg": "49599225507ff703b68dac8a4fd6cf8a",
"assets/assets/faces/sample_images/64.jpg": "293c7e1a1a104944c4349c68361bd3bf",
"assets/assets/faces/sample_images/65.jpg": "5f4d3d83b3ad1b10db772df8e7b448d9",
"assets/assets/faces/sample_images/7.jpg": "c3847719da7a8818806f4d9d994ef048",
"assets/assets/faces/sample_images/8.jpg": "0c47ab3bd9575f3f1ecb8e21b322ef84",
"assets/assets/faces/sample_images/9.jpg": "75c48684cf03b402a07411da3a4e2f31",
"assets/assets/faces/sample_images/distorted/blur/0_blur.jpg": "3f5635ed256f4eaa1a3e949b4ab58f6e",
"assets/assets/faces/sample_images/distorted/blur/10_blur.jpg": "181a384573a8534d5ee4ed6f113e63a5",
"assets/assets/faces/sample_images/distorted/blur/11_blur.jpg": "d165a1423219b558f3388377d0c09b35",
"assets/assets/faces/sample_images/distorted/blur/12_blur.jpg": "3ebb15c293a72dd311f14bb8d265d3fb",
"assets/assets/faces/sample_images/distorted/blur/13_blur.jpg": "3af10944c643792e330fd6161fccf83f",
"assets/assets/faces/sample_images/distorted/blur/14_blur.jpg": "6073146e767081a83cf2204a62eb7336",
"assets/assets/faces/sample_images/distorted/blur/15_blur.jpg": "6e16959b039b4fbae2aff58215616a1c",
"assets/assets/faces/sample_images/distorted/blur/16_blur.jpg": "fd3ddf4c2f05ea385a99fd617f0c49d1",
"assets/assets/faces/sample_images/distorted/blur/17_blur.jpg": "6ad6ca30a23da08e247cdde7b96a0797",
"assets/assets/faces/sample_images/distorted/blur/18_blur.jpg": "8cd958c3db5cd0e69047bf9b83677f20",
"assets/assets/faces/sample_images/distorted/blur/19_blur.jpg": "63d001a1de53a8bcedbd8e5c86e12a92",
"assets/assets/faces/sample_images/distorted/blur/1_blur.jpg": "6d6467639aeedeb0afd7a68fb1508ac1",
"assets/assets/faces/sample_images/distorted/blur/20_blur.jpg": "65255e0c45f84b2722e1d2b9bf4b71ba",
"assets/assets/faces/sample_images/distorted/blur/21_blur.jpg": "71693f00372b5ab903cad2f9c33b2950",
"assets/assets/faces/sample_images/distorted/blur/22_blur.jpg": "132bdb6a7918ee968cb2e8acce2e8978",
"assets/assets/faces/sample_images/distorted/blur/23_blur.jpg": "a80af0add36f9aa6cb6fd3eea9db2dd9",
"assets/assets/faces/sample_images/distorted/blur/24_blur.jpg": "52bcd0407ad4a36062a14d5a9933c302",
"assets/assets/faces/sample_images/distorted/blur/25_blur.jpg": "93ca59f07f0c5a81cbbad27e54bc663c",
"assets/assets/faces/sample_images/distorted/blur/26_blur.jpg": "7cd2f5661ba4d6a5d0a91fdd894767ad",
"assets/assets/faces/sample_images/distorted/blur/27_blur.jpg": "ced47e43f2c01ac89045e67c18403b10",
"assets/assets/faces/sample_images/distorted/blur/28_blur.jpg": "211e6c019fa6737419435e188e5b5d3d",
"assets/assets/faces/sample_images/distorted/blur/29_blur.jpg": "3de8391f09cbf86b0c82f0b0f8d08751",
"assets/assets/faces/sample_images/distorted/blur/2_blur.jpg": "c7e8ab3c9818d7c0a830827b69eb457f",
"assets/assets/faces/sample_images/distorted/blur/30_blur.jpg": "0f96c5d6f622844e0dae4e7c25f374b3",
"assets/assets/faces/sample_images/distorted/blur/31_blur.jpg": "dda679cee779efe1b019ba002bbf066f",
"assets/assets/faces/sample_images/distorted/blur/32_blur.jpg": "e5e58e1851f9db625215e3e907134556",
"assets/assets/faces/sample_images/distorted/blur/33_blur.jpg": "8fd7c9e85a2de57ef76942563f9262c8",
"assets/assets/faces/sample_images/distorted/blur/34_blur.jpg": "38b981449f152bc369948a2bba50d84a",
"assets/assets/faces/sample_images/distorted/blur/35_blur.jpg": "075faead40227c12b6f2773e1c243f69",
"assets/assets/faces/sample_images/distorted/blur/36_blur.jpg": "fe661953ba99fc0558119230fbfcf2ce",
"assets/assets/faces/sample_images/distorted/blur/37_blur.jpg": "affba47c8f7bff1caf640b32ee168ada",
"assets/assets/faces/sample_images/distorted/blur/38_blur.jpg": "5d927fada6e85adabcd7af71cf5eaa56",
"assets/assets/faces/sample_images/distorted/blur/39_blur.jpg": "7950fb787008e20b6e30b92c15bc0b72",
"assets/assets/faces/sample_images/distorted/blur/3_blur.jpg": "b46e62920b53dd692158a4cac2907913",
"assets/assets/faces/sample_images/distorted/blur/40_blur.jpg": "d4355ef110c3d3e7f2d7ff10eb8eb72e",
"assets/assets/faces/sample_images/distorted/blur/41_blur.jpg": "8eaf3d56c49547366b34a5c0fe0cf2ee",
"assets/assets/faces/sample_images/distorted/blur/42_blur.jpg": "6f86b5f2d6ca3b3d4138314f5fced5b3",
"assets/assets/faces/sample_images/distorted/blur/43_blur.jpg": "50b773bbc2eeb228d26cbe09cba7a154",
"assets/assets/faces/sample_images/distorted/blur/44_blur.jpg": "8e7e216dacea35d2ad91620c8ee8aa27",
"assets/assets/faces/sample_images/distorted/blur/45_blur.jpg": "c02db9b381fa36831691b0082ec48797",
"assets/assets/faces/sample_images/distorted/blur/46_blur.jpg": "4cba13a02be10a5e3ea98bb11dfb824e",
"assets/assets/faces/sample_images/distorted/blur/47_blur.jpg": "21df7f60315ea51c8ee0922f0dc44c47",
"assets/assets/faces/sample_images/distorted/blur/48_blur.jpg": "6ff80a96ff0fd5b31fedf8daeb81b382",
"assets/assets/faces/sample_images/distorted/blur/49_blur.jpg": "1712061055eb4f71d0e9069b819be115",
"assets/assets/faces/sample_images/distorted/blur/4_blur.jpg": "744c0cefcc4859191d3bb1a8f61b044a",
"assets/assets/faces/sample_images/distorted/blur/50_blur.jpg": "82e64dee83f3cb8ad2015f8d97d4929c",
"assets/assets/faces/sample_images/distorted/blur/51_blur.jpg": "a8415f546dd1f93871611fb580ca2fbf",
"assets/assets/faces/sample_images/distorted/blur/52_blur.jpg": "23507ef3544d1c7a75e69782f2d159bf",
"assets/assets/faces/sample_images/distorted/blur/53_blur.jpg": "67202f766bb0805c471f7b8fd149618b",
"assets/assets/faces/sample_images/distorted/blur/54_blur.jpg": "a72741058529b34fc17679e991d4921c",
"assets/assets/faces/sample_images/distorted/blur/55_blur.jpg": "253bdb0cce45a51eebc79b5cd53548d4",
"assets/assets/faces/sample_images/distorted/blur/56_blur.jpg": "8a81c35648829b3ca98c586ddce66d79",
"assets/assets/faces/sample_images/distorted/blur/57_blur.jpg": "c4d42098e1dae2306cfd9aa18a7c4e00",
"assets/assets/faces/sample_images/distorted/blur/58_blur.jpg": "921da78a5ba50d8cc505ee2bacbfac0c",
"assets/assets/faces/sample_images/distorted/blur/59_blur.jpg": "f963e861323399dbba7bf0c970573b08",
"assets/assets/faces/sample_images/distorted/blur/5_blur.jpg": "f6c6905852b1b90569a848e2050e6394",
"assets/assets/faces/sample_images/distorted/blur/60_blur.jpg": "472fa2d88c0fcd83bf402965b58c50e6",
"assets/assets/faces/sample_images/distorted/blur/61_blur.jpg": "a4cc74e7c4453ba095c14bb454020b6e",
"assets/assets/faces/sample_images/distorted/blur/62_blur.jpg": "f13b5bbcd21496e9d796b14157552898",
"assets/assets/faces/sample_images/distorted/blur/63_blur.jpg": "e0fc66ddc948da4c2ee38054b8b444a3",
"assets/assets/faces/sample_images/distorted/blur/64_blur.jpg": "c69b1b6e6a16aa16167fed744982caeb",
"assets/assets/faces/sample_images/distorted/blur/65_blur.jpg": "c32d103adfc4f561a04213c4b91595d1",
"assets/assets/faces/sample_images/distorted/blur/6_blur.jpg": "0310464679246e18471c18a5fbb14e5a",
"assets/assets/faces/sample_images/distorted/blur/7_blur.jpg": "b8618ec07b8fec2424df1d19ad2df7c2",
"assets/assets/faces/sample_images/distorted/blur/8_blur.jpg": "580a13a6ff09ff1b296f1cd07e73675b",
"assets/assets/faces/sample_images/distorted/blur/9_blur.jpg": "6823e26c0119f8f765d44cfc2fb91eb5",
"assets/assets/faces/sample_images/distorted/edges/0_edges.jpg": "a0f4fb67edf7389ebaf79a56e6af3bfb",
"assets/assets/faces/sample_images/distorted/edges/10_edges.jpg": "8d14499a1c79d7eca8c73ffe4b984260",
"assets/assets/faces/sample_images/distorted/edges/11_edges.jpg": "0f869787a4b7a101ba5e0a585d1b0341",
"assets/assets/faces/sample_images/distorted/edges/12_edges.jpg": "f24faa3e4c9bba0ca36c8019aba92102",
"assets/assets/faces/sample_images/distorted/edges/13_edges.jpg": "403141fef189c924f4728348e55481f1",
"assets/assets/faces/sample_images/distorted/edges/14_edges.jpg": "64d35dbdfe99d97c07908c42f7282ad9",
"assets/assets/faces/sample_images/distorted/edges/15_edges.jpg": "1eb92c63587ecbe2f11f187132278767",
"assets/assets/faces/sample_images/distorted/edges/16_edges.jpg": "d7f58e7e63fca1aa099850d732f58e74",
"assets/assets/faces/sample_images/distorted/edges/17_edges.jpg": "a87eea3f1366c2d3319c44792b8eebc6",
"assets/assets/faces/sample_images/distorted/edges/18_edges.jpg": "a1e2edea911e6bc94f28c68f7878fda4",
"assets/assets/faces/sample_images/distorted/edges/19_edges.jpg": "cd4ba6e7e090f9d59884e5c03b3017d6",
"assets/assets/faces/sample_images/distorted/edges/1_edges.jpg": "3828e2deed2a6908026dab2a628d7d19",
"assets/assets/faces/sample_images/distorted/edges/20_edges.jpg": "0c2c02f3ae85c2a88eb23c2870936936",
"assets/assets/faces/sample_images/distorted/edges/21_edges.jpg": "ee5f7a69803dd5dddb4daa83b00317f8",
"assets/assets/faces/sample_images/distorted/edges/22_edges.jpg": "abe9055df1ad1239e1a202b91e4d36bc",
"assets/assets/faces/sample_images/distorted/edges/23_edges.jpg": "c6456d2e2b2072149c3afbc82b31129a",
"assets/assets/faces/sample_images/distorted/edges/24_edges.jpg": "ae9bf54d94ddab9e1ca2785ed0273716",
"assets/assets/faces/sample_images/distorted/edges/25_edges.jpg": "d9d28f64b06a0b5e286db33b268e2380",
"assets/assets/faces/sample_images/distorted/edges/26_edges.jpg": "c52b639980db401c041a94be6f8f383f",
"assets/assets/faces/sample_images/distorted/edges/27_edges.jpg": "f9ff2f42060dc76e724255807b4d2063",
"assets/assets/faces/sample_images/distorted/edges/28_edges.jpg": "d701f0307d719e62b8a745219a5439f6",
"assets/assets/faces/sample_images/distorted/edges/29_edges.jpg": "a19350f784c5877a74282c66abb55d38",
"assets/assets/faces/sample_images/distorted/edges/2_edges.jpg": "62921aed944c6f864dc41192ee40dfa9",
"assets/assets/faces/sample_images/distorted/edges/30_edges.jpg": "963619eff63e3d44d973bcf65cb6b285",
"assets/assets/faces/sample_images/distorted/edges/31_edges.jpg": "6ed75b1b06477060b2e57302eb92edfa",
"assets/assets/faces/sample_images/distorted/edges/32_edges.jpg": "1afa5a47d4abc627d5a6dd212fa286db",
"assets/assets/faces/sample_images/distorted/edges/33_edges.jpg": "d4ce83873c32276a7794ffd729630510",
"assets/assets/faces/sample_images/distorted/edges/34_edges.jpg": "2b491e6388d8fc9937dae6785bcf5907",
"assets/assets/faces/sample_images/distorted/edges/35_edges.jpg": "2ae7247a92dcdf92118c01d97d4ce4d5",
"assets/assets/faces/sample_images/distorted/edges/36_edges.jpg": "2cb5dec61ab0fb1dd74cedec6ebc4267",
"assets/assets/faces/sample_images/distorted/edges/37_edges.jpg": "44a2acbf7681e99683ad96d7beab7b52",
"assets/assets/faces/sample_images/distorted/edges/38_edges.jpg": "86023a24d6ee51443023b88dac0ae43c",
"assets/assets/faces/sample_images/distorted/edges/39_edges.jpg": "33f558777148918a1c0807631bacdd11",
"assets/assets/faces/sample_images/distorted/edges/3_edges.jpg": "29a24a586abfc34dd820dc1041718b83",
"assets/assets/faces/sample_images/distorted/edges/40_edges.jpg": "a98d3682a3a04ae78d589351db115ed8",
"assets/assets/faces/sample_images/distorted/edges/41_edges.jpg": "bc9ee18139b12566f4b7525ce4518e52",
"assets/assets/faces/sample_images/distorted/edges/42_edges.jpg": "18a9f80833f17f78fac0d6bdc3e68cef",
"assets/assets/faces/sample_images/distorted/edges/43_edges.jpg": "69857b063732f17a302308692d3f4cd2",
"assets/assets/faces/sample_images/distorted/edges/44_edges.jpg": "3306a2988f9be93fcbeec132edef23d7",
"assets/assets/faces/sample_images/distorted/edges/45_edges.jpg": "0f2a37460f592908075ccf08897045c4",
"assets/assets/faces/sample_images/distorted/edges/46_edges.jpg": "e438c31b324e26e58d4a9ba417fb984d",
"assets/assets/faces/sample_images/distorted/edges/47_edges.jpg": "8c5983688f760c161e72392ba6f29e44",
"assets/assets/faces/sample_images/distorted/edges/48_edges.jpg": "c09ba8269c80b337fca5164910f41f3e",
"assets/assets/faces/sample_images/distorted/edges/49_edges.jpg": "b7e208d4013b19a2575f0eda9d088aaa",
"assets/assets/faces/sample_images/distorted/edges/4_edges.jpg": "c66de932ad85aeb51290c12db70d7790",
"assets/assets/faces/sample_images/distorted/edges/50_edges.jpg": "7b15815c4e0d998cc0ba02dcdd163788",
"assets/assets/faces/sample_images/distorted/edges/51_edges.jpg": "31659c7cee0547320744fe220b6f3d56",
"assets/assets/faces/sample_images/distorted/edges/52_edges.jpg": "31c84b2f73347eb5f3ddf418d3e95211",
"assets/assets/faces/sample_images/distorted/edges/53_edges.jpg": "726597cfc611e547700322025c9879f0",
"assets/assets/faces/sample_images/distorted/edges/54_edges.jpg": "8f7bd85f4302741367cf8cf244fc23cb",
"assets/assets/faces/sample_images/distorted/edges/55_edges.jpg": "73d182a77f87a8dc941e146abd97fa33",
"assets/assets/faces/sample_images/distorted/edges/56_edges.jpg": "7e60bc563527defca9d095f15ad8e7b9",
"assets/assets/faces/sample_images/distorted/edges/57_edges.jpg": "db720210d46099946506aac3c9cbe535",
"assets/assets/faces/sample_images/distorted/edges/58_edges.jpg": "0b4d33b4d4614f4d5c8adc68bfcdac14",
"assets/assets/faces/sample_images/distorted/edges/59_edges.jpg": "88cc6ddf4ab827fee2bd483cee938b6a",
"assets/assets/faces/sample_images/distorted/edges/5_edges.jpg": "2d61a8133b93b8e08f9f62a14731f7d4",
"assets/assets/faces/sample_images/distorted/edges/60_edges.jpg": "5a82a7ab2da830024f141ca38bb4e2f0",
"assets/assets/faces/sample_images/distorted/edges/61_edges.jpg": "e47b61cb3d43908a32cf017e1fa97c12",
"assets/assets/faces/sample_images/distorted/edges/62_edges.jpg": "7bf8fe43ebca8dd0e18f26e5b460ffa4",
"assets/assets/faces/sample_images/distorted/edges/63_edges.jpg": "7b1d43230c69cf389ac4cda70f5b147b",
"assets/assets/faces/sample_images/distorted/edges/64_edges.jpg": "7bc262a077bfaa8c403bbd397d5131ed",
"assets/assets/faces/sample_images/distorted/edges/65_edges.jpg": "709a3cc78882d51a14f59c73069779a8",
"assets/assets/faces/sample_images/distorted/edges/6_edges.jpg": "39e086d4476b2e64401bec9c92ed0170",
"assets/assets/faces/sample_images/distorted/edges/7_edges.jpg": "b01b96d7e44f127cb49549a1ef3fb465",
"assets/assets/faces/sample_images/distorted/edges/8_edges.jpg": "0225aa80de9d1575259e92d23ee62609",
"assets/assets/faces/sample_images/distorted/edges/9_edges.jpg": "36fe3f598b1c17d0c91435ff50b2b372",
"assets/assets/faces/sample_images/distorted/polar/0_polar.jpg": "ce9ca6003f591c20dcd48811f9bace95",
"assets/assets/faces/sample_images/distorted/polar/10_polar.jpg": "f53637e22a0af752a621be248bf6f0a8",
"assets/assets/faces/sample_images/distorted/polar/11_polar.jpg": "0173f27e9c7be59a0d6b41b0c33b2a8e",
"assets/assets/faces/sample_images/distorted/polar/12_polar.jpg": "009028d39692635868aef17ae5e1f26f",
"assets/assets/faces/sample_images/distorted/polar/13_polar.jpg": "be93aac997d854c1315fb769b320e1ec",
"assets/assets/faces/sample_images/distorted/polar/14_polar.jpg": "8f4eeba92987eddf1e9b88c01a2781f4",
"assets/assets/faces/sample_images/distorted/polar/15_polar.jpg": "a2f5c37677bfeee6ecd5e0b6d7ebc5e9",
"assets/assets/faces/sample_images/distorted/polar/16_polar.jpg": "29285652ff0af61e89a51c834d103481",
"assets/assets/faces/sample_images/distorted/polar/17_polar.jpg": "0b599d2643689044c33f7314d88c1eed",
"assets/assets/faces/sample_images/distorted/polar/18_polar.jpg": "d4bc8259eb31e5a2c66143ea39aa5ef9",
"assets/assets/faces/sample_images/distorted/polar/19_polar.jpg": "fd40f21e4d83cacf56aef499bbf53c85",
"assets/assets/faces/sample_images/distorted/polar/1_polar.jpg": "58f347c70dd90379b1e776595107f5c1",
"assets/assets/faces/sample_images/distorted/polar/20_polar.jpg": "ff3adcfbe016607f89d51234f33fa7d2",
"assets/assets/faces/sample_images/distorted/polar/21_polar.jpg": "50bce6a32d0690755b3399434618a891",
"assets/assets/faces/sample_images/distorted/polar/22_polar.jpg": "545dc824ecc8699374ddcb0aecd9fc43",
"assets/assets/faces/sample_images/distorted/polar/23_polar.jpg": "0231d9a2dcfb940161bc228337b9a98a",
"assets/assets/faces/sample_images/distorted/polar/24_polar.jpg": "41d20a7d17d86d56bd4456669e325960",
"assets/assets/faces/sample_images/distorted/polar/25_polar.jpg": "1f765cc9e9a938ae91f27d96f48455de",
"assets/assets/faces/sample_images/distorted/polar/26_polar.jpg": "85730f80d085524e79574143fdaf6c68",
"assets/assets/faces/sample_images/distorted/polar/27_polar.jpg": "5e58b6223c8443fa961165b4cbd6c0a1",
"assets/assets/faces/sample_images/distorted/polar/28_polar.jpg": "2c1137326aba889c055cf1f74c1684a2",
"assets/assets/faces/sample_images/distorted/polar/29_polar.jpg": "2ffd79fc23ee88e0859d833121839fee",
"assets/assets/faces/sample_images/distorted/polar/2_polar.jpg": "11694bd23f22190d37f432f18aefd87c",
"assets/assets/faces/sample_images/distorted/polar/30_polar.jpg": "45638bd0d07d9a71ea22d5ae533e137a",
"assets/assets/faces/sample_images/distorted/polar/31_polar.jpg": "065360fe78cbcbd2fbce864585054e52",
"assets/assets/faces/sample_images/distorted/polar/32_polar.jpg": "e237efabbc7c142a2b4af1a6256d6693",
"assets/assets/faces/sample_images/distorted/polar/33_polar.jpg": "98ae9583fc8ef7493792d5d5862c35ee",
"assets/assets/faces/sample_images/distorted/polar/34_polar.jpg": "15e3f706ac427b9403d209e0cfc1c8a8",
"assets/assets/faces/sample_images/distorted/polar/35_polar.jpg": "89cebf568fe08892ab43fcf1ed01a787",
"assets/assets/faces/sample_images/distorted/polar/36_polar.jpg": "0639579ad4886570b853e0be14b4e3bf",
"assets/assets/faces/sample_images/distorted/polar/37_polar.jpg": "f9bea93ee4e010527c8bf1c5ffa7a770",
"assets/assets/faces/sample_images/distorted/polar/38_polar.jpg": "792504a0ae0959c4fac8e93b2fc95072",
"assets/assets/faces/sample_images/distorted/polar/39_polar.jpg": "e4d6e229ef488375b0ecb3b0f34415c3",
"assets/assets/faces/sample_images/distorted/polar/3_polar.jpg": "48f5831ea5831f8dbcf637b36e29b7a2",
"assets/assets/faces/sample_images/distorted/polar/40_polar.jpg": "38923d14478533ef339cafc414aeef14",
"assets/assets/faces/sample_images/distorted/polar/41_polar.jpg": "b30c1ec5b65a4fce57063a593f85a652",
"assets/assets/faces/sample_images/distorted/polar/42_polar.jpg": "50208eba9cda8253391f0323b0540326",
"assets/assets/faces/sample_images/distorted/polar/43_polar.jpg": "9a377424e69910a338a9e8da02cc2611",
"assets/assets/faces/sample_images/distorted/polar/44_polar.jpg": "2494d651619c2f307e899365ce044eb1",
"assets/assets/faces/sample_images/distorted/polar/45_polar.jpg": "33906dbb1e44ff265fd0e15da90eb44c",
"assets/assets/faces/sample_images/distorted/polar/46_polar.jpg": "6e0c71e753e20a0c3318704b071092ac",
"assets/assets/faces/sample_images/distorted/polar/47_polar.jpg": "f7ba2870ab48c870855f6c7e7ee37d00",
"assets/assets/faces/sample_images/distorted/polar/48_polar.jpg": "799c916769403030ed9fc8992d38aef7",
"assets/assets/faces/sample_images/distorted/polar/49_polar.jpg": "9287d85d362b803e865981b49ab396a1",
"assets/assets/faces/sample_images/distorted/polar/4_polar.jpg": "14cbb02ce276e24056c95ec76e68573a",
"assets/assets/faces/sample_images/distorted/polar/50_polar.jpg": "88cb124774edadc6c033f1900df39f08",
"assets/assets/faces/sample_images/distorted/polar/51_polar.jpg": "cc72a700e28beb52818de2e78b865555",
"assets/assets/faces/sample_images/distorted/polar/52_polar.jpg": "c871d4953bfbaae992e998de1acf660b",
"assets/assets/faces/sample_images/distorted/polar/53_polar.jpg": "75b378ba9a17e899631a9331ea9aa0f5",
"assets/assets/faces/sample_images/distorted/polar/54_polar.jpg": "88795f1f21c164e9d815023f8d835134",
"assets/assets/faces/sample_images/distorted/polar/55_polar.jpg": "6c5a62842076684acc3dfb7fb5d0dcb9",
"assets/assets/faces/sample_images/distorted/polar/56_polar.jpg": "f50c0032e75c4d93294207c32214b9b9",
"assets/assets/faces/sample_images/distorted/polar/57_polar.jpg": "40d92e23fea158d40953dcd131cd7e83",
"assets/assets/faces/sample_images/distorted/polar/58_polar.jpg": "ae8d31380c033bd16f196b7292ac9a69",
"assets/assets/faces/sample_images/distorted/polar/59_polar.jpg": "09718eba385d1f07ad862af677413e2a",
"assets/assets/faces/sample_images/distorted/polar/5_polar.jpg": "49caad354f5a8df434fa64f0f8cc84bc",
"assets/assets/faces/sample_images/distorted/polar/60_polar.jpg": "44b7fc50fec012c635f86d128381de6b",
"assets/assets/faces/sample_images/distorted/polar/61_polar.jpg": "888512f9bc87b744f0b5deeb032f1909",
"assets/assets/faces/sample_images/distorted/polar/62_polar.jpg": "e6cad9f6ea88a1c97c5b4c70453e5579",
"assets/assets/faces/sample_images/distorted/polar/63_polar.jpg": "e0bf1528a8eb6e445eb6cf61f3479ee1",
"assets/assets/faces/sample_images/distorted/polar/64_polar.jpg": "10f43e57cfdcee640911d3cb40bcf3b5",
"assets/assets/faces/sample_images/distorted/polar/65_polar.jpg": "e4d7b693f79b9b56c876e5070aa7c14c",
"assets/assets/faces/sample_images/distorted/polar/6_polar.jpg": "4e9d6a7390905671776727aa92c709a7",
"assets/assets/faces/sample_images/distorted/polar/7_polar.jpg": "f66464ae6474777ce144f54b4dedccdf",
"assets/assets/faces/sample_images/distorted/polar/8_polar.jpg": "d51adca08d8458edf033a4cf761c6b74",
"assets/assets/faces/sample_images/distorted/polar/9_polar.jpg": "34dca268dcf63e00f0104c0ab20ef199",
"assets/assets/fonts/EBGaramond-Regular.ttf": "7212787ac2cb006948236e4600392180",
"assets/assets/icons/login.jpg": "aac2c464c1bb40d1a7224f6f50a96284",
"assets/assets/sample-animals/07c29966bd.jpg": "5a253d2a859865ae7022cbb997598757",
"assets/assets/sample-animals/08b2897c5e.jpg": "5ec9ebf079bc61c739d7100de1a4249a",
"assets/assets/sample-animals/0ace398f01.jpg": "d3a635b8d6e599db54947cc827ba568e",
"assets/assets/sample-animals/0b54dde5f5.jpg": "f1076e8fdff518ffe69c037b3034b79d",
"assets/assets/sample-animals/0c1a3fdd20.jpg": "7ff10ee3df8ef4cca86bb2a61fc70e89",
"assets/assets/sample-animals/1aac205025.jpg": "9e27eaca1b921fbccc2af64c28982a68",
"assets/assets/sample-animals/2a8a6a6050.jpg": "0c0e9cbcf99f3d30641fbc4253702c10",
"assets/assets/sample-animals/4cc653ca8b.jpg": "70539542d2a0c8352cfe86e3991bc06d",
"assets/assets/sample-animals/5db978ce57.jpg": "2ee3959bceda94623aa4f4adfcd7dbf6",
"assets/assets/sample-animals/6c763d6f65.jpg": "9e2666ac25619db581bc816dc9c4d8cd",
"assets/FontManifest.json": "90fa4e5d568c81cdb6dcf4897ddaea8e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d02b41e76f7fd1ae5a345537721e6a5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "60d5c189f75ebd926b7f1972e6584a67",
"/": "60d5c189f75ebd926b7f1972e6584a67",
"main.dart.js": "067fbdd4afea7a4d9519179906967214",
"manifest.json": "13b7a120a61c7b3597cc73cddc97dcca",
"version.json": "0c3a82b1a5bb45d59fc811e56410fa45"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
