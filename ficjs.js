/* Fort Kevin 04/03/2022 */
			var boolCafe=false;
                        var boolNom=false;
                        var boolAdresse=false;
                        var boolVille=false;
                        var boolCP=false;
                        
                        function checkCafe()
			{
				var H = document.getElementById('sexeh');
				var F = document.getElementById('sexef');
				var idsexe = document.getElementById('idsexe');	
				
				
				if ((H.checked == false) && (F.checked == false))
					{
						idsexe.style.display=""; 
						idsexe.style.color='red';
					}
				else
					{
						idsexe.style.visibility="hidden";
						boolCafe=true;
					}
                                        return boolCafe;
			}

			

			function checkNom()
			{
				var name= document.getElementById('nom');
				var idnom= document.getElementById('idnom');
				var maj= document.getElementById('nom');
                                				
 console.log(maj);

				if ((/\d/.test(name.value)==true ) || (name.value.length < 2))
					{
						idnom.style.display=""; 
						idnom.style.color='red';
                                 	}
				else
					{
						idnom.style.visibility="hidden";
						document.getElementById('nom').value = 	maj.value.toUpperCase().charAt(0) + maj.value.substring(1).toLowerCase();
						boolNom=true;
					}
                            return boolNom;
			}  
			
			
			function checkAdresse()
			{
				var adresse= document.getElementById('adresse');
				var idadresse= document.getElementById('idadresse');
				
				
				if(adresse.value.length==0)
					{
						idadresse.style.display=""; 
						idadresse.style.color='red';
					}
				else
					{
						idadresse.style.visibility="hidden";
						boolAdresse=true;
					}
                                         return boolAdresse;
			}

			
			
			function checkVille()
			{
				var ville= document.getElementById('ville');
				var idville= document.getElementById('idville');
				
				
				if((ville.value.length==0)||(ville.value.length<3) || (/\d/.test(ville.value)==true ))
					{
						idville.style.display="";
						idville.style.color='red';
					}
				else
					{
						idville.style.visibility="hidden";
						document.getElementById('ville').value = 	ville.value.toUpperCase();
						boolVille=true;
					}
                                         return boolVille;
			}
			
			
			function checkCP()
			{
				var cp = document.getElementById('cp');
				var idcp = document.getElementById('idcp');
				
	
				
				if ((cp.value.length == 5) && (/\d/.test(cp.value)==true) && (/\D/.test(cp.value)==false))
				{
				idcp.style.visibility="hidden";
				boolCP=true;
				}
				else
				{
					idcp.style.display=""; 
					idcp.style.color='red';
				}
                                 return boolCP;
				
			}
			
			
			function Valider()
			{
                            checkCafe();
                            checkNom();
                            checkAdresse();
                            checkVille();
                            checkCP();
                            
                            f = document.getElementById('idValider');
                      
                            if((boolCafe==true) && (boolNom==true) && (boolAdresse==true) && (boolVille==true) && (boolCP==true))
                            {
                                f.submit();
                            }
			}
			
                  
			function Annuler()
			{
				var cp = document.getElementById('cp');
				var ville = document.getElementById('ville');
				var adresse = document.getElementById('adresse');
				var sexe = document.getElementById('sexe');
				var nom = document.getElementById('nom');
				
				var idcp = document.getElementById('idcp');
				var idville = document.getElementById('idville');
				var idadresse = document.getElementById('idadresse');
				var idsexe = document.getElementById('idsexe');
				var idnom = document.getElementById('idnom');
				
				
				idcp.style.visibility="hidden";
				idville.style.visibility="hidden";
				idadresse.style.visibility="hidden";
				idsexe.style.visibility="hidden";
				idnom.style.visibility="hidden";
			}
				
			 
