ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([115.885942, -1.629675, 117.498524, -0.793567]);
var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KesesuaianLahan_1 = new ol.format.GeoJSON();
var features_KesesuaianLahan_1 = format_KesesuaianLahan_1.readFeatures(json_KesesuaianLahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KesesuaianLahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianLahan_1.addFeatures(features_KesesuaianLahan_1);
var lyr_KesesuaianLahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianLahan_1, 
                style: style_KesesuaianLahan_1,
                popuplayertitle: "Kesesuaian Lahan",
                interactive: true,
    title: 'Kesesuaian Lahan<br />\
    <img src="styles/legend/KesesuaianLahan_1_0.png" /> Sangat Sesuai<br />\
    <img src="styles/legend/KesesuaianLahan_1_1.png" /> Tidak Sesuai<br />'
        });
var format_BatasKecamatan_2 = new ol.format.GeoJSON();
var features_BatasKecamatan_2 = format_BatasKecamatan_2.readFeatures(json_BatasKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_2.addFeatures(features_BatasKecamatan_2);
var lyr_BatasKecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_2, 
                style: style_BatasKecamatan_2,
                popuplayertitle: "Batas Kecamatan",
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_2.png" /> Batas Kecamatan'
            });

lyr_ESRITopo_0.setVisible(true);lyr_KesesuaianLahan_1.setVisible(true);lyr_BatasKecamatan_2.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_KesesuaianLahan_1,lyr_BatasKecamatan_2];
lyr_KesesuaianLahan_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CH_Annual': 'CH_Annual', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Kesesuaian': 'Kesesuaian', 'Tipe_Lahan': 'Tipe_Lahan', 'Tipe_Tanah': 'Tipe_Tanah', 'Slope': 'Slope', 'CurahHujan': 'CurahHujan', });
lyr_BatasKecamatan_2.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Luas (km2)': 'Luas (km2)', });
lyr_KesesuaianLahan_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CH_Annual': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Kesesuaian': 'TextEdit', 'Tipe_Lahan': 'TextEdit', 'Tipe_Tanah': 'TextEdit', 'Slope': 'TextEdit', 'CurahHujan': 'TextEdit', });
lyr_BatasKecamatan_2.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Luas (km2)': 'TextEdit', });
lyr_KesesuaianLahan_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'CH_Annual': 'inline label - visible with data', 'Shape_Le_1': 'hidden field', 'Shape_Ar_1': 'hidden field', 'Kesesuaian': 'inline label - visible with data', 'Tipe_Lahan': 'inline label - visible with data', 'Tipe_Tanah': 'inline label - visible with data', 'Slope': 'inline label - visible with data', 'CurahHujan': 'inline label - visible with data', });
lyr_BatasKecamatan_2.set('fieldLabels', {'KECAMATAN': 'inline label - visible with data', 'Luas (km2)': 'inline label - visible with data', });
lyr_BatasKecamatan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});