define([], function () {
    var searchData = [
        { id: 1, name: "Hoegger", prename: "Andreas", email: "andreas.hoegger@bsiag.com" },
        { id: 2, name: "Dietrich", prename: "Benno", email: "benno.dietrich@soxes.ch" },
        { id: 3, name: "Köferli", prename: "Bruno", email: "bruno.koeferli@bsiag.com.com" },
        { id: 4, name: "Guglielmo", prename: "Claudio", email: "claudio.guglielmo@gmail.com" },
        { id: 5, name: "Heller", prename: "Dominik", email: "dominik.heller@ferag.com" },
        { id: 6, name: "Albertin", prename: "Fabio", email: "albertin@gmail.com" },
        { id: 7, name: "Rast", prename: "Franca", email: "franca__rast@hotmail.com" },
        { id: 8, name: "Heymanns", prename: "Holger", email: "holger.heymanns@gmail.com" },
        { id: 9, name: "Eggers", prename: "Jan", email: "jan.eggers@ferag.com" },
        { id: 10, name: "Schefer", prename: "Kilian", email: "kilian@schefer.name" },
        { id: 11, name: "Müller", prename: "Lisa", email: "lisa.mueller47@gmail.com" },
        { id: 12, name: "Wirrer", prename: "Markus", email: "markus.wirrer@namics.com" },
        { id: 13, name: "Linggi", prename: "Martin", email: "martin.linggi@hispeed.ch" },
        { id: 14, name: "Schmid", prename: "Michael", email: "me@mish.me" },
        { id: 15, name: "Bosshard", prename: "Nicole", email: "nicole.bosshard@internezzo.ch" },
        { id: 16, name: "Gfeller", prename: "Philipp", email: "philipp.gfeller@maxomedia.ch" },
        { id: 17, name: "Bieri", prename: "Rolf", email: "r@fam-bieri.ch" },
        { id: 18, name: "Stutz", prename: "Rolf", email: "rolf.stutz@gmx.net" },
        { id: 19, name: "Stanic", prename: "Sascha", email: "s-mail@gmx.net" },
        { id: 20, name: "Solenthaler", prename: "Thomas", email: "tsolenthaler@gmail.com" },
    ];

    var detailData = [
        { id: 1, short: "ahoegger", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 2, short: "bdietrich", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 3, short: "bköferli", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 4, short: "cguglielm", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 5, short: "dheller", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 6, short: "falbertin", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 7, short: "frast", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 8, short: "hheymanns", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 9, short: "jeggers", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 10, short: "kschefer", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 11, short: "lmüller", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 12, short: "mwirrer", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 13, short: "mlinggi", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 14, short: "mschmid", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 15, short: "nbosshard", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 16, short: "pgfeller", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 17, short: "rbieri", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 18, short: "rstutz", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 19, short: "sstanic", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" },
        { id: 20, short: "tsolenthaler", hobbies: "Weiterbildungen an der HSR besuchen", tel: "+41 55 222 41 11", street: "Oberseestrasse", number: "10", zip: "8640", city: "Rapperswil" }        
    ];

    var demo = {
        search: searchData,
        detail: detailData
    }

    return demo;   
});