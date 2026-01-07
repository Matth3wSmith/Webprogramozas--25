<?php
    
    $a=(float)$_GET["a"] ?? 0;
    $b=(float)$_GET["b"] ?? 0;
    $muvelet=(string)$_GET["muvelet"] ?? "";
    switch ($muvelet) {
        case "oszt":{
            if($b==0){
                echo "0-val nem osztunk";
            }
            echo $a/$b;
            break;
        }
        case "szoroz":{
            echo $a*$b;
            break;
        }
        case "osszead":{
            echo $a+$b;
            break;
        }
        case "kivon":{
            echo $a-$b;
            break;
        }
        case "hatvany":{
            echo pow($a,$b);
            break;
        }
        default:{
            echo "Helytelen a műveleti jel";
            break;  
        }
    }

//Mini bootstrapes oldal, ahol bekérünk kettő számot lehessen megadni.
//jqueryvel küldjük el az api két szám értékét a visszaérkező válasz megjelnítése egy nagy piros téglalap közepén
//Ha megadjuk a műveletben a műveleti jelet akkor annak a műveletnek az eredményét adja vissza (kivon,osszead,oszt,szoroz,hatvanyoz)

?>
