const userModel = require("../models/userModel");
const con = require("../util/database");

exports.createUser = function (req, res, next) {
  var reqBody = req.body;
  var arrval = [
    reqBody.userName,
    reqBody.email,
    reqBody.sex,
    reqBody.DOB,
    reqBody.ContactNo,
    reqBody.BillingAddress,
    reqBody.DeliveryAddress,
    reqBody.PaymentInfo,
  ];
  const insertData =
    "insert into users (userName, email, sex, DOB, ContactNo, BillingAddress, DeliveryAddress, PaymentInfo) values (?,?,?,?,?,?,?,?)";
  con.query(insertData, arrval, (err, rows) => {
    if (err) throw err;
    res.send({ data: rows });
  });
};

exports.getAllUsers = function (req, res, next) {
  const queries = "select * from users";
  con.query(queries, (err, rows) => {
    console.log(rows);
    if (err) throw err;
    res.send({ data: rows });
  });
};

exports.getUserById = function (req, res, next) {
  const queries = "select * from users where UserId = ?";
  con.query(queries,[req.params.id], (err, rows) => {
    console.log(rows);
    if (err) throw err;
    res.send({ data: rows });
  });
};

exports.deleteData = function (req, res, next) {
  
  const deleteUserData = "delete from users where UserId = ? ";
  con.query(deleteUserData,[req.params.id], (err, rows) => {
      console.log(rows);
      if (err) throw err;
      res.send({ "data": rows});
  });
}

exports.updateData = function(req, res, next){
  console.log("data updated");

  const updatedData = "update users set userName = 'Rex' where userName = 'Max' "
  con.query(updatedData, (err, rows) => {
        console.log(rows);
        if (err) throw err;
        res.send({ "data": rows});
    });
}