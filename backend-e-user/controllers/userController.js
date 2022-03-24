const userModel = require("../models/userModel");
const con = require("../util/database");

exports.createUser = function (req, res, next) {
  let reqBody = req.body;
  let arrval = [
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
  con.query(queries, [req.params.id], (err, rows) => {
    console.log(rows);
    if (err) throw err;
    res.send({ data: rows });
  });
};

exports.deleteData = function (req, res, next) {
  const deleteUserData = "delete from users where UserId = ? ";
  con.query(deleteUserData, [req.params.id], (err, rows) => {
    console.log(rows);
    if (err) throw err;
    res.send({ data: rows });
  });
};

exports.updateData = function (req, res, next) {
  let id = req.params.id;
  console.log(id);
  let reqBody = req.body;
  let arrval = [
    reqBody.userName,
    reqBody.email,
    reqBody.sex,
    reqBody.DOB,
    reqBody.ContactNo,
    reqBody.BillingAddress,
    reqBody.DeliveryAddress,
    reqBody.PaymentInfo,
    req.params.id,
  ];
  console.log(arrval);
  con.query(
    "UPDATE users SET `userName`=?,`email`=?,`sex`=?,`DOB`=?, `ContactNo`=?,`BillingAddress`=?,`DeliveryAddress`=?, `PaymentInfo`=? where `UserId`=?",
    arrval,
    function (err, rows) {
      if (err) throw err;
      res.send({ data: rows });
    }
  );
};
