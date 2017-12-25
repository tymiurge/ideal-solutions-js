// Unicode Flag
    /^.-clef/ .test( "𝄞-clef" ); // false since ^. says we're looking for a single character
    /^.-clef/u.test( "𝄞-clef" ); // true

// Sticky Flag
    var re2 = /foo/y, // <-- notice the `y` sticky flag
    str = "++foo++";
    re2.lastIndex; // 0
    re2.test( str ); // false--"foo" not found at `0`
    re2.lastIndex; // 0
    re2.lastIndex = 2;
    re2.test( str ); // true
    re2.lastIndex; // 5--updated to after previous match
    re2.test( str ); // false
    re2.lastIndex; // 0--reset after previous match failure
