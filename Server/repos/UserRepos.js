const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9635',
    database: 'exterm'
});

connection.connect(function (err) {
   if (err) {
       return console.error("Ошибка: " + err.message);
   } else {
       console.log('Подключение к серверу MySQL успешно установлено');
   }
});

// REQUEST
class UserRepos {
    getUsers() {
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM phone_book",
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error rows is undefined"));
                    } else {
                        resolve(rows);
                    }
                }
            );
        });
    }

    addNewUser(dataUser) {
        return new Promise(function (resolve, reject) {
            connection.query(
                "INSERT INTO phone_book SET ?", dataUser,
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error rows is undefined"));
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    deleteUser(id) {
        return new Promise(function (resolve, reject) {
            connection.query(
                "DELETE FROM phone_book WHERE id = ?", id.params.id,
                function (err, rows) {
                    if (rows === undefined) {
                        reject();
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    updateUser(userObjectForUpdate) {
        console.log(userObjectForUpdate.body.age);
        return new Promise(function (resolve, reject) {
            connection.query(
                "UPDATE phone_book SET phone_book.first_name=?, phone_book.last_name=?, phone_book.phone=?, phone_book.email=?, phone_book.age=? WHERE id = ?",
                [userObjectForUpdate.body.first_name, userObjectForUpdate.body.last_name, userObjectForUpdate.body.phone, userObjectForUpdate.body.email, userObjectForUpdate.body.age, userObjectForUpdate.body.id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error rows is undefined"));
                    } else {
                        resolve(rows);
                    }
                }
            )
        });
    }

    getUserById(id) {
        console.log(id.params.id);
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT id, first_name, last_name, phone, email, age FROM phone_book WHERE id = ?", id.params.id,
                function (err, rows) {
                    console.log(rows);
                    if (rows === undefined) {
                        reject(rows);
                    } else {
                        resolve(rows);
                    }
                }
            )
        });
    }

    filterUserByName(names) {
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM exterm.phone_book WHERE first_name LIKE CONCAT('%', ?,  '%')", names,
/**
 var value = 'ee20e966289cd7';
 connection.query('SELECT * from django_session where session_key like ?', '%' + value + '%', ...)
 * */
/*                function () {
                    console.log(arguments);
                    return {search: names}
                },*/
                function (err, rows) {
                    if (rows === undefined) {
                        reject();
                    } else {
                        resolve(rows);
                    }
                }
            )
        })
    }
}

module.exports = new UserRepos();
