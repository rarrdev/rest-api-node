import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployeById,consultarEmpleadoById } from '../controllers/employees.controller.js'




const router = Router();

router.get('/employes', getEmployees);
router.get('/employes/:id', getEmployeById);




router.post('/employes', createEmployees);
router.put('/employes', updateEmployees);
router.delete('/employes/:id', deleteEmployees);



router.post('/employes/BuscarEmpledoById', consultarEmpleadoById);




export default router