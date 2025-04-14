<!doctype html>
<html lang="en">
    <head>
        <link rel="preconnect" href="https://use.typekit.net">
        <link rel="preconnect" href="https://images.rentals.ca">
        <link rel="preconnect" href="https://maps.googleapis.com">
        <link rel="preconnect" href="https://maps.gstatic.com">
        <link rel="preconnect" href="https://www.google-analytics.com">
        <link rel="preconnect" href="https://cdnjs.cloudflare.com">
        <link rel="preconnect" href="https://hexagon-analytics.com">
        <script src="https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=e0cfb4ae-badc-11ee-a70a-87ae4a534bb4"></script>
        <script async type="text/javascript" src="https://events.api.rentals.ca/events/js/?tracking-id=0413f58e-7f6e-488b-b848-9e215207991d"></script>
        <script type="text/javascript">

            var isAnonymousBeforeVueBoot = ({
                "is_anonymous": true
            }).is_anonymous;
        </script>
        <!-- Google Tag Manager -->
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0]
                  , j = d.createElement(s)
                  , dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            }
            )(window, document, 'script', 'dataLayer', 'GTM-WVJW2M4');
        </script>
        <!-- End Google Tag Manager -->
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script>
            window.gamEnabled = true;
            window.googletag = window.googletag || {
                cmd: []
            };

            googletag.cmd.push(function() {
                var page = window.location.pathname.split('/')[1] || 'home';

                // we might want to enable this so that
                // competitive exclusions and roadblocks  will be honored.
                // only side effect is that on city pages it will load all ads
                // because the first one is above the fold basically
                googletag.pubads().enableSingleRequest();
                googletag.pubads().collapseEmptyDivs();
                googletag.pubads().enableLazyLoad({
                    fetchMarginPercent: 500,
                    renderMarginPercent: 200,
                    mobileScaling: 2.0
                });

                // Register event handlers to observe lazy loading behavior. for testing
                // googletag.pubads().addEventListener('slotRequested', function (event) {
                //   console.log('requested');
                // });

                // googletag.pubads().addEventListener('slotOnload', function (event) {
                //   console.log('rendered');
                // });

                googletag.pubads().setTargeting('category', page);
                googletag.enableServices();
            });
        </script>
        <script>
            window.appconf = JSON.parse('{"rentalsGqlUrl": "https://rentals.ca/graphql", "rentalsGqlKey": "kJFM-mm4c-xg6B-qiwy"}')
        </script>
        <!-- Facebook -->
        <meta name="facebook-domain-verification" content="40x0efk2afuvvf5nx1x70piryfa620"/>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="google" content="notranslate">
        <meta name="robots" content="max-image-preview:large">
        <link rel="apple-touch-icon" sizes="180x180" href="/static/fe/img/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/static/fe/img/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/static/fe/img/favicon/favicon-16x16.png">
        <link rel="manifest" crossorigin="use-credentials" href="/static/fe/img/favicon/site.webmanifest">
        <link rel="mask-icon" href="/static/fe/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#ff0000">
        <meta name="theme-color" content="#ffffff">
        <link rel="alternate" hreflang="en" href="https://rentals.ca/toronto">
        <link rel="alternate" hreflang="x-default" href="https://rentals.ca/toronto">
        <link rel="alternate" hreflang="fr" href="https://rentals.ca/fr/a-louer-toronto">
        <link rel="alternate" href="android-app://com.rentalsca/http/toronto">
        <link rel="alternate" href="ios-app://1475449043/http/toronto">
        <script>
            window.__RELEASE__ = {
                "version": "2025.4",
                "build": null,
                "revision": null
            }['version'];
        </script>
        <!-- Sentry -->
        <script>
            (function(d) {
                var config = {
                    kitId: 'gec7gtm',
                    scriptTimeout: 3000,
                    async: true
                }, h = d.documentElement, t = setTimeout(function() {
                    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
                }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
                h.className += " wf-loading";
                tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
                tk.async = true;
                tk.onload = tk.onreadystatechange = function() {
                    a = this.readyState;
                    if (f || a && a != "complete" && a != "loaded")
                        return;
                    f = true;
                    clearTimeout(t);
                    try {
                        Typekit.load(config)
                    } catch (e) {}
                }
                ;
                s.parentNode.insertBefore(tk, s)
            }
            )(document);
        </script>
        <script type="text/javascript">
            var AppStartup = [];
            var gtmLazyLoadTags = [];
        </script>
        <script type='text/javascript' src='//dynamic.criteo.com/js/ld/ld.js?a=113828' async='true'></script>
        <script type='text/javascript'>
            window.criteo_q = window.criteo_q || [];

            var criteo = {
                isDev: (window.location.hostname === 'localhost'),
                baseEvents: [{
                    event: 'setAccount',
                    account: 113828
                }, {
                    event: 'setSiteType',
                    type: /iPad/.test(navigator.userAgent) ? 't' : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? 'm' : 'd'
                }, {
                    event: 'setEmail',
                    email: '',
                    hash_method: 'sha256'
                }, ],
                sourceLevelMappings: {
                    100: 'ecommerce',
                    300: 'feed-other',
                    500: 'rentsync',
                    750: 'mls',
                    1000: 'mls',
                },

                // third party provided
                toHash: function(str) {
                    const sha256 = function a(b) {
                        function c(a, b) {
                            return a >>> b | a << 32 - b
                        }
                        for (var d, e, f = Math.pow, g = f(2, 32), h = "length", i = "", j = [], k = 8 * b[h], l = a.h = a.h || [], m = a.k = a.k || [], n = m[h], o = {}, p = 2; 64 > n; p++)
                            if (!o[p]) {
                                for (d = 0; 313 > d; d += p)
                                    o[d] = p;
                                l[n] = f(p, .5) * g | 0,
                                m[n++] = f(p, 1 / 3) * g | 0
                            }
                        for (b += "\x80"; b[h] % 64 - 56; )
                            b += "\x00";
                        for (d = 0; d < b[h]; d++) {
                            if (e = b.charCodeAt(d),
                            e >> 8)
                                return;
                            j[d >> 2] |= e << (3 - d) % 4 * 8
                        }
                        for (j[j[h]] = k / g | 0,
                        j[j[h]] = k,
                        e = 0; e < j[h]; ) {
                            var q = j.slice(e, e += 16)
                              , r = l;
                            for (l = l.slice(0, 8),
                            d = 0; 64 > d; d++) {
                                var s = q[d - 15]
                                  , t = q[d - 2]
                                  , u = l[0]
                                  , v = l[4]
                                  , w = l[7] + (c(v, 6) ^ c(v, 11) ^ c(v, 25)) + (v & l[5] ^ ~v & l[6]) + m[d] + (q[d] = 16 > d ? q[d] : q[d - 16] + (c(s, 7) ^ c(s, 18) ^ s >>> 3) + q[d - 7] + (c(t, 17) ^ c(t, 19) ^ t >>> 10) | 0)
                                  , x = (c(u, 2) ^ c(u, 13) ^ c(u, 22)) + (u & l[1] ^ u & l[2] ^ l[1] & l[2]);
                                l = [w + x | 0].concat(l),
                                l[4] = l[4] + w | 0
                            }
                            for (d = 0; 8 > d; d++)
                                l[d] = l[d] + r[d] | 0
                        }
                        for (d = 0; 8 > d; d++)
                            for (e = 3; e + 1; e--) {
                                var y = l[d] >> 8 * e & 255;
                                i += (16 > y ? 0 : "") + y.toString(16)
                            }
                        return i
                    };

                    return sha256(str);
                },

                setEmail: function(email) {
                    if (this.isDev)
                        console.log('[criteo] set email');

                    // lowercase conversion is because the third party script seems to change the casing of the event name
                    this.baseEvents[this.baseEvents.findIndex((be => be.event.toLowerCase() === 'setemail'))].email = this.toHash(email);
                },

                trackHomePage: function() {
                    if (this.isDev)
                        console.log('[criteo] track home');

                    window.criteo_q.push(...this.baseEvents, {
                        event: 'viewHome',
                        tms: 'custom-guide'
                    });
                },

                trackSearch: function(city, listings) {
                    if (this.isDev)
                        console.log('[criteo] track search');

                    const listingIds = listings.map(l => l.id).slice(0, 3);
                    window.criteo_q.push(...this.baseEvents, {
                        event: 'setData',
                        ui_city: city.name,
                        ui_state: city.region.name
                    }, {
                        event: 'viewList',
                        item: listingIds,
                        tms: 'custom-guide'
                    }, );
                },

                trackProductEngagement: function(listing) {
                    if (this.isDev)
                        console.log('[criteo] track product engagement');

                    window.criteo_q.push(...this.baseEvents, {
                        event: 'setZipcode',
                        zipcode: listing.postal_code
                    }, {
                        event: 'setData',
                        ui_city: listing.city_name,
                        ui_state: listing.city.region.name
                    }, {
                        event: 'viewItem',
                        item: listing.id,
                        tms: 'custom-guide'
                    });
                },

                trackPreConversion: function(listing) {
                    if (this.isDev)
                        console.log('[criteo] track pre conversion');

                    window.criteo_q.push(...this.baseEvents, {
                        event: 'setZipcode',
                        zipcode: listing.postal_code
                    }, {
                        event: 'setData',
                        ui_city: listing.city_name,
                        ui_state: listing.city.region.name
                    }, {
                        event: 'viewBasket',
                        tms: 'custom-guide',
                        item: [{
                            id: listing.id,
                            price: this._getLeadValue(this._getListingSource(listing)),
                            quantity: 1
                        }]
                    });
                },

                trackConversion: function(userEmail, listing) {
                    if (this.isDev)
                        console.log('[criteo] track conversion');

                    this.setEmail(userEmail);

                    window.criteo_q.push(...this.baseEvents, {
                        event: 'setZipcode',
                        zipcode: listing.postal_code
                    }, {
                        event: 'setData',
                        ui_city: listing.city_name,
                        ui_state: listing.city.region.name
                    }, {
                        event: 'trackTransaction',
                        tms: 'custom-guide',
                        id: (new Date()).getTime(),
                        item: [{
                            id: listing.id,
                            price: this._getLeadValue(this._getListingSource(listing)),
                            quantity: '1'
                        }]
                    });
                },

                _getListingSource: function(listing) {
                    if (listing.source) {
                        // Record provided by Django ORM (listing overview, details page)
                        const splitSourceInfo = listing.source.split(':');
                        return (splitSourceInfo[0] === 'feed') ? splitSourceInfo[1] : 'ecommerce';
                    } else if (listing.source_level) {
                        // Listing provided by GraphQL, via Django (map search results)
                        return this.sourceLevelMappings[listing.source_level] ?? 'ecommerce'
                    }
                },

                _getLeadValue: function(source) {
                    const defaultValue = '0.75';
                    const leadValues = [{
                        source: 'rentsync',
                        value: '3'
                    }, {
                        source: 'ecommerce',
                        value: '1'
                    }];

                    const leadValue = leadValues.find((lv => lv.source === source));

                    return (leadValue) ? leadValue.value : defaultValue;
                },
            };
        </script>
        <title>Rentals.ca Toronto Apartments, Condos and Houses For Rent</title>
        <meta name="description" content="Finding a place to call home in Toronto ON has never been so easy. Quickly find your new Apartment, Condo or House using our easy-to-use map-based search">
        <link rel="next" href="/toronto?p=2">
        <link rel="canonical" href="https://rentals.ca/toronto">
        <meta property="fb:app_id" content="262245211172453">
        <meta property="og:title" content="Rentals.ca Toronto Apartments, Condos and Houses For Rent">
        <meta property="og:description" content="Finding a place to call home in Toronto ON has never been so easy. Quickly find your new Apartment, Condo or House using our easy-to-use map-based search">
        <meta property="og:url" content="https://rentals.ca/toronto">
        <meta property="og:type" content="article">
        <meta property="og:locale" content="en">
        <meta property="og:site_name" content="Rentals.ca">
        <meta property="og:image" content="https://images.rentals.ca/images/canada-3290310_1920.width-585.jpg">
        <meta property="og:image:width" content="585">
        <meta property="og:image:height" content="362">
        <meta property="og:image:alt" content="The heart of it all">
        <meta name="twitter:image" content="https://images.rentals.ca/images/canada-3290310_1920.width-585.jpg">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@rentalsdotca">
        <meta name="twitter:creator" content="@rentalsdotca">
        <meta name="twitter:title" content="Rentals.ca Toronto Apartments, Condos and Houses For Rent">
        <meta name="twitter:description" content="Finding a place to call home in Toronto ON has never been so easy. Quickly find your new Apartment, Condo or House using our easy-to-use map-based search">
        <script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "SearchResultsPage",
                "lastReviewed": "2025-04-14"
            }</script>
        <script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "City",
                "name": "Toronto",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Toronto",
                    "addressRegion": "ON",
                    "addressCountry": "CA"
                }
            }</script>
        <!-- Begin listings schema.org markup -->
        <!-- End listings schema.org markup -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How much is the average rent in Toronto, ON?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As of December 2024, the average rent in Toronto, ON is $2639 per month."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much is the average rent for a 1 bedroom in Toronto, ON?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As of December 2024, the average rent for a 1 bedroom in Toronto, ON is $2360 per month."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much is the average rent for a 2 bedroom in Toronto, ON?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As of December 2024, the average rent for a 2 bedroom in Toronto, ON is $3077 per month."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much is the average rent for a 3 bedroom in Toronto, ON?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As of December 2024, the average rent for a 3 bedroom in Toronto, ON is $3664 per month."
                        }
                    }
                ]
            }</script>
        <link rel="preload" href="/static/fe/placeStyles-Dhvwe4eM.css" as="style">
        <link rel="preload" href="/static/fe/place-B3ervVJX.js" as="script">
        <link rel="stylesheet" type="text/css" href="/static/fe/placeStyles-Dhvwe4eM.css">
        <link rel="stylesheet" href="/static/fe/compat-DanBUCkX.css"/>
        <link rel="stylesheet" href="/static/fe/PropertyParkingTypes-Cn5wRw4p.css"/>
        <link rel="stylesheet" href="/static/fe/place-BgcHhcxB.css"/>
        <script type="module" crossorigin="" src="/static/fe/place-B3ervVJX.js"></script>
        <link href="/static/fe/vue-DWxMbtxg.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/compat-CxB_F7GR.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/Paginator-BlKu3Sb6.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/Utilities-BJm-msO6.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/PropertyParkingTypes-BR4iQFmP.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/placeutils-hgC_vW9-.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/fortawesome-BJfhjT65.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/translations-BM1ZktP7.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/listingutils-D9lpCdIb.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/index-CVnsuCxG.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
        <link href="/static/fe/TriggerBlur-DDZPor-X.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script"/>
    </head>
    <body>
        <!-- Begin comScore Tag -->
        <script>
            var _comscore = _comscore || [];
            _comscore.push({
                c1: "2",
                c2: "38699949",
                options: {
                    enableFirstPartyCookie: true
                }
            });
            (function() {
                var s = document.createElement("script")
                  , el = document.getElementsByTagName("script")[0];
                s.async = true;
                s.src = "https://sb.scorecardresearch.com/cs/38699949/beacon.js";
                el.parentNode.insertBefore(s, el);
            }
            )();
        </script>
        <noscript>
            <img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=38699949&amp;cv=3.6.0&amp;cj=1">
        </noscript>
        <!-- End comScore Tag -->
        <input type="hidden" name="csrfmiddlewaretoken" value="cbslgIXIgp8l0rzkCRBjy5DgQTOW0oWHzC2C3tZCRzt2K3zrdznp6FaGh0Q7G1HM">
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVJW2M4" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
        <div id="app" ref="root">
            <navbar-main ref="navbar-main" :user="store.user" :show-search-icon="false"></navbar-main>
            <search-results-page ref="search-results-page" :content="store.search.response" :extra-response-fields="{ recordActive: store.search.recordActive }" :user="store.user">
                <template #list-footer>
                    <footer-main ref="footer-main" :user="store.user"></footer-main>
                </template>
            </search-results-page>
            <footer-main ref="footer-main" :user="store.user"></footer-main>
            <modals-container/>
        </div>
        <script type="text/javascript">
            AppStartup.push(function() {
                App.store.search = {
                    response: {
                        "meta": {
                            "focus": {
                                "city": {
                                    "id": 6167865,
                                    "slug": "toronto",
                                    "name": "Toronto",
                                    "url": "https://rentals.ca/toronto",
                                    "region": {
                                        "id": 6093943,
                                        "code": "ON",
                                        "name": "Ontario"
                                    },
                                    "location": {
                                        "x": -79.3831843,
                                        "y": 43.653226,
                                        "lng": -79.3831843,
                                        "lat": 43.653226
                                    }
                                },
                                "type": "city",
                                "centre": {
                                    "x": -79.3831843,
                                    "y": 43.653226,
                                    "lat": 43.653226,
                                    "lng": -79.3831843
                                },
                                "url": "/toronto",
                                "obj_path": "toronto",
                                "breadcrumbs": [{
                                    "label": "Home",
                                    "href": "/"
                                }, {
                                    "label": "ON",
                                    "label_alt": "Ontario",
                                    "href": "/ontario"
                                }, {
                                    "label_alt": "Toronto Rentals",
                                    "label": "Toronto",
                                    "href": "/toronto"
                                }],
                                "custom_content": null,
                                "guide": "\n  <article class=\"content-guide\">\n    <header>\n      <div class=\"row\">\n        <div class=\"title\">\n          <h2>\n            <strong>Toronto</strong>,\n            ON\n          </h2>\n          <p>Renting Guide</p>\n        </div>\n\n        <nav>\n          <ul>\n            \n              <li><a href=\"#housing-market\">Housing Market</a></li>\n            \n              <li><a href=\"#apartment-hunting\">Apartment Hunting</a></li>\n            \n              <li><a href=\"#residents\">Residents</a></li>\n            \n              <li><a href=\"#neighbourhood\">Neighbourhood</a></li>\n            \n              <li><a href=\"#life-style\">Life &amp; Style</a></li>\n            \n              <li><a href=\"#top-rental-searches-in-toronto\">Top Rental Searches in Toronto</a></li>\n            \n          </ul>\n        </nav>\n      </div>\n    </header>\n\n    <section class=\"hero\">\n      <div class=\"row\">\n        <div class=\"text-container\">\n          <p>The heart of it all</p>\n        </div>\n        <div class=\"img-container\">\n          <img alt=\"Toronto Downtown Skyline Skyscraper Condos Rental Rentals Apartments\" height=\"362\" src=\"https://images.rentals.ca/images/canada-3290310_1920.width-585.jpg\" width=\"585\">\n        </div>\n      </div>\n    </section>\n    \n    <section class=\"content-guide-intro\">\n      <a name=\"intro\"></a>\n      <div class=\"content row\">\n        <div class=\"img-container\">\n          \n            \n          \n            <img alt=\"Toronto Downtown Skyscraper Business Sunrise Reflection Rentals\" height=\"438\" src=\"https://images.rentals.ca/images/2908583663_d5bc33c473_b.width-585.jpg\" width=\"585\">\n          \n        </div>\n        <div class=\"text-container\">\n          <p data-block-key=\"rrvto\">Toronto, as Canada&#x27;s largest and most cosmopolitan city, offers a wide variety of experiences. Residing here places you in close proximity to a myriad of attractions, from beautiful beaches to world-class museums, charming neighbourhood pockets that exude a small-town vibe, vibrant cultural communities, and so much more. In doing so, you&#x27;ll not only discover new passions but also forge connections with fresh faces in this bustling metropolis.</p>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"content-guide-aggregated-info\">\n      <div class=\"container\">\n        \n          <section class=\"content-guide-item\">\n            <a name=\"housing-market\"></a>\n            <h3>\n              Housing Market\n            </h3>\n            <p data-block-key=\"bacl4\">Toronto&#x27;s housing market offers a wealth of choices, which at times might feel overwhelming. To tackle this challenge, consider focusing on a few neighbourhoods that align with your preferences and budget. Maintaining a realistic perspective on the city&#x27;s baseline rental costs is essential before scheduling viewings for Toronto apartments. Toronto ranks among Canada&#x27;s most expensive housing markets, so some initial sticker shock is not uncommon.</p><p data-block-key=\"8l62p\">Moreover, it&#x27;s crucial to recognize the high level of housing competition in the city. Being prepared to quickly arrange viewings and make on-the-spot decisions is often the norm. Procrastination in your decision-making process may lead to missed opportunities, as appealing listings tend to be quickly claimed by others.</p><p data-block-key=\"d1svm\">Explore apartments for rent in Toronto on our website to begin your search.</p><p data-block-key=\"ruaa3\">Typical housing type:</p><p data-block-key=\"yxhbo\">You want it, Toronto’s got it!</p><p data-block-key=\"mnrp5\"></p><img alt=\"Fairmont Royal York Hotel Downtown Apartments Rental Rentals\" class=\"richtext-image full-width\" height=\"510\" src=\"https://images.rentals.ca/images/toronto-1751849_1920.width-800.jpg\" width=\"800\"><p data-block-key=\"bgjvr\"></p>\n          </section>\n        \n          <section class=\"content-guide-item\">\n            <a name=\"apartment-hunting\"></a>\n            <h3>\n              Apartment Hunting\n            </h3>\n            <p data-block-key=\"qw1yl\">If you&#x27;re on the hunt for the perfect apartment in Toronto, make sure to take some in-person or virtual tours. While you might come across enticing listings on rental websites, it&#x27;s crucial to conduct your due diligence by personally visiting and inspecting your potential future home. To streamline your apartment search, it&#x27;s beneficial to start by selecting <a href=\"https://rentals.ca/toronto/1-bedrooms\">1 bedroom</a>, <a href=\"https://rentals.ca/toronto/2-bedrooms\">2 bedrooms</a>, <a href=\"https://rentals.ca/toronto/3-bedrooms\">3 bedrooms</a>, or <a href=\"https://rentals.ca/toronto/4-bedrooms\">4 bedrooms</a> apartments for rent in Toronto. Additionally, use our customizable search filters to pinpoint precisely what you&#x27;re looking for, whether whether it be <a href=\"https://rentals.ca/toronto/hardwood-flooring\">hardwood flooring</a>, <a href=\"https://rentals.ca/toronto/ceramic-flooring\">ceramic flooring</a> or <a href=\"https://rentals.ca/toronto/carpet-flooring\">carpeted flooring</a>. You might even stumble upon apartment buildings that offer all-inclusive packages, and some are open to negotiation on parking arrangements.</p><p data-block-key=\"aago9\">However, it&#x27;s important to manage your expectations regarding rent prices in Toronto. Cheap rents are a rarity in Toronto unless you&#x27;re willing to share your living space or live in a rented basement apartment offered by homeowners. Toronto&#x27;s rental market is highly competitive, so a proactive and well-informed approach is key to securing your ideal apartment.</p><p data-block-key=\"6avsm\"></p><h3 data-block-key=\"9a232\">Explore Property Types</h3><p data-block-key=\"30gmk\">The best thing about living in Canada’s largest city? The choices. Toronto will have what you need, all it takes is a search. Filter your search by your needs and lifestyle; you’ll realize how many options you really have in Canada’s largest city.</p><p data-block-key=\"fnbb5\"><b>Apartments</b></p><p data-block-key=\"aog1j\">With the city growing fast and the price of real estate growing even faster, chances are that you will be looking for <a href=\"https://rentals.ca/toronto/apartments\">Toronto apartments for rent</a> in your first few years. Most big apartment buildings are managed by property management firms. So do your research before you sign a lease and make sure that whoever owns/manages your new home has a good reputation.</p><p data-block-key=\"9bpk7\"><b>Studios</b></p><p data-block-key=\"amf15\">Contrary to what the name suggests, you don’t have to be the artistic type to live in a studio apartment. <a href=\"https://rentals.ca/toronto/studio\">Toronto studio apartments for rent</a> have become more in demand in recent years, so a lot of older buildings have converted their spaces into multiple studio apartments. Be sure to do your research and ask the right questions. A below average construction job may cause you headaches down the road.</p><p data-block-key=\"cq4nn\"><b>Bachelors</b></p><p data-block-key=\"e17q1\">One room, that’s what you will get. <a href=\"https://rentals.ca/toronto/bachelors\">Toronto Bachelor apartments for rent</a> are often an affordable option for people willing to sacrifice some extra space. Your kitchen, living room and dining room will be together, but let the messy and unorganized be warned. You will have a lot of stuff to organize into a small space. If you struggle with cleanliness and organization, you will need to learn quickly.</p><p data-block-key=\"c5c77\"><b>Basements</b></p><p data-block-key=\"bhu5h\">A lot of homes in the Toronto area have converted their basements into apartments. Always ask about the people upstairs, how noisy are they? What is the parking situation? How are utilities going to be split? <a href=\"https://rentals.ca/toronto/basement\">Toronto Basement apartments for rent</a> can be affordable and convenient. You just have to make sure that your upstairs neighbours fit your lifestyle and their floor/your ceiling is thick enough to eliminate their noise.</p><p data-block-key=\"2fic4\"><b>Duplexes</b></p><p data-block-key=\"9qr3\">A <a href=\"https://rentals.ca/toronto/duplex\">Toronto duplex apartment for rent</a> is a type of residential property that is characterized by having two separate living units within the same building. Typically, these units are situated on separate floors, each with its own entrance, kitchen, and bathroom facilities. Duplex apartments provide a unique living arrangement, offering the privacy and autonomy of separate homes while sharing a common structure. They are a popular choice for individuals or families seeking extra space or looking to generate rental income from one of the units.</p><p data-block-key=\"6lptt\"><b>Lofts</b></p><p data-block-key=\"1jdfd\">Lofts are old industrial/commercial buildings that have been transformed into new trendy apartments. <a href=\"https://rentals.ca/toronto/loft\">Toronto lofts for rent</a> could have that perfect blend of style and space that you are looking for. With concrete/ceramic floors, big windows, exposed ventilation, they do tend to be a tad more expensive than your average apartment. But if it fits in your budget, then why not live somewhere that is going to be totally unique?</p><p data-block-key=\"a4q1f\"><b>Houses</b></p><p data-block-key=\"ahjl8\">There are over 47,000 houses dedicated to rentals across Toronto, with approximately 600 available <a href=\"https://rentals.ca/toronto/houses\">Toronto houses for rent</a> in a given month. Among the available Toronto rental houses, a significant number are semi-detached and row houses.</p><p data-block-key=\"498mo\">If you have your heart set on a detached home in Toronto, your best opportunities typically lie in the North and West ends, as the downtown core predominantly features apartments. To increase your chances of securing the ideal Toronto house rental, consider expanding your search to the rest of the GTA, including areas like Etobicoke, Mississauga, Scarborough, or North York. It&#x27;s important to be diligent and ask the right questions during your search, as in many cases, tenants are responsible for their own utilities.</p><p data-block-key=\"7q7dt\"><b>Rooms</b></p><p data-block-key=\"7tjbu\">Looking for a place to live short term, or are you new to the city and don’t have much to bring with you? Try to <a href=\"https://rentals.ca/toronto/rooms\">find rooms for rent in Toronto</a> in a shared space. Just make sure to be adaptable as living with people means compromising. Conflicts can turn a good living situation into a nightmare faster than you think.</p><p data-block-key=\"j89p\"><b>Townhouses</b></p><p data-block-key=\"53nam\">Looking for a bit more space but still want to live near downtown? <a href=\"https://rentals.ca/toronto/town-house\">Toronto townhouses for rent</a> may be a great option for you! Perfect for groups of friends and families, townhouses may even have some private outdoor space for you to enjoy. Just be sure to be respectful to your neighbours. Too much noise with a shared wall can create unneeded conflict.</p><p data-block-key=\"anaeq\"><b>Condos</b></p><p data-block-key=\"b0v88\">Have you dreamed of living in one of the condo buildings downtown that create the Toronto skyline? <a href=\"https://rentals.ca/toronto/condos\">Toronto condos for rent</a> often have tons of extra amenities such as pools, gyms, and event spaces to attract the best tenants. Talk to the owner beforehand so you can learn about the building&#x27;s rules and regulations</p><h3 data-block-key=\"df2ff\"></h3><h3 data-block-key=\"97nq\">Look for the Amenities you want</h3><p data-block-key=\"fjesd\">Finding an apartment that fits your lifestyle is easier than you think; use our popular search criteria to find your perfect new home and the amenities you want to enjoy your downtime and to make life easier.</p><p data-block-key=\"3k2fd\"><b>Wheelchair Access</b></p><p data-block-key=\"20jtt\">While there are a lot of <a href=\"https://rentals.ca/toronto/wheelchair-accessible\">Toronto Wheelchair Accessible Apartments for rent</a>, not every property is going to have the necessary amenities to support someone in a wheelchair. First floor apartments and large buildings with an elevator are common and easy to find. It is vital to communicate your accessibility needs to any potential landlord.</p><p data-block-key=\"dkl35\"><b>Pool</b></p><p data-block-key=\"fdjti\">It doesn’t get better than relaxing by a pool after a long day of work. Nowadays, a lot of <a href=\"https://rentals.ca/toronto/pool\">Toronto apartments for rent have a pool</a> for tenants to use. When you go for a tour, make sure to take a look at the pool area as some buildings maintain their facilities better than others.</p><p data-block-key=\"4hb72\"><b>Gym</b></p><p data-block-key=\"9har\">Getting your fix of physical activity might be a really important part of your routine. Luckily, a lot of <a href=\"https://rentals.ca/toronto/gym-fitness-center\">Toronto apartments for rent have gyms</a><b>.</b> The convenience of having fitness equipment within walking distance can definitely be a desirable feature. Make sure to check out the facility before signing a lease, ask about the cleaning schedule/policy and the equipment itself. Poorly maintained equipment can be a sign of a poorly maintained building.</p><p data-block-key=\"ff5r1\"><b>Fireplace</b></p><p data-block-key=\"drf10\"><a href=\"https://rentals.ca/toronto/fireplace\">Toronto apartments for rent with fireplaces</a> are typically decorative in nature and are often located in older buildings that have been repurposed into apartments. To make sure of its functionality, it&#x27;s advisable to inquire with the landlord. If the fireplace is operational, it&#x27;s essential to determine whether it operates on gas, electricity, or if it&#x27;s a traditional wood-burning fireplace, ensuring that you can safely enjoy this charming feature in your new home.</p><p data-block-key=\"aqhif\"><b>Dishwasher</b></p><p data-block-key=\"cnvj7\">We challenge you to find someone who genuinely enjoys hand washing a huge stack of dishes after a good meal. <a href=\"https://rentals.ca/toronto/dishwasher\">Toronto apartments with a dishwasher</a> are common and convenient. If you pay your own water bill, dishwashers can actually be more efficient than hand washing. Just try to be smart and run it only when it&#x27;s full.</p><p data-block-key=\"e8pbp\"><b>Balcony</b></p><p data-block-key=\"ajhol\">A little fresh air on a sunny day can do you a lot of good. Since Toronto is a major urban center, finding an apartment with a private yard can be difficult. <a href=\"https://rentals.ca/toronto/balcony\">Toronto apartments for rent with a balcony</a> are fairly common. Be sure to ask about the rules as most buildings don’t allow a barbecue or any hanging decorations because of safety concerns. But some seating or a small table can really spice up your space.</p><p data-block-key=\"6531a\"><b>Air Conditioning</b></p><p data-block-key=\"ffhco\">Canada is famous for its cold winters. But sometimes we forget that in the summer the temperature can skyrocket in the other direction. <a href=\"https://rentals.ca/toronto/air-conditioning\">Toronto apartments for rent with air conditioning</a> are in high demand because of this. Ask the landlord or building manager about the AC unit. Is it central air? Is it a portable window unit? A wall unit? These can make a big difference for people who need a cool place to relax.</p><p data-block-key=\"9i3q6\"><b>Washer and Dryer</b></p><p data-block-key=\"d5vfl\">Unless you are planning on taking all your clothes to the dry cleaner or washing them by hand in your tub, you are going to need access to a washer and dryer. <a href=\"https://rentals.ca/toronto/washer-dryer\">Toronto apartments for rent with a washer and dryer</a> are easy to find whether it be en-suite laundry or communal machines for the whole building.</p><h3 data-block-key=\"9c5j1\"></h3><h3 data-block-key=\"9lc65\">Specialty Housing Filters</h3><p data-block-key=\"cv07l\">Toronto has a lot of available apartments, filter your search to find results that fit your budget, timeline, and lifestyle.</p><p data-block-key=\"6aa5a\"><b>Pet Friendly</b></p><p data-block-key=\"3e0v7\">Some people just can’t live without their pets. Who can blame them? There are plenty of <a href=\"https://rentals.ca/toronto/pet-friendly\">pet friendly rentals in Toronto</a> ready to be your new home. Luckily, Toronto has tons of well maintained parks in its various neighbourhoods. So if you need to take your pet outside, you&#x27;re almost guaranteed to have a place to go within a reasonable distance.</p><p data-block-key=\"c43l5\"><b>Furnished</b></p><p data-block-key=\"7qkup\">Moving is stressful, and if you are coming to Toronto from far away, you might be more inclined to rent somewhere that is already furnished rather than bring your own. <a href=\"https://rentals.ca/toronto/furnished\">Furnished apartments for rent in Toronto</a> usually come a bit pricier than unfurnished, but the convenience of it might be worth the extra dollars. Ask the landlord or property manager about the quality of furnishings and go for a tour to see for yourself.</p><p data-block-key=\"e5n4o\"><b>Short-Term</b></p><p data-block-key=\"folci\">Moving to Toronto temporarily? <a href=\"https://rentals.ca/toronto/short-term\">Short term rentals in Toronto</a> are any lease that lasts less than 12 months. A good option is to search for sublets or lease transfers. You’ll be dealing with the current tenant directly, so make sure to get an agreement in writing that outlines both of your responsibilities.</p><p data-block-key=\"83kih\"><b>Corporate Housing</b></p><p data-block-key=\"eejpp\">If you&#x27;re embarking on a temporary work term in Toronto, you&#x27;ll find a range of properties well-suited to your needs. These corporate housing options come fully furnished and equipped with essential amenities like high-speed Wi-Fi. This means you can seamlessly transition from your workday at the office to your comfortable home, should the need arise.</p><p data-block-key=\"752s0\"><a href=\"https://rentals.ca/toronto/corporate-housing\">Toronto Corportate Housing</a> typically offers flexible rental terms, accommodating both weekly and monthly stays. As a hub for professionals, it&#x27;s a great environment to connect with like-minded individuals. While enjoying your time in this vibrant city, it&#x27;s important to be mindful of being a considerate neighbour, especially if you opt for corporate housing in a shared community.</p><p data-block-key=\"cn1bj\"><b>Student Housing</b></p><p data-block-key=\"odcg\">Toronto has world class educational institutions across the entire city. <a href=\"https://rentals.ca/toronto/student-housing\">Student housing Toronto</a> tends to be concentrated in certain neighbourhoods that offer amenities like accessible public transit, lower rent, high-density housing, and let&#x27;s be honest, fun neighbourhood bars. Areas like The Annex, Kensington Market, Church and Wellesley, and York University Heights are good places to start your search.</p><p data-block-key=\"9oit6\"><b>Affordable Housing</b></p><p data-block-key=\"4vq4r\">It is no secret that Toronto is one of the most expensive cities to live in Canada. The high prices may be prohibitive to a lot of people and can seriously affect your decision on where to live. <a href=\"https://rentals.ca/toronto/under-1500\">Cheap apartments for rent in Toronto</a> can still be found even for the most price-conscious renter. Check out neighbourhoods like Harwood, East Danforth, and Mimico. Go for a tour if possible to make sure the property is up to your standards.</p><p data-block-key=\"cukjm\"><b>Luxury Rentals</b></p><p data-block-key=\"cv3ku\">There is no shortage of available apartments in Toronto. The financial and business hub of the country has a place for everyone. Looking for somewhere that is sure to impress? <a href=\"https://rentals.ca/toronto/luxury\">Luxury apartments in Toronto</a> often go for a hefty price tag. But if an impressive living space that&#x27;s sure to wow your guests is what you want, you will have no problem finding it here.</p><p data-block-key=\"6odir\"></p><img alt=\"Downtown Toronto City Hall Nathan Phillips Square Apartment Rental Rentals\" class=\"richtext-image full-width\" height=\"532\" src=\"https://images.rentals.ca/images/10731914695_a1cb8578db_k.width-800.jpg\" width=\"800\"><p data-block-key=\"87isc\"></p>\n          </section>\n        \n          <section class=\"content-guide-item\">\n            <a name=\"residents\"></a>\n            <h3>\n              Residents\n            </h3>\n            <p data-block-key=\"a7zn8\">Toronto is full of singles and couples, with families and seniors being less common. The city is the most diverse in the world – and that is reflected in the number of cultural hub neighbourhoods that have arisen. There is also a vibrant, active LGBTQ community. Having diversity is one thing, but supporting it is another. Thankfully, Toronto does provide that support. This is not to say that no hate ever happens, but it is not the norm – nor does it go unchallenged.</p><p data-block-key=\"2qng0\">Perfect for: Ambitious city-lovers.</p><p data-block-key=\"ftq6q\">Not-so-perfect for: Those who crave a slower pace of life.</p><p data-block-key=\"2bjld\"></p><img alt=\"Toronto Downtown Business Building Buildings Rental Colors Photography\" class=\"richtext-image full-width\" height=\"600\" src=\"https://images.rentals.ca/images/6747019289_9c71ecc241_b.width-800.jpg\" width=\"800\"><p data-block-key=\"qil8l\"></p>\n          </section>\n        \n          <section class=\"content-guide-item\">\n            <a name=\"neighbourhood\"></a>\n            <h3>\n              Neighbourhood\n            </h3>\n            <p data-block-key=\"s5lyi\">Toronto has solid transit, including subway lines, buses and streetcars. There are also several major highways, including the 401. There are a number of gorgeous natural spaces, with some highlights being Allan Gardens and High Park. Don’t forget to check out the Harbourfront area and the beach. You’ll never be short of things to do, from going to the ROM to trying your skill in an escape room to catching a show at one of the city’s many theatres. You can find several malls, as well as big box stores. Grocery stores are in every neighbourhood; but, at least once, head to Maple Leaf Gardens to find old centre ice. Also try to get around to various neighbourhoods to try the foods on offer in the city’s many restaurants.</p><p data-block-key=\"co04g\"></p><img alt=\"Toronto Blue Jays Air Canada Centre Scotiabank Arena Downtown Game Baseball\" class=\"richtext-image full-width\" height=\"534\" src=\"https://images.rentals.ca/images/architecture-art-audience-139762.width-800.jpg\" width=\"800\"><p data-block-key=\"gpl5p\"></p><p data-block-key=\"jvfex\">Landmarks:</p><p data-block-key=\"ijcd3\">CN Tower</p><p data-block-key=\"payc6\">Kensington Market</p><p data-block-key=\"220hl\">Distillery District</p><p data-block-key=\"wxalt\">Yonge Street</p><p data-block-key=\"svunr\">The Danforth</p><p data-block-key=\"rhfjg\">Chinatown</p><p data-block-key=\"svaaq\">Eaton’s Centre</p><p data-block-key=\"sthjy\">Yorkville</p><p data-block-key=\"9gn68\">Old City Hall</p><p data-block-key=\"2yc7r\">Royal Ontario Museum</p><p data-block-key=\"lt9f0\">Bata Shoe Museum</p><p data-block-key=\"sd57u\">Aga Khan</p><p data-block-key=\"tckpj\"></p><img alt=\"The ROM Royal Ontario Museum Downtown Toronto Tourism Attraction\" class=\"richtext-image full-width\" height=\"530\" src=\"https://images.rentals.ca/images/abstract-architectural-design-architecture-136.width-800.jpg\" width=\"800\"><p data-block-key=\"ro1v9\">Find apartments for rent in Toronto in these well-known neighbourhoods:</p><p data-block-key=\"1g52p\"><a href=\"#https://rentals.ca/toronto/trinity-bellwoods\">Trinity Bellwoods</a></p><p data-block-key=\"9hd2t\"><a href=\"https://rentals.ca/toronto/yonge-and-eglinton\">Yonge and Eglinton</a></p><p data-block-key=\"4aop0\"><a href=\"https://rentals.ca/toronto/the-annex\">The Annex</a></p><p data-block-key=\"fsf0j\"><a href=\"https://rentals.ca/toronto/liberty-village\">Liberty Village</a></p><p data-block-key=\"9m4g8\"><a href=\"https://rentals.ca/toronto/yonge-stclair\">Yonge-St.Clair</a></p><p data-block-key=\"6u0h9\"><a href=\"https://rentals.ca/toronto/high-park-north\">High Park North</a></p><p data-block-key=\"mloa\"><a href=\"https://rentals.ca/toronto/church-yonge-corridor\">Church-Yonge Corridor</a></p><p data-block-key=\"6o7nt\"><a href=\"https://rentals.ca/toronto/midtown-toronto\">Midtown Toronto</a></p><p data-block-key=\"etsg0\"><a href=\"https://rentals.ca/toronto/bay-street-corridor\">Bay Street Corridor</a></p><p data-block-key=\"btipb\"><a href=\"https://rentals.ca/toronto/leslieville\">Leslieville</a></p><p data-block-key=\"duslq\"><a href=\"https://rentals.ca/toronto/yorkville\">Yorkville</a></p><p data-block-key=\"ae0c0\"><a href=\"https://rentals.ca/toronto/corktown\">Corktown</a></p><p data-block-key=\"90c9s\"><a href=\"https://rentals.ca/toronto/south-riverdale\">South Riverdale</a></p><p data-block-key=\"e292r\"><a href=\"https://rentals.ca/toronto/financial-district\">Financial District</a></p><p data-block-key=\"2djn9\"><a href=\"https://rentals.ca/toronto/moss-park\">Moss Park</a></p><p data-block-key=\"225ag\"><a href=\"https://rentals.ca/toronto/mount-pleasant-west\">Mount Pleasant West</a></p><p data-block-key=\"aj68l\"><a href=\"https://rentals.ca/toronto/kensington-chinatown\">Kensington-Chinatown</a></p><p data-block-key=\"6q7p7\"><a href=\"https://rentals.ca/toronto/mount-pleasant-east\">Mount Pleasant East</a></p><p data-block-key=\"cjlcj\"><a href=\"https://rentals.ca/toronto/the-beaches\">The Beaches</a></p><p data-block-key=\"9i7i1\"><a href=\"https://rentals.ca/toronto/roncesvalles\">Roncesvalles</a><br/></p>\n          </section>\n        \n          <section class=\"content-guide-item\">\n            <a name=\"life-style\"></a>\n            <h3>\n              Life &amp; Style\n            </h3>\n            <p data-block-key=\"e9wd0\">Toronto is very much what you make it. In fact, the city is more like several cities that have been rolled into one (which, historically, is what happened). Much of life in Toronto revolves around work. Locals of “The 6ix” tend to be passionate about what they do – or their side hustle – and they have a dream place they are working to end up. Because of that, it can feel like everyone is always in a rush or has their guard up. In reality, it just takes a bit of time to get to know folks in Toronto. If you are new in town, take some time to meet new people and attend new activities. Soon you will find Toronto as warm and friendly as any small town – if not more so.</p><p data-block-key=\"3ox65\"></p><img alt=\"Toronto Sign Downtown Attraction Tourism\" class=\"richtext-image full-width\" height=\"533\" src=\"https://images.rentals.ca/images/toronto-984543_1920_1.width-800.jpg\" width=\"800\"><p data-block-key=\"9mtjc\"></p>\n          </section>\n        \n          <section class=\"content-guide-item\">\n            <a name=\"top-rental-searches-in-toronto\"></a>\n            <h3>\n              Top Rental Searches in Toronto\n            </h3>\n            <h4 data-block-key=\"hukim\">Rentals to fit your budget</h4><p data-block-key=\"ua3c\"><a href=\"https://rentals.ca/toronto/under-1000\">Apartments in Toronto under $1000</a></p><p data-block-key=\"5dom2\"><a href=\"https://rentals.ca/toronto/under-1250\">Apartments in Toronto under $1250</a></p><p data-block-key=\"d9err\"><a href=\"https://rentals.ca/toronto/under-1500\">Apartments in Toronto under $1500</a></p><p data-block-key=\"4b8jr\"><a href=\"https://rentals.ca/toronto/under-2000\">Apartments in Toronto under $2000</a></p><p data-block-key=\"3o7hv\"><a href=\"https://rentals.ca/toronto/under-2500\">Apartments in Toronto under $2500</a></p><p data-block-key=\"b981r\"></p><p data-block-key=\"27mdk\"><b>Search by Bedrooms</b></p><p data-block-key=\"85th5\"><a href=\"https://rentals.ca/toronto/1-bedrooms\">1 Bedroom Rentals in Toronto</a></p><p data-block-key=\"6mhpj\"><a href=\"https://rentals.ca/toronto/2-bedrooms\">2 Bedroom Rentals in Toronto</a></p><p data-block-key=\"35nnl\"><a href=\"https://rentals.ca/toronto/3-bedrooms\">3 Bedroom Rentals in Toronto</a></p><p data-block-key=\"ephbb\"></p><p data-block-key=\"dhkbg\"><b>Search by Amenities</b></p><p data-block-key=\"fuv7p\"><a href=\"https://rentals.ca/toronto/pet-friendly\">Toronto Pet Friendly Apartments</a></p><p data-block-key=\"5gj50\"><a href=\"https://rentals.ca/toronto?amenities=heating&amp;amenities=water&amp;amenities=hydro\">Toronto Utilities-Included Apartments</a></p><p data-block-key=\"1nmv5\"><a href=\"https://rentals.ca/toronto/furnished\">Toronto Furnished Apartments</a></p><p data-block-key=\"d4bov\"><a href=\"https://rentals.ca/toronto/washer-dryer\">Toronto Apartments with Washer/Dryer</a></p><p data-block-key=\"8dvoc\"><a href=\"https://rentals.ca/toronto/wheelchair-accessible\">Toronto Wheelchair Accessible Apartments</a></p><p data-block-key=\"4tp6c\"></p><p data-block-key=\"evoh7\"><b>Choose From Different Property Types</b></p><p data-block-key=\"8qk6e\"><a href=\"https://rentals.ca/toronto/condos\">Toronto Condos for Rent</a></p><p data-block-key=\"70hk2\"><a href=\"https://rentals.ca/toronto/all-houses\">Toronto Houses for Rent</a></p><p data-block-key=\"c6m6q\"><a href=\"https://rentals.ca/toronto/all-apartments\">Toronto Apartments for Rent</a></p><p data-block-key=\"49jgh\"></p>\n          </section>\n        \n      </div>\n    </section>\n  </article>\n",
                                "property_count": 5598,
                                "rent_stats_latest": {
                                    "year": 2024,
                                    "month": 12,
                                    "data": [6929.0, 7228.0, 5313.0, 1942.0, 2360.0, 3077.0, 3664.0, 3912.0, 2639.0, 0.6, -0.6, -0.4, 0.1, 0.2, -0.4, -4.9, -6.4, -7.2, -2.6, -1.5, -7.2]
                                },
                                "unit_count": 8572
                            },
                            "pagination": {
                                "current_page": 1,
                                "invalid": false,
                                "last_page": 224,
                                "next_page_url": "/toronto?p=2",
                                "per_page": 25,
                                "prev_page_url": null,
                                "total": 5598,
                                "total_units": 8572
                            },
                            "canonical_url": "https://rentals.ca/toronto",
                            "url": "https://rentals.ca/toronto",
                            "title": "Rentals.ca Toronto Apartments, Condos and Houses For Rent",
                            "description": "Finding a place to call home in Toronto ON has never been so easy. Quickly find your new Apartment, Condo or House using our easy-to-use map-based search",
                            "h1": "Toronto Apartments, Condos and Houses for Rent",
                            "locales": {
                                "fr": "https://rentals.ca/fr/a-louer-toronto"
                            },
                            "filtered": {
                                "obj_path": "toronto",
                                "by_level": true
                            },
                            "sort": "relevant",
                            "total_properties": 5598,
                            "returned_properties": 25
                        },
                        "data": {
                            "meta": {
                                "totalCount": 5598,
                                "totalFloorPlanCount": 8572,
                                "focusedPlace": {
                                    "name": "Toronto",
                                    "slug": "toronto",
                                    "path": "toronto",
                                    "id": "b'Y2l0eTo2MTY3ODY1'",
                                    "location": [-79.3831843, 43.653226]
                                },
                                "userFavorites": []
                            },
                            "cities": [{
                                "__typename": "City",
                                "id": "Y2l0eTo2MTY3ODY1",
                                "path": "toronto",
                                "regionCode": "ON",
                                "cityName": "Toronto",
                                "cityLocation": [-79.383184, 43.653226],
                                "citySlug": "toronto"
                            }],
                            "pageInfo": {
                                "endCursor": "YXJyYXljb25uZWN0aW9uOjI0"
                            },
                            "edges": [{
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo4MzAwODg=",
                                    "path": "toronto/35-walmer-road-id830088",
                                    "rentalListingName": "35 Walmer Road",
                                    "rentalListingLocation": [-79.405541, 43.669164],
                                    "highlightStatus": "featured",
                                    "priority": 1600050,
                                    "address": {
                                        "street": "35 Walmer Road",
                                        "streetSuffix": null,
                                        "postalCode": "M5R 2X3",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Our Leasing Specialist",
                                        "phoneNumber": "(289) 914-1627"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-01T19:52:19+00:00",
                                    "rentRange": [2053.61, 3095.0],
                                    "bedsRange": [0.0, 2.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [393.0, 792.0],
                                    "imagesCount": 14,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/830088/apartment-422841885.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/830088/apartment-422841885.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/830088/apartment-422841885.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/830088/apartment-422841886.jpg",
                                            "name": "small",
                                            "width": 1200,
                                            "height": 900
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/830088/apartment-422841886.jpg",
                                            "name": "medium",
                                            "width": 1200,
                                            "height": 900
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/830088/apartment-422841886.jpg",
                                            "name": "large",
                                            "width": 1200,
                                            "height": 900
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": [{
                                        "name": "Diamond Staged 3-Bedroom",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "eRedozy12eq"
                                    }, {
                                        "name": "Staged Diamond 2-Bedroom",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "muXqBa2eqvh"
                                    }],
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2291.08
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3095.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2387.08
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2257.08
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2458.25
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2275.97
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2053.61
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2290.97
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2073.61
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2417.08
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://www.35walmerroad.com/"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo4MTM2OTU=",
                                    "path": "toronto/6030-bathurst-street",
                                    "rentalListingName": "Valencia Towers",
                                    "rentalListingLocation": [-79.447796, 43.787847],
                                    "highlightStatus": "featured",
                                    "priority": 1600050,
                                    "address": {
                                        "street": "6030 Bathurst Street",
                                        "streetSuffix": null,
                                        "postalCode": "M2R 1Z9",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": null,
                                        "phoneNumber": "(365) 654-6895"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-02-25T19:05:26+00:00",
                                    "rentRange": [2049.0, 3209.0],
                                    "bedsRange": [1.0, 3.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [746.0, 1244.0],
                                    "imagesCount": 19,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/813695/apartment-384093162.jpg",
                                            "name": "small",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/813695/apartment-384093162.jpg",
                                            "name": "medium",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/813695/apartment-384093162.jpg",
                                            "name": "large",
                                            "width": 1920,
                                            "height": 1080
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/813695/apartment-384093163.jpg",
                                            "name": "small",
                                            "width": 1498,
                                            "height": 1000
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/813695/apartment-384093163.jpg",
                                            "name": "medium",
                                            "width": 1498,
                                            "height": 1000
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/813695/apartment-384093163.jpg",
                                            "name": "large",
                                            "width": 1498,
                                            "height": 1000
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2049.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 3209.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://hazelview.rhenti.com/#/property/65f1b4b6aaa988002e9291a4?channel=hazelview"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo4MDEwNTA=",
                                    "path": "toronto/1531-bathurst-street-toronto",
                                    "rentalListingName": "Tichester Park Manors",
                                    "rentalListingLocation": [-79.41887, 43.685625],
                                    "highlightStatus": "featured",
                                    "priority": 1600050,
                                    "address": {
                                        "street": "1531 Bathurst Street,Toronto",
                                        "streetSuffix": null,
                                        "postalCode": "M5P 3H5",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": null,
                                        "phoneNumber": "(289) 216-9178"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-01-02T10:53:40+00:00",
                                    "rentRange": [1949.0, 2099.0],
                                    "bedsRange": [0.0, 1.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [628.0, 670.0],
                                    "imagesCount": 15,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/801050/apartment-439770123.jpg",
                                            "name": "small",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/801050/apartment-439770123.jpg",
                                            "name": "medium",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/801050/apartment-439770123.jpg",
                                            "name": "large",
                                            "width": 1920,
                                            "height": 1080
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/801050/apartment-439770124.jpg",
                                            "name": "small",
                                            "width": 2048,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/801050/apartment-439770124.jpg",
                                            "name": "medium",
                                            "width": 2048,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/801050/apartment-439770124.jpg",
                                            "name": "large",
                                            "width": 2048,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2099.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1949.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://hazelview.rhenti.com/#/property/65089ad969c935002ebc0ffb?channel=hazelview"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3MDAxOTc=",
                                    "path": "toronto/77-99-gerrard-street-west",
                                    "rentalListingName": "Gerrard West",
                                    "rentalListingLocation": [-79.385671, 43.658327],
                                    "highlightStatus": "featured",
                                    "priority": 1600050,
                                    "address": {
                                        "street": "77 & 99 Gerrard Street West",
                                        "streetSuffix": null,
                                        "postalCode": "M5G 2B5",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Leasing Consultant",
                                        "phoneNumber": "(365) 360-7501"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2024-12-04T18:24:57+00:00",
                                    "rentRange": [2195.0, 5300.0],
                                    "bedsRange": [1.0, 3.5],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [525.0, 1189.0],
                                    "imagesCount": 38,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/700197/apartment-413677325.jpg",
                                            "name": "small",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/700197/apartment-413677325.jpg",
                                            "name": "medium",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/700197/apartment-413677325.jpg",
                                            "name": "large",
                                            "width": 1920,
                                            "height": 1080
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/700197/apartment-413677326.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/700197/apartment-413677326.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/700197/apartment-413677326.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": [{
                                        "name": "Residence 1 - One Bedroom",
                                        "description": null,
                                        "type": "interactive_matterport",
                                        "refId": "KWckPEoTSk4"
                                    }, {
                                        "name": "Residence 11 - Two Bedroom",
                                        "description": null,
                                        "type": "interactive_matterport",
                                        "refId": "5LAKimmckFe"
                                    }, {
                                        "name": "Residence 2 - One Bedroom",
                                        "description": null,
                                        "type": "interactive_matterport",
                                        "refId": "T73372NrCpX"
                                    }, {
                                        "name": "Residence 12 - Three Bedroom",
                                        "description": null,
                                        "type": "interactive_matterport",
                                        "refId": "EEts13YRz3s"
                                    }, {
                                        "name": "Penthouse Collection",
                                        "description": null,
                                        "type": "interactive_matterport",
                                        "refId": "f93fPoehEj4"
                                    }],
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3495.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3100.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 4795.0
                                    }, {
                                        "beds": 3.5,
                                        "baths": 2.0,
                                        "rent": 5300.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://www.gerrardwest.com/?utm_source=RentSync&utm_medium=Rentals.ca%20Infinity%20Network&utm_campaign=Gerrard%20West"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3NTA1NjY=",
                                    "path": "toronto/the-britt",
                                    "rentalListingName": "The Britt ",
                                    "rentalListingLocation": [-79.386771, 43.664922],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "31 Phipps Street",
                                        "streetSuffix": null,
                                        "postalCode": "M4Y 0E5",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": null,
                                        "phoneNumber": "(289) 536-4399"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-11T19:34:20+00:00",
                                    "rentRange": [2285.0, 3995.0],
                                    "bedsRange": [1.0, 2.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [475.0, 921.0],
                                    "imagesCount": 30,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/750566/apartment-381150304.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/750566/apartment-381150304.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/750566/apartment-381150304.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/750566/apartment-381150305.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/750566/apartment-381150305.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/750566/apartment-381150305.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": [{
                                        "name": "Large 2 Bedroom",
                                        "description": "Suite 402 - Large 2 Bedroom",
                                        "type": "interactive_matterport",
                                        "refId": "XYw3RbuFPKT"
                                    }, {
                                        "name": "Large 1 Bed",
                                        "description": "Suite 306 Large 1 Bedroom",
                                        "type": "interactive_matterport",
                                        "refId": "QrrWXpBYJh8"
                                    }],
                                    "floorPlans": [{
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3900.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2665.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2375.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2285.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2400.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3250.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3995.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3815.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": null
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3OTcxNzU=",
                                    "path": "toronto/4-latimer-avenue",
                                    "rentalListingName": "4 Latimer Avenue",
                                    "rentalListingLocation": [-79.416162, 43.703231],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "4 Latimer Avenue",
                                        "streetSuffix": null,
                                        "postalCode": "M5N 2L9",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": null,
                                        "phoneNumber": "(289) 216-8743"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-10T20:51:11+00:00",
                                    "rentRange": [1699.0, 2199.0],
                                    "bedsRange": [0.0, 1.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [351.0, 547.0],
                                    "imagesCount": 11,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/797175/apartment-412181936.jpg",
                                            "name": "small",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/797175/apartment-412181936.jpg",
                                            "name": "medium",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/797175/apartment-412181936.jpg",
                                            "name": "large",
                                            "width": 1920,
                                            "height": 1080
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/797175/apartment-412181937.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/797175/apartment-412181937.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/797175/apartment-412181937.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1699.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2159.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2199.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1719.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://hazelview.rhenti.com/#/property/64047d8795bb7f002d14d95e?channel=hazelview"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo5ODQ4MTk=",
                                    "path": "toronto/west-house",
                                    "rentalListingName": "West House",
                                    "rentalListingLocation": [-79.402718, 43.643182],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "88 Bathurst Street",
                                        "streetSuffix": null,
                                        "postalCode": "M5V 0W8",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "West House Leasing",
                                        "phoneNumber": "(647) 498-1818"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-10T15:02:19+00:00",
                                    "rentRange": [2125.0, 5800.0],
                                    "bedsRange": [0.0, 3.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [367.0, 1302.0],
                                    "imagesCount": 46,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/984819/apartment-425605334.jpg",
                                            "name": "small",
                                            "width": 1985,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/984819/apartment-425605334.jpg",
                                            "name": "medium",
                                            "width": 1985,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/984819/apartment-425605334.jpg",
                                            "name": "large",
                                            "width": 1985,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/984819/apartment-425605335.jpg",
                                            "name": "small",
                                            "width": 1723,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/984819/apartment-425605335.jpg",
                                            "name": "medium",
                                            "width": 1723,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/984819/apartment-425605335.jpg",
                                            "name": "large",
                                            "width": 1723,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4200.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5550.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2600.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2735.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2725.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3260.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3150.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4025.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2400.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2400.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3600.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4050.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2725.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2550.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2475.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2585.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2550.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2735.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2640.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4220.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5570.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2620.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2755.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2745.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3280.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3170.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4045.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2420.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2420.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2420.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3620.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4070.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4020.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2745.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2570.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2495.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2605.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2570.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2755.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2755.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2660.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3865.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4515.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5590.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2640.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2775.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2765.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3300.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3190.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4065.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2440.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2440.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2440.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3640.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4090.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4040.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2765.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2590.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2515.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2625.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2590.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2775.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2775.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2680.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3885.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4535.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5610.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2660.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2795.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2785.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3320.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3210.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4085.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2460.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2460.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2460.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3660.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4110.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4060.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2785.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2610.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2535.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2645.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2610.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2795.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2795.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2700.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3905.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4555.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5630.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2680.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2815.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2815.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3340.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3230.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4105.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2480.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2480.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2480.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3680.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4130.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4080.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2805.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2630.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2555.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2665.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2630.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2815.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2815.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2720.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3850.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4625.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5700.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2750.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2885.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2885.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3410.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3300.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4175.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2550.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2550.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2550.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3750.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4200.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4150.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2875.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2700.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2625.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2735.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2700.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2885.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2885.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2790.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2910.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3325.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4300.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2125.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2825.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2900.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2900.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3435.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2650.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3135.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2725.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4000.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5325.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2970.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2575.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2900.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5625.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3460.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2925.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3350.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5500.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4325.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2150.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3460.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3460.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3460.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2850.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2925.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2925.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3460.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2675.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3160.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2750.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4025.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5350.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2995.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2990.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2600.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2925.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5650.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3485.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2950.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3375.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5525.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4350.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2175.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3485.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3485.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3485.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2875.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2950.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2950.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3485.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2700.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3185.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2775.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4050.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5375.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3020.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3015.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2625.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2950.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5675.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3510.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2975.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3400.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5550.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4375.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2200.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3510.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3510.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3510.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2900.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2975.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2975.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3510.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2725.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3210.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2800.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4075.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5400.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3045.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3040.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2650.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2975.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5700.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3535.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3050.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3475.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5625.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4450.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2275.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3585.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3585.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3585.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2975.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3050.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3050.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3585.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2800.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3285.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2875.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4150.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5475.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3120.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3115.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2725.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3050.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5775.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3610.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3075.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3500.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5650.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4475.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2300.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3610.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3610.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3610.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3000.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3075.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3075.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3610.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2825.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3310.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2900.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4175.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5300.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3145.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2750.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3075.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5800.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3635.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4125.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3950.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3975.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4000.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4025.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 4100.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3140.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5475.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://www.westhouse.ca/?switch_cls[id]=102278&utm_source=Rentals.caInfinityNetwork&utm_medium=ILS&utm_campaign=WestHouse_Rentals.caInfinityNetwork"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo4MTQ0MjI=",
                                    "path": "toronto/bela-square",
                                    "rentalListingName": "Bela Square",
                                    "rentalListingLocation": [-79.301715, 43.695147],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "100 Eastdale Avenue",
                                        "streetSuffix": null,
                                        "postalCode": "M4C 5A1",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Leasing Specialist",
                                        "phoneNumber": "(289) 536-4916"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-10T12:06:51+00:00",
                                    "rentRange": [2125.0, 3800.0],
                                    "bedsRange": [1.0, 4.0],
                                    "bathsRange": [1.0, 2.5],
                                    "sizeRange": [463.0, 1220.0],
                                    "imagesCount": 23,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/814422/apartment-407544499.jpg",
                                            "name": "small",
                                            "width": 730,
                                            "height": 410
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/814422/apartment-407544499.jpg",
                                            "name": "medium",
                                            "width": 730,
                                            "height": 410
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/814422/apartment-407544499.jpg",
                                            "name": "large",
                                            "width": 730,
                                            "height": 410
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/814422/apartment-407544500.jpg",
                                            "name": "small",
                                            "width": 2046,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/814422/apartment-407544500.jpg",
                                            "name": "medium",
                                            "width": 2046,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/814422/apartment-407544500.jpg",
                                            "name": "large",
                                            "width": 2046,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": [{
                                        "name": "WILLOW 9",
                                        "description": "3 bedroom Townhouse",
                                        "type": "interactive_matterport",
                                        "refId": "W8jMp9jttKz"
                                    }, {
                                        "name": "WATERLEAF",
                                        "description": "1 Bedroom",
                                        "type": "interactive_matterport",
                                        "refId": "bNWAMwjTBMW"
                                    }],
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2235.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2600.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2225.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 2800.0
                                    }, {
                                        "beds": 2.5,
                                        "baths": 2.5,
                                        "rent": 3775.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.5,
                                        "rent": 3725.0
                                    }, {
                                        "beds": 4.0,
                                        "baths": 2.0,
                                        "rent": 3800.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2185.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2235.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2500.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.5,
                                        "rent": 3800.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 3375.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2150.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 2995.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2245.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2430.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2150.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 2900.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 3300.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2125.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2200.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://belasquare.ca/"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzozMTY2Nzk=",
                                    "path": "toronto/the-roe",
                                    "rentalListingName": "The ROE",
                                    "rentalListingLocation": [-79.394412, 43.709301],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "150 Roehampton Avenue",
                                        "streetSuffix": null,
                                        "postalCode": "M4P 0A2",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "",
                                        "phoneNumber": "(365) 654-6620"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-10T11:33:23+00:00",
                                    "rentRange": [2418.0, 3221.0],
                                    "bedsRange": [1.0, 2.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": null,
                                    "imagesCount": 11,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/316679/apartment-416968877.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/316679/apartment-416968877.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/316679/apartment-416968877.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/316679/apartment-416968878.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/316679/apartment-416968878.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/316679/apartment-416968878.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2418.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3221.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2952.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2734.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://www.mintoapartments.com/gta/Toronto-apartment-rentals/The-ROE/main.html?utm_source=RentSync&utm_medium=Rentals.ca%20Infinity%20Network&utm_campaign=The%20ROE"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzoyOTk0MzQ=",
                                    "path": "toronto/york-mills-and-leslie",
                                    "rentalListingName": "York Mills and Leslie",
                                    "rentalListingLocation": [-79.360857, 43.753788],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "750 York Mills Rd",
                                        "streetSuffix": null,
                                        "postalCode": "M3B 1W9",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "York Mills and Leslie Infoline",
                                        "phoneNumber": "(365) 654-6033"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-10T11:04:38+00:00",
                                    "rentRange": [2299.0, 5500.0],
                                    "bedsRange": [1.0, 4.0],
                                    "bathsRange": [1.0, 2.5],
                                    "sizeRange": null,
                                    "imagesCount": 13,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/299434/apartment-396187189.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/299434/apartment-396187189.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/299434/apartment-396187189.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/299434/apartment-396187190.jpg",
                                            "name": "small",
                                            "width": 1024,
                                            "height": 682
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/299434/apartment-396187190.jpg",
                                            "name": "medium",
                                            "width": 1024,
                                            "height": 682
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/299434/apartment-396187190.jpg",
                                            "name": "large",
                                            "width": 1024,
                                            "height": 682
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2299.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 2599.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 3478.0
                                    }, {
                                        "beds": 4.0,
                                        "baths": 2.5,
                                        "rent": 5500.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://www.mintoapartments.com/gta/North-York-apartment-rentals/York-Mills-and-Leslie/main.html?utm_source=RentSync&utm_medium=Rentals.ca%20Infinity%20Network&utm_campaign=York%20Mills%20and%20Leslie"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo1MTY5NTc=",
                                    "path": "toronto/200-redpath-avenue",
                                    "rentalListingName": "Parker",
                                    "rentalListingLocation": [-79.39397, 43.710377],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "200 Redpath Avenue",
                                        "streetSuffix": null,
                                        "postalCode": "M4P 0E6",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": null,
                                        "phoneNumber": "(365) 605-5841"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-09T18:28:09+00:00",
                                    "rentRange": [1995.0, 5305.0],
                                    "bedsRange": [0.0, 3.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [350.0, 886.0],
                                    "imagesCount": 113,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/516957/apartment-432170385.jpg",
                                            "name": "small",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/516957/apartment-432170385.jpg",
                                            "name": "medium",
                                            "width": 1920,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/516957/apartment-432170385.jpg",
                                            "name": "large",
                                            "width": 1920,
                                            "height": 1080
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/516957/apartment-432170386.jpg",
                                            "name": "small",
                                            "width": 1726,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/516957/apartment-432170386.jpg",
                                            "name": "medium",
                                            "width": 1726,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/516957/apartment-432170386.jpg",
                                            "name": "large",
                                            "width": 1726,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": [{
                                        "name": "LIDO Lifestyle at The Parker",
                                        "description": "",
                                        "type": "video_youtube",
                                        "refId": "r4G7hW7ZMpA"
                                    }, {
                                        "name": "Your Very Own Third-Wave Café",
                                        "description": "",
                                        "type": "video_youtube",
                                        "refId": "ePCFIwNITcE"
                                    }, {
                                        "name": "The Temple: The Parker's Two Level Official Hammer Strength® Gym",
                                        "description": "",
                                        "type": "video_youtube",
                                        "refId": "NtB4kk9WaFE"
                                    }, {
                                        "name": "The Parker: Life's Perfect Backdrop",
                                        "description": null,
                                        "type": "video_youtube",
                                        "refId": "ykBHJFdg2PA"
                                    }],
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3050.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2725.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2975.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1995.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2550.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2525.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3650.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5305.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3650.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3675.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3675.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2070.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3950.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2070.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 4830.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3675.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 4855.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2095.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2575.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3775.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2120.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3025.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2120.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2800.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3025.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2120.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 3025.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2120.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2850.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "http://www.theparkerlife.ca/?utm_knock=rentalsca"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo1ODYyOTg=",
                                    "path": "toronto/18-tretti-way",
                                    "rentalListingName": "Tippett Park",
                                    "rentalListingLocation": [-79.447634, 43.732552],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "18 Tretti Way",
                                        "streetSuffix": null,
                                        "postalCode": "M3H 0E4",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Leasing Specialist",
                                        "phoneNumber": "(289) 724-5823"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-09T13:33:58+00:00",
                                    "rentRange": [1825.0, 3000.0],
                                    "bedsRange": [0.0, 3.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [401.0, 876.0],
                                    "imagesCount": 33,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/586298/apartment-360552911.jpg",
                                            "name": "small",
                                            "width": 2052,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/586298/apartment-360552911.jpg",
                                            "name": "medium",
                                            "width": 2052,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/586298/apartment-360552911.jpg",
                                            "name": "large",
                                            "width": 2052,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/586298/apartment-360552912.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/586298/apartment-360552912.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/586298/apartment-360552912.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": [{
                                        "name": "Residence Twelve",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "toNxcHhNKKc"
                                    }, {
                                        "name": "Residence One",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "hUVvMK9HyC2"
                                    }, {
                                        "name": "Residence Three",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "ALpfg4TtfBX"
                                    }, {
                                        "name": "Residence Twenty Two",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "Hm8vqdy3sy1"
                                    }, {
                                        "name": "Residence Twenty",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "SFkGUR9aRZv"
                                    }, {
                                        "name": "Residence Six",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "3wxqpQcowS8"
                                    }, {
                                        "name": "Residence Fourteen",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "fzeQgfznsi5"
                                    }, {
                                        "name": "Residence Twenty One",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "aWmbzhz1bcr"
                                    }, {
                                        "name": "Residence Two",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "foLp4qmuKGW"
                                    }, {
                                        "name": "Residence Nine",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "7zLK3A8oSDn"
                                    }, {
                                        "name": "Coworking Space",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "2gghQ8KLAo8"
                                    }, {
                                        "name": "Gym",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "8tUkJLQfV7E"
                                    }, {
                                        "name": "Card Room",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "jDsyyxPpjBa"
                                    }, {
                                        "name": "Billiards Room",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "vqYmY3JjiQ4"
                                    }, {
                                        "name": "Party Room",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "k8u8dvrudw1"
                                    }],
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2175.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 2500.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 3000.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1825.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://www.shiplake.com/tippett-park-two?utm_source=RentSync&utm_medium=Rentals.ca%20Infinity%20Network&utm_campaign=Tippett%20Park"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo0NTQ2MDY=",
                                    "path": "toronto/the-cottingham-manor",
                                    "rentalListingName": "The Cottingham Manor",
                                    "rentalListingLocation": [-79.398341, 43.679406],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "291 Avenue rd",
                                        "streetSuffix": null,
                                        "postalCode": "M4V 2G9",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Klara",
                                        "phoneNumber": "(365) 654-0543"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-09T11:37:13+00:00",
                                    "rentRange": [1699.0, 1699.0],
                                    "bedsRange": [0.0, 0.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [373.0, 373.0],
                                    "imagesCount": 21,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/454606/apartment-272198059.jpg",
                                            "name": "small",
                                            "width": 1727,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/454606/apartment-272198059.jpg",
                                            "name": "medium",
                                            "width": 1727,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/454606/apartment-272198059.jpg",
                                            "name": "large",
                                            "width": 1727,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/454606/apartment-272198060.jpg",
                                            "name": "small",
                                            "width": 1727,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/454606/apartment-272198060.jpg",
                                            "name": "medium",
                                            "width": 1727,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/454606/apartment-272198060.jpg",
                                            "name": "large",
                                            "width": 1727,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1699.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": null
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo4ODUxOTc=",
                                    "path": "toronto/697-701-eglinton-avenue-west",
                                    "rentalListingName": "697-701 Eglinton Avenue West",
                                    "rentalListingLocation": [-79.369625, 43.712568],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "697-701 Eglinton Avenue West",
                                        "streetSuffix": null,
                                        "postalCode": "M5N 1C6",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Jason",
                                        "phoneNumber": "(365) 360-7355"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-08T14:27:23+00:00",
                                    "rentRange": [2195.0, 2995.0],
                                    "bedsRange": [1.0, 3.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [601.0, 968.0],
                                    "imagesCount": 59,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/885197/apartment-401057127.jpg",
                                            "name": "small",
                                            "width": 1723,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/885197/apartment-401057127.jpg",
                                            "name": "medium",
                                            "width": 1723,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/885197/apartment-401057127.jpg",
                                            "name": "large",
                                            "width": 1723,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/885197/apartment-401057128.jpg",
                                            "name": "small",
                                            "width": 341,
                                            "height": 256
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/885197/apartment-401057128.jpg",
                                            "name": "medium",
                                            "width": 341,
                                            "height": 256
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/885197/apartment-401057128.jpg",
                                            "name": "large",
                                            "width": 341,
                                            "height": 256
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 3.0,
                                        "baths": 1.0,
                                        "rent": 2995.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 2575.0
                                    }, {
                                        "beds": 2.5,
                                        "baths": 1.0,
                                        "rent": 2625.0
                                    }, {
                                        "beds": 2.5,
                                        "baths": 1.0,
                                        "rent": 2599.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2245.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": null
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo5NjQyMjc=",
                                    "path": "toronto/the-diamond",
                                    "rentalListingName": "The Diamond",
                                    "rentalListingLocation": [-79.447127, 43.668097],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "980 Lansdowne",
                                        "streetSuffix": null,
                                        "postalCode": "M6H 4K4",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Community Leasing Agent",
                                        "phoneNumber": "(647) 278-6867"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-04T12:43:52+00:00",
                                    "rentRange": [2199.0, 4179.0],
                                    "bedsRange": [1.0, 3.0],
                                    "bathsRange": [1.0, 2.5],
                                    "sizeRange": [481.0, 1085.0],
                                    "imagesCount": 28,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/964227/apartment-416889907.jpg",
                                            "name": "small",
                                            "width": 1819,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/964227/apartment-416889907.jpg",
                                            "name": "medium",
                                            "width": 1819,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/964227/apartment-416889907.jpg",
                                            "name": "large",
                                            "width": 1819,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/964227/apartment-416889908.jpg",
                                            "name": "small",
                                            "width": 1495,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/964227/apartment-416889908.jpg",
                                            "name": "medium",
                                            "width": 1495,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/964227/apartment-416889908.jpg",
                                            "name": "large",
                                            "width": 1495,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": [{
                                        "name": "Tower D - Plan 3 B",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "VzrBQGHgUUN"
                                    }, {
                                        "name": "Tower B - Plan 2 FF",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "KcYJJfD9cHe"
                                    }, {
                                        "name": "Tower B - Plan 2C",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "GBir5NwVPdg"
                                    }, {
                                        "name": "Tower B - Plan 1 LL",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "NWRJpcE8AFm"
                                    }, {
                                        "name": "Tower B - Plan 1 DD",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "esNAUQvt6Lt"
                                    }, {
                                        "name": "Tower B - Plan 3A",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "x1V19tz2MEi"
                                    }, {
                                        "name": "Tower B - Plan 1 O",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "8nsq3d5hDmY"
                                    }, {
                                        "name": "Tower B - Plan 1 C",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "aFE1Ex1KrFF"
                                    }],
                                    "floorPlans": [{
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 3274.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2209.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3049.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 2.0,
                                        "rent": 2625.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2199.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3189.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2249.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 2.0,
                                        "rent": 2849.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2199.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.5,
                                        "rent": 4109.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.5,
                                        "rent": 3859.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.5,
                                        "rent": 4179.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.5,
                                        "rent": 3959.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://diamondrentals.ca/"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo2OTIzMzU=",
                                    "path": "toronto/2376-dundas-street-west",
                                    "rentalListingName": "LNX",
                                    "rentalListingLocation": [-79.451842, 43.657961],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "2376 Dundas Street West",
                                        "streetSuffix": null,
                                        "postalCode": "M6P 0C1",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "LNX",
                                        "phoneNumber": "(289) 307-5247"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-04T12:22:55+00:00",
                                    "rentRange": [2315.0, 3360.0],
                                    "bedsRange": [1.0, 2.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [517.0, 832.0],
                                    "imagesCount": 17,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/692335/apartment-195062271.jpg",
                                            "name": "small",
                                            "width": 1595,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/692335/apartment-195062271.jpg",
                                            "name": "medium",
                                            "width": 1595,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/692335/apartment-195062271.jpg",
                                            "name": "large",
                                            "width": 1595,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/692335/apartment-195062272.jpg",
                                            "name": "small",
                                            "width": 2057,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/692335/apartment-195062272.jpg",
                                            "name": "medium",
                                            "width": 2057,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/692335/apartment-195062272.jpg",
                                            "name": "large",
                                            "width": 2057,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": ["all"],
                                    "tours": [{
                                        "name": "LNX - Tour 3",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "TeWvxpUaZqg"
                                    }, {
                                        "name": "LNX - Tour 2",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "X57yB4FA2CB"
                                    }, {
                                        "name": "LNX Tour 1",
                                        "description": "",
                                        "type": "interactive_matterport",
                                        "refId": "PJEY7wRRD8y"
                                    }],
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2515.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2365.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2565.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2565.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2615.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2645.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2415.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2525.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2365.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2575.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2605.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2515.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3060.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2545.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2615.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2375.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2575.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2615.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2385.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2585.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2615.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3310.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2625.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2545.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2625.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2635.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3100.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2465.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2555.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2635.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2575.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2645.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2475.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2645.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2515.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2545.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3250.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2535.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3310.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2415.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2385.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2685.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2635.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2345.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2385.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2425.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3260.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2345.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2385.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2695.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3320.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2425.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2425.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2635.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2355.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3320.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2445.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2425.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2645.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2355.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3260.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2355.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3320.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2645.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2705.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2315.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2655.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3330.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2455.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2365.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2705.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2325.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2445.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3280.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2655.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2405.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3340.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2465.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2445.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2375.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2715.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2325.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2455.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3280.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2665.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2415.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3340.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2455.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2445.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2375.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2725.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2455.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2455.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2675.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2425.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3270.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2335.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2475.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3290.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2385.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2425.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3360.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2465.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3300.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2675.0
                                    }, {
                                        "beds": 1.5,
                                        "baths": 1.0,
                                        "rent": 2735.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3360.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2685.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2345.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2475.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3310.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2435.0
                                    }],
                                    "bookables": [{
                                        "name": "default",
                                        "type": "TOUR",
                                        "url": "https://tourswidget.rentsync.com?buildingId=245251&source=syndication&fullSource=rentals_infinity&isRentalsBundle=1"
                                    }],
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "http://www.lnxrentals.com"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3OTQ0NTE=",
                                    "path": "toronto/95-lawton-boulevard-id794451",
                                    "rentalListingName": "95 Lawton Boulevard",
                                    "rentalListingLocation": [-79.3966, 43.6933],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "95 Lawton Boulevard",
                                        "streetSuffix": null,
                                        "postalCode": "M4V 1Z8",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(289) 216-7011"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T20:09:34+00:00",
                                    "rentRange": [2195.0, 2195.0],
                                    "bedsRange": [1.0, 1.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [603.0, 603.0],
                                    "imagesCount": 10,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/794451/apartment-69566510.jpg",
                                            "name": "small",
                                            "width": 1800,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/794451/apartment-69566510.jpg",
                                            "name": "medium",
                                            "width": 1800,
                                            "height": 1080
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/794451/apartment-69566510.jpg",
                                            "name": "large",
                                            "width": 1800,
                                            "height": 1080
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/794451/apartment-69566511.jpg",
                                            "name": "small",
                                            "width": 1024,
                                            "height": 614
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/794451/apartment-69566511.jpg",
                                            "name": "medium",
                                            "width": 1024,
                                            "height": 614
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/794451/apartment-69566511.jpg",
                                            "name": "large",
                                            "width": 1024,
                                            "height": 614
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/95-lawton-boulevard/buildings/95-lawton"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3OTQ0NTI=",
                                    "path": "toronto/485-huron-st-brazil-towers",
                                    "rentalListingName": "485 Huron St. - Brazil Towers",
                                    "rentalListingLocation": [-79.4018, 43.669],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "485 Huron Street",
                                        "streetSuffix": null,
                                        "postalCode": "M5R 2R5",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(365) 654-3754"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T11:45:47+00:00",
                                    "rentRange": [2150.0, 3195.0],
                                    "bedsRange": [0.0, 2.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [307.0, 641.0],
                                    "imagesCount": 24,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/794452/apartment-69566538.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/794452/apartment-69566538.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/794452/apartment-69566538.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/794452/apartment-69566539.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/794452/apartment-69566539.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/794452/apartment-69566539.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2150.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3195.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/485-huron-street-brazil-towers/buildings/485"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3ODA5MjM=",
                                    "path": "toronto/1545-bathurst-street-id780923",
                                    "rentalListingName": "1545 Bathurst Street",
                                    "rentalListingLocation": [-79.4191, 43.6862],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "1545 Bathurst Street",
                                        "streetSuffix": null,
                                        "postalCode": "M5P 3H6",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(365) 654-6160"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T11:40:11+00:00",
                                    "rentRange": [2050.0, 2195.0],
                                    "bedsRange": [1.0, 1.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [533.0, 533.0],
                                    "imagesCount": 10,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780923/apartment-251845537.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780923/apartment-251845537.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780923/apartment-251845537.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780923/apartment-251845538.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780923/apartment-251845538.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780923/apartment-251845538.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2050.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/1545-bathurst-street/buildings/1545"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3ODA5Mjg=",
                                    "path": "toronto/33-isabella-st-isabella-court",
                                    "rentalListingName": "33 Isabella St - Isabella Court",
                                    "rentalListingLocation": [-79.3837, 43.6677],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "33 Isabella Street East",
                                        "streetSuffix": null,
                                        "postalCode": "M4Y 2P7",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(289) 536-4261"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T11:35:29+00:00",
                                    "rentRange": [1795.0, 2150.0],
                                    "bedsRange": [0.0, 1.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [344.0, 534.0],
                                    "imagesCount": 19,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780928/apartment-69555195.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780928/apartment-69555195.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780928/apartment-69555195.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780928/apartment-69555196.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780928/apartment-69555196.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780928/apartment-69555196.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1895.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2150.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1795.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/33-isabella-street-isabella-court/buildings/33"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3ODA5MjQ=",
                                    "path": "toronto/10-shallmar-boulevard-shallmar-court",
                                    "rentalListingName": "10 Shallmar Boulevard - Shallmar Court",
                                    "rentalListingLocation": [-79.4233, 43.7043],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "10 Shallmar Boulevard",
                                        "streetSuffix": null,
                                        "postalCode": "M5N 1J4",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(365) 654-0599"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T11:34:10+00:00",
                                    "rentRange": [2195.0, 3795.0],
                                    "bedsRange": [1.0, 3.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": null,
                                    "imagesCount": 15,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780924/apartment-385757559.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780924/apartment-385757559.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780924/apartment-385757559.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780924/apartment-385757560.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780924/apartment-385757560.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780924/apartment-385757560.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 3795.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 2995.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/10-shallmar-boulevard-shallmar-court/buildings/10"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo4MjcwMjY=",
                                    "path": "toronto/2525-bathurst-street",
                                    "rentalListingName": "2525 Bathurst Street",
                                    "rentalListingLocation": [-79.4261, 43.706],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "2525 Bathurst Street",
                                        "streetSuffix": null,
                                        "postalCode": "M6B 2Y9",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(416) 271-9637"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T11:27:38+00:00",
                                    "rentRange": [2195.0, 5490.0],
                                    "bedsRange": [1.0, 3.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [605.0, 1575.0],
                                    "imagesCount": 22,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/827026/apartment-93931485.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/827026/apartment-93931485.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/827026/apartment-93931485.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/827026/apartment-93931486.jpg",
                                            "name": "small",
                                            "width": 1152,
                                            "height": 1728
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/827026/apartment-93931486.jpg",
                                            "name": "medium",
                                            "width": 1152,
                                            "height": 1728
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/827026/apartment-93931486.jpg",
                                            "name": "large",
                                            "width": 1152,
                                            "height": 1728
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 3995.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }, {
                                        "beds": 3.0,
                                        "baths": 2.0,
                                        "rent": 5490.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/2525-bathurst-street/buildings/2525"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3ODA5Mjc=",
                                    "path": "toronto/2-clarendon-avenue-id780927",
                                    "rentalListingName": "2 Clarendon Avenue",
                                    "rentalListingLocation": [-79.4007, 43.6836],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "2 Clarendon Avenue",
                                        "streetSuffix": null,
                                        "postalCode": "M4V 1H9",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(365) 654-2870"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T10:53:16+00:00",
                                    "rentRange": [2195.0, 7350.0],
                                    "bedsRange": [0.0, 2.0],
                                    "bathsRange": [1.0, 2.0],
                                    "sizeRange": [276.0, 1339.0],
                                    "imagesCount": 22,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780927/apartment-69555130.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780927/apartment-69555130.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780927/apartment-69555130.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780927/apartment-69555131.jpg",
                                            "name": "small",
                                            "width": 640,
                                            "height": 427
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780927/apartment-69555131.jpg",
                                            "name": "medium",
                                            "width": 640,
                                            "height": 427
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780927/apartment-69555131.jpg",
                                            "name": "large",
                                            "width": 640,
                                            "height": 427
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2395.0
                                    }, {
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2595.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 2.0,
                                        "rent": 7350.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/2-clarendon-avenue/buildings/2"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo5Njk5OTI=",
                                    "path": "toronto/1500-bathurst-street",
                                    "rentalListingName": "1500 Bathurst Street",
                                    "rentalListingLocation": [-79.4191, 43.6842],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "1500 Bathurst Street",
                                        "streetSuffix": null,
                                        "postalCode": "M5P 3L3",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(365) 654-6058"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T10:51:35+00:00",
                                    "rentRange": [1895.0, 1895.0],
                                    "bedsRange": [0.0, 0.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [393.0, 393.0],
                                    "imagesCount": 9,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/969992/apartment-385757614.jpg",
                                            "name": "small",
                                            "width": 1920,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/969992/apartment-385757614.jpg",
                                            "name": "medium",
                                            "width": 1920,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/969992/apartment-385757614.jpg",
                                            "name": "large",
                                            "width": 1920,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/969992/apartment-385757615.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/969992/apartment-385757615.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/969992/apartment-385757615.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 1895.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/1500-bathurst-street/buildings/1500"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }, {
                                "node": {
                                    "__typename": "RentalListing",
                                    "id": "cmVudGFsbGlzdGluZzo3ODA5MjI=",
                                    "path": "toronto/11-walmer-road-farewell-apartments",
                                    "rentalListingName": "11 Walmer Road - Farewell Apartments",
                                    "rentalListingLocation": [-79.4053, 43.6672],
                                    "highlightStatus": "featured",
                                    "priority": 1600000,
                                    "address": {
                                        "street": "11 Walmer Rd.",
                                        "streetSuffix": null,
                                        "postalCode": "M5R 2W9",
                                        "city": {
                                            "__typename": "City",
                                            "id": "Y2l0eTo2MTY3ODY1",
                                            "path": "toronto",
                                            "regionCode": "ON",
                                            "cityName": "Toronto",
                                            "cityLocation": [-79.383184, 43.653226],
                                            "citySlug": "toronto"
                                        }
                                    },
                                    "contact": {
                                        "name": "Yulianna Tomash",
                                        "phoneNumber": "(365) 656-0763"
                                    },
                                    "verified": true,
                                    "spotlightArticles": null,
                                    "listingType": "residential:apartment:apartment",
                                    "modified": "2025-04-03T10:46:21+00:00",
                                    "rentRange": [2195.0, 3595.0],
                                    "bedsRange": [0.0, 2.0],
                                    "bathsRange": [1.0, 1.0],
                                    "sizeRange": [423.0, 878.0],
                                    "imagesCount": 14,
                                    "images": [{
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780922/apartment-69554923.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780922/apartment-69554923.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780922/apartment-69554923.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }, {
                                        "scales": [{
                                            "url": "https://images.rentals.ca/property-pictures/small/toronto-on/780922/apartment-69554924.jpg",
                                            "name": "small",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/medium/toronto-on/780922/apartment-69554924.jpg",
                                            "name": "medium",
                                            "width": 1728,
                                            "height": 1152
                                        }, {
                                            "url": "https://images.rentals.ca/property-pictures/large/toronto-on/780922/apartment-69554924.jpg",
                                            "name": "large",
                                            "width": 1728,
                                            "height": 1152
                                        }]
                                    }],
                                    "systemMetaTags": null,
                                    "petOptions": null,
                                    "tours": null,
                                    "floorPlans": [{
                                        "beds": 0.0,
                                        "baths": 1.0,
                                        "rent": 2195.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2595.0
                                    }, {
                                        "beds": 1.0,
                                        "baths": 1.0,
                                        "rent": 2695.0
                                    }, {
                                        "beds": 2.0,
                                        "baths": 1.0,
                                        "rent": 3595.0
                                    }],
                                    "bookables": null,
                                    "meta": {
                                        "__typename": "RentalListingMeta",
                                        "providerInfo": {
                                            "__typename": "RentalListingProviderInfo",
                                            "vendorItemUrl": "https://cromwellmgt.ca/residential/projects/11-walmer-road-farewell-apartments/buildings/11"
                                        }
                                    },
                                    "sourceLevel": 500
                                }
                            }]
                        }
                    },

                    recordActive: null
                };
                App.store.availablePropertyTypes = [{
                    "name": "Condo",
                    "slug": "condo",
                    "subtypes": [{
                        "slug": "condo",
                        "name": "Condo"
                    }]
                }, {
                    "name": "Apartment",
                    "slug": "all-apartments",
                    "subtypes": [{
                        "slug": "apartment",
                        "name": "Apartment"
                    }, {
                        "slug": "studio",
                        "name": "Studio"
                    }, {
                        "slug": "bachelor",
                        "name": "Bachelor"
                    }, {
                        "slug": "basement",
                        "name": "Basement"
                    }, {
                        "slug": "duplex",
                        "name": "Duplex"
                    }, {
                        "slug": "loft",
                        "name": "Loft"
                    }]
                }, {
                    "name": "House",
                    "slug": "all-houses",
                    "subtypes": [{
                        "slug": "house",
                        "name": "House"
                    }, {
                        "slug": "town-house",
                        "name": "Town House"
                    }, {
                        "slug": "multi-unit",
                        "name": "Multi-Unit"
                    }, {
                        "slug": "cabin",
                        "name": "Cabin"
                    }, {
                        "slug": "cottage",
                        "name": "Cottage"
                    }]
                }, {
                    "name": "Room",
                    "slug": "room",
                    "subtypes": [{
                        "slug": "room",
                        "name": "Room"
                    }]
                }],
                App.store.page.breadcrumbs = App.store.search.response.meta.focus.breadcrumbs;
            });
            gtmLazyLoadTags.push('trovit');
        </script>
        <script type="text/javascript">
            AppStartup.push(function() {
                App.preferNeighbourhood = false;
                App.i18n.currentLanguage = {
                    "bidi": false,
                    "code": "en",
                    "name": "English",
                    "name_local": "English",
                    "name_translated": "English"
                };
                App.release = {
                    "version": "2025.4",
                    "build": null,
                    "revision": null
                };
                App.features = {
                    "mapSearchThisAreaButton": 50,
                    "mapZoomInForMoreListingsButtonEnabled": false,
                    "mapLoadMoreListingsButtonEnabled": true
                };
            });

            AppStartup.push(function() {

                App.store.user = {
                    is_anonymous: true
                };
            });

            AppStartup.push(function() {
                App.store.geoData = {
                    "city": null,
                    "active_city": null
                };
            });

            AppStartup.push(function() {
                App.endpoints.listings = '/phoenix/api/v1.0.2/listings';
                App.endpoints.setLanguage = '/i18n/setlang/';
                App.endpoints.subscribeRentReport = '/phoenix/api/v1.0.2/subscribe_rent_report'

                App.endpoints.signRequest = {
                    create: '/phoenix/api/v1.0.2/property-sign-request',
                    fetch: '/phoenix/api/v1.0.2/property-sign-requests',
                    getPropertyDataFromSignCode: '/phoenix/api/v1.0.2/property_data_from_sign_code',
                }

                App.endpoints.user = {
                    check: '/phoenix/api/v1.0.2/user/check',
                    user: '/phoenix/api/v1.0.2/user',
                    change_password: '/phoenix/api/v1.0.2/user/change-password',
                    notifications: '/phoenix/api/v1.0.2/user/notifications',
                    notifications_reset: '/phoenix/api/v1.0.2/user/notifications/reset',
                    listings: '/phoenix/api/v1.0.2/user/listings',
                    drafts: '/phoenix/api/v1.0.2/user/drafts',
                    favourites: '/phoenix/api/v1.0.2/user/favourites',
                    savedSearches: '/phoenix/api/v1.0.2/user/saved-searches',
                    savedSearchesByListing: '/phoenix/api/v1.0.2/user/saved-searches/by-listing/',
                    login: '/phoenix/api/v1.0.2/user/login',
                    logout: '/phoenix/api/v1.0.2/user/logout',
                    register: '/phoenix/api/v1.0.2/users',
                    resetPassword: '/phoenix/api/v1.0.2/user/reset-password',
                    nearestCity: '/phoenix/api/v1.0.2/location/nearest-city',
                    verify: '/phoenix/api/v1.0.2/user/verify',
                    unverify: '/phoenix/api/v1.0.2/user/unverify',
                    challenge: '/phoenix/api/v1.0.2/user/challenge',
                    notify: {
                        challenge: '/phoenix/api/v1.0.2/user/notify/challenge',
                    },
                };

                App.endpoints.autosuggest = '/phoenix/api/v1.0.2/autocomplete';

                App.endpoints.location = {
                    city: '/phoenix/api/v1.0.2/location/cities',
                    neighbourhood: '/phoenix/api/v1.0.2/location/neighbourhoods',
                };

                App.endpoints.billing = {
                    billing: '/manage/api/billing',
                    calculatedAddons: '/manage/api/billing/calculated-addons',
                    calculatedInvoiceItems: '/manage/api/billing/calculated-invoice-items',
                    createOrderAfterPayment: '/manage/api/billing/create-order-after-payment',
                    createPaymentIntentAndGetClientSecret: '/manage/api/billing/create-stripe-payment-intent-and-get-client-secret',
                    savedCards: '/manage/api/billing/existing-payment-methods',
                    validateDiscount: '/manage/api/billing/validate-discount'
                };
            });

            AppStartup.push(function() {
                App.urls['index'] = '/';
                App.urls['contact-page'] = '/contact';
                App.urls['about'] = '/team';
                App.urls['terms-page'] = '/terms';
                App.urls['privacy-page'] = '/privacy';
                App.urls['404-page'] = '/errors/404';
                App.urls['faq'] = '/faq';
                App.urls['landlords'] = '/landlords';
                App.urls['jack_armstrong'] = '/jack';
                App.urls['rent_report'] = '/national-rent-report';
                App.urls['password_reset'] = '/reset-password';
                App.urls['sitemap'] = '/sitemap';
                App.urls['popular-searches'] = '/popular-searches';
                App.urls['accounts:logout'] = '/phoenix/api/v1.0.2/user/logout';
                App.urls['manage:index'] = '/manage/';
                App.urls['manage:listing'] = '/manage/listing';
                App.urls['manage:listings'] = '/manage/listings';
                App.urls['manage:favourites'] = '/manage/favourites';
                App.urls['manage:account'] = '/manage/account';
                App.urls['rentalsstaff:index'] = '/staff/';
                App.urls['rentalsstaff:listings_advanced'] = '/staff/listings-advanced';
                App.urls['wagtailadmin_home'] = '/cms/';

                App.urls['google-login'] = '/accounts/google/login/';

            });

            AppStartup.push(function() {
                App.constants.I18N = {
                    LANGUAGE_DEFAULT: 'en',
                    URL_CITY_PREFIX: {
                        fr: 'a-louer-',
                    }
                };

                App.constants.WEBEVENTS_TRACKING_ID = '0413f58e-7f6e-488b-b848-9e215207991d';

                App.constants.RENTRANGE_MIN = 0;
                App.constants.RENTRANGE_MAX = 5000;

                App.constants.DIMENSIONS_MIN = 0;
                App.constants.DIMENSIONS_MAX = 2000;

                App.constants.SORT_DEFAULT = 'relevant';

                App.constants.SEARCH_RESULT_MAP_ZOOM = {
                    GENERIC: 11,
                    NEIGHBOURHOOD: 15,
                };

                App.constants.RENTALS_API_TOKEN = 'None';
                App.constants.GOOGLE_MAPS_API_KEY = 'AIzaSyBILQ90EFGi9KLnj41YJDm72yIXFDrI4Ro';
                App.constants.GOOGLE_MAPS_LOCAL_LOGIC_API_KEY = 'AIzaSyBILQ90EFGi9KLnj41YJDm72yIXFDrI4Ro';
                App.constants.LOCAL_LOGIC_TOKEN = '924b6e5da7d532a96c1360e93618e2cfa8ed204f507e921e6535bbe3a37dfaff381d55fc6ef33e79';
                App.constants.STRIPE_TOKEN = 'pk_live_FBWuLw2cxrZuymeEXzkUAv6k00gtVIzMiZ';

                App.constants.SENTRY_ENABLED = false;

                App.constants.SEARCH_RESULTS_DEBOUNCE_TIME = 500;

                App.constants.UTMS_EXPIRY_HOURS = 2;

                App.constants.ENABLE_MULTI_MESSAGING = true;

                App.constants.ENABLE_GOOGLE_LOGIN = true;
                App.constants.ENABLE_FACEBOOK_LOGIN = false;
                App.constants.ENABLE_STACKADAPT_LEAD_TRACKING = true;
                App.constants.ENABLE_USER_2FA = true;

                App.constants.ENABLE_PERSONA_DURING_SIGNUP = true ?? true;

                App.constants.FREE_PLAN_ID = 6;

                App.constants.USER_CATEGORY = {
                    owner: "owner",
                    propertyManager: "property-manager",
                    realEstateAgentOrBroker: "agent-or-broker",
                    renter: "renter",
                };

                App.constants.IDENT_VERIFIED = {
                    unverified: "unv",
                    pending: "pen",
                    rejected: "rej",
                    verified: "ver",
                };

                App.constants.ENABLE_COOKIE_MANAGER = true;

                App.constants.PROMOTED_PLAN_WITH_ZUMPER_SYNDICATION_PRICE = 89;
                App.constants.PROMOTED_PLAN_WITH_ZUMPER_SYNDICATION_INTERVAL = 'day';
                App.constants.PROMOTED_PLAN_WITH_ZUMPER_SYNDICATION_INTERVAL_COUNT = 30;

                App.constants.ENABLE_SIGN_ORDERING = false;
            });

          
        </script>
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"930175fde83cf353","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2025.3.0","token":"7fb1793157764d5598e71b3c6eb5765a"}' crossorigin="anonymous"></script>
    </body>
</html>
