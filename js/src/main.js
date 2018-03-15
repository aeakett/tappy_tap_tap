$(document).ready(function() {
   $.each(bolt, function( index, value ) {
      $('#boltSize').append('<option value="'+index+'">'+value.size+'</option>');
   });

$('.ui-grid-a').enhanceWithin();

   var boltInit=false;
   while (!boltInit) {
      if ($('#boltTPI').parent().parent().hasClass('ui-select')) {console.log('Doing bolt post-init');
         boltSizeChange();
         boltInit=true;
      } else {console.log('Checking...');}
   }

   $('#boltSize').change(function(){boltSizeChange();});
   $('#boltTPI').change(function(){boltTPIChange();});

   $.each(mBolt, function( index, value ){
      $('#mBoltSize').append('<option value="'+index+'">M'+value.size+'</option>');
   });

   var mBoltInit=false;
   while (!mBoltInit) {
      if ($('#mBoltTPI').parent().parent().hasClass('ui-select')) {console.log('Doing mBolt post-init');
         mBoltSizeChange();
         mBoltInit=true;
      } else {console.log('mChecking...');}
   }

   $('#mBoltSize').change(function(){mBoltSizeChange();});
   $('#mBoltTPI').change(function(){mBoltTPIChange();});

});

function boltSizeChange(){
   $('#boltTPI').empty();
   $.each(bolt[$('#boltSize').val()].tpi, function(index, value){
      $('#boltTPI').append('<option value="'+index+'">'+value.number+'</option>');
   });
   boltTPIChange();
}

function mBoltSizeChange(){
   $('#mBoltTPI').empty();
   $.each(mBolt[$('#mBoltSize').val()].pitch, function(index, value){
      $('#mBoltTPI').append('<option value="'+index+'">'+value.number+'</option>');
   });
   mBoltTPIChange();
}

function boltTPIChange() {
   displayBoltData($('#boltSize').val(), $('#boltTPI').val());
   $('#boltSize, #boltTPI').selectmenu('refresh');
}

function mBoltTPIChange() {
   mDisplayBoltData($('#mBoltSize').val(), $('#mBoltTPI').val());
   $('#mBoltSize, #mBoltTPI').selectmenu('refresh');
}

function displayBoltData (size, tpi) {
   $('#majorDiameter, #minorDiameter, #tpi, #75TapDrill, #75TapDecimal, #50TapDrill, #50TapDecimal, #closeDrill, #closeDecimal, #freeDrill, #freeDecimal, #hexHeadSize, #hexFlangeHeadSize, #squareHeadSize, #capHeadSize, #buttonHeadSize, #flatHeadSize, #setScrewHeadSize').empty();
   $('#majorDiameter').append(bolt[size].major_dia);
   $('#minorDiameter').append(bolt[size].tpi[tpi].minor_dia);
   $('#75TapDrill').append(formatFraction(bolt[size].tpi[tpi]._75_tap_drill));
   $('#75TapDecimal').append(bolt[size].tpi[tpi]._75_tap_decimal);
   $('#50TapDrill').append(formatFraction(bolt[size].tpi[tpi]._50_tap_drill));
   $('#50TapDecimal').append(bolt[size].tpi[tpi]._50_tap_decimal);
   $('#closeDrill').append(formatFraction(bolt[size].close_drill));
   $('#closeDecimal').append(bolt[size].close_decimal);
   $('#freeDrill').append(formatFraction(bolt[size].free_drill));
   $('#freeDecimal').append(bolt[size].free_decimal);
   $('#hexHeadSize').append(blankToNbsp(formatFraction(bolt[size].hex_head_size)));
   $('#hexFlangeHeadSize').append(blankToNbsp(formatFraction(bolt[size].hexflange_head_size)));
   $('#squareHeadSize').append(blankToNbsp(formatFraction(bolt[size].square_head_size)));
   $('#capHeadSize').append(blankToNbsp(formatFraction(bolt[size].cap_head_size)));
   $('#buttonHeadSize').append(blankToNbsp(formatFraction(bolt[size].button_head_size)));
   $('#flatHeadSize').append(blankToNbsp(formatFraction(bolt[size].flat_head_size)));
   $('#setScrewHeadSize').append(blankToNbsp(formatFraction(bolt[size].setScrew_head_size)));
}

function mDisplayBoltData (size, tpi) {
   $('#mMajorDiameter, #mMinorDiameter, #m75TapDrill, #tightDrill, #normalDrill, #looseDrill, #mHexHeadSize, #mHexFlangeHeadSize, #mCapHeadSize, #mButtonHeadSize, #mFlatHeadSize, #mSetScrewHeadSize').empty();
   $('#mMajorDiameter').append(mBolt[size].major_dia);
   $('#mMinorDiameter').append(mBolt[size].pitch[tpi].minor_dia);
   $('#m75TapDrill').append(mBolt[size].pitch[tpi].tap);
   $('#tightDrill').append(mBolt[size].close_drill);
   $('#normalDrill').append(mBolt[size].medium_drill);
   $('#looseDrill').append(mBolt[size].free_drill);
   $('#mHexHeadSize').append(blankToNbsp(mBolt[size].hex_head_size));
   $('#mHexFlangeHeadSize').append(blankToNbsp(mBolt[size].hexflange_head_size));
   $('#mCapHeadSize').append(blankToNbsp(mBolt[size].cap_head_size));
   $('#mButtonHeadSize').append(blankToNbsp(mBolt[size].button_head_size));
   $('#mFlatHeadSize').append(blankToNbsp(mBolt[size].flat_head_size));
   $('#mSetScrewHeadSize').append(blankToNbsp(mBolt[size].setScrew_head_size));
}

function blankToNbsp(possibleBlank) {
   if (possibleBlank.length===0) {
      return '&nbsp;';
   } else {
      return possibleBlank;
   }
}

function formatFraction(frac){
   return frac.replace(/([0-9]+)&frasl;([0-9]+)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
}

function quoteToPrime(quotedString){
   return quotedString;
   /*return quotedString.replace(/"/g, '&Prime;');*/
}

