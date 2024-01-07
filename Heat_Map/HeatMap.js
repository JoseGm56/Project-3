const url = "http://127.0.0.1:5000/"

d3.json(url).then(function(rawData){

    dataset = rawData

    function perCity(demographic, specific){
        intensity_dic = {};
        demo_list = []
        city_coor = []
        if (demographic === "Missing Age"){
            for (let i = 0; i < dataset.length; i++){
                city_coor = [dataset[i].Latitude, dataset[i].Longitude]
                if (dataset[i][demographic] >= specific){
                demo_list.push(city_coor)
            };
        };
        demo_list.sort();
        demo_list.forEach(function(i) { intensity_dic[i] = (intensity_dic[i]||0) + 1;});
        keys = Object.keys(intensity_dic)

            data = []
            for(let i= 0; i<keys.length; i++){
                key = keys[i]
                intensity = intensity_dic[key]
                latitude = Number(key.split(",")[0])
                longitude = Number(key.split(",")[1])
                data.push([latitude, longitude, intensity])
            };
            console.log(data)
            return(data)      
        };
        for (let i = 0; i < dataset.length; i++){
            city_coor = [dataset[i].Latitude, dataset[i].Longitude]
            if (dataset[i][demographic] === specific){
                demo_list.push(city_coor)
            };
        };
        demo_list.sort();
        //console.log(demo_list)
        demo_list.forEach(function(i) { intensity_dic[i] = (intensity_dic[i]||0) + 1;});
        keys = Object.keys(intensity_dic)

        data = []
        for(let i= 0; i<keys.length; i++){
            key = keys[i]
            intensity = intensity_dic[key]
            latitude = Number(key.split(",")[0])
            longitude = Number(key.split(",")[1])
            data.push([latitude, longitude, intensity])
        };
        return data
    };

    let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let maleHeat = L.heatLayer(
        perCity("Sex", "Male"),
        {radius: 15,
        minOpacity: .5
    });

    let femaleHeat = L.heatLayer(
        perCity("Sex", "Female"),
        {radius: 15,
        minOpacity: .5
    });

    let all = L.heatLayer(
        perCity("Missing Age", 0),
        {radius: 15,
        minOpacity: .5
    });

    let classMiss = L.heatLayer(
        perCity("Classification", "Missing"),
        {radius: 15,
        minOpacity: .5
    });
    let classEnMiss = L.heatLayer(
        perCity("Classification", "Endangered Missing"),
        {radius: 15,
        minOpacity: .5
    }); 

    let classMigrant = L.heatLayer(
        perCity("Classification", "Migrant"),
        {radius: 15,
        minOpacity: .5
    });

    let classFam = L.heatLayer(
        perCity("Classification", "Family Abduction"),
        {radius: 15,
        minOpacity: .5
    });

    let classNonFam = L.heatLayer(
        perCity("Classification", "Non-Family Abduction"),
        {radius: 15,
        minOpacity: .5
    });

    let classInjured = L.heatLayer(
        perCity("Classification", "Lost/Injured Missing"),
        {radius: 15,
        minOpacity: .5
    });
        
    let classRun = L.heatLayer(
        perCity("Classification", "Endangered Runaway"),
        {radius: 15,
        minOpacity: .5
    });

    let raceB = L.heatLayer(
        perCity("Race", "Black"),
        {radius: 15,
        minOpacity: .5
    });
    
    let raceA = L.heatLayer(
        perCity("Race", "Asian"),
        {radius: 15,
        minOpacity: .5
    });
    
    let raceH = L.heatLayer(
        perCity("Race", "Hispanic"),
        {radius: 15,
        minOpacity: .5
    });
    
    let raceW = L.heatLayer(
        perCity("Race", "White"),
        {radius: 15,
        minOpacity: .5
    });

    let map = L.map('heatmap', {
        center: [30.16, -97.45],
        zoom: 6.2,
        layers: [osm]
    });

    let baseMaps = {
        "OpenStreetMap": osm
        };

    let overlayMaps = {
        "Everyone": all,
        "Men": maleHeat,
        "Women": femaleHeat,
        "Missing": classMiss,
        "Endangered Missing": classEnMiss,
        "Migrant": classMigrant,
        "Family Abduction": classFam,
        "Non-Family Abduction": classNonFam,
        "Lost/Injured": classInjured,
        "Runaway": classRun,
        "Black": raceB,
        "White": raceW,
        "Asian": raceA,
        "Hispanic": raceH
    };

    let layerControl = L.control.layers(overlayMaps).addTo(map);
});