var w = window;
if (w.performance || w.mozPerformance || w.msPerformance || w.webkitPerformance) {
    var d = document;
    AKSB = w.AKSB || {}, AKSB.q = AKSB.q || [], AKSB.mark = AKSB.mark || function(e, _) {
        AKSB.q.push(["mark", e, _ || (new Date).getTime()])
    }, AKSB.measure = AKSB.measure || function(e, _, t) {
        AKSB.q.push(["measure", e, _, t || (new Date).getTime()])
    }, AKSB.done = AKSB.done || function(e) {
        AKSB.q.push(["done", e])
    }, AKSB.mark("firstbyte", (new Date).getTime()), AKSB.prof = {
        custid: "163069",
        ustr: "cookiepresent",
        originlat: "0",
        clientrtt: "15",
        ghostip: "95.100.97.224",
        ipv6: false,
        pct: "10",
        clientip: "217.121.68.241",
        requestid: "cd3dca",
        region: "20142",
        protocol: "h2",
        blver: 13,
        akM: "x",
        akN: "ae",
        akTT: "O",
        akTX: "1",
        akTI: "cd3dca",
        ai: "167224",
        ra: "true",
        pmgn: "pmstubhubcom",
        pmgi: "",
        pmp: "",
        qc: ""
    },
        function(e) {
            var _ = d.createElement("script");
            _.async = "async", _.src = e;
            var t = d.getElementsByTagName("script"),
                t = t[t.length - 1];
            t.parentNode.insertBefore(_, t)
        }(("https:" === d.location.protocol ? "https:" : "http:") + "//ds-aksb-a.akamaihd.net/aksb.min.js")
}