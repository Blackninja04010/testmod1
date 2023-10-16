G.AddData({
    name:'head hunter',
    author:'Blackninja04010',
    desc:'Adds [head hunter] to the game.',
    engineVersion:1,
    manifest:'modManifest.js',
    requires:['Default dataset*'],
    sheets:{'iconSheet':'https://orteil.dashnet.org/legacy/img/iconSheet.png?v=1'},

    func:function() {

        new G.Unit({
            name:'head hunter',
            desc:'@hunts more efficiently than a [hunter], leading to more [meat].',
            icon:[2,19'iconSheet'],
            cost:{'food':25},
            use:{'worker':1},
            upkeep:{'water':0.2},
            effects:[
                {type:'gather', what:{'meat':0.35}},
                {type:'gather', what:{'meat':0.2625}, req:{'head hunter+':true}}
            ],
            req:{'hunting':true},
            category:'gathering',
            //priority:5,
            limitPer:{'hunter':5},
        });

        new G.Tech({
            name:'head hunter+',
            desc:'@[head hunter]s produce 75% more [meat].',
            icon:[5,7],
            cost:{'culture':15,'insight':25},
            req:{'chieftains':true},
        });

    }

});
