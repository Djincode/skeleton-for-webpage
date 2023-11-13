// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    uint256 public favoriteNumber;
    People public person  = People ({favoriteNumber: 2, name: "Perviz"});//object budu

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
        favoriteNumber = favoriteNumber +1;
        //Funksiya yaratdiq,favoritnumbere qiymet vermek ucun
    }
     function retrieve() public view returns (uint256){
        return favoriteNumber;
    }
    mapping (string => uint256) public nameToFaviriteNumber;
    //bir nov ceviricidi stringi verende bize qabagindaki reqemi verecek,meselen perviz verende bize 7 qaytaracaq
     
     struct People {
        uint256 favoriteNumber; //index 0 di
        string name ; //indexi 1 di
        //object yaradiriq bele
     }

     People [] public people; // array (list) yaradiriq,bos oldugu muddetce uzerine basdiqca hecne vermeyecek

          // [] arasina reqem yazsaq,o reqemnen uzun array olmaz,ara bosdusa yapisdir getsin

    function AddPerson(string memory _name, uint256 _faveriteNumber) public {
        People memory newPerson = People({favoriteNumber: _faveriteNumber, name: _name});
        people.push(newPerson); //people arrayina nelerse elave edirsen bu funksiya ile(mes Perviz,7 yaz)
        nameToFaviriteNumber[_name] = _faveriteNumber;
        //people.push(People(_favoriteNumber, _name)) ustdekini bele de yaza bilerik
        //memory bu adnarazvidi,yeni ancaq bu funksiyaya ozeldi, ancaq string ve arraya vermek olar, uint e lazim deyil
        //storage qalicidi,bu fayl icinde her yerde isleyir,meselen favoriteNumber.Deyisenlerin defoltu storagedi
        
        //calldata bu da memory kimidi,amma bunu sabitlere vermek olar deyisene yox
    }

}
