$(document).ready(function() {
   $('#drillChartSelector').click(function(){selectDrillChart();});
   $('#fractionChartSelector').click(function(){selectFractionalChart();});
   $('#boltChartSelector').click(function(){selectBoltChart();});
   $.each(bolt, function( index, value ) {
      $('#boltSize').append('<option value="'+index+'">'+value.size+'</option>');
   });
   boltSizeChange();
   $('#boltSize').change(function(){boltSizeChange();});
   $('#boltTPI').change(function(){boltTPIChange();});
});

function selectBoltChart(){
   $('#drillChart, #fractionChart').addClass('hidden');
   $('#boltChart').removeClass('hidden');
}

function selectDrillChart(){
   $('#boltChart, #fractionChart').addClass('hidden');
   $('#drillChart').removeClass('hidden');
}

function selectFractionalChart(){
   $('#drillChart, #boltChart').addClass('hidden');
   $('#fractionChart').removeClass('hidden');
}

function boltSizeChange(){
   $('#boltTPI').empty();
   $.each(bolt[$('#boltSize').val()].tpi, function(index, value){
      $('#boltTPI').append('<option value="'+index+'">'+value.number+'</option>');
   });
   boltTPIChange();
}

function boltTPIChange() {
   displayBoltData($('#boltSize').val(), $('#boltTPI').val());
}

function displayBoltData (size, tpi) {
   $('#majorDiameter, #minorDiameter, #tpi, #75TapDrill, #75TapDecimal, #50TapDrill, #50TapDecimal, #closeDrill, #closeDecimal, #freeDrill, #freeDecimal, #hexHeadSize, #capHeadSize, #buttonHeadSize, #flatHeadSize').empty();
   $('#majorDiameter').append(bolt[size].major_dia);
   $('#minorDiameter').append(bolt[size].tpi[tpi].minor_dia);
   //$('#tpi').append(bolt[size].tpi[tpi].number);
   $('#75TapDrill').append(formatFraction(bolt[size].tpi[tpi]._75_tap_drill));
   $('#75TapDecimal').append(bolt[size].tpi[tpi]._75_tap_decimal);
   $('#50TapDrill').append(formatFraction(bolt[size].tpi[tpi]._50_tap_drill));
   $('#50TapDecimal').append(bolt[size].tpi[tpi]._50_tap_decimal);
   $('#closeDrill').append(formatFraction(bolt[size].close_drill));
   $('#closeDecimal').append(bolt[size].close_decimal);
   $('#freeDrill').append(formatFraction(bolt[size].free_drill));
   $('#freeDecimal').append(bolt[size].free_decimal);
   $('#hexHeadSize').append(formatFraction(bolt[size].hex_head_size));
   $('#capHeadSize').append(formatFraction(bolt[size].cap_head_size));
   $('#buttonHeadSize').append(formatFraction(bolt[size].button_head_size));
   $('#flatHeadSize').append(formatFraction(bolt[size].flat_head_size));
}

function formatFraction(frac){
   return frac.replace(/([0-9]+)&frasl;([0-9]+)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
}

function quoteToPrime(quotedString){
   return quotedString;
   /*return quotedString.replace(/"/g, '&Prime;');*/
}

