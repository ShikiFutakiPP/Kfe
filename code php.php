<!-- Fort Kevin 04/03/2022 -->
<link rel="stylesheet" type="text/css" href="css.css"/>
<?php
$cafe=$_POST["nomcafe"];
if(!empty($_POST["type"])){$type=$_POST["type"];}
if(!empty($_POST["cadeau"])){$cadeau=$_POST["cadeau"];}
if(!empty($_POST["catalogue"])){$catalogue=$_POST["catalogue"];}
if(!empty($_POST["nom"])){$nom=$_POST["nom"];}
if(!empty($_POST["adresse"])){$adresse=$_POST["adresse"];}
if(!empty($_POST["ville"])){$ville=$_POST["ville"];}
if(!empty($_POST["codepostal"])){$cp=$_POST["codepostal"];}
if(!empty($_POST["commentaires"])){$com=$_POST["commentaires"];}

$jour = array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");

$mois = array("","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");

$datefr = $jour[date("w")]." ".date("d")." ".$mois[date("n")]." ".date("Y"); 
$prix=0;

if($cafe=="Mélange maison")
{
    $prix=$prix+3.25;
}
elseif($cafe=="Bolivie")
{
    $prix=$prix+3.75;
}
elseif($cafe=="Guatemala")
{
    $prix=$prix+3.62;
}
elseif($cafe=="Kenya")
{
    $prix=$prix+4.21;
}

if($type=="Moulu")
{
    $prix=$prix*1.3;
}
elseif($type=="En grain")
{
    $type="en grain";
}

if(isset($cadeau))
{
    $prix=$prix+5;
}

$affiche="<html>";
$affiche.="<h1>La Machine à Café St Paul<h1><br />";
$affiche.="<h3>Résumé de la commande</h3><br />";
$affiche.="Commande passé le ".$datefr.".<br /><br />";
$affiche.="Votre commande est la suivante :<br /><br />";
if(!empty($cafe)){$affiche.="Produit commandé : ".$cafe." ".$type."<br />";}
$affiche.="Montant TTC : €".$prix."<br />";
if(!empty($nom)){$affiche.="Nom : ".$nom."<br />";}
if(!empty($adresse)){$affiche.="Adresse : ".$adresse."<br />";}
if(!empty($cp)){$affiche.=$cp." ";}
if(!empty($ville)){$affiche.=$ville;}
if(!empty($com)){$affiche.="<br />commentaire : ".$com."<br />";}
if(!empty($catalogue)){$affiche.="<br /><br />Catalogue joint à la commande";}

echo $affiche;

?>
