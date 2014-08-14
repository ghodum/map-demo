base = {
    default_latitude  : 38.969489,
    default_longitude : -77.385645,

    default_infowindow_template : '<div class="infoWindow"></div><h3>{{title}}</h3>{{street}}<br/>{{city}}, {{state}} {{zip}}<br/>{{phone}}<br/><a href="{{url}}">{{url}}</a></div>',
    property_infowindow_template : '<div class="infoWindow"></div><h3>{{propaddr}}<br/></h3>{{parcelno}}</div>',

    // CartoDB Username (tables are assumed to be public)
    cartodb_user : 'ghodum',

    // Property Marker SQL/CartoCSS
    cartodb_property_sql : 'select * from detroit_parcels',
    //cartodb_property_sql : 'select * from detroit_parcels where propaddr like \'%NORTHFIELD%\' or propaddr like \'%COLFAX%\'',
    cartodb_property_css : '#detroit_parcels{ marker-fill-opacity: 0.9; marker-line-color: #FFF; marker-line-width: 1.5; marker-line-opacity: 1; marker-placement: point; marker-type: ellipse; marker-width: 10; marker-fill: #FF6600; marker-allow-overlap: true; }'

    // Property Boundary SQL/CartoCSS
    //cartodb_property_sql : 'select * from detroit_parcel_boundaries',
    //cartodb_property_css : '#detroit_parcel_boundaries{ polygon-fill: #F11810; polygon-opacity: 0.7; line-color: #000000; line-width: 1; line-opacity: 0.5; }'
};
