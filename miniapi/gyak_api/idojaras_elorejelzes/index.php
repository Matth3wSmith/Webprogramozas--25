
<!-- saved from url=(0056)https://api.infojegyzet.hu/holdfazis/forraskod_index.php -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head><body><pre>&lt;?php

    header('Content-Type: application/json; charset=utf-8');

    if( isset( $_GET['nap'] ))   $nap = $_GET['nap']    ;    else $nap = date("Y-m-d") ;
    if( isset( $_GET['ido'] ))   $ido = $_GET['ido']    ;    else $ido = date("H:i:s")   ;

    if( isset( $_GET['bg']  ))   $pbg ="&amp;bg=$_GET[bg]"  ;    else $pbg = ""  ;

    $idopont = strtotime( $nap . " " . $ido ) ;

    if( $idopont==false )
    {
	$tomb = array( 'hiba' =&gt; "Hibás bemeneti dátumformátum!" ) ;
	$json = json_encode( $tomb , JSON_UNESCAPED_UNICODE ) ;
	die( $json ) ;
    }

    $alapdatum = mktime( 20,40,0 , 6,24,2021 ) ;
    $period    =  29.53058867 * 24*60*60 ;

    $elteres = $idopont-$alapdatum ;
    if($elteres&gt;0)  { while( $elteres &gt; $period )  $elteres -= $period ; }
    else            { while( $elteres &lt; 0       )  $elteres += $period ; }

    $fazis = round( ($elteres*2-$period)/$period*100 ) ;						//  -1..1 között  :  -1 telihold(fogyó)   -0.5 utolsó negyed   0 újhold   0.5 első negyed   +1 telihold(növekvő)

    $fazis = round( (-cos( abs($fazis/100)*pi() )/2 + .5) * ( ($fazis&gt;0)-($fazis&lt;0) ) *100 ) ;		//  ($fazis&gt;0)-($fazis&lt;0) -&gt; ez az sgn() fv. megvalósítása

    if( $fazis&lt; 0  )  $valtozas = "fogyó"    ;
    if( $fazis&gt; 0  )  $valtozas = "növekvő"  ;
    if( $fazis==0  )  $valtozas = "újhold"   ;
    if( $fazis==100)  $valtozas = "telihold" ;

    $kep = "https://api.infojegyzet.hu/holdfazis/moonphase.php?ph=$fazis" . $pbg ;

    $tomb = array( 'idopont' =&gt; date("Y-m-d H:i",$idopont) , 'holdfazis' =&gt; abs($fazis) , 'valtozas' =&gt; $valtozas , 'kep' =&gt; $kep ) ;

    $json = json_encode( $tomb , JSON_UNESCAPED_UNICODE ) ;

    print $json ;

?&gt;</pre></body></html>