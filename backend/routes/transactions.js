const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses')
const {addIncome,getIncomes, deleteIncomes}=require('../controllers/income')
const validateToken = require('../middleware/validateTokenHandler') ;

const router =require('express').Router()



// router.get('/',(req,res) =>{
//     res.send("Welcome to my World")
// })

router.post('/add-income',  addIncome)
      .get('/get-incomes', getIncomes)
      .delete('/delete-income/:id',deleteIncomes)
      .post('/add-expense',addExpense)
      .get('/get-expenses',getExpense)
      .delete('/delete-expense/:id',deleteExpense)




module.exports=router