const NUMBES = "0123456789";
const U_POSS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const L_POSS = "abcdefghijklmnopqrstuvwxyz";

const SYMB_TYPE = ["numbs", "uPoss", "lPoss"];

module.exports = {
    generatePassword: function(){
        var password = "";
        for(var i = 0; i < 10; i++){
            var symb_type = Math.floor(Math.random() * 3);
            switch(symb_type){
                case 0:
                    password += NUMBES.charAt(Math.floor(Math.random() * NUMBES.length))
                    break;
                case 1:
                    password += U_POSS.charAt(Math.floor(Math.random() * U_POSS.length))
                    break;
                case 2:
                    password += L_POSS.charAt(Math.floor(Math.random() * L_POSS.length))
                    break;
            }
        }
        return password;
    },
    generateLuserId: function(){
        var new_id = "";
        for(var i = 0; i < 24; i++){
            var symb_type = Math.floor(Math.random() * 9);
            switch(symb_type){
                case 0:
                    new_id += U_POSS.charAt(Math.floor(Math.random() * U_POSS.length));
                    break;
                case 1:
                    new_id += U_POSS.charAt(Math.floor(Math.random() * U_POSS.length));
                    break;
                case 2:
                    new_id += U_POSS.charAt(Math.floor(Math.random() * U_POSS.length));
                    break;
                case 3:
                    new_id += U_POSS.charAt(Math.floor(Math.random() * U_POSS.length));
                    break;
                case 4:
                    new_id += NUMBES.charAt(Math.floor(Math.random() * NUMBES.length));
                    break;
                case 5:
                    new_id += NUMBES.charAt(Math.floor(Math.random() * NUMBES.length));
                    break;
                case 6:
                    new_id += NUMBES.charAt(Math.floor(Math.random() * NUMBES.length));
                    break;
                case 7:
                    new_id += NUMBES.charAt(Math.floor(Math.random() * NUMBES.length));
                    break;
                case 8:
                    new_id += L_POSS.charAt(Math.floor(Math.random() * L_POSS.length));
                    break;
            }
        }
        return new_id;
    }
}
