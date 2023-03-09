/**
 * Use this to populate the list of institutions in the options menu.  In order for a tenant to
 * appear, it *must* have an `apps.rl` value (which can be anything)
 *
 * The non-branded 'Talis' extension should use the tenant list from:
 * https://talis-public.s3-eu-west-1.amazonaws.com/talis.com/customers.json
 */
var allTenants = {
    "aber": {
      "name": "Aberystwyth University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://aspire.aber.ac.uk/login.html"
      }
    },
    "aston": {
      "name": "Aston University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://aston.rl.talis.com/"
      }
    },
    "aut": {
      "name": "Auckland University of Technology",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.aut.ac.nz/",
        "dc": "http://content.talisaspire.com/aut"
      }
    },
    "bangor": {
      "name": "Bangor University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.bangor.ac.uk/login.html"
      }
    },
    "bathspa": {
      "name": "Bath Spa University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://bathspa.rl.talis.com/",
        "dc": "http://content.talisaspire.com/bathspa"
      }
    },
    "binorway": {
      "name": "BI Norwegian Business School ",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglist.bi.edu/login.html"
      }
    },
    "bimmu": {
      "name": "BIMM University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://bimmu.rl.talis.com/"
      }
    },
    "bishopg": {
      "name": "Bishop Grosseteste University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://bishopg.rl.talis.com/",
        "dc": "http://content.talisaspire.com/bishopg"
      }
    },
    "bournemouth": {
      "name": "Bournemouth University ",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.bournemouth.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/bournemouth"
      }
    },
    "bpp": {
      "name": "BPP University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://bpp.rl.talis.com/",
        "dc": "http://content.talisaspire.com/bpp"
      }
    },
    "brunel": {
      "name": "Brunel University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.brunel.ac.uk/login.html"
      }
    },
    "city": {
      "name": "City, University of London",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.city.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/city"
      }
    },
    "coventry": {
      "name": "Coventry University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.coventry.ac.uk/login.html"
      }
    },
    "cranfield": {
      "name": "Cranfield University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://cranfield.rl.talis.com/",
        "dc": "https://content.talisaspire.com/cranfield"
      }
    },
    "dmu": {
      "name": "De Montfort University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.dmu.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/dmu"
      }
    },
    "deakin": {
      "name": "Deakin University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.lib.deakin.edu.au/login.html",
        "dc": "http://content.talisaspire.com/deakin"
      }
    },
    "durham": {
      "name": "Durham University",
      "region": "EUAPAC",
      "apps": {
        "rl": "https://durham.rl.talis.com/index.html",
        "dc": "http://content.talisaspire.com/durham"
      }
    },
    "edgehill": {
      "name": "Edge Hill University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://edgehill.rl.talis.com/"
      }
    },
    "falmouth": {
      "name": "Falmouth University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.falmouth.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/falmouth"
      }
    },
    "gold": {
      "name": "Goldsmiths, University of London",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.gold.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/gold"
      }
    },
    "griffith": {
      "name": "Griffith University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.griffith.edu.au/login.html",
        "dc": "http://content.talisaspire.com/griffith"
      }
    },
    "jcu": {
      "name": "James Cook University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readings.jcu.edu.au/",
        "dc": "http://content.talisaspire.com/jcu"
      }
    },
    "keele": {
      "name": "Keele University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.lib.keele.ac.uk/login.html"
      }
    },
    "kmms": {
      "name": "Kent and Medway Medical School",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://kmms.rl.talis.com/"
      }
    },
    "latrobe": {
      "name": "La Trobe University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.latrobe.edu.au/login.html",
        "dc": "http://content.talisaspire.com/latrobe"
      }
    },
    "langara": {
      "name": "Langara College",
      "region": "CA",
      "apps": {
        "rl": "http://langara.rl.ca.talis.com/",
        "dc": "https://dc.ca.talis.com/langara"
      }
    },
    "beckett": {
      "name": "Leeds Beckett University ",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://beckett.rl.talis.com/"
      }
    },
    "ltu": {
      "name": "Leeds Trinity University",
      "region": "EUAPAC",
      "apps": {
        "rl": "https://ltu.rl.talis.com/index.html"
      }
    },
    "londonmet": {
      "name": "London Metropolitan University ",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://londonmet.rl.talis.com/",
        "dc": "http://content.talisaspire.com/londonmet"
      }
    },
    "lse": {
      "name": "London School of Economics",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.lse.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/lse"
      }
    },
    "macewan": {
      "name": "MacEwan University",
      "region": "CA",
      "apps": {
        "rl": "http://macewan.rl.ca.talis.com",
        "dc": "https://dc.ca.talis.com/macewan"
      }
    },
    "mmu": {
      "name": "Manchester Metropolitan University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.lib.mmu.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/mmu"
      }
    },
    "murdoch": {
      "name": "Murdoch University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://unitreadings.murdoch.edu.au/login.html",
        "dc": "http://content.talisaspire.com/murdoch"
      }
    },
    "northumbria": {
      "name": "Northumbria University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.northumbria.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/northumbria"
      }
    },
    "nuigalway": {
      "name": "NUI Galway",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.library.nuigalway.ie/login.html"
      }
    },
    "okanagan": {
      "name": "Okanagan College",
      "region": "CA",
      "apps": {
        "rl": "http://okanagan.rl.ca.talis.com/",
        "dc": "http://dc.ca.talis.com/okanagan"
      }
    },
    "brookes": {
      "name": "Oxford Brookes University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.brookes.ac.uk/login.html"
      }
    },
    "pearsoncollege": {
      "name": "Pearson College",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://pearsoncollege.rl.talis.com/talislogin",
        "dc": "http://content.talisaspire.com/pearsoncollege"
      }
    },
    "qmu": {
      "name": "Queen Margaret University, Edinburgh",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://qmu.rl.talis.com/"
      }
    },
    "qmul": {
      "name": "Queen Mary, University of London",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.library.qmul.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/qmul"
      }
    },
    "qut": {
      "name": "Queensland University of Technology",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readings.library.qut.edu.au/",
        "dc": "http://content.talisaspire.com/qut"
      }
    },
    "rave": {
      "name": "Ravensbourne University London",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://rave.rl.talis.com/"
      }
    },
    "regents": {
      "name": "Regent's University London",
      "region": "EUAPAC",
      "apps": {
        "rl": "https://regents.rl.talis.com/index.html",
        "dc": "https://content.talisaspire.com/regents"
      }
    },
    "roehampton": {
      "name": "Roehampton University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.roehampton.ac.uk/login.html"
      }
    },
    "rau": {
      "name": "Royal Agricultural University",
      "region": "EUAPAC",
      "apps": {
        "rl": "https://rau.rl.talis.com"
      }
    },
    "rhul": {
      "name": "Royal Holloway, University of London",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.rhul.ac.uk/login.html"
      }
    },
    "sruc": {
      "name": "Scotland's Rural College (SRUC)",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://sruc.rl.talis.com/"
      }
    },
    "shu": {
      "name": "Sheffield Hallam University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.shu.ac.uk/login.html"
      }
    },
    "solent": {
      "name": "Solent University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://solent.rl.talis.com/"
      }
    },
    "scu": {
      "name": "Southern Cross University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://myreadings.scu.edu.au/login.html",
        "dc": "http://content.talisaspire.com/scu"
      }
    },
    "stmarys": {
      "name": "St Mary's University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://stmarys.rl.talis.com/login.html",
        "dc": "http://content.talisaspire.com/stmarys"
      }
    },
    "teesside": {
      "name": "Teesside University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.tees.ac.uk/login.html"
      }
    },
    "tcdlibrary": {
      "name": "Trinity College, Dublin",
      "region": "EUAPAC",
      "apps": {
        "rl": "https://tcdlibrary.rl.talis.com/login.html"
      }
    },
    "tudelft": {
      "name": "TU Delft",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://tudelft.rl.talis.com/"
      }
    },
    "ucb": {
      "name": "University College Birmingham ",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.ucb.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/ucb"
      }
    },
    "ucl": {
      "name": "University College London",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.ucl.ac.uk/login.html"
      }
    },
    "uca": {
      "name": "University for the Creative Arts",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://uca.rl.talis.com/",
        "dc": "http://content.talisaspire.com/uca"
      }
    },
    "ualberta": {
      "name": "University of Alberta",
      "region": "CA",
      "apps": {
        "rl": "https://ualberta.rl.ca.talis.com/",
        "dc": "https://dc.ca.talis.com/ualberta"
      }
    },
    "auckland": {
      "name": "University of Auckland",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://course-resources.auckland.ac.nz/login.html",
        "dc": "http://content.talisaspire.com/auckland"
      }
    },
    "bedfordshire": {
      "name": "University of Bedfordshire",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.beds.ac.uk/login.html"
      }
    },
    "bham": {
      "name": "University of Birmingham",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.bham.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/bham"
      }
    },
    "bolton": {
      "name": "University of Bolton - Reading Lists Online",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.bolton.ac.uk/login.html"
      }
    },
    "bradford": {
      "name": "University of Bradford",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://bradford.rl.talis.com/",
        "dc": "https://content.talisaspire.com/bradford"
      }
    },
    "brighton": {
      "name": "University of Brighton",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.brighton.ac.uk/login.html"
      }
    },
    "bristol": {
      "name": "University of Bristol",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.bris.ac.uk/",
        "dc": "http://content.talisaspire.com/bristol"
      }
    },
    "chichester": {
      "name": "University of Chichester",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://chichester.rl.talis.com/login.html",
        "dc": "http://content.talisaspire.com/chichester"
      }
    },
    "uea": {
      "name": "University of East Anglia",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://libreading.uea.ac.uk/",
        "dc": "http://content.talisaspire.com/uea"
      }
    },
    "essex": {
      "name": "University of Essex",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.essex.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/essex"
      }
    },
    "exeter": {
      "name": "University of Exeter",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.exeter.ac.uk/login.html"
      }
    },
    "glasgow": {
      "name": "University of Glasgow",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.glasgow.ac.uk/login.html"
      }
    },
    "glos": {
      "name": "University of Gloucestershire",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.glos.ac.uk/",
        "dc": "http://content.talisaspire.com/glos"
      }
    },
    "herts": {
      "name": "University of Hertfordshire",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.herts.ac.uk/",
        "dc": "http://content.talisaspire.com/herts"
      }
    },
    "uhi": {
      "name": "University of Highlands and Islands",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://uhi.rl.talis.com"
      }
    },
    "kent": {
      "name": "University of Kent",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.kent.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/kent"
      }
    },
    "medway": {
      "name": "University of Kent - Medway",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://medwaylists.kent.ac.uk/login.html"
      }
    },
    "leicester": {
      "name": "University of Leicester",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.le.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/leicester"
      }
    },
    "lincoln": {
      "name": "University of Lincoln",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.library.lincoln.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/lincoln"
      }
    },
    "liverpool": {
      "name": "University of Liverpool",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.liverpool.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/liverpool"
      }
    },
    "notts": {
      "name": "University of Nottingham",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.nottingham.ac.uk/login.html"
      }
    },
    "unmc": {
      "name": "University of Nottingham Malaysia Campus",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.nottingham.edu.my/login.html"
      }
    },
    "unnc": {
      "name": "University of Nottingham Ningbo China",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.nottingham.edu.cn/login.html"
      }
    },
    "oxford": {
      "name": "University of Oxford ",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.bodleian.ox.ac.uk/",
        "dc": "http://content.talisaspire.com/oxford"
      }
    },
    "port": {
      "name": "University of Portsmouth",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.lib.portsmouth.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/port"
      }
    },
    "uq": {
      "name": "University of Queensland",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lr.library.uq.edu.au/login.html",
        "dc": "http://content.talisaspire.com/uq"
      }
    },
    "reading": {
      "name": "University of Reading",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.reading.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/reading"
      }
    },
    "southwales": {
      "name": "University of South Wales",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://lists.southwales.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/southwales"
      }
    },
    "soton": {
      "name": "University of Southampton",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://soton.rl.talis.com/",
        "dc": "https://content.talisaspire.com/soton"
      }
    },
    "sta": {
      "name": "University of St. Andrews",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.st-andrews.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/sta"
      }
    },
    "sussex": {
      "name": "University of Sussex",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://liblists.sussex.ac.uk/login.html"
      }
    },
    "utas": {
      "name": "University of Tasmania",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://utas.rl.talis.com/login.html",
        "dc": "https://content.talisaspire.com/utas"
      }
    },
    "waikato": {
      "name": "University of Waikato",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://waikato.rl.talis.com/login.html",
        "dc": "http://content.talisaspire.com/waikato"
      }
    },
    "warwick": {
      "name": "University of Warwick",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.warwick.ac.uk/login.html"
      }
    },
    "uwl": {
      "name": "University of West London",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.uwl.ac.uk/login.html"
      }
    },
    "westminster": {
      "name": "University of Westminster",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.westminster.ac.uk/",
        "dc": "http://content.talisaspire.com/westminster"
      }
    },
    "winchester": {
      "name": "University of Winchester",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.winchester.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/winchester"
      }
    },
    "worc": {
      "name": "University of Worcester",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.worc.ac.uk/login.html",
        "dc": "http://content.talisaspire.com/worc"
      }
    },
    "unthsc": {
      "name": "UNTHSC",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://unthsc.rl.talis.com"
      }
    },
    "uwe": {
      "name": "UWE Bristol",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://readinglists.uwe.ac.uk/",
        "dc": "http://content.talisaspire.com/uwe"
      }
    },
    "victoria": {
      "name": "Victoria University of Wellington",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://resourcelists.victoria.ac.nz/login.html",
        "dc": "http://content.talisaspire.com/victoria"
      }
    },
    "vu": {
      "name": "Vrije Universiteit Amsterdam",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://vu.rl.talis.com/"
      }
    },
    "yorksj": {
      "name": "York St John University",
      "region": "EUAPAC",
      "apps": {
        "rl": "http://yorksj.rl.talis.com/login.html"
      }
    }
  };
