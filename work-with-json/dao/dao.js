module.exports = {
    insert: function(office) {
        var mariadb = require('mariadb')

        mariadb.createConnection({ // Open a new connection                                                                                                                                           
            host: 'localhost',
            database: 'service_point_api_db',
            user:'username',
            password: 'password',
            port: 3306
        })
        .then(conn => {
            var officeId = office.id;
            var officeNameFI = office.name_fi;
            var officeNameSV = office.name_sv;
            var officeDescriptionFI = office.description_fi;
            var officeDescriptionSV = office.description_sv;
            conn.query("INSERT INTO office(id, name_fi, name_sv, description_fi, description_sv) value (?, ?, ?, ?, ?)", [officeId, officeNameFI, officeNameSV, officeDescriptionFI, officeDescriptionSV])                                                                                                                               
                .then(result => { // Print the results                                                                                                                                            
                    console.log("onnistui");
                })
                .then(conn.destroy()) // Close the connection                                                                                                                                     
        })
    }
}; 