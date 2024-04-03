const FEATURES = [
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "- Voice", "- Spread", "Labial", "- Strid", "N/A", "N/A", "N/A", "N/A"], //p
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Labial", "- Strid", "N/A", "N/A", "N/A", "N/A"], //b
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "- Voice", "- Spread", "Coronal", "- Strid", "- Distr", "+ Ant", "N/A", "N/A"], //t
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "- Strid", "- Distr", "+ Ant", "N/A", "N/A"], //d
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "- Voice", "- Spread", "Coronal", "- Strid", "- Distr", "- Ant", "N/A", "N/A"], //ʈ
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "- Strid", "- Distr", "- Ant", "N/A", "N/A"], //ɖ
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "- Voice", "- Spread", "Coronal", "- Strid", "+ Distr", "- Ant", "N/A", "N/A"], //c
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "- Strid", "+ Distr", "- Ant", "N/A", "N/A"], //ɟ
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "- Voice", "- Spread", "Dorsal", "- Strid", "N/A", "N/A", "+ High", "+ Back"],//k
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Dorsal", "- Strid", "N/A", "N/A", "+ High", "+ Back"],//g
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "- Voice", "- Spread", "Dorsal", "- Strid", "N/A", "N/A", "- High", "+ Back"],//q
    ["+ Cons", "- Son", "- Approx", "- Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Dorsal", "- Strid", "N/A", "N/A", "- High", "+ Back"],//ɢ
    ["No features present", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],//ʔ
    ["+ Cons", "+ Son", "- Approx", "+ Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Labial", "N/A", "N/A", "N/A", "N/A", "N/A"],//m
    ["+ Cons", "+ Son", "- Approx", "+ Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "- Strid", "- Distr", "+ Ant", "N/A", "N/A"], //n
    ["+ Cons", "+ Son", "- Approx", "+ Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "- Strid", "- Distr", "- Ant", "N/A", "N/A"], //ɳ
    ["+ Cons", "+ Son", "- Approx", "+ Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Dorsal", "N/A", "N/A", "N/A", "+ Back", "+ High"], //ŋ
    ["+ Cons", "+ Son", "- Approx", "+ Nasal", "- Cont", "- Lat", "+ Voice", "- Spread", "Dorsal", "- Strid", "N/A", "N/A", "+ Back", "- HIgh"], //ɴ
    ["+ Cons", "+ Son", "+ Approx", "- Nasal", "+ Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "- Strid", "- Distr", "+ Ant", "N/A", "N/A"], //r
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "- Voice", "- Spread", "Labial", "+ Strid", "N/A", "N/A", "N/A", "N/A"], //f
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "+ Voice", "- Spread", "Labial", "+ Strid", "N/A", "N/A", "N/A", "N/A"], //v
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "- Voice", "- Spread", "Coronal", "- Strid", "+ Distr", "+ Ant", "N/A", "N/A"], //θ
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "- Strid", "+ Distr", "+ Ant", "N/A", "N/A"], //ð
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "- Voice", "- Spread", "Coronal", "+ Strid", "- Distr", "+ Ant", "N/A", "N/A"], //s
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "+ Strid", "- Distr", "+ Ant", "N/A", "N/A"], //z
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "- Voice", "- Spread", "Coronal", "+ Strid", "+ Distr", "- Ant", "N/A", "N/A"], //ʃ
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "+ Voice", "- Spread", "Coronal", "+ Strid", "+ Distr", "- Ant", "N/A", "N/A"], //ʒ
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "- Voice", "- Spread", "Dorsal", "- Strid", "N/A", "N/A", "+ High", "- Back"], //ç
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "+ Voice", "- Spread", "Dorsal", "- Strid", "N/A", "N/A", "+ High", "- Back"], //ʝ
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "- Voice", "- Spread", "Dorsal", "+ Strid", "N/A", "N/A", "- High", "+ Back"], //x
    ["+ Cons", "- Son", "- Approx", "- Nasal", "+ Cont", "- Lat", "+ Voice", "- Spread", "Dorsal", "+ Strid", "N/A", "N/A", "- High", "+ Back"] //ɣ
];

//Natural Class features for all cards.

export default FEATURES;